import { useEffect } from "react";


export const GetNewsLog = () => {

    const API= `https://newsapi.org/v2/top-headlines?country=co&apiKey=095c57b3009d42ce8ed450f53b9c955d`;
    
    useEffect(() => {
        fetch(API).then(response => response.json()).then(data => {
            console.log(data);
            data.articles.map(news => {console.log(news.title);
            console.log("fuente", news.source.name);})
        })
    })
}