import React, { useEffect, useState } from "react";
import "./App.scss"
import { HashRouter, Routes, Route } from 'react-router-dom';
import ParticipationForm from "./ParticipationForm"
import Home from "./Home"
import { gapi } from "gapi-script";


function App() {

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


   return <div>
   <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Turnieranmeldung/ParticipationForm" element={<ParticipationForm event={eventsToRender} />} />
        </Routes>
      </HashRouter>
    </div>
 </div>
}

export default App;