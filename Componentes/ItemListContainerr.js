import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {mockAsync} from "./MockAsync";

const ItemListContainerr = ({greeting}) => {

    const [estado,setEstado] = useState([])
    const [loading, setLoading] = useState(false)

    const parametros = useParams()
    
    useEffect(()=>{
            setLoading(true)
            mockAsync()
            .then((resultado) =>{
                setEstado(resultado)
            })
            .catch((err) =>console.log(err))
            .finally(()=>setLoading(false))
    },[parametros.id])
    
    let estadoAux = []
    
    let {categoria} = useParams()
    if (categoria == "plastico") {
      estadoAux = estado.filter((x)=>x.category=="plastico")
    } else if (categoria == "acero_inoxidable"){
        estadoAux = estado.filter((x)=>x.category=="acero inoxidable")
    } else{estadoAux=estado}

    console.log(categoria)
    console.log (estadoAux)

    console.log (estado)

    return (
        <>
        <h3 className="greeting">{greeting}</h3>
        {loading? <p>Cargando...</p>:<ItemList losProductos={estadoAux}/>}
        </>
    )}


export default ItemListContainerr