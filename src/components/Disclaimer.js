import React from 'react';
import Images from "../assets/images.js";


function Disclaimer(props) {

if(props.numberOfEvents > 0) {

  return <div>
    <div className="disclaimer-content" >
        <p className="payment-text"><img className="img-fluid attention-icon" src={ Images.attentionIcon } alt="attention-icon" />Bitte beachten Sie, dass die Teilnahmegebühr von 20,00 € nur vor Ort bezahlt werden kann.</p>


        <h4 className="disclaimer-heading">Hinweis: Corona <img className="img-fluid notice-icon" src={ Images.covidIcon } alt="notice-icon" /></h4>

        <p className="disclaimer-text">Durch unser COVID-19 Präventionskonzept verpflichten Sie sich bei Teilnahme an den oben genannten Events zum tragen einer medizinischen Maske.<img className="img-fluid notice-icon" src={ Images.maskIcon } alt="notice-icon" /></p>
        <p className="disclaimer-text">Des Weiteren möchten wir darauf hinweisen, dass es aus selbigen Grund nicht möglich ist mehr als 16 Teilnehmer pro Veranstaltung anzunehmen. 
        <br />Um Planungssicherheit zu gewährleisten ist das dafür vorgesehene Teilhamefromular durch Klick auf eine Karte zu nutzen.
        <br />Bei Symptomen bzw. Krankheit bitten wir Sie, sich über den entsprechenden Abmeldebutton vom Turnier auszutragen.</p>
        </div>
    </div>
}
}

export default Disclaimer;