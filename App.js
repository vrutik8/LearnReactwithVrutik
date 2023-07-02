import React from "react";
import  ReactDOM  from "react-dom/client";


const Header = () => {
    return(
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent-2048x2048.png" alt="err" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
    )
}

const resList = [{
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "30531",
      "name": "Hotel Empire",
      "uuid": "fdf6686f-6f39-4a90-8eb0-6dc7abf82643",
      "city": "1",
      "area": "Brigade Road",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
      "cuisines": [
        "North Indian",
        "Kebabs",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
      "locality": "Brigade Road",
      "parentId": 475,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.0",
          "totalRatings": 10000,
          "area": "HSR Layout",
          "city": "1",
          "locality": "HSR Layout",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "select": false,
          "id": "426",
          "slugs": {
            "restaurant": "hotel-empire-sector-6-hsr",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 426,
            "fees": [
              {
                "name": "distance",
                "fee": 3800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 3800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3800",
            "icon": ""
          },
          "promoted": true,
          "adTrackingID": "cid=7266726~p=4~eid=00000189-15eb-c1c7-2835-506d0041042d~srvts=1688289919431",
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        },
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.1",
          "totalRatings": 10000,
          "area": "Koramangala",
          "city": "1",
          "locality": "Koramangala",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "slaString": "24 MINS",
          "select": false,
          "id": "425",
          "slugs": {
            "restaurant": "hotel-empire-5th-block-koramangala",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 425,
            "fees": [
              {
                "name": "distance",
                "fee": 2800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 2800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2800",
            "icon": ""
          },
          "promoted": false,
          "adTrackingID": "",
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        }
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7266692~p=1~eid=00000189-15eb-c1c7-2835-506c0041015b~srvts=1688289919431",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "30531",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "229",
      "name": "Meghana Foods",
      "uuid": "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "xqwpuhgnsaf18te7zvtv",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "meghana-foods-5th-block-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "124, Near Jyothi Nivas College, 1st Cross, KHB Colony, Koramangala 5th Block, Bangalore",
      "locality": "5th Block",
      "parentId": 635,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "229",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "428",
      "name": "Biryani Pot",
      "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
      "city": "1",
      "area": "Btm Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
      "cuisines": [
        "North Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 18,
      "minDeliveryTime": 18,
      "maxDeliveryTime": 18,
      "slaString": "18 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "biryani-pot-madiwala-junction-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
      "locality": "Maruti Nagar",
      "parentId": 21798,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "428",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "121603",
      "name": "Kannur Food Point",
      "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
      "city": "1",
      "area": "Tavarekere",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
      "cuisines": [
        "Kerala",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "kannur-food-point-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
      "locality": "SG Palya",
      "parentId": 20974,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "121603",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "337335",
      "name": "Kannur food kitchen",
      "uuid": "c70b61bc-0f68-4e24-996b-749fbf295c35",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "a27weqanhnszqiuzsoik",
      "cuisines": [
        "Kerala",
        "Biryani",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "kannur-food-kitchen-btm-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "kannur food point, Chocolate Factory Road, Tavarekere, Cashier Layout, 1st Stage, BTM Layout, thavrakharea, Karnataka, India",
      "locality": "1st  Stage",
      "parentId": 114756,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          },
          {
            "meta": "Free Fresh Lime Juice on orders above ₹499",
            "discountType": "Freebie",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "337335",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "279735",
      "name": "Easy Bites by Hotel Empire",
      "uuid": "b5eda477-5ddc-4826-a9d3-7a3b37c84b51",
      "city": "1",
      "area": "Ashok Nagar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "d06b7fa84cb8f8193f60d4c2de172347",
      "cuisines": [
        "Snacks",
        "Fast Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 32,
      "minDeliveryTime": 32,
      "maxDeliveryTime": 32,
      "slaString": "32 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "easy-bites-central-bangalore-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No.35,Castel Street,Bangalore-560025,District-B.B.M.P East,STATE-Karnataka",
      "locality": "Castel Street",
      "parentId": 8503,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.0",
          "totalRatings": 1000,
          "area": "Koramangala",
          "city": "1",
          "locality": "5th Block",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "slaString": "23 MINS",
          "select": false,
          "id": "167674",
          "slugs": {
            "restaurant": "easy-bites-koramangala",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 167674,
            "fees": [
              {
                "name": "distance",
                "fee": 2800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 2800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2800",
            "icon": ""
          },
          "promoted": true,
          "adTrackingID": "cid=7266777~p=13~eid=00000189-15eb-c1c7-2835-507000410d58~srvts=1688289919431",
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        },
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.0",
          "totalRatings": 1000,
          "area": "HSR Layout",
          "city": "1",
          "locality": "6th Sector",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "select": false,
          "id": "167636",
          "slugs": {
            "restaurant": "easy-bites-hsr",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 167636,
            "fees": [
              {
                "name": "distance",
                "fee": 3800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 3800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3800",
            "icon": ""
          },
          "promoted": true,
          "adTrackingID": "cid=7266760~p=16~eid=00000189-15eb-c1c7-2835-507100411077~srvts=1688289919431",
          "aggregatedDiscountInfo": {
            "header": "10% off",
            "shortDescriptionList": [
              {
                "meta": "10% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "10% off up to ₹40 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        }
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7266785~p=7~eid=00000189-15eb-c1c7-2835-506e0041071f~srvts=1688289919431",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "279735",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "201224",
      "name": "Asha tiffins",
      "uuid": "e32381cf-6468-4c10-9bad-47fa08e898a8",
      "city": "1",
      "area": "HSR Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "n15vckntsiboiod3gpco",
      "cuisines": [
        "Indian",
        "South Indian",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "asha-tiffins-hsr-hsr-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Asha Tiffins, 5th Main Road, Sector 7, HSR Layout, Bengaluru, Karnataka, India",
      "locality": "7th Sector",
      "parentId": 236243,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "30% off",
        "shortDescriptionList": [
          {
            "meta": "30% off | Use TRYNEW-XL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off upto ₹70 | Use TRYNEW-XL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW-XL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off upto ₹70 | Use TRYNEW-XL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "201224",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56589",
      "name": "Roti-wala.com",
      "uuid": "257a0889-b243-4252-b84a-6c9f1760d58f",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "ptetuqkrhmpd8tiqiztg",
      "cuisines": [
        "North Indian",
        "Home Food",
        "Thalis",
        "Chinese",
        "Punjabi",
        "South Indian",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "roti-wala-lavelle-road-central-bangalore",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#239, 7TH Cross, Btm Stage 2. NS Palya, 560076",
      "locality": "2nd Stage",
      "parentId": 415860,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "56589",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "660675",
      "name": "Cafe Amudham",
      "uuid": "748db01d-25af-41a8-b012-ce948960efcb",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "c4314ce3710e1cc462cef8d978a58ffc",
      "cuisines": [
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 21,
      "minDeliveryTime": 21,
      "maxDeliveryTime": 21,
      "slaString": "21 MINS",
      "lastMileTravel": 1,
      "slugs": {
        "restaurant": "cafe-amudham-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No. 146, 5th Block, Koramangala, Bangalore, BTM Layout , B.B.M.P South, Karnataka-560095",
      "locality": "5th Block Kormangala",
      "parentId": 396620,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.5",
          "totalRatings": 1000,
          "area": "Jayanagar",
          "city": "1",
          "locality": "Lalbhagh  Siddapura",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "select": false,
          "id": "684427",
          "slugs": {
            "restaurant": "cafe-amudham-jayanagar-jayanagar",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 684427,
            "fees": [
              {
                "name": "distance",
                "fee": 3800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 3800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3800",
            "icon": ""
          },
          "promoted": false,
          "adTrackingID": "",
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        }
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7159546~p=10~eid=00000189-15eb-c1c7-2835-506f00410a45~srvts=1688289919431",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "660675",
        "deliveryTime": 21,
        "minDeliveryTime": 21,
        "maxDeliveryTime": 21,
        "lastMileTravel": 1,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.6",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "319530",
      "name": "Malnad Donne Biriyani MDB",
      "uuid": "f8807990-e389-4693-bfd8-103636ae1156",
      "city": "1",
      "area": "Bommanahalli",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "kamm1so6elz9i1usjosv",
      "cuisines": [
        "Biryani",
        "Chinese",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 19900,
      "costForTwoString": "₹199 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "malnad-donne-biriyani-mdb-btm-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "#60/3 ganesh towers kodichikanahalli main road ",
      "locality": "Kodichikanahalli Main Road",
      "parentId": 130946,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT Rs.125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT Rs125 off | Use DAAWAT-E-BIRYANI",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT Rs.125 off | Use DAAWAT-E-BIRYANI",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use DAAWAT-E-BIRYANI",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT Rs.125 off | Use DAAWAT-E-BIRYANI",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "319530",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "537139",
      "name": "Narmada Chain Of Restaurant",
      "uuid": "6a6d3d2a-2c66-45ae-9772-e8c4dd08c794",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "gmcud4kfjsy2kf2bbrme",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.100000023841858,
      "slugs": {
        "restaurant": "narmada-group-of-hotels-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "No. 4, 1st Main Road, 5th Block, Beside Coffee Day, Koramangala, Bangalore 560095",
      "locality": "Koramangala",
      "parentId": 322826,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "537139",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.100000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "57283",
      "name": "Burger King",
      "uuid": "ff073b00-d9a7-4e33-a2d6-3bd423bbed09",
      "city": "1",
      "area": "Hsr Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 4.099999904632568,
      "slugs": {
        "restaurant": "burger-king-ground-floor-hsr-layout-sectror-3-hsr",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Burger King India Pvt Ltd, No.1081 Ground floor , HSR layout Sectror  3  Bangalore 560102",
      "locality": "3rd Sector",
      "parentId": 166,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code STEALDEAL",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.0",
          "totalRatings": 10000,
          "area": "Btm Layout",
          "city": "1",
          "locality": "Vega City Mall",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "select": false,
          "id": "42579",
          "slugs": {
            "restaurant": "burger-king-vega-city-mall-btm",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 42579,
            "fees": [
              {
                "name": "distance",
                "fee": 5300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 5300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5300",
            "icon": ""
          },
          "promoted": false,
          "adTrackingID": "",
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        },
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.1",
          "totalRatings": 1000,
          "area": "Adugodi",
          "city": "1",
          "locality": "Forum Mall",
          "deliveryTime": 31,
          "minDeliveryTime": 31,
          "maxDeliveryTime": 31,
          "slaString": "31 MINS",
          "select": false,
          "id": "341867",
          "slugs": {
            "restaurant": "burger-king-forum-mall-koramangala",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 341867,
            "fees": [
              {
                "name": "distance",
                "fee": 2800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 2800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2800",
            "icon": ""
          },
          "promoted": false,
          "adTrackingID": "",
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        },
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.2",
          "totalRatings": 10000,
          "area": "Koramangala",
          "city": "1",
          "locality": "7th Block",
          "deliveryTime": 21,
          "minDeliveryTime": 21,
          "maxDeliveryTime": 21,
          "slaString": "21 MINS",
          "select": false,
          "id": "5934",
          "slugs": {
            "restaurant": "burger-king-koramangala",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 5934,
            "fees": [
              {
                "name": "distance",
                "fee": 2800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 2800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "2800",
            "icon": ""
          },
          "promoted": false,
          "adTrackingID": "",
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code STEALDEAL",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        }
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "57283",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 4.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "709170",
      "name": "Imperio Restaurant",
      "uuid": "b831b957-c7b1-4fb4-bb7c-b07ce0c72cb1",
      "city": "1",
      "area": "HSR",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "a1629b9c7f59577a55411e94425c6d99",
      "cuisines": [
        "Indian",
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "imperio-restaurant-hsr-hsr-2",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "imperio restaurant , 495, 17th Cross Rd, Parangi Palaya, Sector 2, HSR Layout, Bengaluru, Karnataka",
      "locality": "Sector 2",
      "parentId": 5610,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 5300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "709170",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 500,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "94703",
      "name": "Sri Punjabi Dhaba",
      "uuid": "244943ac-cb6b-439f-9a09-687af66615b1",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "i53hrycmcn2oehrojag0",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese",
        "Kebabs"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "sri-punjabi-dhaba-bangalore-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Opposite 11th Cross 20th Main Rd,beside sri balaji wood Old Madiwala, Cashier Layout,  1st Stage, BTM 1st Stage, Bengaluru, Karnataka 560029",
      "locality": "Cashier Layout",
      "parentId": 21426,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off on all orders",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "94703",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.0",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "307050",
      "name": "Call Me Chow",
      "uuid": "b9bf2a17-faf9-4e4a-a6a7-61197d4bafa0",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "soegobqsiqvhmkfvnnkj",
      "cuisines": [
        "Chinese",
        "Pan-Asian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 1.7999999523162842,
      "slugs": {
        "restaurant": "call-me-chow-koramangala-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Call Me Chow, No. 364/A, Ground Floor, 3rd Cross, VSR Layout, Koramangala 8th Block, Bengaluru, Karnataka - 560095",
      "locality": "8th Block",
      "parentId": 18560,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        {
          "tradeCampaignHeaders": [
            
          ],
          "avgRating": "4.2",
          "totalRatings": 10000,
          "area": "BTM Layout",
          "city": "1",
          "locality": "2nd Stage",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "slaString": "40 MINS",
          "select": false,
          "id": "361376",
          "slugs": {
            "restaurant": "call-me-chow-btm-btm",
            "city": "bangalore"
          },
          "feeDetails": {
            "restaurant_id": 361376,
            "fees": [
              {
                "name": "distance",
                "fee": 3800,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "total_fee": 3800,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3800",
            "icon": ""
          },
          "promoted": true,
          "adTrackingID": "cid=7355521~p=25~eid=00000189-15eb-c1c7-2835-507400411940~srvts=1688289919431",
          "aggregatedDiscountInfo": {
            "header": "40% off",
            "shortDescriptionList": [
              {
                "meta": "40% off | Use SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          }
        }
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 2800,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 2800,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2800",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=7355519~p=19~eid=00000189-15eb-c1c7-2835-507200411305~srvts=1688289919431",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "307050",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.7999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.3",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  }
  ]

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
        <div className="res-card" style={{backgroundColor:"yellow"}}>
            <img
            className="res-logo" 
            src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"  + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}Stars</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}


    
const Body = () => {
    return(
        <div className="body-container">
            <div className="search">
            search
            </div>
            <div className="res-container">

                {
                    resList.map((value)=> {
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





const AppLayout = () => {
       return(
        <div className="App">
            <Header/>
            <Body/>
        </div>
       )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);