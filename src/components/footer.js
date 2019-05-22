import React from "react"

// Import images
import paabLogo from "../images/paab-logo.jpg";
import rxLogo from "../images/rx-logo-en.jpg";
import pfLogo from "../images/pf-logo.png";

export default (props) => (
	<footer
		style={{ 
		  margin: `50px 0 40px 0`,
		  background: `none`,
		  padding: 0,
		  fontSize: `10px`,
		  color: `#000`,
		  overflow: `hidden`
		}}	 
	>
		<div 
			className="section"
			style={{ 
				maxWidth: `950px`,
				margin: `0 auto`
			}}
		>
			<div id="footer" className="clearfix">
				<div className="region region-footer">
					<div className="content">
						<div
							style={{ 
								width: `37%`,
								float: `left`
							}}
						>
							<ul
								style={{ 
									width: `100%`,
									marginBottom: `5px`,
									overflow: `hidden`,
									listStyle: `none`,
									margin: 0,
									padding: 0									
								}}
							>
								<li 
									style={{ 
										listStyle: `none`,
										margin: 0,
										padding: 0
									}}
								>
									<a 
										href="http://www.pfizer.ca/node/6821" 
										target="_blank" 
										rel="noopener noreferrer"
										style={{ 
											float: `left`,
											display: `block`,
											borderColor: `rgba(255,255,255,0.15)`,
											borderRight: `1px solid #000000`,
											color: `#000`,
											lineHeight: `10px`,
											padding: `0 5px`,
											paddingLeft: 0
										}}
									>Privacy Policy</a>
								</li>
								<li 
									style={{ 
										listStyle: `none`,
										margin: 0,
										padding: 0
									}}
								>
	                <a 
										href="http://www.pfizer.ca/node/6816"
										title="Terms of Use" 
										target="_blank" 
										rel="noopener noreferrer"
										style={{ 
											float: `left`,
											display: `block`,
											color: `#000`,
											lineHeight: `10px`,
											padding: `0 5px`,
										}}
									>Terms of Use</a>
								</li>
							</ul>
							<p
								style={{ 
									lineHeight: `9px`,
									marginBottom: `3px`,
								}}
							>
								This information is intended for Canadian residents.
							</p>
							<p
								style={{ 
									lineHeight: `9px`,
									marginBottom: `3px`,
								}}
							>
								FRAGMIN ® Pfizer Health AB, owner/Pfizer Canada Inc., Licensee
							</p>
							<p
								style={{ 
									lineHeight: `9px`,
									marginBottom: `3px`,
								}}
							>
								® Pfizer Inc., used under license
							</p>
							<p
								style={{ 
									lineHeight: `9px`,
									marginBottom: `3px`,
								}}
							>
								© 2018, Pfizer Canada Inc., Kirkland, Quebec H9J 2M5
							</p>
							<p
								style={{ 
									lineHeight: `9px`,
									marginBottom: `3px`,
								}}
							>
								PP-FRA-CAN-0125-EN
							</p>
						</div>
						<div 
							style={{ 
								width: `60%`,
								overflow: `hidden`
							}}
						>
							<ul
								style={{ 
									float: `right`,
									listStyle: `none`,
									margin: 0,
									padding: 0							
								}}
							>
							<li 
								style={{ 
									float: `left`,
									padding: `0 0 0 30px`
								}}
							>
								<img src={paabLogo} title="PAAB Logo" alt="Pharmaceutical Advertising Advisory Board Logo" />
							</li>
							<li 
								style={{ 
									float: `left`,
									padding: `0 0 0 30px`
								}}
							>
								<img src={rxLogo} title="Rx Logo" alt="Innovative Medicines Canada Logo" />
							</li>
							<li 
								style={{ 
									float: `left`,
									padding: `0 0 0 30px`
								}}
							>
								<img src={pfLogo} title="Pfizer Logo" alt="Pfizer Logo. Working together for a healthier world." />
							</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
)