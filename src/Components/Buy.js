import {useState} from 'react'
import styles from '../css/styles.css';
import { Outlet } from "react-router-dom"
import BuyButtons from './BuyButtons'

const Buy = () =>{
      const [checked, updateCheck] = useState(false)
        
      const handleChange = () => checked ? updateCheck(!checked) : updateCheck(checked)


      return(<>
              <div class="body mx-auto">
                <div class="w-100">
                  <div id="ageForm">
                    <div id="legal" class="d-flex flex-column justify-content-center fw-bolder">
                    <h1>Hydroponic System Disclaimer</h1>
                    <p>This hydroponic system is designed to grow plants and vegetables in a controlled indoor environment. It provides a method for cultivating various types of vegetation using a water-based nutrient solution.</p>
                    <p>It's important to note that the success of your crops may depend on various factors including proper maintenance, suitable environmental conditions, and appropriate plant selection.</p>
                    <p>By purchasing and using this hydroponic system, you acknowledge and agree:</p>
                      <ol class="d-flex flex-column mx-auto w-50">
                        <li>You are responsible for familiarizing yourself with and adhering to all local laws and regulations related to growing plants, including but not limited to laws regarding the cultivation of certain types of plants, water usage, zoning regulations, and any applicable permits or licenses.</li>
                        <li>You understand that this system is intended for legal and responsible use only.</li>
                        <li>You assume all liability and legal responsibility for any consequences arising from the use of this hydroponic system.</li>
                      </ol>
                    <p>This disclaimer is intended to inform you of your legal responsibilities and does not absolve you of any legal obligations. If you are uncertain about the legality of growing specific plants or vegetables using this hydroponic system in your jurisdiction, we strongly recommend seeking legal advice.</p>
                    <p>Please keep in mind that laws and regulations may vary by location, and it is your responsibility to ensure compliance with all relevant laws.</p>
                  <label id="ageCheckLabel" for="ageCheck" class="text-danger fw-bolder fs-1">
                  I agree to the above statement and I am 21 years or older
                    <input type="checkbox" id="ageCheck" onChange={handleChange} value={checked} />
                  </label>    
                  </div>
                </div>
              </div>
            </div>
            <div className='mx-auto my-4'>
             <div className={styles.container}>
                <BuyButtons />
              </div>
             </div>
            <Outlet />
          </>
          ) 
      }


export default Buy;