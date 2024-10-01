import "./Home.css";
import useGet from "../../CustomHooks/useGet";
import Products from "../../Services/Products";
import { Card, Loading } from "../../Components/index";
import { useEffect, useState } from "react";
const Home = () => {
  const [loading, data] = useGet(Products.getAllProducts());
  const [val, setVal] = useState("");
  const [wholeProducts, setWholeProducts] = useState([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (val === "") {
      setWholeProducts(
        data &&
          data.map((item) => (
            <div className="col-lg-3 col-md-5 col-sm-12 meal" key={item.id}>
              <Card
                price={item.price}
                category={item.category}
                img={item.image}
                id={item.id}
              />
            </div>
          ))
      );
    } else {
      setWholeProducts(
        data &&
          data.map(
            (item) =>
              item.category.includes(val) && (
                <div className="col-lg-3 col-md-5 col-sm-12 meal" key={item.id}>
                  <Card
                    price={item.price}
                    category={item.category}
                    img={item.image}
                    id={item.id}
                  />
                </div>
              )
          )
      );
    }
  }, [check, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(!check);
    console.log(val);
  };
  return (
    <div className="home">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search an Item"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <button>Search</button>
      </form>
      <div className="meals">
        {loading == true ? <Loading /> : wholeProducts}
      </div>
    </div>
  );
};

export default Home;
