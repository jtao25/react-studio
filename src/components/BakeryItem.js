// TODO: create a component that displays a single bakery item
import "./BakeryItem.css";

export default function BakeryItem({ item, onClick }) {
  return (
    <div className="item">
      <img src={item.image}></img>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => onClick(item)}>Add to Cart</button>
    </div>
  );
}