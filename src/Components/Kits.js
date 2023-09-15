import { Routes, Route, Outlet } from 'react-router-dom';
import Mock from '../pictures/mock.jpg'
import DogMock from '../pictures/dogmock.jpg'
import Kit from './KitCard'
import { KitData } from '../Data/KitsData';
import { useNavigate } from 'react-router-dom';

// const hydrokits = [
//     {id: 1, img: Mock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 2 plants", title: "The Professional Stoner"},
//     {id: 2, img: DogMock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 4 plants", title: "The Dogg"}

// ]

const Kits =()=>{
    const nav = useNavigate();

    const makeKitCards = () =>{
        debugger
        let cards = KitData.map((k, i) =><span className="d-flex flex-column bg-info my-2 mx-auto w-100">
            <div className="mx-auto" onClick={()=>{nav(`/kits/${k.id - 1}`)}}>
                <h1><a className="bg-white text-warning">{k.title}</a></h1>
            </div>
            </span>)
    return cards
    }

    return( <>
           
            <div className="d-flex flex-column justify-content-center mx-auto kits">
            <h1 className="mx-auto text-success">Grow Kits</h1>
            <p className="mx-auto fw-bolder fs-3 text-danger">Become your own Dispensary</p>
            <p className="mx-auto fw-bolder fs-4 text-warning">Grow all the Cannabis you want</p>
            {makeKitCards()}

            <Outlet />
           </div>
           </>)
}

export default Kits;