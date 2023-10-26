import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min';
import {
  Row, Col, Button
} from 'reactstrap';

const { ExportCSVButton } = CSVExport;
function Roles() {

  const products = [
    {name: 'George',  id: 1},
    {name: 'Jeffrey',  id: 2},
    {name: 'Alice',  id: 3},
    {name: 'Foster',  id: 4},
    {name: 'Trac',  id: 5},
    {name: 'Joesp',  id: 6},
    {name: 'Tani',  id: 7},
    {name: 'Chelsea',  id: 8},
    {name: 'Benedict',  id: 9},
    {name: 'Chad',  id: 10},
    {name: 'Delphin',  id: 11},
    {name: 'Elinor',  id: 12},
    {name: 'Stokes',  id: 13},
    {name: 'Tamar',  id: 14},
    {name: 'Zacke',  id: 15} 
  ];

  const columns = [
    { dataField: 'name', text: 'Name', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    classes: 'selection-row',
  };

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log({ row, rowIndex });
    }
  };

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
        <Col lg="5"><h5>Roles List</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Lists all the roles that define access to the system
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
            exportCSV
          >
            {
              props => (
                <div>
                  <div className='text-end'>
                    <div className='prop-text'>Properties</div>
                    <ExportCSVButton { ...props.csvProps }>Export CSV!!</ExportCSVButton>
                    <SearchBar {...props.searchProps} className="custome-search-field"
                      srText ="" />
                    <ClearSearchButton {...props.searchProps} />
                    <Button className='add-btn' size="md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add
                    </Button>{' '}
                  </div>
                  
                  <div className='py-1'></div>
                  <div>
                    <BootstrapTable
                    keyField='id'
                      defaultSorted={defaultSorted}
                      pagination={pagination}
                      {...props.baseProps}
                      selectRow={ selectRow }
                      rowEvents={rowEvents}
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

export default Roles;