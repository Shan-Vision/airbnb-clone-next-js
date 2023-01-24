import SmallCard from './SmallCard';

const Explore = ({ exploreData }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5 ">Expore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map(({ img, location, distance }) => (
          <SmallCard
            key={location + distance}
            img={img}
            location={location}
            distance={distance}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
