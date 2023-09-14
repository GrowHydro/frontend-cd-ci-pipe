import '../css/button.css'
const kit = '../pictures/baller-grow-room-small.jpg'
const BuyButtons = () =>{

    return(<>
            <div className="mx-auto">
            <img src={kit} alt="starter kit" height={"300px"} width={"300px"}/>
            <div className="button">
            <div className='d-flex flex-column price'>
            <p className='mx-auto'>$550.00</p>
            <a target="_blank" href="https://square.link/u/95aEmO4D?src=embed" className="buy">Buy now</a>
  </div>
</div>
            </div>  
           </>)
}

export default BuyButtons