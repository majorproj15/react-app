import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {
  Row, Col
} from 'reactstrap';


function Dashboard() {

  const products = [
    {name: 'George',  value: 1},
    {name: 'Jeffrey', value: 2},
    {name: 'Alice', value: 3},
    {name: 'Foster',  value: 4},
    {name: 'Tracy', value: 5},
    {name: 'Joesph',  value: 6},
    {name: 'Tania', value: 7},
    {name: 'Chelsea', value: 8},
    {name: 'Benedict',  value: 9},
    {name: 'Chadd',  value: 10},
    {name: 'Delphine',  value: 11},
    {name: 'Elinore',  value: 12},
    {name: 'Stokes',   value: 13},
    {name: 'Tamara',   value: 14},
    {name: 'Zackery',  value: 15 }
  ];

  const columns = [
    { dataField: 'name', text: 'Name', sort: true, width: "10" },
    { dataField: 'value', text: 'Value', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 2,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;
  

  return (

    <div className='px-3 py-3'>
      <Row className=''>
        <Col lg="5"><h5>IVR Administrative Console</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Active pre-production
        </Col>
      </Row>
    
      <Row className='py-3'>
        <Col>
          
          <ToolkitProvider
            bootstrap4
            keyField='id'
            data={products}
            columns={columns}
            search
          >
            {
              props => (
                <div>
                  <div className='text-end'>
                    <div className='prop-text'>Properties</div>
                    <SearchBar {...props.searchProps} className="custome-search-field"
                      srText ="" />
                    <ClearSearchButton {...props.searchProps} />
                  </div>
                  
                  <div className='py-1'></div>
                  <div>
                    <BootstrapTable
                      defaultSorted={defaultSorted}
                      pagination={pagination}
                      {...props.baseProps}
                    />
                  </div>
                </div>
              )
            }
          </ToolkitProvider>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;