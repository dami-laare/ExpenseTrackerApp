import "./Card.css";

function Card(props) {
  const style = `my-card ${props.className}`;
  return <div className={style}>{props.children}</div>;
}

export default Card;
