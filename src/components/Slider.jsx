import { useState, useEffect } from "react"

function Slider(){

const images = [
"https://images.unsplash.com/photo-1602370463198-086436840055?w=1200",
"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
"https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200"
]

const [index,setIndex] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

setIndex((prev)=>(prev + 1) % images.length)

},3000)

return ()=>clearInterval(interval)

},[])

return(

<div className="slider">

<img src={images[index]} />

</div>

)

}

export default Slider
