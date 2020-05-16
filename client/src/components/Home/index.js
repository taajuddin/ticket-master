import React from 'react'
import image from './image.png'

function Home(props){
        return (
            <div className="col-xs-1 text-center mt-5">
                <h2 className="mb-5">Welcome To The Ticket Master App</h2>
                <img src={image} alt="man holding sign"/>
            </div>
        )
}
    
export default Home