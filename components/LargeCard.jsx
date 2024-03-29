import Image from 'next/image';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 cursor-pointer ">
      <div className="relative h-96 min-w-[300px] rounded-xl">
        <Image
          className="rounded-2xl object-cover"
          src={
            'https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          }
          alt="large"
          fill
          priority
        />
      </div>

      <div className="absolute top-1/3 left-12">
        <h3 className="text-3xl mb-3 lg:w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
