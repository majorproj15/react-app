import React from 'react';

import { Outlet } from "react-router-dom";

export default function Values() {
  return (
    <div>
      <h1>Values</h1>
      <Outlet />
    </div>
  );
  
}