// create your App component here
import React, {useState,useEffect, use} from 'react'

function App(){
    const [image, setImage] = useState(null)
    useEffect(function(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => setImage(data.message))
    }, [])

  return (
    <div>
      {image ? <img src={image} alt='A Random Dog'/> : <p>Loading...</p>}
    </div>
  )
}

export default App
