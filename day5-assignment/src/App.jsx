import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading";
import MyList from "./components/MyList";
import ExerciseDetails from "./components/ExerciseDetails";

const App = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const[error,setError]=useState("");
  const[status,setStatus]=useState(null);

  const[search,setSearch]=useState("");
  const[currentPage,setCurrentPage]=useState(1);
  const exercisesPage=21;

  const[selected,setSelected]=useState(null);
  const[showlist,setShowlist]=useState(false);
  const [mode, setMode] = useState(false);

  const toggleTheme = () => {
    setMode((prev)=>!prev);
  document.body.classList.toggle("light-mode");
};
  
  const[mytasks,setMyTasks]=useState(()=>{
    try{
      const saved=localStorage.getItem("myExercises");
      return saved?JSON.parse(saved):[];
    }
    catch{
      return[];
    }
  });
  const toggleList = (exercise) => {
  setMyTasks((prev) => {
    const saved = prev.some((item) => item.id === exercise.id);

    const updated = saved
      ? prev.filter((item) => item.id !== exercise.id)
      : [...prev, exercise];

    localStorage.setItem("myExercises", JSON.stringify(updated));

    return updated;
  });
};
  const isSaved=(id)=>{
    return mytasks.some((item)=>item.id===id)
  }

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
    return <Loading />    
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
  <div>
    <div className="search">
      <input
        type="text"
        placeholder="Search Exercises..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
      />

      <button onClick={() => {setShowlist((prev)=>!prev);setSelected(null)}}>
        {showlist ? "All Exercises" : `My List (${mytasks.length})`}
      </button>
      <button onClick={toggleTheme}>
  {mode ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
    </div>

    {selected ? (
        <ExerciseDetails
          exercise={selected}
          onBack={() => setSelected(null)}
          isSaved={isSaved(selected.id)}
          toggleList={toggleList}
        />
      ) :
    showlist ? (
      <MyList
      mytasks={mytasks} toggleList={toggleList}
      onSelect={setSelected} isSaved={isSaved}/>
    
    ) : (
      <div className="container">
        <div className="grids">
          {filteredData.length === 0 ? (
            <span>No exercises found.</span>
          ) : (currentexercise.map((item) => (
  <article className="exercise-card" key={item.id}>
    <p className="eyebrow">EXERCISE LIBRARY</p>

    <h2>{item.name}</h2>

    <p className="exercise-meta">
      {item.primaryMuscles?.join(", ") || "Other"} ·{" "}
      {item.equipment || "Bodyweight"} ·{" "}
      {item.level || "Beginner"}
    </p>

    <div className="exercise-preview">
      <img
        src={
          item.images?.[0]
            ? `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${item.images[0]}`
            : ""
        }
        alt={item.name}
        loading="lazy"
      />

      <div className="exercise-preview-info">
        <h3>{item.name}</h3>

        <p>
          View the exercise, muscles, and instructions.
        </p>

        <button onClick={() => setSelected(item)}>
          View Exercise →
        </button><br/><br/>
        <button className="button2"
        onClick={() => toggleList(item)}
      >
        {isSaved(item.id) ? "Remove from My List" : "Add to My List"}
      </button>
      </div>
    </div>
  </article>
)))
}</div>

        {filteredData.length > 0 && (
          <div className="page">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
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
        )}
      </div>
    )}
  </div>
);


 };
export default App;
//https://oss.exercisedb.dev/api/v1/exercises
