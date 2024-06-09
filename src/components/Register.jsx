import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  Button,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import axios from "axios";

export default function Register() {
  const errorMessages = {
    email: "Please enter a valid email",
    password: "Please enter a valid password",
    terms: `Please check the "Terms & Conditions" button in order to Login`,
  };

  const initialForm = {
    email: "",
    password: "",
    terms: false,
  };

  const errorInfo = {
    name: false,
    password: false,
    terms: false,
  };

  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [formErrors, setFormErrors] = useState(errorInfo);

  function validateEmail(email) {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar =
      /[\!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\;\:\'\"\\\|\,\.\/\<\>\?]/;

    if (
      password.length >= minLength &&
      hasUpperCase.test(password) &&
      hasNumber.test(password) &&
      hasSpecialChar.test(password)
    ) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    if (validateEmail(form.email) && validatePassword(form.password) && terms) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  function handleChange(event) {
    let { name, type, value, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: value });

    if (name === "email") {
      if (validateEmail(value)) {
        setFormErrors({ ...formErrors, [name]: false });
      } else {
        setFormErrors({ ...formErrors, [name]: true });
      }
    }
    if (name === "password") {
      if (validatePassword(value)) {
        setFormErrors({ ...formErrors, [name]: false });
      } else {
        setFormErrors({ ...formErrors, [name]: true });
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          id="email"
          name="email"
          placeholder="Enter your email"
          type="email"
          value={form.email}
          onChange={handleChange}
          invalid={errorInfo.email}
        />
        {errorInfo.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          id="password"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
        />
      </FormGroup>
      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          type="checkbox"
          onChange={handleChange}
        />{" "}
        <Label check>Agree to the terms and conditions</Label>
      </FormGroup>
      <Button color="primary" onClick={handleSubmit} disabled={!isValid}>
        Login
      </Button>
    </Form>
  );
}
