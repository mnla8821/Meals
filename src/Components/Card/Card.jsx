import "./Card.css";

const Card = (props) => {
  return (
    <div className="col-lg-3 col-md-5 col-sm-10 box" key={props.id}>
      <img src={props.image} alt="" />
      <div className="info">
        <h5>{props.name}</h5>
        <p className="para">{props.price}</p>
      </div>
      <p className="para-desc">{props.description}</p>
    </div>
  );
};

export default Card;
