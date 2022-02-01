import Main from './Components/main'
import Navbar from './Components/Navbar'
import Word from './Components/word'
import Feed from './Components/Feedback'
import Home from './Components/Home';
import Error from './Components/error.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/feedback" element={<Feed />}/>
          <Route exact path="/create" element={<Main />} />
          <Route exact path="/feedback" element={<Feed />} />
          <Route exact path="/word" element={<Word />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;