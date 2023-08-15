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


    // const { name } =;


    // data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards

 if(resInfo===null) return <Shimmer/>;
  return  (
    <div className='menu'>
        <h1> { resInfo?.cards[0]?.card?.card?.info?.name}</h1>
        <p> { resInfo?.cards[0]?.card?.card?.info?.cuisines.join(",") } - { resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</p>
        <h1>Menu</h1>
        <ul className='menu'>
            {/* <li> {resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards }</li> */}
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[5]?.card?.info?.name}</li><br />
    
        </ul>
        </div>
  )
}
// data.cards[0].card.card.info.costForTwoMessage
export default RestaurantMenu