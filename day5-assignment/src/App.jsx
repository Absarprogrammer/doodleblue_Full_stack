import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState("");
  const[status,setStatus]=useState(null);
  const[search,setSearch]=useState("");
  const[currentPage,setCurrentPage]=useState(1);
  const exercisesPage=20;

  useEffect(() => {
    const loader = async () => {
      const controller=new AbortController();
      const timeout=setTimeout(()=>{
        controller.abort();
      },5000);
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json",{signal:controller.signal}
        );
        setStatus(res.status);

        if (!res.ok) {
          setStatus(res.status);
          throw new Error("Failed to fetch exercises");
        }

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        
      }
      finally{
        clearTimeout(timeout);
        setLoading(false);
      }
    };

    loader();
  }, []);

  console.log(data, "Data");
  console.log(status,"status");
  
  const filteredData=data.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())|| item.primaryMuscles?.some((muscle)=>
    muscle.toLowerCase().includes(search.toLowerCase()))||
    item.equipment?.toLowerCase().includes(search.toLowerCase()) ||
  item.level?.toLowerCase().includes(search.toLowerCase()) ||
  item.category?.toLowerCase().includes(search.toLowerCase())||
  item.force?.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages=Math.ceil(filteredData.length/exercisesPage);
  const startIndex=(currentPage-1)* exercisesPage;
  const currentexercise=filteredData.slice(startIndex,startIndex+exercisesPage);
  if(loading){
    return(
      <div className="loading-screen">
        <div className="spinner"></div>
      <h1>Loading.....</h1>
      <p>Fetch Datas</p>
      </div>
    );
  }

  if(error){
    return(
      <>
      <h1>Something</h1>
      <p>Status code:{status ?? "Unavailable"}</p>
      <p>{error}</p>
      </>

    )
  }
  return (
    <div className="container">
      <div className="search">
    <input type="text" placeholder="Search Execises......" 
     value={search} onChange={(e)=>{setSearch(e.target.value)
      setCurrentPage(1)}}/></div>
      <div className="grids">
      {filteredData.length==0?(<span>No exercises found.</span>):
(currentexercise.map((item) => (
  <div className="card" key={item.id}>
    <div className="cards">

      {/* Front side */}
      <div className="front">
        <fieldset>
          <legend>
            <h2>{item.name}</h2>
          </legend>

          <strong>Primary Muscles:</strong>{" "}
          <span>{item.primaryMuscles?.join(", ")}</span>
          <br /><br />

          <strong>Equipment:</strong>{" "}
          <span>{item.equipment || "None"}</span>
          <br /><br />

          <strong>Difficulty:</strong>{" "}
          <span>{item.level || "Not specified"}</span>
          <br /><br />

          {item.images?.slice(0, 2).map((image, index) => (
            <img
              key={index}
              src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${image}`}
              alt={item.name}
            />
          ))}

          <button
            type="button"
            onClick={(e) => {
              e.currentTarget.closest(".card")
                .classList.toggle("flipped");
            }}
          >
            View Instructions ↻
          </button>
        </fieldset>
      </div>

      {/* Back side */}
      <div className="back">
        <h2>{item.name}</h2>
        <h3>Instructions</h3>

        <ol>
          {item.instructions?.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>

        <button
          type="button"
          onClick={(e) => {
            e.currentTarget.closest(".card")
              .classList.toggle("flipped");
          }}
        >
          Back to Exercise
        </button>
      </div>

    </div>
  </div>
)))}
</div>
      {filteredData.length > 0 && (
  <div className="page">
    <button
      onClick={() => setCurrentPage((prev) => prev - 1)}
      disabled={currentPage === 1}>
      Previous
    </button>
      <h3>Page {currentPage} of {totalPages}</h3>
    

    <button
      onClick={() => setCurrentPage((prev) => prev + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
      )
}
    </div>
  );
};
export default App;
//https://oss.exercisedb.dev/api/v1/exercises
