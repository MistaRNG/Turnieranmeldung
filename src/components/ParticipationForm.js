import React, { useState, useEffect } from 'react';
import { gapi } from "gapi-script";
import $ from "jquery";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useSearchParams
  } from "react-router-dom";
$(function() {
    $( "#button" ).click(function() {
      $( "#button" ).addClass( "onclic", 250, validate);
    });
  
    function validate() {
      setTimeout(function() {
        $( "#button" ).removeClass( "onclic" );
        $( "#button" ).addClass( "validate", 450, callback );
      }, 2250 );
    }
      function callback() {
        setTimeout(function() {
          $( "#button" ).removeClass( "validate" );
        }, 1250 );
      }
    })

function ParticipationForm(props){
    const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

    function submitForm() {
        window.setTimeout(function(){
            toggleShow();
        }, 3000)};


  let gapi = window.gapi;


  const [searchParams, setSearchParams] = useSearchParams();
  

  
  console.log(props.event)


    const item = props.event.filter((e) => e.id === searchParams.get("eventId"));

  

    // item[0].attendees = ["11robert97@web.de"]
    // item[0].attendees.email = ["11robert97@web.de"]

    useEffect(() => {
        // PUT request using fetch with async/await
        async function updatePost() {
            const requestOptions = {
                method: 'PUT',
                headers: {'Authorization': 'Bearer ya29.a0Aa4xrXOQg2_T3zqMrAPn9eYfqLXcpdPtu0uhPaxBJUlq_mVysXWeseDACktSXejTfXQuQzbauWqhxJm-FMGtTUuRCuEVhtK2TGA4bXRYva_aQmlZyLUZqv_NswvFRJzsBAGmbT-AurDulJDn0uD7ruymCMYsaCgYKATASARMSFQEjDvL9O9cmitkJkLkrMb8mZqFcqA0163', 
                  'Content-Type': 'application/json'
                }, 
                
                body: JSON.stringify(item[0])
            };
            const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/e2nromtfea9g4mhn1bbv32en24@group.calendar.google.com/events/7rcd1i174fgqfdkolod4jf02vd?sendUpdates=all', requestOptions);
            const data = await response.json();
        }

        updatePost();
    }, []);

    console.log(item[0])

// clientID = 1038397562785-m2a944b6pgabepqlfm7l2ibtvdj88tao.apps.googleusercontent.com





    return <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div class="wrapper wrapper--w680">
    <div class="card card-4">
    <div class="card-body">
    <h2 class="title">Bestätigung der Teilnahme</h2>
    <form method="POST">
    <div class="row row-space">
    <div class="col-2">
    <div class="input-group">
    <label class="label">Vorname*</label>
    <input class="input--style-4" type="text" name="first_name" required></input>
    </div>
    </div>
    <div class="col-2">
    <div class="input-group">
    <label class="label">Nachname*</label>
    <input class="input--style-4" type="text" name="last_name" required></input>
    </div>
    </div>
    </div>
    <div class="row row-space">
    <div class="col-2">
    <div class="input-group">
    <label class="label turnament-date-label">Turnierdatum*</label>
    <div class="input-group-icon">
    <input class="input--style-4 js-datepicker" type="text" name="tournament_date" required></input>
    </div>
    </div>
    </div>
    </div>
    <div class="row row-space">
    <div class="col-2">
    <div class="input-group">
    <label class="label">Email*</label>
     <input class="input--style-4" type="email" name="email" required></input>
    </div>
    </div>
    <div class="col-2">
    <div class="input-group">
    <label class="label">Telefon</label>
    <input class="input--style-4" type="text" name="phone"></input>
    </div>
    </div>
    </div>
    <div class="input-group">
    <label class="label">Nachricht</label>
    <textarea class="input--style-4" type="text" name="massage" rows="3"></textarea>
    </div>
    <div class="p-t-15">
    <div class="submit-container">
    <button className="submit-button" type="submit" id="button" onClick={submitForm}>SENDEN</button>
    </div>
    </div>

    

    </form>
    <p class="required-info">Die mit einem * markierten Felder sind Pflichtfelder.</p>
    </div>
    </div>
    </div>
<div className="modalDiv">
<MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
  <MDBModalDialog centered>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Teilnahme bestätigt</MDBModalTitle>
      </MDBModalHeader>
      <MDBModalBody>
        <p>
          Deine Teilnahme am Turnier wurde den Veranstalter gesendet. Bitte beachte, dass die Turniergebühr vor Ort bezahlt werden muss.
        </p>
      </MDBModalBody>
      <MDBModalFooter>
        <a href="https://www.musik-box-taucha.de/startseite"><button className="popup-button btn-lg btn-secondary">zurück zur Startseite</button></a>
        <a href="/"><button className="popup-button btn-lg btn-primary"> zurück zur Turnieranmeldung</button></a>
        
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
</div>

</div>
}

export default ParticipationForm;