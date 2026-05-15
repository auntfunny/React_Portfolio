import Hero from "../components/Hero";
import MainHome from "../components/MainHome";
import SideBar from "../components/SideBar";

const Home = () => {
  return (
    <div className="font-sunflower">
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr]">
        <MainHome />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
