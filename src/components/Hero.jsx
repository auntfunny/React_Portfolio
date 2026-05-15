
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex justify-center relative h-100 md:h-120 lg:h-160 bg-linear-to-t from-acc4 to-acc1"
    >
      <div className="text-center mt-18 md:mt-24 lg:mt-28">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-acc3">
          Anthony Black
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl text-acc3">
          Front-end Developer
        </h2>
      </div>
      <img
        src="https://res.cloudinary.com/dplnnusav/image/upload/q_auto/f_auto/v1778103000/Foto_zctgjh.png"
        alt="Picture of Anthony Black"
        className="absolute bottom-0 mx-auto w-[25%] bg-radial from-acc3 via-transparent via-70% to-transparent"
      />
      <a
        href="./pages/my_projects.html"
        className="absolute bottom-32 md:bottom-6 mx-auto px-4 py-2 border-2 border-acc3 shadow-xl rounded-lg bg-acc3 font-bold text-acc4 text-center text-xs md:text-base lg:text-lg hover:bg-acc4 hover:text-acc3 active:shadow-md active:shadow-acc3 active:scale-102 transition-colors duration-300 ease-in-out"
      >
        See My Projects
      </a>
    </section>
  );
};

export default Hero;
