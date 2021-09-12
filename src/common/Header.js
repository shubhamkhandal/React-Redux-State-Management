import React from 'react';

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                <a className="navbar-brand">Shopiii</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto">
                    <a className="nav-link active">Home</a>
                    <a className="nav-link" >Features</a>
                    <a className="nav-link">Pricing</a>
                  
                    </div>
                </div>
                </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
