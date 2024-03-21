import React, { useState, useEffect } from "react";
import res from "./data/data.json";
import MyTable from "./components/MyTable.jsx"
import "./App.css"
import { calculateStatistics } from "./utils/helper.flavernoids.js";
import { gammaStatics } from "./utils/helper.gamma.js";

const App = () => {
  const [data, setData] = useState(res);
  const [tableData, setTableData] = useState([]);
  const [toggle,setToggle]=useState(false);
  const [gammaData,setGammaData]=useState([]);

  useEffect(() => {
   setGammaData(gammaStatics(data))
    const calculatedData = calculateStatistics(data);
    setTableData(calculatedData);
  }, [data]);
  // console.log(tableData);

  return (
    <div className="main-container">
      <h1 style={{ width: "100%", textAlign: "center", marginTop: "10px"}}>
        Analytics Data
      </h1>
      <div
     
        style={{
          marginTop:"20px",
          width: "100%",
          display:"flex",
          flexDirection:"column",
          alignItems:"center"
        }}
      >{!toggle?<><MyTable data={tableData} toggle={toggle}/></>:<><MyTable data={gammaData} toggle={toggle}/></> }
      <h3 style={{marginTop:"20px"}}>{!toggle?"click to gamma analytics":"click to Flavanoids analytics"}</h3>
      <div ><button onClick={()=>setToggle(!toggle)} style={{width:"100px", padding:"8px"}} >click me</button></div>
        
      </div>
    </div>
  );
};





export default App;
