import { useState, useEffect } from 'react';
import './App.css';
import A from './components/A';
import B from './components/B';

function App() {

  const [value, setvalue] = useState("");
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(posts => setposts(posts))
  }, [])


  return (
    <div style={{ padding: '1rem' }}>
      <input
        value={value}
        onChange={e => setvalue(e.target.value)}
      />
      <div style={{ display: 'flex' }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>

    </div>
  );
}

export default App;
