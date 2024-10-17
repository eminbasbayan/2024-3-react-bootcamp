import PropTypes from "prop-types";
import { useMemo } from "react";

const MyList = ({ items }) => {
  const sortedItems = useMemo(() => {
    console.log("list çalıştı!");

    return items.sort((a, b) => b - a);
  }, [items]);

  const listItems = sortedItems;

  return (
    <ul>
      {listItems.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

MyList.propTypes = {
  items: PropTypes.array,
};

export default MyList;
