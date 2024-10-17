import BackwardCounter from "../components/BackwardCounter";
import ForwardCounter from "../components/ForwardCounter";

const HomePage = () => {
  return (
    <div className="home-page">
      <ForwardCounter />
      <br />
      <BackwardCounter />
    </div>
  );
};

export default HomePage;
