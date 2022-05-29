import React from 'react'

const About = () => {
  return (
    <div className='container flex-row justify-center mb-4'>
        <div>
            <ul className='about_list'>
                <li>SIGN UP with latitude and longitude coordinates.</li>
                <li>LOG IN to access coordinates.</li>
            </ul>

            <ul>
                <li>Controls</li>
                <li>ZOOM: Scroll wheel</li>
                <li>PAN: hold left mouse button + drag</li>
                <li>ROTATE: hold right mouse button + drag</li>
            </ul>

            <ul className='credits'>
                <li>Credits</li>
                <li>
                    <a className='credits_line' target='_blank' href='https://www.mapbox.com/gallery/'>
                    Frank Mapstyle by Clare Trainor, accessible via Mapbox Gallery</a>
                </li>

                <li>
                    <a className='credits_line' target='_blank' href='https://www.youtube.com/watch?v=9oEQvI7K-rA&t=2881s'>
                    Inspired by React Node Travel Map App by Lama Dev</a>
               </li> 
            </ul>
        </div>
    </div>


    
  )
}

export default About