import React from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'

const Body = () => {
      const[listOfRestauranats,setlistOfRestauranats] = useState([]);
      useEffect(()=>{
        fetchData();
      },[]);

      // https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

      const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistOfRestauranats(json?.data?.cards[2]?.data?.data?.cards);
      }

      return (listOfRestauranats.length===0) ? <Shimmer/> : (
        <div className="body-container">
            <div className="filter">
            <button className="filter-btn" onClick={()=>{
              // console.log("button clicked");
              // filter logic
              const filteredList = listOfRestauranats.filter((res)=> res.data.avgRating > 4.0);
              // console.log(listOfRestauranats);
              setlistOfRestauranats(filteredList);

            }} >
                TOP RATED
            </button>
            </div>
            <div className="res-container">
                {
                    listOfRestauranats.map((value)=> {
                        return <RestaurantCard key={value.data.id} resData={value}/>
                    })
                }
                {/* <RestaurantCard resData={resList[0]} />
                <RestaurantCard resData={resList[1]} />
                <RestaurantCard resData={resList[2]} />
                <RestaurantCard resData={resList[4]} />
                <RestaurantCard resData={resList[3]} /> */}
                //Restaurantcard
            </div>
        </div>
    )
}

export default Body;