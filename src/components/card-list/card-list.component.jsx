import CardComponent from "../card-component/card-component";
import "./card-list.styles.css";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monst) => {
      return <CardComponent monster={monst} />;
    })}
  </div>
);

export default CardList;
