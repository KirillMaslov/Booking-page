import React from 'react';
import './App.scss';
import { HotelsList } from './Components/HotelsList';
import hotelsArr from './api/hotels.json';
import reviewsArr from './api/reviews.json';
import { ReviewsList } from './Components/ReviewsList';

export const App: React.FC = () => {
  return (
    <div className="App">
      <section className="hotels">
        <div className="container">
          <HotelsList cardsArr={hotelsArr} />
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <h3 className="reviews__title">reviews</h3>
          <ReviewsList reviewsArr={reviewsArr} />
        </div>
      </section>
    </div>
  );
};

export default App;
