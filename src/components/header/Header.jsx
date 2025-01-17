import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import './Header.css'; // Import CSS for styling

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Use AuthContext

    return (
        <header className="header">
            <h1>Loyalease</h1>
            {user && (
                <div className="user-icon">
                    <span>{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</span> {/* Display user role */}
                    <button onClick={logout}>Logout</button> {/* Logout button */}
                </div>
            )}
        </header>
    );
};

export default Header;
