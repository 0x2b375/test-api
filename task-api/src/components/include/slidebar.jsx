// Sidebar.jsx
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaGem, FaHeart } from 'react-icons/fa';

const Slidebar = () => {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
      setToggled(!toggled);
  };

  return (
      <div className={` ${toggled ? 'toggled' : ''}`}>
          <button onClick={handleToggleSidebar} className="toggle-sidebar-button">Toggle</button>
          <Sidebar toggled={toggled} breakPoint="md" onToggle={handleToggleSidebar}>
              <Menu iconShape="square">
                  <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                  <SubMenu title="Components" icon={<FaHeart />}>
                      <MenuItem>Component 1</MenuItem>
                      <MenuItem>Component 2</MenuItem>
                  </SubMenu>
              </Menu>
          </Sidebar>
      </div>
  );
};

export default Slidebar;
