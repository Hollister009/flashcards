import './Card.scss';

function Card({ frontFace, backFace }) {
  return (
    <div className="card">
      <div className='card--inner'>
        <div className='card--face card--face__front'>{frontFace}</div>
        <div className='card--face card--face__back'>{backFace}</div>
      </div>
    </div>
  );
}

export default Card;
