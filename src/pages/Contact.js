import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = () => {

  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmissionStatus("");

    emailjs
      .sendForm("react_contact_detail", "react_contact_form", form.current, {
        publicKey: "omhVVAtPWRIAl3pXc",
      })
      .then(
        () => {
          setSubmissionStatus("Message Sent Successfully!");
          console.log("SUCCESS!");
        },
        (error) => {
          setSubmissionStatus("FAILED...", error.text);
        }
        
      );
      e.target.reset();
  };
  return (
    <>
    <section id="contact">
      <div className="container-fluid">
        <div className="row ">
          <div className="col-lg-3 col-md-12 col-sm-12  mt-5">
            <h1>
              LETS CONTACT ME HERE <br />
              FOR ANY QUERY
            </h1>
          </div>
          <div className="col-9 mt-5">
            <Form ref={form} onSubmit={sendEmail} >
            {submissionStatus && <p>{submissionStatus}</p>}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                required
                  type="text"
                  placeholder="Enter Name Here"
                  name="form_name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                <Form.Control
                required
                aria-describedby="emailHelp"
                  type="email"
                  placeholder="Enter Email Here"
                  name="form_email"
                />
                <Form.Control.Feedback type="invalid">
              Please write email.
            </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicmsg">
                <Form.Label>Message</Form.Label>
                <Form.Control
                required
                  as="textarea"
                  placeholder="Typing...."
                  name="message"
                />
                <Form.Control.Feedback type="invalid">
              Please write amessage.
            </Form.Control.Feedback>
                <Form.Text className="text">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>
              <Button className="mb-4" variant="primary" type="submit" value="send">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
