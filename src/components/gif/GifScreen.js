import React, { useState } from 'react'
import { Add } from '../Add';
import { Gif } from '../Gif';

export const GifScreen = () => {

    const [categories, setcategories] = useState(['Top Gifs']);

    return (
        <div>
            <h1>Gif App</h1>
            <Add setcategories={setcategories}/>
            <hr/>        
            
            <ol>
                {
                    categories.map(category => (
                        <Gif 
                        key={category}
                        category={category} />
                    ))
                }
            </ol> 
        </div>
    )
}
