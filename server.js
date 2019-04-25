const express = require("express");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const proxy = require("http-proxy-middleware");
const axios = require("axios");
const spell = require("spell");
const striptags = require("striptags");
const dict = spell();

const articleBeginTag = '<article id="';
const articleEndTag = "</article>";

axios.defaults.baseURL = "http://localhost:8983/solr/theguardian/";

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Autosuggest
app.get("/api/v1.0/suggest", (req, res) => {
  const reqParams = req.query;
  const queryTerms = req.query.q.trim().split(" ");
  const queryTerm = queryTerms[queryTerms.length - 1];

  req.query.q = queryTerm;

  axios
    .get("/suggest", {
      params: req.query
    })
    .then(function(response) {
      // handle success
      const rawSuggestions = response.data.suggest.suggest;
      const suggestions = [];

      queryTerms.pop();
      let queryTermPrefix = queryTerms.join(" ");

      for (var term in rawSuggestions) {
        rawSuggestions[term].suggestions.forEach(suggestion => {
          suggestions.push(queryTermPrefix + " " + suggestion.term);
        });
      }

      res.json(suggestions);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
});

// Search Query
app.get("/api/v1.0/select", (req, res) => {
  let queryTerm = req.query.q;
  let queryTerms = queryTerm.trim().split(" ");
  let queryTermsCorrected = [];

  let resObj = {
    spellCorrection: null,
    items: []
  };

  console.log("query " + queryTerm);

  if (req.query.ignoreSpellCheck == "false") {
    let didCorrect = false;

    queryTermsCorrected = queryTerms.map(term => {
      let correctionOptions = dict.suggest(term);

      if (correctionOptions.length > 0) {
        let correctedTerm = correctionOptions[0].word;

        if (correctedTerm != term) {
          console.log("correctedTerm=" + correctedTerm + ", term=" + term);
          didCorrect = true;
        }

        return correctedTerm;
      } else {
        return term;
      }
    });

    if (didCorrect) {
      resObj.spellCorrection = {
        original: req.query.q,
        corrected: queryTermsCorrected.join(" ")
      };

      queryTerm = resObj.spellCorrection.corrected;
    }

    req.query.q = queryTerm;
  }

  axios
    .get("/select", {
      params: req.query
    })
    .then(response => {
      resObj.items = response.data.response.docs.map(item => {
        const htmlFilePath = item.id;

        const fileStr = fs.readFileSync(htmlFilePath, "utf-8");

        let snippet = "N/A";

        let startIndex = fileStr.indexOf(articleBeginTag);
        let endIndex = fileStr.indexOf(articleEndTag);

        if (endIndex === -1) endIndex = fileStr.length - 1;

        const articleStr = striptags(
          fileStr.substring(startIndex, endIndex - 1)
        ).replace(/\n+/g, "\n");

        const lines = articleStr.split(/[\n\.]+/);

        for (let i = 0; i < lines.length; i++) {
          let line = lines[i];
          let matchCount = 0;

          queryTermsCorrected.forEach(term => {
            let termRegexp = RegExp(term, "i");

            if (termRegexp.test(line)) {
              matchCount++;

              if (snippet == "N/A") {
                snippet = line;
              }
            }
          });

          if (matchCount == queryTermsCorrected.length) {
            snippet = line;
            break;
          }
        }

        snippet = snippet == "N/A" ? snippet : snippet + ".";
        snippet =
          snippet.length > 160 ? snippet.substring(0, 160) + "..." : snippet;
        item.snippet = snippet;

        return item;
      });
      return res.json(resObj);
    })
    .catch(error => {
      console.log(error);
    });
});

console.log("Loading big.txt for spell correction");

fs.readFile(path.join(__dirname, "data", "big.txt"), "utf-8", (err, data) => {
  if (err) throw err;

  dict.load(data);

  console.log("Finished loading big.txt file");

  app.listen(port, e => {
    console.log("Listening to port " + port);
  });
});
