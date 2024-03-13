import { useState } from "react";

const New = () => {
    const [title, settitle] = useState(' ');
    const [body, setbody] = useState(' ');
    const[author,setauthor]=useState('HarryPotter')
const handleSubmit=(e)=>{
        e.preventDefault();
        const articles={title,body,author};
        fetch('http://localhost:9000/articles',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(articles)
        }).then(()=>{
            alert('new blog added')
        })
    }
    return (  
        <div className="  border-purple-800 max-w-500 text-center p-4 m-4">
            <h2 className="text-center mt-5 mb-5 text-purple-500 text-3xl">Add a New Article</h2>
            <form className='  text-start' onSubmit={handleSubmit}>
               <label className="text-purple-500  text-xl">Article Name:</label> 
               <input  className='mb-5 p-4 w-full border'
                        type="text"
                        required 
                        value={title}
                        onChange={(e)=>settitle(e.target.value)}
                />
                
                <label  className="text-purple-500  text-xl">Article Content:</label>
                <textarea
                     className='mb-5 w-full border border-gray-150'
                     required
                     value={body}
                     onChange={(e)=>setbody(e.target.value)}>
                </textarea>
               
                <label className="text-purple-500  text-xl">Article-Author: </label>
                <select
                className="w-full mb-5 p-4 text-pink-500 bg-pink-100 text-serif "
                value={author}
                onChange={(e)=>setauthor(e.target.value)}>
                    <option className="text-purple-500" value="harryPotter">HarryPotter</option>
                    <option value="Hermoine Granger">HermoineGranger</option>
                    <option value="Ronald Weasely">RonaldWeaseley</option>
                    <option value="Ronald Weasely">Dumbledore</option>
                    <option value="Ronald Weasely">Ginny Weasely</option>
                </select>
                <button className="w-full mt-3 text-3xl text-pink-100 bg-violet-500 p-3 rounded-md">Add Blog</button>
            </form>
        </div>

    )}
    export default New;