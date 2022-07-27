import React, { useEffect, useState } from "react";
import BabelPluginTransformObjectRestSpread from "babel-plugin-transform-object-rest-spread";
import { gapi } from "gapi-script";
import images from "../assets/images";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons'



function CalendarCard(props){








    return <div className="card-element">



        <div className="card mb-3">
          <div className="row no-gutters">
          <div className="col-md-2">
            <h1>{props.date}</h1>
            </div>
            <div className="col-md-2">
            <img src={images[1].imgURL} className="card-img" alt="Bild" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.discription}</p>
                <p className="card-text"><FontAwesomeIcon icon={faClock} /> Beginn: {props.start} Uhr</p>
                <p className="card-text"><FontAwesomeIcon icon={faUserCheck} /> Max. Teilnehmer: 16</p>
              </div>
            </div>
            <div className="col-md-2 attendance">
            <div className="card-button">
              <a href="#" class="btn-flip" data-back="Teilnehmen" data-front="Teilnehmen"></a>
              </div>
            <div className="card-price">
              <p className="card-text">Teilnahmegebür: 20,00 €</p>
            </div>
            </div>
          </div>
        </div>

        


      </div>
}


export default CalendarCard;