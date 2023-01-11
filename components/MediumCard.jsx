import Image from 'next/image';

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration ">
      <div className="realtive h-80 w-80 ">
        <Image className="rounded-lg" src={img} alt={title} />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
