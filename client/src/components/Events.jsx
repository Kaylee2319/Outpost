import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import NavBar from './NavBar';
import Footer from './footer';
import { Link } from 'react-router-dom';
import '../css/EventsPage.css';

const Events = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </div>
      <div>
        <h4>
          <Link to="/upcomingevents">
            <span>Upcoming Events</span>
          </Link>
        </h4>
      </div>
      <div>
        <h5>Thursday December 3, 2020</h5>
        <h6>Among Us Game Session</h6>
      </div>
      <div>
        <h5>Wednesday December 2, 2020</h5>
        <h6>Mario Kart Game Session</h6>
      </div>
      <div>
        <h5>Tuesday December 1, 2020</h5>
        <h6>Minecraft Game Session</h6>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Events;
