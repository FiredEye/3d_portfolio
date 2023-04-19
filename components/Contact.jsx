import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 720px) {
    justify-content: center;
    padding: 0px 10px;
  }
`;
const Title = styled.h1`
  font-weight: 500;
  @media only screen and (max-width: 720px) {
    text-align: center;
  }
`;

const Form = styled.form`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 720px) {
    justify-content: center;
    width: 100%;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
  outline: none;
`;

const Button = styled.button`
  font-weight: 500;
  padding: 20px;
  background-color: #da4ea2;
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #b63783;
  }
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

function Contact() {
  const ref = useRef();
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", ref.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setErr(false);
        },
        (error) => {
          console.log(error.text);
          setErr(true);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form
            ref={ref}
            onSubmit={handleSubmit}
            onFocus={() => {
              setErr(false);
              setSuccess(false);
            }}
          >
            <Title>Contact Us</Title>
            <Input type="text" placeholder="Name" name="name" />
            <Input type="email" placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your thoughts!!!"
              name="message"
              rows={10}
            ></TextArea>
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
            {err && "Something went wrong plese try again later :("}
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
}

export default Contact;
