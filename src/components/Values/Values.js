import React from 'react';

import { Outlet } from "react-router-dom";

export default function Values() {
  return (
    <div>
      <Outlet />
    </div>
  );
  
}