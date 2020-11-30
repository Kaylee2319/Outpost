import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/EventsPage.css';
import Accordion from '../Accordion-components/Accordion';

const Events = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"

          headerToolbar={{
            left: 'prev',
            center: 'title',
            right: 'next'
          }}
          events={[
            { title: 'Among Us - Game Session', date: '2020-12-07' },
            { title: 'Mario Kart - Game Session', date: '2020-12-09' },
            { title: 'Minecraft - Game Session', date: '2020-12-11' }
          ]}
        />
      </div>
      <div>
        <h4 className="upcomingEvents">
          <span>Upcoming Events</span>
        </h4>
      </div>
      <div>
        <Accordion
          title="Among Us Gaming Session"
          date="Thursday December 7, 2020"
          content="Among Us Meetup Eventbrite Page"
          link="https://www.eventbrite.com/e/among-us-game-session-tickets-130970942615"
        />
        <Accordion
          title="Mario Kart Game Session"
          date="Wednesday December 9, 2020"
          content="Mario Kart Meetup Eventbrite Page"
          link="https://www.eventbrite.com/e/mario-kart-game-session-tickets-130975991717"
        />
        <Accordion
          title="Minecraft Gaming Session"
          date="Tuesday December 11, 2020"
          content="Minecraft Meetup Eventbrite Page"
          link="https://www.eventbrite.com/e/minecraft-game-session-tickets-130976136149"
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Events;
