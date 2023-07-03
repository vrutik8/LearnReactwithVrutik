import React from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
      const[listOfRestauranats,setlistOfRestauranats] = useState(resList);

    // const[listOfRestaurants,setListOfRestaurants] = useState({


//     onClick={() => {
//       const filtered = listOfRestaurants.filter((res) => res?.data?.avgRating > 4);
//       setListOfRestaurants(filtered);
//       console.log(filtered);
// }}
//   let listOfRestauranats2 = [{
  

//       "data": {
  
//         "id": "2",
//         "name": "Hotels villa",
       
//         "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
//         "cuisines": [
//           "North Indian",
//           "Kebabs",
//           "Biryani"
//         ],
//         "costForTwo": 48000,
//         "deliveryTime": 32,
//         "avgRating": "3.0",}
//       },
// {
//       "data": {
  
//         "id": "3",
//         "name": "Hotels MACD",
       
//         "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
//         "cuisines": [
//           "North Indian",
//           "Kebabs",
//           "Biryani"
//         ],
//         "costForTwo": 48000,
//         "deliveryTime": 32,
//         "avgRating": "4.5",}
//       },

// {
//       "data": {
 
//         "id": "1",
//         "name": "voter Empire",
       
//         "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
//         "cuisines": [
//           "North Indian",
//           "Kebabs",
//           "Biryani"
//         ],
//         "costForTwo": 45000,
//         "deliveryTime": 32,
//         "avgRating": "4.0"
//       },
//     }
//     ]
    return(
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