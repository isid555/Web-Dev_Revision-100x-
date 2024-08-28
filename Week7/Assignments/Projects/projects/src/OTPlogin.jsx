import React, { useState, useRef } from "react";
// import './OTPLogin.css';

function OTPLogin() {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
        const { value } = e.target;
        if (value.length > 1) return; // Prevent entering more than one digit
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field
        if (value !== "" && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();
        }

    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`OTP Submitted: ${otp.join("")}`);
        // Handle OTP submission here
    };

    return (
        <div className="otp-login-container">
            <h2>Enter OTP</h2>
            <form onSubmit={handleSubmit}>
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                        className="otp-input"
                    />
                ))}
                <button type="submit" className="otp-submit-button">Submit</button>
            </form>
        </div>
    );
}

export default OTPLogin;
