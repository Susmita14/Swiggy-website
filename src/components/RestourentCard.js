import { LOGO_URL } from "../utils/constant";

const RestourentCard=(props)=>{
    const{resData}=props;
   const {avgRating,name,cuisines,costForTwo}=resData?.data;
    return(
      <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
        <div className="res-logo">
          <img className="res-logoo" src={LOGO_URL}/>
  
        </div>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{resData.deliveryTime} min</h4>
  
      </div>
    )
  }

  export default RestourentCard;