import React, { useCallback, useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);

  const getData = () => {
    setIsLoading(true);
    try {
      fetch("/src/data/data.json").then(res=>res.json()).then(data=>setTourData(data))
    } catch (error) {
      console.log("Error to get data", error)
    } finally{
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  
    return(
      <main id="main">
        <p className="title">Tours</p>
        {isLoading?<Loading/>:
        tourData.length>0?<Tours data={tourData} setData={setTourData} />:
        <div>
          <p>No tours left</p>
          <button className="btn" onClick={getData}>Refresh</button>
        </div>
        }
      </main>
    )
}
export default App;
