import React, { useState } from "react";
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








function ParticipationForm(){
    const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);

    function submitForm() {
        window.setTimeout(function(){
            toggleShow();
        }, 3000)};


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