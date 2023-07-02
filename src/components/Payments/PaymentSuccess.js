import React from 'react'
import { Link } from 'react-router-dom'
import successImage from './../../assets/img/theme/success.png';

function PaymentSuccess() {
  return (
    <div>
        <div className="payment-success" style={{ textAlign: "center"}}>
            <h1>Payment Successful!</h1>
            <img src={successImage} alt="Payment Success" />
            <p>Thank you for your purchase. Your payment has been successfully processed.</p>
            <p>An email with the details of your purchase has been sent to your registered email address.</p>
            <Link to="/">Go to home</Link>
        </div>
    </div>
  )
}

export default PaymentSuccess