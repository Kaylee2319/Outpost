import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import NavBar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import '../css/EventsPage.css';

const Events = () => {
  const [modal, setModal] = useState(false);

  const handleClick = (event) => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <React.Fragment>
      <NavBar />
      <div>Home</div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={handleClick}
        />
      </div>
      <CreateEvent className="modal" show={modal} onHide={closeModal} />
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
