import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import SearchPage from './Components/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer'

function App() {
    const [heroSearch, setHeroSearch] = useState("");
    const [heroData, setHeroData] = useState(null);

    const heroQuery = (e) => {
        setHeroSearch(e.target.value);
    }

    const setData = (response) => {
        setHeroData( response );
    }

  return (
    <Router>
      <div className="App">
        <Header searchText={heroSearch} setSearch={heroQuery} setData={setData}/>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="search" element={<SearchPage heroData={heroData} />} />
        </Routes>

        <Footer />
      </div>
   </Router>
  );
}

export default App;
