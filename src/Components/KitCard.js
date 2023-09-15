import {
    useParams, Link, Outlet
  } from 'react-router-dom';
  
import '../scss/index.scss'
import '../scss/kit.scss'
import { KitData } from '../Data/KitsData';

const Kit = () =>{
    
    const {kitId} = useParams();
   
    debugger
            return (
            <>
            <div key={KitData[kitId].key} className="d-flex flex-column justify-content-center mx-auto text-warning hydrokit">
            <h2 className="mx-auto fw-bolder fst-italic">{KitData[kitId].title}</h2>
            <p className="mx-auto fw-bolder text-black fs-6 px-4">{KitData[kitId].des}</p> 
            <img src={KitData[kitId].img} alt={KitData[kitId].alt} className="mx-auto rounded-circle" width={"200px"} height={"200px"}/>
            <Link className="mx-auto" to={`/kits/${KitData[kitId].id}`}>{KitData[kitId].title}</Link>
            <Link className="mx-auto" to="/kits">Back</Link>
            </div>
            </>)
}

export default Kit;