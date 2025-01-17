import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import './Header.css'; // Import CSS for styling

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Use AuthContext

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    LoyalEase
                </Typography>
                {user ? (
                    <div className="user-icon">
                        <span>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <>
                        <Button color="inherit" href="/login">Login</Button>
                        <Button color="inherit" href="/signup">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
