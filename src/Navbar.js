import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    // return (
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //         <div className="container-fluid">
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                 <ul className="navbar-nav mr-auto">
    //                     <li className="nav-item pull-left active">
    //                         <button type="button" id="sidebarCollapse" className="btn btn-info">
    //                             <i className="fas fa-align-left"></i>
    //                             <span>Toggle Sidebar</span>
    //                         </button>
    //                     </li>
    //                     <li className="nav-item active">
    //                         <a className="nav-link" href="#">Monkey Log</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );

    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Brand Logo</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="pull-left"><a>Dashboard</a></li>
                        <li className="active"><a>Stories</a></li>
                        <li><a>Videos</a></li>
                        <li><a>Photos</a></li>
                        <li className="social pull-right"><a>Social Links</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
}

export default Navbar;