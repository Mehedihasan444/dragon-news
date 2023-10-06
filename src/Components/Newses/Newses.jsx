import { useEffect } from "react";
import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import { useParams } from "react-router-dom";


const Newses = () => {
const [news,setNews]=useState([])
const [filteredNews,setFilteredNews]=useState([])
const {id}=useParams(0)
// console.log(id)
useEffect(()=>{
    fetch('/news.json')
    .then(res=>res.json())
    .then(data=>setNews(data))

    const filteredData = news.filter((a_News)=>a_News.category_id==id)
    if (filteredData.length===0) {
        setFilteredNews(news)
    }
    else{
        
        setFilteredNews(filteredData)
    }
},[id,news])
// console.log(filteredNews)

    return (
        <div>
            <h1 className="text-4xl font-semibold mb-5">This Category Have {filteredNews.length} Newses</h1>
            {
               
                filteredNews.map(aNews=><div key={aNews._id}><NewsCard aNews={aNews}></NewsCard></div>)
            }
        </div>
    );
};

export default Newses;