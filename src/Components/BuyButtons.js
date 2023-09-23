import kit from '../pictures/Hydro-kit.jpg'
import pro from '../pictures/flower.jpg'
import '../css/button.css'

const BuyButtons = () =>{

    return(<>
            <div className="mx-auto">
              <div className="button my-2">
              <div className='d-flex flex-column price'>
              <h1 className='mx-auto fs-3'>Starter Grow Kit</h1>
              <p className='mx-auto'>$550.00</p>
              <img className="rounded-circle" src={kit} alt="starter kit" height={"200px"} width={"200px"}/>
              <a target="_blank" href="https://square.link/u/95aEmO4D?src=embed" className="buy">Buy now</a>
              </div>
              </div>
              <div className="button my-2">
              <div className='d-flex flex-column price'>
              <h1 className='mx-auto fs-3'>HydroBloom Pro</h1>
              <p className='mx-auto'>$660.00</p>
              <img className="rounded-circle" src={pro} alt="high power grow kit" height={"200px"} width={"200px"}/>
              <a target="_blank" href="https://square.link/u/myPEbbJu?src=embed" className="buy">Buy now</a>
              </div>
            </div>
            </div>  
           </>)
}

export default BuyButtons