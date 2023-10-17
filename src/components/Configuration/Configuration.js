import React from 'react';
import { Outlet } from "react-router-dom";

export default function Configuration() {
  return (
    <div>
      <h2>Configuration</h2>
      <Outlet />
    </div>
  );
}