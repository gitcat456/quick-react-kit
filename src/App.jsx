import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">Welcome to quick-react-kit 🚀</h1>
    </div>
  );
}

export default App;
