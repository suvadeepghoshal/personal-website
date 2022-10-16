import { useState } from 'react';
import StorageService from '../../services/storageService';
import Feature from '../Feature/feature';

const Hero = () => {
  const [readMore, setReadMore] = useState(false);
  const clickActionReadMore = () => {
    console.log('clicked');
    const { getItem, setItem } = StorageService();
    let existingController = getItem('controller');
    if (existingController === undefined) {
      const controller = { readMore: true };
      setItem('controller', controller);
      if (controller.readMore) setReadMore(true);
      else setReadMore(false);
    } else if (existingController !== undefined) {
      existingController = JSON.parse(existingController);
      existingController.readMore = !existingController.readMore;
      setItem('controller', existingController);
      if (existingController.readMore) setReadMore(true);
      else setReadMore(false);
    }
  };
  console.log(readMore);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: 'url("/hero-banner.jpg")'
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello There!</h1>
            <p className="mb-5 shadow rounded-box btn glass pointer-events-none normal-case">
              Digital Craftsman ( Entrepreneur / Developer / Designer )
            </p>
            <p className="mb-5">
              I&apos;m a full stack software enthusiast and algorithm researcher
              based in India!
            </p>
            <button
              className="btn btn-outline btn-accent"
              onClick={clickActionReadMore}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {readMore ? <Feature /> : ''}
    </>
  );
};

export default Hero;
