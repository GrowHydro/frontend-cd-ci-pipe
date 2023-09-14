import {useState, useEffect} from 'react';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import BuyForm from './BuyForm'
import styles from '../css/styles.css';
import { Outlet } from "react-router-dom"
import Header from './Header'
import { EmailIcon } from 'react-share';
import { AiFillPhone } from 'react-icons/ai';
import BuyButtons from './BuyButtons'
const Buy = () =>{
  



    return(<>
            <div className='mx-auto my-4'>
             <div className={styles.container} id='card-container'>

                <BuyButtons />
     
              </div>
             </div>
            <Outlet />
          </>)
}

export default Buy;