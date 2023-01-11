import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { unsplash } from '../service/unsplashApi/unslashApi';

const Banner = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    unsplash.photos.get({ photoId: '1vzLW-ihJaM' }).then(result => {
      return setImage(result.response.urls?.regular);
    });
  }, []);

  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] ">
      {image && <Image src={image} alt="Nature" fill priority />}
      <div className=" absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className="text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transiton duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
