import {CDN_URL} from "../utils/constant";


const RestaurantCard=(props)=>{
    const { name,
        cuisines,
        avgRating,
        costForTwo,
    }=props?.resData?.info;
    
    return(
    <div className="res-card">
        <img 
        className="res-logo" 
        src={
            CDN_URL
            +
            props.resData.info.cloudinaryImageId
        }>
        </img>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo  }</h5>
        
    </div>
    );
};

export default RestaurantCard;