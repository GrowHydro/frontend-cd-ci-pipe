import {useState, useEffect} from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import BuyForm from './BuyForm'
import styles from '../css/styles.css';
import { Outlet } from "react-router-dom"
import Header from './Header'
import { EmailIcon } from 'react-share';
import { AiFillPhone } from 'react-icons/ai';

const Buy = () =>{
  console.log("process.env.REACT_APP_LOCALID->",process.env.REACT_APP_LOCALID)
  const [amount, updateAmount] = useState(0.0);
  const [city, updateCity] = useState('');
  const [firstName, updateFirstName] = useState('');
  const [lastName, updateLastName] = useState('');
  const [address, updateAddress] = useState('');
  const [email, updateEmail] = useState('');
  const [phone, updatePhone] = useState('');
  const [zip, updateZip] = useState('');
  const [shipAddress, updateShipAddress] = useState('');
  const [name, updateName] = useState('');
  const [diffAddress, addressIsSame] = useState(false);
  const [dynamicId, updateId] = useState('');
  let [dynamicChange, updateChange] = useState('');
  const [checkedInState, updateChecked] = useState(false);


  
  const veriBuyer = () =>{
 // Required in SCA Mandated Regions: Learn more at https://developer.squareup.com/docs/sca-overview
    async function verifyBuyer(payments, token){
    const verificationDetails = {
    amount: amount,
    billingContact: {
      addressLines: [address, zip],
      familyName: lastName,
      givenName: firstName,
      email: email,
      country: 'US',
      phone: phone,
      city: city,
    },
    currencyCode: 'USD',
    intent: 'CHARGE',
  };

  const verificationResults = await payments.verifyBuyer(
    token,
    verificationDetails
  );
  return verificationResults.token;
}
    

  }
  const isRadioSelected = () =>{
      return checkedInState ? false : true
  };

  const emailRegExCheck = (email) =>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
  }

  const phoneRegExCheck = (phone) =>{
    if (/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(phone))
    {
      return (true)
    }
    alert("You have entered an invalid phone number!")
  }


  const HandleChange=(e)=>{
     let change = e.target.value
     let id = e.target.id
     if (id === "radioAddressId"){
      let update = isRadioSelected();
      updateChecked(update);
      addressIsSame(update);
     }
     if (id === "city"){
      updateCity(change)
     }
     if (id === 'fName'){
      updateFirstName(change);
     }
     if (id === 'lName'){
      updateLastName(change);
     }
     if (id === 'address'){
      updateAddress(change);
     }
     if (id === 'zip'){
      updateZip(change);
     }
     if (id === 'email'){
      updateEmail(change);
     }
     if (id === 'phone'){
      updatePhone(change);
     }
    
     
  } 

  const handleSubmit =()=>{
    emailRegExCheck();
    phoneRegExCheck();
    veriBuyer();
  }

    return(<>
            <Header />
            <div className='mx-auto my-4'>
             <div className={styles.container} id='card-container'>
              <BuyForm 
                firstName={firstName}
                lastName={lastName}
                address={address}
                zip={zip}
                phone={phone}
                email={email}
                checked={checkedInState}
                shipAddress={shipAddress}
                diffAddress={diffAddress}
                city={city}
                HandleChange={HandleChange} 
                handleSubmit={handleSubmit}
                isRadioSelected={isRadioSelected}
                key={"BuyForm"} 
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
                addressLines: [address, zip],
                familyName: lastName,
                givenName: firstName,
                countryCode: 'US',
                city: city,
                buyer_email: email,
                buyer_phone_number: phone,

              },
              currencyCode: 'USD',
              intent: 'CHARGE',
            })}
            
            locationId={process.env.REACT_APP_LOCALID}
      >
       
      </PaymentForm>
      <div id="payment-status-container">
     <CreditCard />
     </div>
    </div>
             </div>
            <Outlet />
          </>)
}

export default Buy;