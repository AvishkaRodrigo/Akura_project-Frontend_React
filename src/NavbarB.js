import  {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap';
import './css/main.css';
import './css/navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import avatar from './assets/Avatars/Instructor.png';
import LogoB from './assets/Logo/Logo-B1.png';
// import Link from 'react-dom'
import { Icon } from '@iconify/react';
// import {Link} from 'react-router-dom';


const instructornavitems  = [
  {            
    "name" : "Home",
    "icon" : <Icon icon='ant-design:home-outlined' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "inshome"
  },
  {
    "name" : "Student",
    "icon" : <Icon icon='ph:student' color= '#1D1D1D' width='30' height='30' className='me-2'/>,
    "link" : "insstudent"
  },
  {
    "name" : "Earning",
    "icon" : <Icon icon='fluent:wallet-credit-card-16-regular' color= '#1D1D1D' width='25' height='25' className='me-2'/>,  
    "link" : "insearning"
  },
  {
    "name" : "Logout",
    "icon" : <Icon icon='eva:power-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "logout"
  }
];

const studentnavitems  = [
  {            
    "name" : "Home",
    "icon" : <Icon icon='ant-design:home-outlined' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "stuhome"
  },
  {
    "name" : "Notification",
    "icon" : <Icon icon='clarity:notification-line' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "stunotification"
  },
  {
    "name" : "Logout",
    "icon" : <Icon icon='eva:power-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "logout"
  }
];
const parentnavitems  = [
  {            
    "name" : "Home",
    "icon" : <Icon icon='ant-design:home-outlined' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "parhome"
  },
  {
    "name" : "Notification",
    "icon" : <Icon icon='clarity:notification-line' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "parnotification"
  },
  {
    "name" : "Logout",
    "icon" : <Icon icon='eva:power-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "logout"
  }
];

const staffnavitems  = [
  {            
    "name" : "Home",
    "icon" : <Icon icon='ant-design:home-outlined' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "staffhome"
  },
  {
    "name" : "Student",
    "icon" : <Icon icon='ph:student' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "staffstudent"
  },
  {
    "name" : "Instructor",
    "icon" : <Icon icon='ph:chalkboard-teacher' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "staffinstructor"
  },
  {
    "name" : "Logout",
    "icon" : <Icon icon='eva:power-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "logout"
  }
];

const adminnavitems  = [
  {            
    "name" : "Staff",
    "icon" : <Icon icon='healthicons:construction-worker-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "admstaff"
  },
  {
    "name" : "Student",
    "icon" : <Icon icon='ph:student' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "admstudent"
  },
  {
    "name" : "Instructor",
    "icon" : <Icon icon='ph:chalkboard-teacher' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" :  "adminstructor"
  },
  {
    "name" : "Logout",
    "icon" : <Icon icon='eva:power-outline' color= '#1D1D1D' width='25' height='25' className='me-2'/>,
    "link" : "logout"
  }
];

let userType;
let userType_NavBar;

userType = 'Instructor';

  if(userType === 'Instructor'){
    userType_NavBar = instructornavitems
  }else if(userType === 'Admin'){
    userType_NavBar = adminnavitems
  }else if(userType === 'Staff'){
    userType_NavBar = staffnavitems
  }else if(userType === 'Parent'){
    userType_NavBar = parentnavitems
  }else if(userType === 'Student'){
    userType_NavBar = studentnavitems
  }


const NavbarB = () => {
  return (
    <div className="">
      
      <Navbar expand={'lg'} className="navbar" fixed="bottom" >
        <Container fluid>
          
          <img src={LogoB} alt="logo" className='logo  me-4'/>
          <Navbar.Brand href="#"><img src={avatar} className="avatar" alt="avatar" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-around flex-grow-1 pe-3">
                
                {userType_NavBar.map(navitem => (
                  
                  <Nav.Link href={navitem.link} className='' key={navitem.link}><div className='fs-5 text-dark nav-item'>{navitem.icon}{navitem.name}</div></Nav.Link>
                  
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    
      

    </div>
  );
}
  
export default NavbarB;