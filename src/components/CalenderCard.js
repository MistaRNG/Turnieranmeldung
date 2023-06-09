import React, { useEffect, useState } from "react";
import BabelPluginTransformObjectRestSpread from "babel-plugin-transform-object-rest-spread";
import { gapi } from "gapi-script";
import images from "../assets/images";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faUserCheck } from '@fortawesome/free-solid-svg-icons'
import $ from "jquery";
import { useIsOverflow } from './useIsOverflow';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


function CalendarCard(props){


  const [textSpeed, setTextSpeed] = useState("[" + props.title + "]")

  const ref = React.useRef();
  const isOverflow = useIsOverflow(ref);

  
  function checkOverflow(){
    if (isOverflow === true){
      setTextSpeed(<Marquee gradient={false} speed={80}>[{props.title}]</Marquee>)
    }
  }
  function removeTextSpeed(){
    setTextSpeed("[" + props.title + "]")
    }
    
    var parameter = "/Turnieranmeldung/ParticipationForm";

    return <div className="calendar-card-section">
    
  


              <div className="yugioh-carlendar-card block">
              <Link to={parameter}>
              <div className="carlendar-card-container two" onMouseEnter={checkOverflow} onMouseLeave={removeTextSpeed}>
              <img src={images.templateCard2} className="card-img2" alt="Bild" />
              
              <h3 className="yugioh-cc-date">{props.date}</h3>
              {/* <h4 className="yugioh-cc-heading">[{props.title}]</h4> */}
              <div className="parent">
                <div className="text-container" ref={ref}>
                  <span className="text">{textSpeed}</span>
                </div>
              </div>
              <h6 className="yugioh-cc-discription">{props.discription}</h6>
              <p className="start-text"><FontAwesomeIcon icon={faClock} /> Beginn: {props.start} Uhr</p>
              <p className="participants-number"><FontAwesomeIcon icon={faUserCheck} /> Max. Teilnehmer: 16</p>
          </div>
          </Link>
        </div>
      </div>
}
 {/* <div className="card-element">



        <div className="card mb-3">
          <div className="row no-gutters card-row">
          <div className="col-md-2 border-card1">
            <h1>{props.date}</h1>
            </div>
            <div className="col-md-2">
            <img src={images.templateCard1} className="card-img" alt="Bild" />
            </div>
            <div className="col-md-6 border-card2">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.discription}</p>
                <p className="card-text"><FontAwesomeIcon icon={faClock} /> Beginn: {props.start} Uhr</p>
                <p className="card-text"><FontAwesomeIcon icon={faUserCheck} /> Max. Teilnehmer: 16</p>
              </div>
            </div>
            <div className="col-md-2 attendance">
            <div className="card-button">
              <a href="/ParticipationForm" class="btn-flip" data-back="Teilnehmen" data-front="Teilnehmen"></a>
              </div>
            <div className="card-price">
              <p className="card-text">Teilnahmegebür: 20,00 €</p>
            </div>
            </div>
          </div>
        </div>
      </div> */}


export default CalendarCard;




   