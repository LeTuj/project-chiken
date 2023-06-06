import "./card.css";

const Card = (props) => {
  return (
    <div className="OnepieceCard">
      <img
        className="cardImage"
        src={props.onepieceList.imageSrc}
        alt={props.onepieceList.name}
      />
      <p id="name">{props.onepieceList.name}</p>
      <p id="description">{props.onepieceList.description}</p>
    </div>
  );
};

export default Card;
