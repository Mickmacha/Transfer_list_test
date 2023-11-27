import "./styles.css";
import List from "./List";
import Actions from "./Actions";
import { items } from "./data";
import { useState } from "react";
import { intersection, note } from "./Utils";

export default function App() {
  const [leftItems, setLeftItems] = useState(items);
  const [rightItems, setRightItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  const leftCheckedItems = intersection(leftItems, checkedItems);
  const rightCheckedItems = intersection(rightItems, checkedItems);
  const handleToggle = (item) => {
    const currentIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];

    if (currentIndex === -1) {
      newCheckedItems.push(item);
    } else {
      newCheckedItems.splice(currentIndex, 1);
    }
    setCheckedItems(newCheckedItems);
  };

  const moveRight = () => {
    setRightItems(rightItems.concat(leftCheckedItems));
    setLeftItems(note(leftItems, leftCheckedItems));
    setCheckedItems(note(checkedItems, leftCheckedItems));
  };
  const moveLeft = () => {
    setLeftItems(leftItems.concat(rightCheckedItems));
    setRightItems(note(rightItems, rightCheckedItems));
    setCheckedItems(note(checkedItems, rightCheckedItems));
  };

  console.log(checkedItems);
  return (
    <div className="App flex">
      <List items={leftItems} handleToggle={handleToggle} />
      <Actions moveLeft={moveLeft} moveRight={moveRight} />
      <List items={rightItems} handleToggle={handleToggle} />
    </div>
  );
}
