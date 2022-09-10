import React from "react";
import Images from "../assets/images.js";


function Header() {

  console.log(Images.headerImage)
    return (<div className="header-section">
        <div className="bg-dark impressum">
        <a onClick={() => window.open('https://www.musik-box-taucha.de/homepagebaukasten/webseite/datenschutz-ast.php?id=85817', 'Datenschutz', 'width=952,height=600,left=50,top=100,dependent=yes,location=no,resizeable=yes,status=no,scrollbars=yes')} href="#">Datenschutz</a> | 
		<a href="https://www.musik-box-taucha.de/impressum">Impressum</a>
		| <a href="https://www.musik-box-taucha.de/kontakt">Kontakt</a>
        </div>
        <img className="img-fluid head-image" src={ Images.headerImage } alt="head-image" />
        <div class="container">
      <div className="button-container" class="button-container">
        <a href="https://www.musik-box-taucha.de">
        <span className="mask" class="mask">zurück zur Homepage</span>
        <button type="button" name="Hover">zurück zur Homepage</button>
        </a>
      </div>
    </div>
        <h1 className="bg-dark pageHeading">Willkommen bei der Turnierübersicht zu <br /><span className="tcg-name">Yu-Gi-Oh!</span></h1>
        <img className="img-fluid yugi-art-left" src={ Images.yugiArtLeft } alt="yugi-art-left" />
        <img className="img-fluid yugi-art-right" src={ Images.yugiArtRight } alt="yugi-art-left" />
        <img className="img-fluid ots-logo" src={ Images.ots } alt="ots-logo" />
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