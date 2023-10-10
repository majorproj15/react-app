import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContentCard from './components/ContentCard';
import Header from './components/Header';
import LeftCard from './components/LeftCard';

const App = () => (
  <Fragment>
  
    <Header />
    
    <main className="main-container">
      <Container fluid className="px-0 h-100">
        <Row noGutters className="h-100">
        
          <Col xs={{ order: 2 }} md={{ size: 2, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0 h-100">
            <LeftCard />
          </Col>
          
          <Col xs={{ order: 1 }} md={{ size: 10, offset: 0 }} tag="section" className="py-5 mb-5 py-md-0 mb-md-0">
            <ContentCard />
          </Col>
          
        </Row>
      </Container>
    </main>
    
  </Fragment>
);

export default App;