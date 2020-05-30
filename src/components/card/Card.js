import React from 'react'
import movie from  '../../assets/images/movie.png'
import {Link} from 'react-router-dom'

const Card = (props)=>{
    return (
        <React.Fragment>
            <div className="row mt-4">
                <div className="col-lg-12 col-md-6">
                    <div className="jumbotron jumbotron-fluid" style={style}>
                        <div className="container">
                            <h1 className="display-4">Fluid jumbotron</h1>
                            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space
                                of its parent.</p>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

const style = {

}
export default Card