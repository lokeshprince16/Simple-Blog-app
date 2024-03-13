import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        
        <div className="navbar text-center  bg-pink-500 ">
            <h2 className="  text-xl  text-green-300 inline-block font-bold ">News 7 Articles</h2>
            <div className="links font-serif  text-green-300 text-center gap-3 grid grid-cols-3"  >
              <div className="home text-pink-150">  <Link to='/'>Home</Link></div>
              <div className="create text-pink-150"><Link to='/Create'>Create </Link></div>
               <div className="about text-pink-150"><Link to='/About'>About</Link></div>
            </div>
        </div>
     );
}
 
export default Navbar;