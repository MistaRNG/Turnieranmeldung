import 'whatwg-fetch';
import React, { useState, useEffect } from 'react';
import BabelPluginTransformObjectRestSpread from "babel-plugin-transform-object-rest-spread";
import deMessages from "devextreme/localization/messages/de.json";
import { locale, loadMessages } from "devextreme/localization";

import Scheduler from 'devextreme-react/scheduler';
import CustomStore from 'devextreme/data/custom_store';


function getData(_, requestOptions) {
  
  const PUBLIC_KEY = 'AIzaSyB0E8hjPnD4E88pKKaJuOY6QwN2Dn6TtxQ';
  const CALENDAR_ID = 'e2nromtfea9g4mhn1bbv32en24@group.calendar.google.com';
  const dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/',
    CALENDAR_ID, '/events?key=', PUBLIC_KEY].join('');

  return fetch(dataUrl, requestOptions).then(
    (response) => response.json(),
  ).then((data) => data.items);
}

const dataSource = new CustomStore({
  load: (options) => getData(options, { showDeleted: false }),
});

const currentDate = new Date();
const views = ['day', 'week', 'month'];

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    loadMessages(deMessages);
    locale(navigator.language);
}

  render() {
    return (<div className="calendar-section">
      
      <React.Fragment>
      <div className="calendar" id="calendar-section">
        <div className="calendar-title">
          <h3><span className="tcg-name">Yu-Gi-Oh!</span> Turnierkalender</h3>
        </div>
          <Scheduler
            dataSource={dataSource}
            views={views}
            defaultCurrentView="month"
            defaultCurrentDate={currentDate}
            height={800}
            startDayHour={0}
            allDayPanelMode="allDay"
            showAllDayPanel={false}
            editing={false}
            startDateExpr="start.dateTime"
            endDateExpr="end.dateTime"
            textExpr="summary"
            firstDayOfWeek={1}
            timeZone="" />
      </div> 
      </React.Fragment>
      <h3 className="card-heading">Demnächst anstehende Turniere:</h3>
    </div>);
  }
}

export default Calendar;