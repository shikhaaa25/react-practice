// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { MENU_API } from "../utils/constants";
 

const RestaurantMenu = () => {
 const {resId}=useParams();
 const resInfo=useRestaurantMenu(resId)
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await axios.get(
  //      //"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=23678&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
  //     MENU_API + resId 
  //   );
  //   const json = await data;
  //   console.log("Menu json data", json.data.data);
  //   setResInfo(json.data.data);
  // };
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
       {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name} - {"Rs."}-{item.card.info.price/100}</li>)}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
