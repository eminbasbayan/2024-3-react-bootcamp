import { useCallback, useMemo, useState } from "react";
import MyButton from "../components/PerformanceOptimization/MyButton";
import MyElement from "../components/PerformanceOptimization/MyElement";
import MyList from "../components/PerformanceOptimization/MyList";

const HomePage = () => {
  const [toggleParagraph, setToggleParagraph] = useState(false);

  console.log("home page çalıştı!");

  const toggleParagraphHandler = useCallback(() => {
    setToggleParagraph((prevState) => !prevState);
  }, []);

  const listItems = useMemo(()=>  [1, 2, 3, 4, 5], []);

  return (
    <div className="home-page">
      <MyElement show={false} />
      <MyButton onClick={toggleParagraphHandler}>Toggle Paragraph</MyButton>
      <MyList items={listItems} />
    </div>
  );
};

export default HomePage;
