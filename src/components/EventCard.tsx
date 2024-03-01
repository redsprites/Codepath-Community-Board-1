import React from 'react';
import './EventCard.css'; // Make sure the path is correct

type EventCardProps = {
  title: string;
  date: string;
  description: string;
  link: string;
  image: string;
};

function EventCard({ title, date, description, link, image }: EventCardProps) {
  // Optional: Handle the click event for the button
  const handleLearnMoreClick = () => {
    // Redirect to the link
    window.open(link, '_blank');
  };

  return (
    <div className="event-card">
      <img src={image} alt={title} />
      <div className="event-card-content">
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
        {/* Button for "Learn More" with className for styling */}
        <button onClick={handleLearnMoreClick} className="learn-more-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default EventCard;
