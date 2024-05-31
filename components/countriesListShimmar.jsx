import React from 'react'
import './shimmar.css'

export default function CountriesListShimmar() {

    // const mapped = Array.from({ length: 10 }).map((el,idx) => { // idhar hamne ek new array banaya hai or uska length 10 rakha hai or usko console.log karaoge to vo undifined dega or fir ham isme map ka use kar rahe hai kyuki array pe map use kar sakte hai or fir ham is map mai jo return karyege vo 10 bar array mai chala jayega to idhar hamne div return karvaya hai to array mai 10 bar div ajayega or vo unser jsx se react element mai convert ho jata hai 
    //     return <div key={idx} className='country-card shimmer-card'></div>
    // })


    return (
        <div className='countries-container'>
            {Array.from({ length: 10 }).map((el, idx) => {
                return <div key={idx} className='country-card shimmer-card'></div>
            })}
        </div>
    )
}
