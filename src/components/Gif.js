import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifItem } from './GifItem';

export const Gif = ({category}) => {

    const {data:gifs, loading} = useFetchGifs(category)
    
    return (
        <>
            <h3>{category}</h3> 
            {loading && <p>loading</p>}
            <div className="card-grid">    
                {
                    gifs.map( img => (        
                        <GifItem
                        key={img.id}
                        {...img}
                        />
                    ))       
                }           
            </div>
        </>
    )
}
