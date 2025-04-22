import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
    <div className="w-full h-screen duration-200 flex flex-col items-center justify-center" style={{ backgroundColor: color }}>
    <div className="flex gap-4">
    <button onClick={() => setColor('red')} className=" px-4 py-2 bg-red-500 text-white rounded">Red</button>
    <button onClick={() => setColor('blue')} className="px-4 py-2 bg-blue-500 text-white rounded">Blue</button>
    <button onClick={() => setColor('black')} className="px-4 py-2 bg-black text-white rounded">Black</button>
    <button onClick={() => setColor('yellow')} className="px-4 py-2 bg-yellow-500 text-white rounded">Yellow</button>
    <button onClick={()=> setColor('green')} className="px-4 py-2 bg-green-500 text-white rounded">Green</button>
    <button onClick={()=>setColor('pink')} className="px-4 py-2 bg-pink-500 text-white rounded" >Pink</button>
    <button onClick={()=>setColor('purple')}className='px-4 py-2 bg-purple-500 text-white rounded'>Purple</button>
    <button onClick={()=>setColor("navy")} className='px-4 py-2 bg-blue-500 text-white rounded'>Navy</button>
    <button onClick={()=>setColor("lime")} className='px-4 py-2 bg-lime-500 text-white rounded'>lime</button>
    <button onClick={()=>setColor("orange")}className='px-4 py-2 bg-orange-500 text-white rounded'>Orange</button>
    </div>
    </div>
   </>
  );
}

export default App;