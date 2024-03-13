import React from 'react'
import {Link}from 'react-router-dom'
export default function () {
  
    
  return (
    <div className='text-justify text-lime-900 m-5'>
        <header className='mb-3 text-red-500 font-bold text-2xl'> About us </header>
       <p > Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus totam perferendis expedita porro tempora minus reprehenderit aut impedit odio dignissimos, qui enim veritatis labore optio provident modi debitis. 
        Doloribus est reprehenderit impedit inventore veniam sunt beatae neque? Eligendi commodi quidem odit quae molestiae quo tempora dicta iusto distinctio corrupti!
        </p>
        <br/>
        <p> Lorem, ipsum dolor sit amet uptatem voluptate sed id, odio reprehenderit ullam quas modi aut accusantium dolorem sit nesciunt. Nostrum, sint nobis!</p>
        <br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, ducimus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias eos incidunt beatae blanditiis placeat quas optio numquam quam maiores quidem hic aut unde, deserunt tenetur maxime deleniti necessitatibus, iste qui? Distinctio, aspernatur commodi possimus optio at rerum earum similique iusto iste animi doloribus pariatur. Provident.</p>
        <br></br>
        <Link to='/'>
        <button className='text-pink-500' >Return to Home</button>
        </Link>
    </div>
  )
}
