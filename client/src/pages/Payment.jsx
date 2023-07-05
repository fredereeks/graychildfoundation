import React from 'react';
import logo from './logo.svg';
import { usePaystackPayment } from 'react-paystack';
import './App.css';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Payment() {
    const location = useLocation();
    const {state} = location;

    const config = {
        reference: "GCF" + (new Date()).getTime().toString(),
        email: state?.email,
        amount: state?.amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_dsdfghuytfd2345678gvxxxxxxxxxx',
    };
    
    // you can call this function anything
    const onSuccess = async(reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      try {
        await axios.post(`http://localhost:4199/api/payment`, {...state, reference})
        alert(`Donation of ${state?.amount} Successfully`) 
      } catch (err) {
        if(err.response){
            console.log({err: err.response.data})
        }
        else console.log({err})
      }
    };
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
      useNavigate("/donate");
    }
    
    const PaystackHookExample = () => {
        const initializePayment = usePaystackPayment(config);
        return (
          <div>
              <button className="px-4 py-2 rounded-md bg-green-500 text-white" onClick={() => {
                  initializePayment(onSuccess, onClose)
              }}>Donate {state?.amount}</button>
          </div>
        );
    };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PaystackHookExample />
    </div>
  );
}

export default Payment;