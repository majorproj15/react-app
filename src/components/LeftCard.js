import React from 'react';

const LeftCard = () => (
  <div className='h-100 bg-light-gray left-nav'>
  
    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start h-100" id="menu">
      <li className="nav-item">
          <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
          </a>
      </li>
      <li>
          <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
          <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li className="w-100">
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </a>
              </li>
              <li>
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </a>
              </li>
          </ul>
      </li>
      <li>
          <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
      </li>
      <li>
          <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
              <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
          <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
              <li className="w-100">
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</a>
              </li>
              <li>
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a>
              </li>
          </ul>
      </li>
      <li>
          <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
              <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
              <li className="w-100">
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
              </li>
              <li>
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
              </li>
              <li>
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
              </li>
              <li>
                  <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
              </li>
          </ul>
      </li>
      <li>
          <a href="#" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
      </li>
    </ul>
    
  </div>
);

export default LeftCard;