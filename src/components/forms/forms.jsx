import React, { useState } from "react";

function Formss() {
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formData.fullname || !formData.email || !formData.password) {
      setIsValid(false);
      return;
    }
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      fullname: "",
      email: "",
      password: "",
      gender: "",
      terms: {
        terms: false,
        policy: false,
        news: false,
      },
    });
    setIsValid(true);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
    console.log("Form submitted!");
  };

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    terms: {
      terms: false,
      policy: false,
      news: false,
    },
  });

  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    // setFormData({
    //     fullname: event.target.name=="fullname" ? event.target.value: formData.fullname,
    //     email: event.target.name =="email"?event.target.value:formData.email,
    // })
    const { name, value } = event.target;
    if (name === "email") {
      if (value.includes("@") && value.includes(".")) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }else if (name === "fullname") {
      if (value.trim() === "") {
        setIsValid(false);  
      } else {
        setIsValid(true);
      }
    } else if (name === "password") {
      if (value.length < 6) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      terms: {
        ...prev.terms,
        [name]: checked,
      },
    }));
  };

  const handleGender = (event) => {
    const { value } = event.target;
    setFormData((prev) => ({
      ...prev,
      gender: value,
    }));
  };
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <br />
        <input
          type="text"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        {!isValid && <p style={{ color: "red" }}>Name is required.</p>}

        <br />
        <br />
        <label>Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {!isValid && <p style={{ color: "red" }}>Email is required.</p>}
        <br />
        <br />
        <label>Create Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {!isValid && <p style={{ color: "red" }}>Pass is required.</p>}

        <br />
        <br />
        <label>Gender</label>
        <br />
        <input
          type="radio"
          name="genders"
          value="male"
          checked={formData.gender === "male"}
          onChange={handleGender}
        />{" "}
        Male
        <input
          type="radio"
          name="genders"
          value="female"
          checked={formData.gender === "female"}
          onChange={handleGender}
        />{" "}
        Female
        <input
          type="radio"
          name="genders"
          value="other"
          checked={formData.gender === "other"}
          onChange={handleGender}
        />{" "}
        Other
        <br />
        <br />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms.terms}
          onChange={handleCheckBoxChange}
        />
        <label>I agree to the terms and conditions</label>
        {formData.terms.terms && (
          <p style={{ color: "green" }}>
            You have agreed to the terms and conditions.
          </p>
        )}
        <br />
        <input
          type="checkbox"
          name="policy"
          checked={formData.terms.policy}
          onChange={handleCheckBoxChange}
        />
        <label>I agree to the Company policy</label>
        <br />
        <input
          type="checkbox"
          name="news"
          checked={formData.terms.news}
          onChange={handleCheckBoxChange}
        />
        <label>I agree to Newsletter</label>
        <br />
        <br />
        <button type="submit">Register</button>
        {isSubmitted && <p>Form submitted successfully!</p>}
      </form>
    </>
  );
}

export default Formss;
