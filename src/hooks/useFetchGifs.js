import { useEffect, useState } from "react"
import {getGifs} from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [stateobj, setstateobj] = useState({
        data: [],
        loading: true
    });
    //se hace el efecto para que se dispare cuando cambia la categoria
    useEffect(() => {
        getGifs(category)//promesa
            .then(imgs => {

                setstateobj({
                    data: imgs,
                     loading: false  
                 });    
                
            });
    }, [category])

    return stateobj; // {data: [], loading: true} retorna un objeto

}
