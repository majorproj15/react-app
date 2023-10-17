import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter, Link, Route, Routes, Navigate  } from 'react-router-dom';

import Header from './components/Header';
import LeftCard from './components/LeftCard';

import Dashboard from './components/Dashboard/Dashboard';
import Configuration from './components/Configuration/Configuration';
import Properties from './components/Configuration/Properties/Properties';
import ANI from './components/Configuration/ANI/ANI';
import Values from './components/Values/Values';
import Administration from './components/Administration/Administration';
import Dnls from './components/Configuration/Dnls/Dnls';
import AreaCodeMapping from './components/Configuration/AreaCodeMapping/AreaCodeMapping';
import State from './components/Configuration/State/State';
import Region from './components/Configuration/Region/Region';
import WelcomeMessages from './components/Values/WelcomeMessages/WelcomeMessages';
import SpecificIntents from './components/Values/SpecificContents/SpecificContents';
import Bussinesstypes from './components/Values/BusinessTypes/BusinessTypes';
import Servers from './components/Values/Servers/Servers';
import UserList from './components/Administration/UserList/UserList';
import Roles from './components/Administration/Roles/Roles';
import Changes from './components/Administration/Changes/Changes';

const App = () => {
  
  let activeClassName = "nav-active";
  return (
  <Fragment>
  
    <Header />
    
    <main className="main-container">
      <Container fluid className="px-0 h-100">
        <Row noGutters className="h-100">
        
        <BrowserRouter>
          <Col xs={{ order: 2 }} md={{ size: 2, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0 h-100">
            <LeftCard />
          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 10, offset: 0 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
              
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="configuration" element={<Configuration/>}>
                  <Route index element={<Navigate to="properties" replace />} />
                  <Route path="properties" element={<Properties/>} />
                  <Route path="ANI" element={<ANI/>} />
                  <Route path="dnls" element={<Dnls/>} />
                  <Route path="areaCodeMapping" element={<AreaCodeMapping/>} />
                  <Route path="state" element={<State/>} />
                  <Route path="region" element={<Region/>} />
                </Route>
                <Route path="values" element={<Values/>} >
                  <Route index element={<Navigate to="welcomeMessages" replace />} />
                  <Route path="welcomeMessages" element={<WelcomeMessages/>} />
                  <Route path="specificIntents" element={<SpecificIntents/>} />
                  <Route path="bussinesstypes" element={<Bussinesstypes/>} />
                  <Route path="servers" element={<Servers/>} />
                </Route>
                <Route path="administration" element={<Administration/>} >
                  <Route index element={<Navigate to="userList" replace />} />
                  <Route path="userList" element={<UserList/>} />
                  <Route path="roles" element={<Roles/>} />
                  <Route path="changes" element={<Changes/>} />
                </Route>
                {/* <Route path="*" element={<Error/>} /> */}
              </Routes>
              
          </Col>
          
          </BrowserRouter>
        </Row>
      </Container>
    </main>
    
  </Fragment>
  )
  };

export default App;