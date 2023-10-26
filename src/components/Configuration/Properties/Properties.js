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
function Properties() {

  const products = [
    {name: 'George', type: 'Monkey' ,  defaultValue: 1, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Jeffrey', type: 'Giraffe' ,  defaultValue: 2, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Alice', type: 'Giraffe' ,  defaultValue: 3, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Foster', type: 'Tiger' ,  defaultValue: 4, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Tracy', type: 'Bear' ,  defaultValue: 5, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Joesph', type: 'Lion' ,  defaultValue: 6, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Tania', type: 'Deer' ,  defaultValue: 7, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Chelsea', type: 'Tiger' ,  defaultValue: 8, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Benedict', type: 'Tiger' ,  defaultValue: 9, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Chadd', type: 'Lion' ,  defaultValue: 10, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Delphine', type: 'Deer' ,  defaultValue: 11, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Elinore', type: 'Bear' ,  defaultValue: 12, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Stokes', type: 'Tiger' ,  defaultValue: 13, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Tamara', type: 'Lion' ,  defaultValue: 14, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'},
    {name: 'Zackery', type: 'Bear',  defaultValue: 15, valueB: 'test', serverB: 'test', valueC: 'test', serverC: 'test'}
  ];

  const columns = [
    { dataField: 'name', text: 'Name', sort: true },
    { dataField: 'type', text: 'Type', sort: true },
    { dataField: 'defaultValue', text: 'Default Value', sort: true },    
    { dataField: 'valueB', text: 'ValueB', sort: true },
    { dataField: 'serverB', text: 'ServerB', sort: true },
    { dataField: 'valueC', text: 'ValueC', sort: true },
    { dataField: 'serverC', text: 'ServerC', sort: true },
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
        <Col lg="5"><h5>Properties List</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Lists all the properties and servers they apply
        </Col>
      </Row>
    
      <Row className='py-3'>
        <Col>
          
          <ToolkitProvider
            bootstrap4
            keyField='defaultValue'
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
                    keyField='defaultValue'
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

export default Properties;