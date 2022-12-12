import {Routes,Route} from 'react-router-dom'
import HomePage from "./Components/HomePage";
import Photography from "./Components/photography";
import Venue from './Components/venue';
import Makeover from './Components/makeover';
import Catering from './Components/catering';
import Gallery from './Components/gallery';

function App(){
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="HomePage" element={<HomePage />} />
       
        <Route path="photography/" element={ <Photography/> } />
        
        <Route path="HomePage/venue" element={<Photography />} />
        <Route path="venue" element={ <Venue/> } />
        <Route path="catering" element={ <Catering/> } />
       
        
        <Route path="makeover" element={ <Makeover/> } />
       
        <Route path="gallery" element={ <Gallery/> } />
        <Route path="about us" element={ <Photography/> } />
      </Routes>
    </div>
  )
}
export default App;

