import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="row">
					<div className="col-md-12">
						<div className="footer-logo-wrapper">
							<span>Articles indexed from</span>
							<img src="/images/Logo_The_Guardian.png" alt="The Guardian" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer; 