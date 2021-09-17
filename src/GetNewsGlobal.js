
export const GetNewsGlobal = async(inputUser) => {
     
    const API= `https://newsapi.org/v2/everything?q=${inputUser}&apiKey=095c57b3009d42ce8ed450f53b9c955d`

    try{
        const response = await fetch(API)
        const dataNews = await response.json();
        console.log(dataNews);
        return dataNews;
    }catch(error){
    console.error(error);
}
}