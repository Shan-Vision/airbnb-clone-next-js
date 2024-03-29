import Image from 'next/image';

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center space-x-4 m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transiton transform duration-200 easy-out">
      <div className="relative h-16 w-16 rounded-lg">
        <Image
          className="rounded-lg"
          src={img}
          alt={location}
          width={64}
          height={64}
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
