import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";


const Newses = () => {
const [news,setNews]=useState([])

useEffect(()=>{
    fetch('news.json')
    .then(res=>res.json())
    .then(data=>setNews(data))
},[])
// console.log(news)

    return (
        <div>
            {
                news.map(aNews=><div key={aNews._id}><NewsCard aNews={aNews}></NewsCard></div>)
            }
        </div>
    );
};

export default Newses;