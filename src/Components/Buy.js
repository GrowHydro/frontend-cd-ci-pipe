import {useState, useEffect} from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import BuyForm from './BuyForm'
import styles from '../css/styles.css';
import { Outlet } from "react-router-dom"
import Header from './Header'

const Buy = () =>{
  console.log("process.env.REACT_APP_LOCALID->",process.env.REACT_APP_LOCALID)
  const [amount, updateAmount] = useState(0.0);
  const [address, updateAddress] = useState('');
  const [shipAddress, updateShipAddress] = useState('');
  const [name, updateName] = useState('');
  const [diffAddress, addressIsSame] = useState(false);
  const [dynamicId, updateId] = useState('');
  let [dynamicChange, updateChange] = useState('');
  const [checkedInState, updateChecked] = useState(false);


  const isRadioSelected = () =>{
      return checkedInState ? false : true
  };


  const HandleChange=(e)=>{
     let change = e.target.value
     let id = e.target.id
     if (id = "radioAddressId"){
      let update = isRadioSelected();
      updateChecked(update);
      addressIsSame(update);
     }
    
     
  } 

  const handleSubmit =()=>{

  }

    return(<>
            <Header />
            <div className='mx-auto my-4' id='payment-form'>
             <div className={styles.container} id='card-container'>
              <BuyForm 
                name={name} 
                address={address}
                checked={checkedInState}
                shipAddress={shipAddress}
                diffAddress={diffAddress}
                HandleChange={HandleChange} 
                handleSubmit={handleSubmit}
                isRadioSelected={isRadioSelected}
                key="BuyForm" 
                />

            <PaymentForm
              applicationId="sandbox-sq0idb-cF1vDO6CFrkF71S4OZIrgg"
              cardTokenizeResponseReceived={(EAAAEOjvC4vYb7nODttcQwnsXX_XFXtqDCwgkaZ2jkPw0zTfXGL_V1W2eKJFUFE_, verifiedBuyer) => {
              console.log('token:', process.env.REACT_APP_TOKEN );
              console.log('verifiedBuyer:', verifiedBuyer);
            }}

            createVerificationDetails={() => ({
              amount: '1.00',
              /* collected from the buyer */
              billingContact: {
                addressLines: ['123 Main Street', 'Apartment 1'],
                familyName: 'Doe',
                givenName: 'John',
                countryCode: 'GB',
                city: 'London',
              },
              currencyCode: 'GBP',
              intent: 'CHARGE',
            })}
            
            locationId={process.env.REACT_APP_LOCALID}
      >
       
      </PaymentForm>
      <div id="payment-status-container">
     <CreditCard />
     <button id="card-button" type="button">Pay</button>
     </div>
    </div>
             </div>
            <Outlet />
          </>)
}

export default Buy;