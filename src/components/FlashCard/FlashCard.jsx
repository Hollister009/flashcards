import { useState } from 'react';
import './FlashCard.scss';

function FlashCard({ frontFace, backFace }) {
  const [flipped, setFlipped] = useState(false);
  const toggleHandler = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={toggleHandler}>
      <div className="card--inner">
        <div className="card--face card--face__front">{frontFace}</div>
        <div className="card--face card--face__back">{backFace}</div>
      </div>
    </div>
  );
}

export default FlashCard;
