import "./Card.css";

function Card({ className, children, ...rest }) {
  const style = `my-card ${className}`;
  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
}

export default Card;
