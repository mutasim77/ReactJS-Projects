import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand href="/">React-Practice</Navbar.Brand>
                <Navbar id="basic-navbar-nav">
                    <Nav className="me-auto d-flex gap-3 justify-content-between">
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to='/slider'>Slider</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to='/react-memo'>React Memo</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to='/reducer-hook'>Reducer Hook</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to='/counter'>Counter</NavLink>
                        <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : '' })} to='/formik'>Formik</NavLink>
                    </Nav>
                </Navbar>
            </Container>
        </Navbar >
    );
}

export default Header;