(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(75)},33:function(e,t,a){},48:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),l=a(2),i=a(3),o=a(5),h=a(4),u=a(8),m=a(6),p=(a(31),a(32),a(33),a(24)),d=(a(34),"Lucene"),g=a(21),f=a.n(g),v=(a(48),a(12));function b(e){return e}function E(e){return r.a.createElement("span",null,e)}var S=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(h.a)(t).call(this))).onChange=function(t,a){var n=a.newValue;a.method;e.props.onQueryTermChange(n)},e.onSuggestionsFetchRequested=function(t){var a=t.value;e.loadSuggestions(a)},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.state={suggestions:[]},e.handleSearchFormSubmit=e.handleSearchFormSubmit.bind(Object(u.a)(e)),e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"loadSuggestions",value:function(e){var t=this;""!==e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&")&&v.get("/suggest",{params:{q:e}}).then(function(e){t.setState({suggestions:e.data})}).catch(function(e){console.log(e)})}},{key:"handleSearchFormSubmit",value:function(e){e.preventDefault(),this.props.requestSearch(this.props.searchInputVal)}},{key:"render",value:function(){var e=this.state.suggestions,t={placeholder:"Search",value:this.props.searchInputVal,onChange:this.onChange};return r.a.createElement("div",{className:"search-form-wrapper"},r.a.createElement("i",{className:"material-icons"},"search"),r.a.createElement("form",{id:"search-form",onSubmit:this.handleSearchFormSubmit},r.a.createElement(f.a,{suggestions:e,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:b,renderSuggestion:E,inputProps:t})))}}]),t}(n.Component),j=(a(68),a(9)),C=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=j({"option-select":!0,selected:this.props.searchAlgorithm===d}),a=j({"option-select":!0,selected:"PageRank"===this.props.searchAlgorithm});return r.a.createElement("div",{className:"search-rank-algorithm-wrapper"},r.a.createElement("label",{className:"search-algorithm-label"},"Search Algorithm"),r.a.createElement("div",{id:"option-default",className:t,onClick:function(t){return e.props.handleSearchAlgorithmChange(d)}},r.a.createElement("label",null,"Lucene"),r.a.createElement("div",{className:"indicator-wrapper"},r.a.createElement("span",{className:"circle show-on-selected"}))),r.a.createElement("div",{id:"option-pagerank",className:a,onClick:function(t){return e.props.handleSearchAlgorithmChange("PageRank")}},r.a.createElement("label",null,"PageRank"),r.a.createElement("div",{className:"indicator-wrapper"},r.a.createElement("span",{className:"circle show-on-selected"}))))}}]),t}(n.Component),O=(a(69),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-controls"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement(S,{onQueryTermChange:this.props.onQueryTermChange,searchInputVal:this.props.searchInputVal,requestSearch:this.props.requestSearch})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement(C,{handleSearchAlgorithmChange:this.props.handleSearchAlgorithmChange,searchAlgorithm:this.props.searchAlgorithm}))))}}]),t}(n.Component)),N=(a(70),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.idx,a=e.id,n=e.title,s=e.snippet,c=e.url;return r.a.createElement("div",{className:"search-result-item"},r.a.createElement("a",{className:"box-link",href:c,title:n},r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"},r.a.createElement("p",{className:"index-display"},(t+1).toString().padStart(2,0))),r.a.createElement("div",{className:"col-md-10"},r.a.createElement("h2",null,n),r.a.createElement("p",{className:"snippet"},s)))),r.a.createElement("div",{className:"id"},r.a.createElement("i",{className:"material-icons"},"fingerprint"),r.a.createElement("span",null,a)),r.a.createElement("div",{className:"url"},r.a.createElement("i",{className:"material-icons"},"link"),r.a.createElement("span",null,c))))}}]),t}(n.Component)),y=(a(71),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.spellCorrection,a=e.items,n=e.requestSearch,s=t?r.a.createElement("div",{id:"spell-correction-wrapper"},r.a.createElement("div",{id:"query-term-corrected"},"Showing results for"," ",r.a.createElement("span",{className:"term"},t.corrected)),r.a.createElement("div",{id:"query-term-original",onClick:function(){n(t.original,!0)}},"Search for\xa0",r.a.createElement("span",{className:"term"},t.original),"\xa0instead")):null;return r.a.createElement("div",{id:"search-results"},s,r.a.createElement("div",{id:"search-result"},a.map(function(e,t){return r.a.createElement(N,{key:e.id,idx:t,id:e.id,title:e.og_title?e.og_title:"N/A",snippet:e.snippet?e.snippet:"N/A",url:e.og_url})})))}}]),t}(n.Component)),k=(a(72),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"footer-logo-wrapper"},r.a.createElement("span",null,"Articles indexed from"),r.a.createElement("img",{src:"/images/Logo_The_Guardian.png",alt:"The Guardian"})))))}}]),t}(n.Component)),A=a(12),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={searchAlgorithm:d,spellCorrection:null,items:[],searchInputVal:""},p.a.configure(),a.handleSearchAlgorithmChange=a.handleSearchAlgorithmChange.bind(Object(u.a)(a)),a.onQueryTermChange=a.onQueryTermChange.bind(Object(u.a)(a)),a.requestSearch=a.requestSearch.bind(Object(u.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"onQueryTermChange",value:function(e){this.setState({searchInputVal:e})}},{key:"requestSearch",value:function(e){var t=this,a={q:e,fl:"id,og_title,og_url",wt:"json",ignoreSpellCheck:arguments.length>1&&void 0!==arguments[1]&&arguments[1]};e!==this.state.searchInputVal&&this.setState({searchInputVal:e}),"PageRank"===this.state.searchAlgorithm&&(a.sort="pageRankFile desc"),A.get("/select",{params:a}).then(function(e){console.log(e.data);var a=e.data,n=a.items,r=a.spellCorrection,s={items:n,spellCorrection:r};r&&(s.searchInputVal=r.corrected),t.setState(s)}).catch(function(e){console.log(e)})}},{key:"handleSearchAlgorithmChange",value:function(e){this.setState({searchAlgorithm:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"box-wrapper"},r.a.createElement(O,{searchInputVal:this.state.searchInputVal,onQueryTermChange:this.onQueryTermChange,requestSearch:this.requestSearch,handleSearchAlgorithmChange:this.handleSearchAlgorithmChange,searchAlgorithm:this.state.searchAlgorithm}),r.a.createElement(y,{requestSearch:this.requestSearch,spellCorrection:this.state.spellCorrection,items:this.state.items}),r.a.createElement(k,null)))}}]),t}(n.Component);a(12).defaults.baseURL="http://localhost:8080/api/v1.0/";var q=document.getElementById("root");c.a.render(r.a.createElement(w,null),q)}},[[25,1,2]]]);
//# sourceMappingURL=main.ae02d219.chunk.js.map