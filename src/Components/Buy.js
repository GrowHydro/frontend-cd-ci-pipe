import styles from '../css/styles.css';
import { Outlet } from "react-router-dom"
import BuyButtons from './BuyButtons'

const Buy = () =>(<>
            <div className='mx-auto my-4'>
             <div className={styles.container} id='card-container'>
                <BuyButtons />
              </div>
             </div>
            <Outlet />
          </>)


export default Buy;