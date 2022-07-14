import React, {useState, useEffect} from "react";
import { getGoods } from "../utils/api.js";
import Preloader from "../components/Preloader.jsx";
import GoodsList from "../components/GoodsList.jsx";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getGoods().then(data => {
      data.shop && setGoods(data.shop);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, [])

  return(
    <main className="container content">
      { isLoading ? <Preloader /> : <GoodsList goodsList={goods} /> }
    </main>
  )
}

export default Shop;
