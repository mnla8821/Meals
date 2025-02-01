import Button from "../Components/Button/Button";
import "./Home.css";
import Meals from "../Meals";
import Card from "../Components/Card/Card";
import { useState } from "react";
const Home = () => {
  const [all, setAll] = useState(true);
  const [filter, setFilter] = useState();
  const allMenu = Meals.map((meal) => (
    <Card
      key={meal.id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
      description={meal.description}
      type={meal.type}
    />
  ));
  const filterMenu = Meals.map(
    (meal) =>
      meal.type == filter && (
        <Card
          key={meal.id}
          name={meal.name}
          price={meal.price}
          image={meal.image}
          description={meal.description}
          type={meal.type}
        />
      )
  );
  const handleFilter = (type) => {
    setFilter(type);
    setAll(false);
  };
  return (
    <div className="container-fluid home">
      <div className="row my-home">
        <h1>Our Menu</h1>
        <div className="stuff">
          <div className="buttons">
            <div onClick={() => setAll(true)}>
              <Button>All</Button>
            </div>
            <div onClick={() => handleFilter("breakfast")}>
              <Button>Breakfast</Button>
            </div>

            <div onClick={() => handleFilter("lunch")}>
              <Button>Lunch</Button>
            </div>
            <div onClick={() => handleFilter("dinner")}>
              <Button>Dinner</Button>
            </div>
          </div>
          <div className="meals">{all === true ? allMenu : filterMenu}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
