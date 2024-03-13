import{Link} from 'react-router-dom';
const Articleslist = ({data}) => {
    return (
        <div className="articles-lists  text-violet-700 mt-4 ml-4 0">
            {data.map((data)=>(
                <div className="key text-2xl font-bold mt-5 hover:bg-gray-100" key={data.id}>
                    <Link to ={`/data/${data.id}`}>
                        <h2 className='ml-3'>{data.title}</h2>
                        <p className='text-blue-700 text-1em font-sm font-light  ml-5'>written by {data.author}.</p>
                    </Link>
                </div>
            )
            )}
        </div>
      );
}
 
export default Articleslist;