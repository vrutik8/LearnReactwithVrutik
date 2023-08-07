import React from 'react'
import { useEffect , useState } from 'react'
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)

    }

    // const { name, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;

  return resInfo === null ? (<Shimmer/>) : (
    <div className='menu'>
        <h1> {resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        {/* <h1> {costForTwoMessage}</h1> */}
        <h1> {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",")} - {resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h1>
        </div>
  )
}

export default RestaurantMenu