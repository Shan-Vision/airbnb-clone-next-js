import Header from '../components/Header';
console.log();
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import MapGL from '../components/Map';

function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex ">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ description, img, location, price, star, title, total }) => {
                return (
                  <InfoCard
                    key={img + title}
                    location={location}
                    description={description}
                    price={price}
                    star={star}
                    title={title}
                    total={total}
                    img={img}
                  />
                );
              }
            )}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <MapGL searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(
    res => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
