import CarouselBox from "./components/CarouselBox.jsx";

import wineImg from '../src/assets/vinho.jpeg';
import wineImg1 from '../src/assets/vinho1.jpg';
import wineImg2 from '../src/assets/vinho2.jpg';


function App() {
const images = [wineImg, wineImg1, wineImg2]

  return (
      <>
          <div className='App'>
               <CarouselBox images={images} />
          </div>
      </>
  )
}

export default App
