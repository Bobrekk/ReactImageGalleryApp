import image from './image'
import React , {useState} from 'react';
import './styles.css';

function App() {

  const [selectedImg, setSelectedImg] = useState(image[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected"/>
      </div>
      <div className="imgContainer">
      {image.map((img, index)=>(
          <img key={index} src={img} alt="yemek"
          onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
