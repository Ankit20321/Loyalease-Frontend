import React from "react";
import "./Header.css";
import Card from '@mui/material/Card';
import Icon from '@mui/material/Icon';
import "../Layout/Layout.css";

const Header = () => {
  return (
    <Card className="header">
      <div className="title-group">
        <h2 className="title">Loyalease</h2>
        <p className="subtitle">Welcome to Loyalease</p>
      </div>
      <h2 className="home" style={{ paddingRight: '20px' }}>Home</h2>
      <Icon className="user-icon">person</Icon>
    </Card>
  );
};

export default Header;