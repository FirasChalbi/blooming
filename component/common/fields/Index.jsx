import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import './index.css'

function index(props) {
  return (
    <section className="breadcrumb-bottom-area">
    <div className="container5">
        <div className="row5">
            <div className="col5">
                <div className="breadcrumb-bottom">
                    <div className="left pull-left">
                        <ul>
                            <li><a href="index.html">Accueil</a></li>
                            <li><FontAwesomeIcon icon={faAngleRight} style={{ height: '14px' }}/></li>
                            <li className="active">{props.title}</li>
                        </ul>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default index