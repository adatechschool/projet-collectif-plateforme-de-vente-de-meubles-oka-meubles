import React, { useEffect, useState } from 'react';
import MeubleItem from './meubleItem';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/items");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='pt-20'>
      <h1>Notre sélection : </h1>
      <ul  className="grid grid-cols-3 gap-2 gap-y-20 flex items-center justify-items-center text-center">
        {data.map((val, id) => (
          <MeubleItem
          key={id}
          image={val.image}
          name={val.name}
          price={val.price}
          description={val.description}
          dimension={val.dimension}
          />
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
    





