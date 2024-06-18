// Layout.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
