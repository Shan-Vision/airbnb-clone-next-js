import React from 'react'
import MediumCard from '../components/MediumCard';
import { cardsData } from '../service/exploreData.js';



const Apartments = () => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5 ">Live Anywhere</h2>

      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3 ">
        {cardsData.map(({ img, title }) => (
          <MediumCard key={title} img={img} title={title} />
        ))}
      </div>
    </section>
  );
}

export default Apartments