import React from "react";
import images from "../assets/images";




function Header() {
    return (<div className="header-section">
        <div className="bg-dark impressum">
        <a onclick="window.open('/homepagebaukasten/webseite/datenschutz-ast.php?id=85817', 'Datenschutz', 'width=952,height=600,left=50,top=100,dependent=yes,location=no,resizeable=yes,status=no,scrollbars=yes');" href="#">Datenschutz</a> | 
		<a href="impressum">Impressum</a>
		| <a href="kontakt">Kontakt</a>
        </div>
        <img className="img-fluid headImage" src={images[0].imgURL} alt="Bild" />
        <div class="container">
      <div className="button-container" class="button-container">
        <span className="mask" class="mask">zurück zur Homepage</span>
        <button type="button" name="Hover">zurück zur Homepage</button>
      </div>
    </div>
        <h1 className="pageHeading">Willkommen bei der Turnierübersicht zu Yu-Gi-Oh! (OTS)</h1>
        <p className="arrow-header">zum Kalender</p>
        <a href="#calendar-section" class="arrow-container">
        <div class="arrow"></div>
        <div class="arrow"></div>
        <div class="arrow"></div>  
        </a>
    </div>
    );
}

export default Header;