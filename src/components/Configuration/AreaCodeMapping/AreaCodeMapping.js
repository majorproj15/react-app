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
function AreaCodeMapping() {

  const products = [
    {areaCode: 'George', state: 'Monkey' ,  id: 1, region: 'test'},
    {areaCode: 'Jeffrey', state: 'Giraffe' ,  id: 2, region: 'test'},
    {areaCode: 'Alice', state: 'Giraffe' ,  id: 3, region: 'test'},
    {areaCode: 'Foster', state: 'Tiger' ,  id: 4, region: 'test'},
    {areaCode: 'Tracy', state: 'Bear' ,  id: 5, region: 'test'},
    {areaCode: 'Joesph', state: 'Lion' ,  id: 6, region: 'test'},
    {areaCode: 'Tania', state: 'Deer' ,  id: 7, region: 'test'},
    {areaCode: 'Chelsea', state: 'Tiger' ,  id: 8, region: 'test'},
    {areaCode: 'Benedict', state: 'Tiger' ,  id: 9, region: 'test'},
    {areaCode: 'Chadd', state: 'Lion' ,  id: 10, region: 'test'},
    {areaCode: 'Delphine', state: 'Deer' ,  id: 11, region: 'test'},
    {areaCode: 'Elinore', state: 'Bear' ,  id: 12, region: 'test'},
    {areaCode: 'Stokes', state: 'Tiger' ,  id: 13, region: 'test'},
    {areaCode: 'Tamara', state: 'Lion' ,  id: 14, region: 'test'},
    {areaCode: 'Zackery', state: 'Bear',  id: 15, region: 'test'}
  ];

  const columns = [
    { dataField: 'areaCode', text: 'Area Code', sort: true },
    { dataField: 'state', text: 'State', sort: true },
    { dataField: 'region', text: 'Region', sort: true }
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
        <Col lg="5"><h5>AreaCodeMapping List</h5>
        <hr /></Col>
      </Row>

      <Row className='fs-5'>
        <Col lg="5">Lists all Area Code Mapping values
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

export default AreaCodeMapping;