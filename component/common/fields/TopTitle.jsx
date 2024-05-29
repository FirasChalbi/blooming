import React from 'react'
import './TopTitle.css'


function TopTitle(props) {
  return (
    <section className="breadcrumb-area">
        <div className='pos'> 
        
	              <div className="breadcrumbs">
	                  <h1>{props.title}</h1>
	              </div>
                  </div>
    </section>
  )
}

export default TopTitle

