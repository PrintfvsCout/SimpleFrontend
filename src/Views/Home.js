
import HelloWorld from '../Components/HelloWorld'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard';
import { useAxiosGet } from '../Hooks/HttpRequests';

function Home()
{
    const [limit,setLimit] = useState(10)

    
    const url =`https://5f33ec3ecfaf5a001646b79f.mockapi.io/product/products?page=1&limit=${limit}`
  
    let products = useAxiosGet(url)
   
    let content = null

    if (products.error)
    {
        content = <p>
            Error please refresh or try again 
        </p>
    }

    if (products.loading)
    {
        content=<p>
            <Loader />
        </p>
    }

    if (products.data)
    {
       content=
       products.data.map( (product) => 
       <div key={product.id}>
           <ProductCard  product={product}/> 
       </div>
       )

    
    }
    
    return(
        <div>
            <h1 className="font-bold text-2xl">  
             Our top freelancers
            </h1>

             <div className="relative bottom-0 w-full">
            <footer onClick={() => setLimit(limit+10)} className="bg-blue-800 justify-center text-white flex">
                More
            </footer>
            </div>

            <div onClick={ ()=> window.scrollTo(0,0)} className="fixed bg-blue-500 justify-center text-black flex bottom-0 w-full">
                Back to top
            </div>

            {content}            

        </div>
    )
}

export default Home