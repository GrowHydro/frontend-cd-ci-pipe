import './scss/greenroom.scss'
import Navigate from './Navigate.js'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Hydro from './Hydro'
import Users from './Users'
import PotCards from './PotCards'
import Home from './Home'
import Contact from './Components/Contact'
import Sci from './Components/Sci'
import Kits from './Components/Kits'
import Kit from './Components/KitCard'
import Buy from './Components/Buy'
import Mock from './pictures/mock.jpg'
import DogMock from './pictures/dogmock.jpg'

const kits = [
   
    {id: 1, key: 1, img: Mock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 2 plants", title: "The Professional Stoner"},
    {id: 2, key: 2, img: DogMock, alt: "A hydroponics kit that is plug and grow", des: "This kit has Reverse Osmosis, Grow Lights, Grow Timer, Water Pump, Hydro Aquaducts for 4 plants", title: "The Dogg"}

]
const WelcomeGreenRoom = () =>{


    return(<>
            <div className="greenroom">
                <Navigate />
                 <Routes>
                    <Route index element={<PotCards />} />
                    <Route path="/" element={<PotCards />} />
                   
                        <Route path="/select" element={<PotCards />}   />
                        <Route path="/hydro" element={<Hydro />} />
                    {/* </Route> */}
                    {/* <Route path="/hydro" element={<PotCards />} /> */}
                    {/* <Route path="/kits" element={<Kits />} /> */}
                        <Route path="/kits" element={<Kits kits={kits} />}  > 
                          {/* <Route index={true} element={<Kit kit={kits} />} /> */}
                          <Route path=":kitId" element={<Kit kit={kits} />}/>
                        </Route> 
                    <Route path="users" element={<Users />} />
                    <Route path="/sci" element={<Sci />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/buy" element={<Buy />} />
                 </Routes>
                <Outlet />
            </div>
           </>)
}

export default WelcomeGreenRoom