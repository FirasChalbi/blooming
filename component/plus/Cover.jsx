import React from 'react'
import { FaPlay } from "react-icons/fa6";

function Cover() {
  return (
    <section className="cover">
        <div className='container10'>
            <div className='row10 items-center'>
                <div className='col'>
                    <div class="title-content text-left">
                        <h6 class="title-subw3hny">Découvrons ensemble</h6>
                        <h3 class="title-w3l two pe-lg-5">Arroser l'avenir de l'agriculture avec Blooming AgriAfrica</h3>
                        {/* <p class="mt-3 pe-lg-5">Watering the Future of agriculeture with Blooming AgriAfrica</p> */}
                        <a href="/produit" class="btn btn-style btn-outline-light mt-sm-5 mt-4">Voir Plus</a>
                    </div>
                </div>
                <div class="col-lg-5 history-info mt-5 ps-lg-5" style={{display: "flex",justifyContent: "center"}}>                       <div class="relative mt-lg-0 mt-5 pt-lg-0 pt-5 pb-lg-0 pb-5 ">
                            <a href="#small-dialog" class="popup-with-zoom-anim play-view text-center absolute">
                                <span className="video-playicon" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                                    <FaPlay className="text-black" />   
                                </span>
                            </a>
                        </div>
                    </div>
            </div>

        </div>
        
    </section>
  )
}

export default Cover