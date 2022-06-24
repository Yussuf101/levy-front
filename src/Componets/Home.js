import React from 'react';
import './Home.css';
import { Button } from './Button';


function Home() {
    return (
        <>
        <div className='cards'>
          <h1>Understanding Apprenticeship levy</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <p> The Apprenticeship levy has been in effect since 2017, 
              <p> 
               making companies with a wage bill over £3m pay an additional
              </p>
              0.5%.This additional 0.5% sum forms a special fund to be used by
              <p>  each company for apprenticeship training of a new and existing staff.
              </p>
              </p>
              </ul>
          <ul className='cards__items'>
            <h3> How is your levy and total amount to invest calculated?</h3>
           </ul>
           <ul className='cards__items'>
          <p>
           For any company that has annual UK wage bill of £3m and over, will
            <p> pay 0.5% of their annual wage bill minus a levy allowance of £15000.</p>
            <p>
            <p>Additionally, the UK government will then top up this amount by </p>
            <p>10% and place this into your digital account ready for you to invest</p>
            <p>in apprenticeship training. Companies with wage bill less than £3m 
            </p>annually do not have pay the apprenticeship levy but are still entitled to 95% funding.</p> 
            <p></p>
           </p>
           </ul>
          <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        </div>
        </div>
      </div>
    </div>
      </>
    );
  }
  
  export default Home;