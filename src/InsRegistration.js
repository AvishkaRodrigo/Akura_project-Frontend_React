import { useFormik } from 'formik';
import * as yup from 'yup'; 
import axios from "axios";
import {Form, Col,InputGroup, Button, Row, OverlayTrigger, Popover} from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/main.css';
import './css/registrationform.css';
import 'bootstrap/dist/css/bootstrap.css';


const InsRegistration = () => {

  const formik = useFormik({
    initialValues :{
      insfname: '',
      inslname: '',
      inssubject: '',
      inscontact: '',
      insgender: '',
      insemail: '',
      insnic: '',
      insaccountno: '',
      // inspassword: '',
    },
    validationSchema : yup.object({
      
      insfname: yup.string()
      .matches(/^(?=.*[a-zA-Z])(?=.{2,20})/,"Name can be only consist with letters")
      .min(2, "Name is too short")
      .max(20, "Name is too long!")
      .required("Required!"),
      
      inslname: yup.string()
      .matches(/^(?=.*[a-zA-Z])(?=.{2,20})/,"Name can be only consist with letters")
      .min(2, "Name is too short")
      .max(20, "Name is too long!")
      .required("Required!"),
      
      inssubject:yup.string()
      .matches(/^(?=.*[a-zA-Z])(?=.{2,20})/,"Subject can be only consist with letters")
      .max(20, "Subject name is too long!")
      .required("Required"),
      
      inscontact: yup.string()
      .min(9, "Invalid Number")
      .max(9, "invaid Number")
      .required("Required!"),
      
      insgender: yup.string()
      .required("Select your gender!"),
      
      insemail: yup.string()
      .matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email")
      .required("Required!"),
      
      
      insaccountno: yup.string()
      .matches(/^(?=.*[a-zA-Z0-9])(?=.{4,20})/,"Account number has only letters and numbers")
      .min(4, "Account number is too short")
      .max(20, "Account number is too long!")
      .required("Required!"),
      
      insnic: yup.string()
      .matches(/^[0-9]{12,12}|[0-9]{9}[X,V]{1}/,"NIC number is not valid!")
      .min(10, "NIC number is too short")
      .max(12, "NIC number is too long!")
      .required("Required!"),
      
      // inspassword: yup.string()
      // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,"Password is not Strong!")
      // .required("Required!"),

      // insconfirmpassword: yup.string()
      // .oneOf([yup.ref('inspassword'),null], "Password missmatch")
      // .required("Required!"),
    }),
    onSubmit : values =>{
      const insfname = values.insfname;
      const inslname =values.inslname;
      const inssubject =values.inssubject;
      const inscontact = values.inscontact;
      const insemail = values.insemail;
      const insgender = values.insgender;
      const insnic = values.insnic;
      const insaccountno = values.insaccountno;
      // const inspassword = values.inspassword;

      const newInstructor = {
        insfname,
        inslname,
        inssubject,
        inscontact,
        insemail,
        insgender,
        insnic,
        insaccountno,
        // inspassword,
      }
      
      axios.post("http://localhost:5000/instructor/addInstructor", newInstructor).then(()=> {
          // window.location.assign('/Instructors');
          alert("Added Instructor Data!");
      }).catch((err)=> {
          alert(err);
          alert("Cannot Add Instructor Data!");
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
        <h1 className="display-6">Instructor Registration</h1> 

          <Row className="pt-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stufname" className='input-field'>First Name</InputGroup.Text>
                  <input
                  type="text"
                  name="insfname"
                  value={formik.values.insfname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.insfname && formik.errors.insfname ? (
                  <div className=''>{formik.errors.insfname}</div>
                ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik02" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="inslname" className='input-field'>Last Name</InputGroup.Text>
                  <input
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="inslname"
                  value={formik.values.inslname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.inslname && formik.errors.inslname ? (
                  <div className=''>{formik.errors.inslname}</div>
                ) : null}
              </div> 
            </Form.Group>            
          </Row>
          
          
          <Row>
            <Form.Group as={Col} md="6" controlId="validationFormik025" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="inssubject" className='input-field'>Subject</InputGroup.Text>
                  <input
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="inssubject"
                  value={formik.values.inssubject}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
                </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.inssubject && formik.errors.inssubject ? (
                  <div className=''>{formik.errors.inssubject}</div>
                ) : null}
              </div>  
            </Form.Group>
            
            <Form.Group as={Col} md="6" controlId="validationFormik03" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="inscontact" className='input-field'>Contact Number</InputGroup.Text>
                  <input
                  type="number"
                  aria-describedby="inputGroupPrepend"
                  name="inscontact"
                  value={formik.values.inscontact}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
                </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.inscontact && formik.errors.inscontact ? (
                  <div className=''>{formik.errors.inscontact}</div>
                ) : null}
              </div>  
            </Form.Group>
          </Row>
          
          <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik04" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="insemail" className='input-field'>Email</InputGroup.Text>
                  <input
                    type="text"
                    name="insemail"
                    value={formik.values.insemail}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                    {formik.touched.insemail && formik.errors.insemail ? (
                      <div className=''>{formik.errors.insemail}</div>
                    ) : null}
              </div> 
            </Form.Group>
            
            <Form.Group as={Col} md="6" controlId="validationFormik05" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="insgender" className='input-field'>Gender</InputGroup.Text>
                  <div className="ps-4 pt-2 radiogender col d-flex justify-content-evenly">
                    <div className="">
                    <Form.Check
                      inline
                      label="Male"
                      name="insgender"
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
                    name="insgender"
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
                    {formik.touched.insgender && formik.errors.insgender ? (
                      <div className=''>{formik.errors.insgender}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row>


          <Row className>
            <Form.Group as={Col} md="6" controlId="validationFormik06" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="stufname" className='input-field'>Account Number</InputGroup.Text>
                  <input
                  type="text"
                  name="insaccountno"
                  value={formik.values.insaccountno}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.insaccountno && formik.errors.insaccountno ? (
                  <div className=''>{formik.errors.insaccountno}</div>
                ) : null}
              </div> 
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormik07" className="mb-3">
              <InputGroup hasValidation>
                <InputGroup.Text id="insnic" className='input-field'>NIC Number</InputGroup.Text>
                  <input
                  type="text"
                  aria-describedby="inputGroupPrepend"
                  name="insnic"
                  value={formik.values.insnic}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className='custombg form-control'
                  />
              </InputGroup>
              <div className='invalid-warning'>
                {formik.touched.insnic && formik.errors.insnic ? (
                  <div className=''>{formik.errors.insnic}</div>
                ) : null}
              </div> 
            </Form.Group>            
          </Row>

          {/* <Row >
            <Form.Group as={Col} md="6" controlId="validationFormik06" className="mb-3">
            <InputGroup hasValidation>
                <InputGroup.Text id="inspassword" className='input-field'>Password</InputGroup.Text>
                  <input
                    type="password"
                    name="inspassword"
                    value={formik.values.inspassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.inspassword && formik.errors.inspassword ? (
                      <div className=''>{formik.errors.inspassword}
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
                <InputGroup.Text id="inspassword" className='input-field'>Confirm Password</InputGroup.Text>
                  <input
                    type="password"
                    name="insconfirmpassword"
                    value={formik.values.insconfirmpassword}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className='custombg form-control'
                  />
                </InputGroup>
                <div className='invalid-warning'>
                    {formik.touched.insconfirmpassword && formik.errors.insconfirmpassword ? (
                      <div className=''>{formik.errors.insconfirmpassword}</div>
                    ) : null}
              </div> 
            </Form.Group>
          </Row> */}

          <hr/>

          <div className="d-flex justify-content-center">
            <Button type="submit" className='btn-1 text-dark'>Submit form</Button>
          </div>

        </Form>
        </div>
     );
}
 
export default InsRegistration;