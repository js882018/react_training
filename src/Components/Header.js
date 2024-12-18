import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="app-header">
            <div className="header-content">
                <h1>TODO Application</h1>
                <nav>
                    <Link to="/todos">All Todos</Link>
                    <Link to="/add-todo">Add Todo</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
