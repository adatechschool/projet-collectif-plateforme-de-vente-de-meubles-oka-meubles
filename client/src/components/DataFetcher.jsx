import React, { useEffect, useState } from 'react';

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
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
    
// class Items extends Component {
//     state = {
//         post:{}
//     }
    
//     getItems() {
//         fetch("http://localhost:3001/api/items")
//         .then((response) => {
//             return response.json()
//         })
//         .then((result) => {
//             this.setState({post : result})
//             console.log(result);
//         })
//     }
        
//     render () {
//         return (
//             <div className= "">
//                 <h1>Yo</h1>
//                 {this.state.post.name}

//             </div>
//         )
//     }
// }




