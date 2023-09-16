import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = ({handleCardData}) => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 w-[72%]">
            {
                cards.map((card,idx) => <Card key={idx} data={card} handleCardData={handleCardData} ></Card>)
            }
        </div>
    );
};

export default Cards;