import React from 'react'
import { Link } from 'react-router-dom';
import CancelledImage from './../../assets/img/theme/cancelled.png';

function PaymentCancelled() {
  return (
    <div>
        <div className="payment-cancelled" style={{ textAlign: "center"}}>
            <h1>Payment Cancelled</h1>
            <img src={CancelledImage} alt="Payment Cancelled" />
            <p>Unfortunately, your payment was cancelled or declined.</p>
            <p>If you have any questions or need further assistance, please contact our support team.</p>
            <Link to="/">Go to home</Link>
        </div>
    </div>
  )
}

export default PaymentCancelled