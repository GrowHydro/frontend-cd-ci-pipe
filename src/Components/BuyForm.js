import React, {useRef} from 'react'
import '../css/styles.css'

const BuyForm = ({name,address, shipAddress, HandleChange, handleSubmit, diffAddress, checked, key, isRadioSelected}) =>{
    const ref = useRef('address');

    const Radio = React.memo(function Radio({
        diffAddress,
        HandleChange, 
        id, 
        checked,
        isRadioSelected
      }) {
        console.log("rendering", diffAddress);
        
        debugger
        return (
            <input
              key={key + "address"}
              name="address"
              type="radio"
              value={diffAddress }
              checked={ diffAddress }
              // onChange={(e)=>HandleChange(e)}
              onClick={(e)=> HandleChange(e)}
              id={id}
              ref={ref}
            />
        
        );
      });

    return(<>
                <form onSubmit={handleSubmit} className="d-flex flex-column" >
                    <label className="mx-auto">
                        Name:
                        <input id="name" type="text" value={name} onChange={HandleChange} />
                    </label>
                    <label className="mx-auto">
                        Address:
                        <input id="address" type="text" value={`${address}`} onChange={HandleChange} />
                    </label>
                    <span className="d-flex flex-row mx-auto mt-2">
                    <label className="fw-bolder text-black mt-3">Is Shipping address different than billing Address?</label>
                    <Radio key={checked + "componentAddress"} 
                      className="mx-auto" 
                      id={"radioAddressId"} 
                      diffAddress={diffAddress} 
                      checked={checked} 
                      HandleChange={HandleChange}
                      isRadioSelected={isRadioSelected} />
                    </span>
                    { checked &&
                    <label className='fw-bolder text-warning mx-auto'>
                        Ship Address:
                        <input id="shipAddress" type="text" onChange={(e)=>HandleChange(e)} />
                    </label> 
                    }
                        <input type="submit" value="Submit" />
                </form>

           </>)

}

export default BuyForm;