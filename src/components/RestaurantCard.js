import React from 'react'
import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
    const{ resData } = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        cloudinaryImageId } = resData?.data;

    return(
        <div className="res-card" style={{backgroundColor:"green"}}>
            <img
            className="res-logo" 
            src={ CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard