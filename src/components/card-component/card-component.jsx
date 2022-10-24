import "./card-component.styles.css";

const CardComponent = ({ monster }) => {
  const { name, email, id } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2`}
        alt={`monster ${name}`}
      />
      <div className="email-name">
        <h2 className="monster-name">{name}</h2>
        <p className="monster-email">{email}</p>
      </div>
    </div>
  );
};

export default CardComponent;
