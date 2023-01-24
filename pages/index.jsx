import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Explore from '../components/Explore';
import Apartments from '../components/Apartments';
import Footer from '../components/Footer';
import LargeCard from '../components/LargeCard';
import largeImage from '../images/2da67c1c-0c61-4629-8798-1d4de1ac9291.webp';

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
        <Explore exploreData={exploreData} />
        <Apartments cardsData={cardsData} />
        <LargeCard
          img={largeImage}
          title="The Greates Outdoor"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
       
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    res => res.json()
  );

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(res =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
