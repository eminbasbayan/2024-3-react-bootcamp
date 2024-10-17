import { useCallback, useState } from "react";
import MyButton from "../components/PerformanceOptimization/MyButton";
import MyElement from "../components/PerformanceOptimization/MyElement";

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("home page çalıştı!");

  const toggleParagraphHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="home-page">
      <MyElement show={false} />
      <MyButton onClick={toggleParagraphHandler}>Toggle Paragraph</MyButton>
    </div>
  );
};

export default HomePage;
