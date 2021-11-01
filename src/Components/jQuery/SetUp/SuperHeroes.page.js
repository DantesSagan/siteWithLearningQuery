import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Superheroes() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <h2 className='text-4xl p-4'>Loading...</h2>;
  }
  return (
    <div>
      <h2 className='text-4xl p-4'>SuperHeroesPage</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </div>
  );
}
