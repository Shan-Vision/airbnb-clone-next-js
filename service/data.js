function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export const images = importAll(
  require.context('../images', false, /\.(webp)$/)
);

export const exploreData = [
  {
    img: images['london.webp'],
    location: 'London',
    distance: '45-minute drive',
  },
  {
    img: images['manchester.webp'],
    location: 'Manchester',
    distance: '4.5-hour drive',
  },
  {
    img: images['liverpool.webp'],
    location: 'Liverpool',
    distance: '4.5-hour drive',
  },
  {
    img: images['york.webp'],
    location: 'York',
    distance: '4-hour drive',
  },
  {
    img: images['cardiff.webp'],
    location: 'Cardiff',
    distance: '45-minute drive',
  },
  {
    img: images['birkenhead.webp'],
    location: 'Birkenhead',
    distance: '4.5-hour drive',
  },
  {
    img: images['newquay.webp'],
    location: 'Newquay',
    distance: '6-hour drive',
  },
  {
    img: images['hove.webp'],
    location: 'Hove',
    distance: '2-hour drive',
  },
];
export const cardsData = [
  {
    img: images['outdoor.webp'],
    title: 'Outdoor getaways',
  },
  {
    img: images['unique.webp'],
    title: 'Unique stays',
  },
  {
    img: images['homes.webp'],
    title: 'Entire homes',
  },
  {
    img: images['pet.webp'],
    title: 'Pet allowed',
  },
];
