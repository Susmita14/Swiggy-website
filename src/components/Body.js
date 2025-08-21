import RestourentCard from "./RestourentCard";
  import resObj from "../utils/mockData";
import { useState } from "react";

  // const restaurantList = [
  //   { resName: "Pizza Hut", cuisine: "Italian, Pizza", rating: "4.2" },
  //   { resName: "KFC", cuisine: "Fried Chicken, Fast Food", rating: "4.0" },
  //   { resName: "Dominos", cuisine: "Pizza, Fast Food", rating: "4.3" },
  //   { resName: "McDonald's", cuisine: "Burgers, Fast Food", rating: "4.1" },
  //   { resName: "Subway", cuisine: "Healthy, Sandwiches", rating: "4.0" },
  //   { resName: "Burger King", cuisine: "Burgers, American", rating: "4.2" },
  //   { resName: "Taco Bell", cuisine: "Mexican", rating: "4.1" },
  //   { resName: "Starbucks", cuisine: "Coffee, Beverages", rating: "4.5" },
  //   { resName: "Haldiram's", cuisine: "Indian, Snacks", rating: "4.3" },
  //   { resName: "Bikanervala", cuisine: "Indian, Sweets", rating: "4.2" },
  //   { resName: "Barbeque Nation", cuisine: "BBQ, North Indian", rating: "4.4" },
  //   { resName: "Wow! Momo", cuisine: "Momos, Chinese", rating: "4.0" },
  //   { resName: "Faasos", cuisine: "Rolls, North Indian", rating: "4.1" },
  //   { resName: "Behrouz Biryani", cuisine: "Biryani, Mughlai", rating: "4.3" },
  //   { resName: "Cream Stone", cuisine: "Ice Cream, Desserts", rating: "4.5" }
  // ];
  
 
  
         
const Body=()=>{

    const [listOfRestourents,setListOfRestourent]  =useState(resObj);

    return(
    <div className="body">
      <div className="filter">
        <button 
        className="filter-btn"
         onClick={()=>{
            const filtedList=listOfRestourents.filter(
                (res)=>res.data.avgRating > 4
            );
            setListOfRestourent(filtedList);
        }}
        >
            Top Rated Restaurant</button>
      </div>
      <div className="res-container">
      {
         listOfRestourents.map((restaurent)=>(
          <RestourentCard  key={restaurent.data.id} resData={restaurent}/>
         ))
     }
      </div>
  
    </div>
    );
  };

  export default Body;