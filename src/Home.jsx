import Articleslist from "./Articleslist";
import useFetch from "./useFetch";

const Home = () => {
    const{data:data,pending,error}=useFetch('http://localhost:9000/articles');
    return ( 
        <div className="homepage ">
            {data && <Articleslist data={data} />}
            {pending && <h2>Loading ...</h2>}
             {error}
        </div>
     );
}
 
export default Home;