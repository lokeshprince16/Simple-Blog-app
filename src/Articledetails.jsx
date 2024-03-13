import { useParams,Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const Articledetails = () => {
    const{id}=useParams();
    const history=useHistory(); 

    const{data:data,pending,error}=useFetch('http://localhost:9000/articles/'+id);
const handleClick=()=>{
    fetch('http://localhost:9000/articles/'+data.id,
    {
        method:"DELETE"

    })
    .then(()=>{
       history.push('/')
    })
}
    return (
        <div>
            {data && <article >
                <h2 className="text-center text-3xl font-bold text-violet-500  ">{data.title}</h2>
                <p className="text-center text-3xl font-bold text-violet-500 ">Written by {data.author}</p>
                <div className=" mt-5 justify-end text-pink-500 font-serif max-w-150 ml-5"> {data.body}</div>
                <Link to='/'>
                    <button className= 'm-5 border-gray-950 text-green-500' >Return to Home</button>
                </Link>
                <Link to='/'>
                    <button onClick={handleClick} className= 'm-5 border-gray-950 text-green-500' >Delete this Article</button>
                </Link>
                </article>}
        </div>

      );
}
 
export default Articledetails;