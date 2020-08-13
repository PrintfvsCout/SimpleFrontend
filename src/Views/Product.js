import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequests';


function Product()
{
    const {id } = useParams()

    const url =`https://5f33ec3ecfaf5a001646b79f.mockapi.io/product/products/${id}`

    let product = useAxiosGet(url)
 

    let content = null 


    if (product.error)
    {
        content = <p>
            Error please refresh or try again 
        </p>
    }

    if (product.loading)
    {
        content=<p>
            <Loader />
        </p>
    }



    if (product.data)
    {
       content=
       <div>
        <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        </div>

        <div>
            <img src={product.data.image} alt={product.data.name}/>
        </div>

        <div>
            <p className="font-bold mb-3"> {product.data.price} </p>
        </div>

        <div>
            <p> {product.data.des} </p>
        </div>



        </div>

    
    }
    

    return(
        <div>
           {content}

        </div>
    )
}

export default Product