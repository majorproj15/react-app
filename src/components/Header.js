import React from 'react';
import nuance from '../nuance-white.png'

import {
  Container, Row, Col
} from 'reactstrap';

const Header = () => (
  <header>
    
      <Container fluid className="bg-gray">

        <Row className='px-1 py-3'>
          <Col>
            <img src={nuance} alt="logo" className="logo-img" />

            <div className='float-end d-flex'>
              <p className='pre-prod'>Pre Production</p>
              <ul className="navbar-nav px-3">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown">Hi, Venkat</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link</a></li>
                    <li><a className="dropdown-item" href="#">2nd link</a></li>
                    <li><a className="dropdown-item" href="#">third link</a></li>
                  </ul>
                </li>
              </ul>
            </div>           
          </Col>

        </Row>
        
      </Container>
  </header>
);

export default Header;