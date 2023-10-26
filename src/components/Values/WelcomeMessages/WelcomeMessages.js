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
function WelcomeMessages() {

  const products = [
    {propmtId: 'George', verbiage: 'Monkey' ,  id: 1,},
    {propmtId: 'Jeffrey', verbiage: 'Giraffe' ,  id: 2,},
    {propmtId: 'Alice', verbiage: 'Giraffe' ,  id: 3,},
    {propmtId: 'Foster', verbiage: 'Tiger' ,  id: 4,},
    {propmtId: 'Tracy', verbiage: 'Bear' ,  id: 5,},
    {propmtId: 'Joesph', verbiage: 'Lion' ,  id: 6,},
    {propmtId: 'Tania', verbiage: 'Deer' ,  id: 7,},
    {propmtId: 'Chelsea', verbiage: 'Tiger' ,  id: 8,},
    {propmtId: 'Benedict', verbiage: 'Tiger' ,  id: 9,},
    {propmtId: 'Chadd', verbiage: 'Lion' ,  id: 10,},
    {propmtId: 'Delphine', verbiage: 'Deer' ,  id: 11,},
    {propmtId: 'Elinore', verbiage: 'Bear' ,  id: 12,},
    {propmtId: 'Stokes', verbiage: 'Tiger' ,  id: 13,},
    {propmtId: 'Tamara', verbiage: 'Lion' ,  id: 14,},
    {propmtId: 'Zackery', verbiage: 'Bear',  id: 15,}
  ];

  const columns = [
    { dataField: 'propmtId', text: 'Propmt Id', sort: true },
    { dataField: 'verbiage', text: 'Verbiage', sort: true },
  ];

  const defaultSorted = [{
    dataField: 'propmtId',
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
        <Col lg="5"><h5>Welcome Messages List</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Lists all the welcome message prompt available to use
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

export default WelcomeMessages;