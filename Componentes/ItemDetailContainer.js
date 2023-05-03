import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCountBU from "./ItemCountBU";
import { mockAsyncDetail } from "./MockAsync";

const ItemDetailContainer=({productos})=>{

    const [detalle,setDetalle] = useState({})

    const {itemId} = useParams()

    useEffect(()=>{
        mockAsyncDetail(itemId)
        .then((resultado) =>{
            setDetalle(resultado)
        })
        .catch((err) =>console.log(err))
        .finally(()=>console.log("finished"))
    },[itemId])

    return(
        <>
        <ItemDetail {...detalle}/>
        <ItemCountBU></ItemCountBU>
        </>
    )
    
}

export default ItemDetailContainer