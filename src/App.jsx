import { useState } from "react";
import "./App.css";
import CounterC from "./components/CounterC";
import CounterF from "./components/CounterF";

import Header from "./components/Header";

function App() {
    let students = [
        { id: "1", name: "Abdelaziz", age: "15" },
        { id: "2", name: "Baha", age: "7" },
        { id: "3", name: "Ahemd", age: "80" },
    ];
    const style1 = {
        color: "green",
        backgroundColor: "red",
        fontSize: "2rem",
    };

    const handleClick = () => {
        alert("this is an alert");
    };

  let test = true;
  const [show, setShow] = useState(true)
  let name = "TWIN7"
    return (
        <>
        <CounterC propsName={test} />
        <button onClick={() => setShow(!show)}>Show</button>
        {show && <CounterF name={name} />}
            {/* <Header name = "Header" />
      <h1 style={style1}>Students List</h1>
      <ul>
      {
        students.map((student) => {
          return <li key={student.id} >{student.name} - {student.age}</li>
        })
        }
      </ul>
      
      <button onClick={() => handleClick()} className="class">Click Here</button>
      {
        test ? 
          <p>Test is true</p> 
          :
          <p> Test is false</p>
      }

      {
        test && <p>Test is also True</p>
      } */}
        </>
    );
}

export default App;
