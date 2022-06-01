import { useFormik } from 'formik';
import * as yup from 'yup'; 
import axios from "axios";
import {Form, Col,InputGroup, Button, Row, OverlayTrigger, Popover} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/main.css';
import './css/registrationform.css';
import 'bootstrap/dist/css/bootstrap.css';


const Registration = () => {

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
      .matches(/^(?=.*[a-zA-Z])(?=.{2,10})/,"Password")
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
      .matches("Male"||"Female","Select your gender")
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
      
    }),
    onSubmit : values =>{
      const stufname = values.stufname;
      const stulname =values.stulname;
      const stuemail = values.stuemail;
      const stucontact = values.stucontact;
      const stugender = values.stugender;
      const stupassword1 = values.stupassword;
      const stupassword2 = values.stuconfirmpassword;

      const newStudent = {
        stufname,
        stulname,
        stuemail,
        stucontact,
        stugender,
        stupassword1,
        stupassword2,
      }
      
      axios.post("http://localhost:5000/student/addStudent", newStudent).then(()=> {
          window.location.assign('/Instructors');
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
        <h1 className="display-6">Student Registration</h1>  
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
                  className='custombg form-control stuFname'
                  />
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
                  aria-describedby="inputGroupPrepend"
                  name="stucontact"
                  value={formik.values.stucontact}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
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
                    className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.stuemail && formik.errors.stuemail ? (
                      <div className=''>{formik.errors.stuemail}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>
          
          <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik05" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stugender" className='input-field'>Gender</InputGroup.Text>
                  <div className="ps-4 pt-2 radiogender col d-flex justify-content-evenly">
                    <div className="">
                    <Form.Check
                      inline
                      label="Male"
                      name="stugender"
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
                    name="stugender"
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
                    {formik.touched.stugender && formik.errors.stugender ? (
                      <div className=''>{formik.errors.stugender}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>


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

          <hr/>

          <div className="d-flex justify-content-center">
            <Button type="submit" className='btn-1 text-dark'>Submit form</Button>
          </div>

        </Form>
      {/* )} */}
    {/* </Formik>  */}
            
        </div>
     );
}
 
export default Registration;