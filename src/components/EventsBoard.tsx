import React from 'react';
import EventCard from './EventCard';
import events from '../events.json'; // Adjust the path as necessary
import './EventsBoard.css'; // Make sure this path is correct

function EventsBoard() {
  return (
    <div className="events-board">
      {events.map(event => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}

export default EventsBoard;
