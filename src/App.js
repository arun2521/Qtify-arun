import { useEffect, useState } from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
import { fetchTopAlbums } from './api/api';
import Card from './Components/Card/Card';

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch(err) {
      console.err(err);
    }
  }

  useEffect(() => {
    generateData();
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Hero />
      {topAlbumsData.map((item) => {
        return (
          <Card key={item.id} data={item} type="album"/>
        )
      })}
    </div>
  );
}

export default App;
