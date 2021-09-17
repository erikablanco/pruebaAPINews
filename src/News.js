import { useState } from 'react';
import { GetNewsGlobal } from './GetNewsGlobal';
import './news.css';
import Loader from 'react-loader-spinner';
export const News = () => {


    const [inputUser, setInputUser]= useState("");
    const [ datanews, setDataNews] = useState();
    const [ loading, setLoading] = useState(false);
    const [ error, setError] = useState(false);
  

    const handleClick = async () =>{
        //console.log('hola mundo');
       // GetNewsGlobal(inputUser);
        
        console.log("Dato en el input"  + inputUser);
        //setArticle(GetNewsGlobal)
        try{
            setLoading(true);
            const data = await GetNewsGlobal(inputUser);
            setDataNews(data);
            setLoading(false);            

        } catch (error) {
            console.log("catch" + error);
            //console.error(error);
            setError(false);
        }
   };

   return (
       <div className="news-container">
           {console.log(datanews)}
          <input
          onChange={ (e) => setInputUser(e.target.value)}
          value= {inputUser}
          >           
          </input>
            <button onClick={handleClick}>
              Consultar Noticias
          </button>
          { loading ? (
              <Loader
               
              />
          ) : error  ? (
              <h3>{error}</h3>
          ) : datanews !== undefined ? (
            <div>
            {datanews.articles.map((article) => {
                return(
                    <div key={article.title}>
                        <a>{article.title}</a>
                        <p>{article.description}</p>

                    </div>
                );
            })}
          </div>
          ) : null}         
         
       </div>
   );
};
    

