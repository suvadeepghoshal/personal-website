const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
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
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
