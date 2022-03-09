import React from "react"
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useNavigate } from "react-router-dom"

type FormValues = {
    search:string
  };
export default function Headbar() {
  const { register, handleSubmit } = useForm<FormValues>()
  const navigate = useNavigate()
  const onSubmit:SubmitHandler <FormValues> = (data) => {
    navigate(`/search/${data.search}`)
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">EPI-MUSIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/favorites">
              <div className="nav-link">Favorites</div>
            </Link>
          </Nav>
          <Form onSubmit={handleSubmit(onSubmit)} inline>
            <FormControl
              type="text"
              
              {...register("search", { required: true })}
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
