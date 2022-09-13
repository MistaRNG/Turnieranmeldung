import React, { useEffect, useState } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import CardInfo from "./CardInfo";
import CalendarCard from "./CalenderCard"
import Disclaimer from "./Disclaimer"
import Footer from "./Footer"
import BabelPluginTransformObjectRestSpread from "babel-plugin-transform-object-rest-spread";
import { gapi } from "gapi-script";
import Images from "../assets/images.js";


function Home(){

    const [events, setEvents] = useState();
    const [date, setDate] = useState([]);
    
    const calendarID = "e2nromtfea9g4mhn1bbv32en24@group.calendar.google.com";
    const apiKey = "AIzaSyB0E8hjPnD4E88pKKaJuOY6QwN2Dn6TtxQ";
    const accessToken = "https://www.googleapis.com/auth/calendar";
  
   
    const getEvents = (calendarID, apiKey) => {
      function initiate() {
        gapi.client
          .init({
            apiKey: apiKey,
          })
  
          function makeApiCall() {
            gapi.client.load('calendar', 'v3', function() {
              return gapi.client.calendar.events.list({
                calendarId: "e2nromtfea9g4mhn1bbv32en24@group.calendar.google.com",
                timeMin: (new Date()).toISOString(),
                showDeleted: false,
                singleEvents: true,
                maxResults: 3,
                orderBy: "startTime"
              })
                    
              .then(
                (response) => {
                      let events = response.result.items;
                       events.map(item =>{
                         setEvents(events)
                      });
                    },
                    function (err) {
                      return [false, err];
                  }
                )
            });
          }
          makeApiCall()
      }
      gapi.load("client", initiate);
    };




    useEffect(() => {
      const events = getEvents(calendarID, apiKey);
      setEvents(events);
      console.log("State wurde geändert!")
    }, []);
    
  
  
    let eventsToRender = [];
    if (events) {
      eventsToRender = events.map(item => {
        return item
      });
    }

    console.log(eventsToRender)

    const options = {  month: 'long', day: 'numeric' };
    const options2 = {  hour: 'numeric' , minute: "numeric"};

    var cardInfoText =""

   if(eventsToRender.length > 0) {
    cardInfoText = "Klicke auf eine der folgenden Karten, um am jeweiligen Event teilzunehmen:"
   } else {
    cardInfoText=""
   }





    return <div>
        <img className="img-fluid background-img" src={ Images.cardBack } alt="background-img" />
        <Header />
        <Calendar />
        <CardInfo key={1}  numberOfEvents= {cardInfoText}/>
        <div className="row">
        {eventsToRender.map(item => {
        return <div className="col-lg-4 col-md-6"><CalendarCard numberOfEvents= {eventsToRender.length} key= {item.id} date={new Intl.DateTimeFormat('de-DE', options).format(new Date(item.start.dateTime))} title={item.summary} discription={item.description} start={new Intl.DateTimeFormat('de-DE', options2).format(new Date(item.start.dateTime))} />
        </div> })}
        </div>
        <Disclaimer numberOfEvents= {eventsToRender.length}/>
        <Footer />
    </div>

}


export default Home;