import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
  
    const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("JSON data", json);
   

    console.log(
      "data",
       json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  
    //Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //  fetchData();
  //[
  // {
  //   info: {
  //     id: "581809",
  //     name: "UBQ by Barbeque Nation",
  //     cloudinaryImageId: "muaktnk5xb3zop4bvj6l",
  //     costForTwo: "₹300 for two",
  //     cuisines: [
  //       "North Indian",
  //       "Barbecue",
  //       "Biryani",
  //       "Kebabs",
  //       "Mughlai",
  //       "Desserts",
  //     ],
  //     avgRating: 3.8,
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.4,
  //       serviceability: "SERVICEABLE",
  //       slaString: "20-25 mins",
  //       lastMileTravelString: "1.4 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //   },
  // },
  // {
  //   info: {
  //     id: "671928",
  //     name: "KFC",
  //     cloudinaryImageId:
  //       "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //     avgRating: 4.3,
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.2,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25-30 mins",
  //       lastMileTravelString: "1.2 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //   },
  // },
  // {
  //   info: {
  //     id: "5934",
  //     name: "Burger King",
  //     cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
  //     costForTwo: "₹350 for two",
  //     cuisines: ["Burgers", "American"],
  //     avgRating: 4.2,
  //     sla: {
  //       deliveryTime: 19,
  //       lastMileTravel: 1.6,
  //       serviceability: "SERVICEABLE",
  //       slaString: "15-20 mins",
  //       lastMileTravelString: "1.6 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //   },
  // },
  // {
  //   info: {
  //     id: "23786",
  //     name: "Domino's Pizza",
  //     cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
  //     costForTwo: "₹400 for two",
  //     cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //     avgRating: 4.4,
  //     sla: {
  //       deliveryTime: 25,
  //       lastMileTravel: 1.1,
  //       serviceability: "SERVICEABLE",
  //       slaString: "25 mins",
  //       lastMileTravelString: "1.1 km",
  //       iconType: "ICON_TYPE_EMPTY",
  //     },
  //   },
  // },
  //   ]
  // );
  const onlineStatus=useOnlineStatus()
  if(onlineStatus===false) return <h1>Looks like you are offline!!</h1>

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //console.log("listOfRestaurants", listOfRestaurants);
            const filterdList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterdList);
            //console.log("filterdList" ,filterdList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
         <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id }><RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  );
};
export default Body;
