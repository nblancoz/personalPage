import React, { useEffect, useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const initialValue = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [data, setData] = useState(initialValue);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const email = data.email;
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailVerification = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailVerification.test(email);
  };

  useEffect(() => {
    const validation = () => {
      if (data.name.length < 4) {
        setMessage("The name must be 4 characters long");
        setBtnDisabled(true);
      } else if (!validateEmail(email)) {
        setMessage("Enter a valid email");
        setBtnDisabled(true);
      } else {
        setMessage(null);
        setBtnDisabled(false);
      }
    };
    validation();
  }, [data]);

  const inputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const submit = (event) => {
    event.preventDefault();
    console.log(`Sent: "${data.name}", "${data.email}"`);
    setMessage("Form sent successfully");
    setTimeout(() => {
      setData({ ...initialValue });
      navigate("/")
    }, 2000);
    localStorage.setItem("formData", JSON.stringify(data));
  };

  return (
    <>
      <h3>For more information complete the form below:</h3>
      <div className="form">
        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputChange}
            name="name"
            value={data.name}
          />
          <br />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={inputChange}
            name="email"
            value={data.email}
          />
          <input
            type="tel"
            placeholder="Enter a phone number"
            onChange={inputChange}
            name="phone"
            value={data.phone}
          />
          <br />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter a message..."
            onChange={inputChange}
            value={data.message}
          ></textarea>
          <br />
          <button type="submit" disabled={btnDisabled}>
            Send
          </button>
          <br />
          {message}
        </form>
      </div>
    </>
  );
};

export default Form;
