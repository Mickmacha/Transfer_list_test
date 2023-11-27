const Item = ({ item, handleToggle }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => handleToggle(item)} />
        {item}
      </label>
    </div>
  );
};
export default Item;
