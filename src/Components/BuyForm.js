import React from 'react'
import '../css/styles.css'

const BuyForm = ({name,address, shipAddress, handleChange, handleSubmit, diffAddress}) =>{
      
    const Radio = React.memo(function Radio({
        checked,
        diffAddress,
        onChange
      }) {
        console.log("rendering", diffAddress);
        return (
         
            <input
              type="radio"
              value={checked}
              checked={checked}
              onChange={onChange}
            />
        
        );
      });

    return(<>
                <form onSubmit={handleSubmit} className="d-flex flex-column" >
                    <label className="mx-auto">
                        Name:
                        <input id="name" type="text" value={name} onChange={handleChange} />
                    </label>
                    <label className="mx-auto">
                        Address:
                        <input id="address" type="text" value={`${address}`} onChange={handleChange} />
                    </label>
                    <span className="d-flex flex-row mx-auto mt-2">
                    <label className="fw-bolder text-black mt-3">Is Shipping address different than billing Address?</label>
                    <Radio className="mx-auto" id="diffAddress" diffAddress={diffAddress} checked={diffAddress} />
                    </span>
                    { diffAddress &&
                    <label className='fw-bolder text-warning mx-auto'>
                        Ship Address:
                        <input id="shipAddress" type="text" value={`${shipAddress}`} onChange={(e)=>handleChange(e)} />
                    </label> 
                    }
                        <input type="submit" value="Submit" />
                </form>

           </>)

}

export default BuyForm;