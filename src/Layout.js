import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navigation from "./components/navigation/Navigation";
import $ from 'jquery'

const Layout = ({children})=>{
    return (
        <React.Fragment>
            <Navigation/>
            <div className="container-fluid">
                {children}
            </div>
        </React.Fragment>
    )
}
export default Layout