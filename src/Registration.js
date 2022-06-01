import {Form, Col,InputGroup, Button, Row, OverlayTrigger, Popover} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import * as yup from 'yup'; 

import './css/main.css';
import './css/registrationform.css';
import 'bootstrap/dist/css/bootstrap.css';

const Registration = () => {
  
   
    // const { Formik } = formik;
const formik = useFormik({
  initialValues :{
    stufname: '',
    stulname: '',
    stucontact: '',
    stugender: '',
    stuemail: '',
    stupassword: '',
    stuconfirmpassword: '',
  },
  validationSchema : yup.object({
      
      stufname: yup.string()
      // .matches(/^(?=.*[a-zA-Z])(?=.{2,10})/,"Password")
      .min(2, "Name too short")
      .max(10, "Name too long!")
      .required("Required!"),
      
      stulname: yup.string()
      .min(2, "Name too short")
      .max(10, "Name too long!")
      .required("Required!"),
      
      stucontact: yup.string()
      .min(9, "Invalid Number")
      .max(9, "invaid Number")
      .required("Required!"),
      
      stugender: yup.string()
      // .matches("Male"||"Female","Select your gender")
      .required("Select your gender!"),
      
      stuemail: yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email")
      .required("Required!"),
      
      stupassword: yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,"Password is not Strong!")
      .required("Required!"),

      stuconfirmpassword: yup.string()
      .oneOf([yup.ref('stupassword'),null], "Password missmatch")
      .required("Required!"),
      

      
      terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    }),
    onSubmit : values =>{
      // console.log
    },
  });

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3" className='custombgdark'>Strong Password</Popover.Header>
      <Popover.Body className="custombg">
      Password must contain <strong>8 to 20 characters</strong> with an <strong>uppercase letter</strong>, a <strong>lowercase</strong> letter, a <strong>special</strong> character & a number
      </Popover.Body>
    </Popover>
  );

  
// function test () {
  
//   if (!formik.errors.stufname){
//     document.getElementByID('stuFname').style.color = "red";
//     // stuFname.style
//   }
// };

// test();
   
    return ( 
        <div className="registration mx-5">
            
        <Form noValidate onSubmit={formik.handleSubmit}>
            
           
          <Row className="pt-3">
          <Form.Group as={Col} md="6" controlId="validationFormik01" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stufname" className='input-field'>First Name</InputGroup.Text>
                  <input
                  type="text"
                  name="stufname"
                  value={formik.values.stufname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // isValid={formik.touched.stufname && !formik.errors.stufname}
                  // isinvalid={!!formik.errors.stufname }
                  className='custombg form-control stuFname'
                  />
                  {/* <Form.Control.Feedback type="invalid"> */}
                  {/* </Form.Control.Feedback> */}
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.stufname && formik.errors.stufname ? (
                      <div className=''>{formik.errors.stufname}</div>
                    ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik02" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stulname" className='input-field'>Last Name</InputGroup.Text>
                  <input
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="stulname"
                  value={formik.values.stulname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // isValid={!formik.errors.stulname}
                  // isinvalid={!!formik.errors.stulname}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.stulname && formik.errors.stulname ? (
                      <div className=''>{formik.errors.stulname}</div>
                    ) : null}
              </div> 
            </Form.Group>            
          </Row>
          
          
          <Row>
            <Form.Group as={Col} md="6" controlId="validationFormik03" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stucontact" className='input-field'>Contact Number</InputGroup.Text>
                  <input
                  type="number"
                  // placeholder="Contact Number"
                  aria-describedby="inputGroupPrepend"
                  name="stucontact"
                  value={formik.values.stucontact}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // isinvalid={!!formik.errors.stucontact}
                  className='custombg form-control'
                  />
              {/* {/* <input.Feedback type="invalid">{formik.errors.stucontact}</input.Feedback> */} 
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.stucontact && formik.errors.stucontact ? (
                      <div className=''>{formik.errors.stucontact}</div>
                    ) : null}
              </div>  
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik04" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stuemail" className='input-field'>Email</InputGroup.Text>
                  <input
                    type="text"
                    name="stuemail"
                    value={formik.values.stuemail}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // isinvalid={!!formik.errors.stuemail}
                    className='custombg form-control'
                  />
              {/* {/* <input.Feedback type="invalid">{formik.errors.stuemail}</input.Feedback> */} 
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.stuemail && formik.errors.stuemail ? (
                      <div className=''>{formik.errors.stuemail}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>
          
          {/* <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik05" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stugender" className='input-field'>Gender</InputGroup.Text>
                  <input
                  type="select"
                  aria-label="Default select example" 
                  name="stugender"
                  value={formik.values.stugender}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  // isinvalid={!!formik.errors.stugender}
                  className='custombg form-control' 
                  >
                    <option></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </Form.Select>
               <input.Feedback type="invalid">{formik.errors.stugender}</input.Feedback>  
                </InputGroup>
            </Form.Group>
          </Row> */}


          <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik06" className="mb-3">
            <InputGroup hasValidation>
                <InputGroup.Text id="stupassword" className='input-field'>Password</InputGroup.Text>
                  <input
                    type="password"
                    name="stupassword"
                    value={formik.values.stupassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // isinvalid={!!formik.errors.stupassword}
                    className='custombg form-control'
                  />
                  {/* {/* <input.Feedback type="invalid">{formik.errors.stupassword}</input.Feedback> */} 
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.stupassword && formik.errors.stupassword ? (
                      <div className=''>{formik.errors.stupassword}
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
                <InputGroup.Text id="stupassword" className='input-field'>Confirm Password</InputGroup.Text>
                  <input
                    type="password"
                    name="stuconfirmpassword"
                    value={formik.values.stuconfirmpassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    // isinvalid={!!formik.errors.stuconfirmpassword}
                    className='custombg form-control'
                  />
                {/* {/* <input.Feedback type="invalid">{formik.errors.stuconfirmpassword}</input.Feedback> */} 
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.stuconfirmpassword && formik.errors.stuconfirmpassword ? (
                      <div className=''>{formik.errors.stuconfirmpassword}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>
  
          <div className="d-flex justify-content-center">
            <Button type="submit" className='btn-1'>Submit form</Button>
          </div>

        </Form>
      {/* )} */}
    {/* </Formik>  */}
            
        </div>
     );
}
 
export default Registration;