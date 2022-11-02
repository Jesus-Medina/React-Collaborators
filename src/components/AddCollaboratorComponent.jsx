import React, { useState } from "react"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Collapse } from "react-bootstrap"
import "../stylesheet/AddCollaborators.css"



function AddCollaboratorComponent({ nameRef, emailRef, open, setOpen, newCollaborator }) {

  const [iconState, setIconState] = useState(false)
  const [icon, setIcon] = useState("https://img.icons8.com/ios-filled/40/FFFFFF/plus-key.png")

  function cambiarIcono(e) {
    if (iconState) {
      setIcon("https://img.icons8.com/ios-filled/40/FFFFFF/plus-key.png")
      setIconState(false)
    } else {
      setIcon("https://img.icons8.com/ios-filled/40/FFFFFF/minus-key.png")
      setIconState(true)
    }
  }

  return (
    <div className="add_container">
      <Button
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="dark"
        className="px-4 py-2 mt-4 h5"
        value={true}
        onClick={(e) => {
          setOpen(!open)
          cambiarIcono(e)
        }
        }>
        Add a new Collaborator
        <img
          src={icon}
          alt="add collaborator icon"
          className="ms-3"
        />
      </Button>

      <Collapse in={open}>
        <Form className="form_container text-white" onSubmit={newCollaborator}>
          <img
            className="py-4"
            src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FFFFFF/external-database-web-security-flatart-icons-solid-flatarticons.png"
            alt="login icon"
          />
          <h3 className="mb-3">New Collaborator</h3>
          <Form.Group className="mb-3 px-4" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />
          </Form.Group>

          <Form.Group className="mb-3 px-4" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
          </Form.Group>
          <Button className="mb-4 mt-3 px-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Collapse>

    </div>
  )
}

export default AddCollaboratorComponent