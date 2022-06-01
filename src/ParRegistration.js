import { useFormik } from 'formik';
import * as yup from 'yup'; 
import axios from "axios";
import {Form, Col,InputGroup, Button, Row, OverlayTrigger, Popover} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/main.css';
import './css/registrationform.css';
import 'bootstrap/dist/css/bootstrap.css';


const ParRegistration = () => {

  const formik = useFormik({
    initialValues :{
      parfname: '',
      parlname: '',
      parcontact: '',
      paraddress: '',
      pargender: '',
      paremail: '',
      parpassword: '',
      parconfirmpassword: '',
    },


    validationSchema : yup.object({
      
      parfname: yup.string()
      .matches(/^(?=.*[a-zA-Z])(?=.{2,20})/,"Name can be only consist with letters")
      .min(2, "Name too short")
      .max(20, "Name too long!")
      .required("Required!"),
      
      parlname: yup.string()
      .matches(/^(?=.*[a-zA-Z])(?=.{2,20})/,"Name can be only consist with letters")
      .min(2, "Name too short")
      .max(20, "Name too long!")
      .required("Required!"),
      
      parcontact: yup.string()
      .min(9, "Invalid Number")
      .max(9, "invaid Number")
      .required("Required!"),
      
      paraddress: yup.string()
      .min(3, "Address too short")
      .max(50, "Address too long"),

      pargender: yup.string()
      .required("Select your gender!"),
      
      paremail: yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email")
      .required("Required!"),
      
      parpassword: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,"Password is not Strong!")
      .required("Required!"),

      parconfirmpassword: yup.string()
      .oneOf([yup.ref('parpassword'),null], "Password missmatch")
      .required("Required!"),
    }),


    onSubmit : values =>{
      const parfname = values.parfname;
      const parlname =values.parlname;
      const paremail = values.paremail;
      const parcontact = values.parcontact;
      const paraddress = values.paraddress;
      const pargender = values.pargender;
      const parpassword1 = values.parpassword;
      const parpassword2 = values.parconfirmpassword;

      const newParent = {
        parfname,
        parlname,
        paremail,
        parcontact,
        paraddress,
        pargender,
        parpassword1,
        parpassword2,
      }
      
      axios.post("http://localhost:5000/parent/addParent", newParent).then(()=> {
          // window.location.assign('/Instructors');
          alert("Added Parent Data!");
      }).catch((err)=> {
          alert(err);
          alert("Cannot Add Parent Data!");
      })
    },
  });

  // strong password popover
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className='custombgdark'>Strong Password</Popover.Header>
      <Popover.Body className="custombg">
      Password must contain <strong>8 to 20 characters</strong> with an <strong>uppercase letter</strong>, a <strong>lowercase</strong> letter, a <strong>special</strong> character & a number
      </Popover.Body>
    </Popover>
  );
   
  return ( 
      <div className="registration pt-3 mx-5">

        <Form noValidate onSubmit={formik.handleSubmit}>
        <h1 className="display-6">Parent Registration</h1>  
          <Row className="pt-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="parfname" className='input-field'>First Name</InputGroup.Text>
                  <input
                  type="text"
                  name="parfname"
                  value={formik.values.parfname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.parfname && formik.errors.parfname ? (
                  <div className=''>{formik.errors.parfname}</div>
                ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik02" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="parlname" className='input-field'>Last Name</InputGroup.Text>
                  <input
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="parlname"
                  value={formik.values.parlname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.parlname && formik.errors.parlname ? (
                  <div className=''>{formik.errors.parlname}</div>
                ) : null}
              </div> 
            </Form.Group>            
          </Row>
          
          
          <Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="parcontact" className='input-field'>Contact Number</InputGroup.Text>
                  <input
                  type="number"
                  aria-describedby="inputGroupPrepend"
                  name="parcontact"
                  value={formik.values.parcontact}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
                </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.parcontact && formik.errors.parcontact ? (
                  <div className=''>{formik.errors.parcontact}</div>
                ) : null}
              </div>  
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik04" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="paremail" className='input-field'>Email</InputGroup.Text>
                  <input
                    type="text"
                    name="paremail"
                    value={formik.values.paremail}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.paremail && formik.errors.paremail ? (
                      <div className=''>{formik.errors.paremail}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>
          
          <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik01" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="paraddress" className='input-field'>Address</InputGroup.Text>
                  <input
                    type="text"
                    name="paraddress"
                    value={formik.values.paraddress}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
                </InputGroup>
              <div className='invalid-warning'>
                  {formik.touched.paraddress && formik.errors.paraddress ? (
                    <div className=''>{formik.errors.paraddress}</div>
                  ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik05" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="pargender" className='input-field'>Gender</InputGroup.Text>
                  <div className="ps-4 pt-2 radiogender col d-flex justify-content-evenly">
                    <div className="">
                    <Form.Check
                      inline
                      label="Male"
                      name="pargender"
                      value="Male"
                      type="radio"
                      id="inline-radio-1"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      />
                    </div>
                    <div className="">
                    <Form.Check
                    inline
                    label="Female"
                    name="pargender"
                    value="Female"
                    type="radio"
                    id="inline-radio-2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    </div>
                  </div>
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.pargender && formik.errors.pargender ? (
                      <div className=''>{formik.errors.pargender}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>


          <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik06" className="mb-3">
            <InputGroup hasValidation>
                <InputGroup.Text id="parpassword" className='input-field'>Password</InputGroup.Text>
                  <input
                    type="password"
                    name="parpassword"
                    value={formik.values.parpassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.parpassword && formik.errors.parpassword ? (
                      <div className=''>{formik.errors.parpassword}
                        <OverlayTrigger trigger="click" placement="bottom"  overlay={popover}>
                          <div className=''>
                            <span><Icon icon="eva:info-outline" color="#e5052e" width="20" height="20" />How to create strong Password <strong>Click here</strong></span>
                          </div>
                        </OverlayTrigger>
                      </div>
                    ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik07" className="mb-3">
            <InputGroup hasValidation>
                <InputGroup.Text id="parpassword" className='input-field'>Confirm Password</InputGroup.Text>
                  <input
                    type="password"
                    name="parconfirmpassword"
                    value={formik.values.parconfirmpassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.parconfirmpassword && formik.errors.parconfirmpassword ? (
                      <div className=''>{formik.errors.parconfirmpassword}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>

          <hr/>

          <div className="d-flex justify-content-center">
            <Button type="submit" className='btn-1 text-dark'>Submit form</Button>
          </div>

        </Form>
        </div>
     );
}
 
export default ParRegistration;