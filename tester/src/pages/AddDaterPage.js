import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import PCAPI from '../api/PCAPI.js'
import { Redirect } from 'react-router'

class AddDaterPage extends Component {
  state = {
    redirect: false
  }
  
  handleSubmit(event){
    event.preventDefault()
    const daterObject = {
      gender: event.target.elements[0].value,
      interested_in: event.target.elements[1].value,
      astrological_sign: event.target.elements[2].value,
      age: event.target.elements[3].value,
      height: event.target.elements[4].value,
      dater_name: event.target.elements[5].value,
      dater_email_address: event.target.elements[6].value,
      dater_telephone: event.target.elements[7].value,
      address_line_1: event.target.elements[8].value,
      address_line_2: event.target.elements[9].value,
      city: event.target.elements[10].value,
      state: event.target.elements[11].value,
      zip: event.target.elements[12].value,
      ethnicity: event.target.elements[13].value,
      body_type: event.target.elements[14].value,
      looking_for: event.target.elements[15].value,
      has_children: event.target.elements[16].value,
      has_children_no: event.target.elements[17].value,
      education: event.target.elements[18].value,
      religion: event.target.elements[19].value,
      smokes: event.target.elements[20].value,
      smokes_vape: event.target.elements[21].value,
      dater_story: event.target.elements[22].value,
      dater_photo: event.target.elements[23].value,
      pet_photo: event.target.elements[24].value,
      pet_name: event.target.elements[25].value,
      pet_breed: event.target.elements[26].value,
      pet_color: event.target.elements[27].value,
      pet_age: event.target.elements[28].value,
      pet_story: event.target.elements[29].value,
    }
    PCAPI.addDater(daterObject)
      .then((response) => { this.setState({ redirect: true }) })
  }

  render() {
    const { redirect } = this.state
    if (redirect) {
      return <Redirect to = "/" />
    }
    
    return (
      <div>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="gender">
            <Form.Label>Dater Gender</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="interested_in">
            <Form.Label>Dater Gender Interest</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="astrological_sign">
            <Form.Label>Dater Astrological Sign</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="age">
            <Form.Label>Dater Age</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="height">
            <Form.Label>Dater Height</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="dater_name">
            <Form.Label>Dater Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="dater_email_address">
            <Form.Label>Dater Email Address</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="dater_telephone">
            <Form.Label>Dater Telephone</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="address_line_1">
            <Form.Label>Dater Address</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="address_line_2">
            <Form.Label>Dater Address</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="city">
            <Form.Label>Dater City</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="state">
            <Form.Label>Dater State</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="zip">
            <Form.Label>Dater Zip</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="ethnicity">
            <Form.Label>Dater Ethnicity</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="body_type">
            <Form.Label>Dater Body Type</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="looking_for">
            <Form.Label>Dater Type of Relationship Sought</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="has_children">
            <Form.Label>Dater Has Children</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="has_children_no">
            <Form.Label>Dater Number of Children</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="education">
            <Form.Label>Dater Education</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="religion">
            <Form.Label>Dater Religion</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="smokes">
            <Form.Label>Dater Smokes</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="smokes_vape">
            <Form.Label>Dater Smokes Vape</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="dater_story">
            <Form.Label>Dater Story</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="dater_photo">
            <Form.Label>Dater Photo</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_photo">
            <Form.Label>Pet Photo</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_name">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_breed">
            <Form.Label>Pet Breed</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_color">
            <Form.Label>Pet Color</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_age">
            <Form.Label>Pet Age</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="pet_story">
            <Form.Label>Pet Story</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}


export default AddDaterPage
