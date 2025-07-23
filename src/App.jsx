import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Materials from './Materials';
import JoinUsCard from './components/JoinUsCard';


function App(){
    return(

      
        <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/materials" element={<Materials/>} />
                        <Route path="/test" element={<JoinUsCard/>} />
                       
                    </Routes>
        </Router>
    
    )
}

export default App;