import { useState } from "react";
function App(){
  const [loveCount , setloveCount] = useState(0);
  return(
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-400 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Send Love to Surya!❤️
        </h1>
        <p className="text-6xl font-extrabold text-white mb-6">
          {loveCount}
        </p>
        <button onClick={()=> setloveCount(loveCount+1)}
          className="bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Send Love 💖
        </button>
        </div>
      </div>
  );
}

export default App;