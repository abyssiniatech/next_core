  "use client"
  
import { useMemo, useState } from "react";
const Memo =() =>{
    const [number, setNumber] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const memoizedValue = useMemo(() => {
        return number * 2;
    }, [number]);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    //  double the number and toggle dark mode
     const double = useMemo(() => {
        return number * 2;
    }, [number]);
    return (
        <div style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <input type="number" value={number}  />
            <button onClick={() => setNumber(number + 1)} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>Increment:{double}</button>
            <button onClick={toggleDarkMode} style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}>Toggle Dark Mode{number}</button>
            <h1>Memoized Value: {memoizedValue}</h1>
        </div>
    )
}
export default Memo;