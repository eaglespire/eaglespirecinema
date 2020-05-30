import React from 'react'
import logo from '../../assets/images/eaglespirecinema.png'
import '../../index.css'
import {Link} from 'react-router-dom'

const Navigation = ()=>{
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={{backgroundColor:'#45370C'}}>
                <Link className="navbar-brand mt-lg-3" to="/" >
                    <img src={logo} width={300} alt=""/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navigation