import { useCallback, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [characterAllow, setCharacterAllow] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if (numberAllow) str += "0123456789";
    if (characterAllow) str += "!@#$%^&*+=[]{}";

    for (let i = 0; i < length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllow, characterAllow]);

  useEffect(() => {
    generatePassword(); // Auto-generate password when dependencies change
  }, [generatePassword]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-white bg-gray-500">
      <h1 className="text-2xl text-center mb-4">Password Generator</h1>
      
      <input
        type="text"
        value={password}
        placeholder="Generated Password"
        readOnly
        className="w-full p-2 rounded-lg bg-gray-200 text-black"
      />

      <div className="flex justify-between mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={numberAllow}
            onChange={() => setNumberAllow(!numberAllow)}
            className="mr-2"
          />
          Include Numbers
        </label>

        <label className="flex items-center">
          <input
            type="checkbox"
            checked={characterAllow}
            onChange={() => setCharacterAllow(!characterAllow)}
            className="mr-2"
          />
          Include Symbols
        </label>
      </div>

      <div className="flex justify-between items-center mt-4">
        <label>Password Length:</label>
        <input
          type="number"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-16 p-1 text-black rounded"
        />
      </div>

      <button
        onClick={generatePassword}
        className="w-full bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
      >
        Generate Password
      </button>
    </div>
  );
}

export default App;
