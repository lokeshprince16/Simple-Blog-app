import { useEffect, useState } from "react";
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [pending, setpending] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setdata(data);
            setpending(false);
            seterror(null);
        })
    }, [url])
    
    return (  
        {data,pending,error}
    );
}
 
export default useFetch;