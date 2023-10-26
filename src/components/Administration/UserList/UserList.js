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
function UserList() {

  const products = [
    {username: 'George', accountLocked: 'Monkey' ,  id: 1, role: 'test'},
    {username: 'Jeffrey', accountLocked: 'Giraffe' ,  id: 2, role: 'test'},
    {username: 'Alice', accountLocked: 'Giraffe' ,  id: 3, role: 'test'},
    {username: 'Foster', accountLocked: 'Tiger' ,  id: 4, role: 'test'},
    {username: 'Tracy', accountLocked: 'Bear' ,  id: 5, role: 'test'},
    {username: 'Joesph', accountLocked: 'Lion' ,  id: 6, role: 'test'},
    {username: 'Tania', accountLocked: 'Deer' ,  id: 7, role: 'test'},
    {username: 'Chelsea', accountLocked: 'Tiger' ,  id: 8, role: 'test'},
    {username: 'Benedict', accountLocked: 'Tiger' ,  id: 9, role: 'test'},
    {username: 'Chadd', accountLocked: 'Lion' ,  id: 10, role: 'test'},
    {username: 'Delphine', accountLocked: 'Deer' ,  id: 11, role: 'test'},
    {username: 'Elinore', accountLocked: 'Bear' ,  id: 12, role: 'test'},
    {username: 'Stokes', accountLocked: 'Tiger' ,  id: 13, role: 'test'},
    {username: 'Tamara', accountLocked: 'Lion' ,  id: 14, role: 'test'},
    {username: 'Zackery', accountLocked: 'Bear',  id: 15, role: 'test'}
  ];

  const columns = [
    { dataField: 'username', text: 'User Name', sort: true },
    { dataField: 'accountLocked', text: 'Account Locked', sort: true },
    { dataField: 'role', text: 'Role', sort: true }
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
        <Col lg="5"><h5>Secure User List</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Lists all the users with access to the system
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

export default UserList;