import React from 'react'
import { useEffect , useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    const[resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+ resId +"&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setResInfo(json.data)
    }
    if(resInfo===null) return <Shimmer/>;

   const { itemCards } = 
   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const {name,cuisines,costForTwoMessage} =
    resInfo?.cards[0]?.card?.card?.info;
  return  (
    <div className='menu'>
        <h1> {name}</h1>
        <p> { cuisines.join(",") } - { costForTwoMessage}</p>
        <h1>Menu</h1>
        <ul className='menu'>
            {itemCards.map(item => <li key={item?.card?.info?.id}> {item?.card?.info?.name} - Rs{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>)}
            {/* <li> {resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards }</li> */}
            {/* <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[3]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[4]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[5]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[6]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[7]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[8]?.card?.info?.name}</li><br />
            <li>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[9]?.card?.info?.name}</li><br /> */}
    
        </ul>
        </div>
  )
}
// data.cards[0].card.card.info.costForTwoMessage
export default RestaurantMenu