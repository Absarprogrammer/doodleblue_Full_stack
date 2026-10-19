import "./MyList.css";
function MyList({mytasks,toggleList,onSelect,isSaved}){
    if(mytasks.length===0){
        return(
            <div className="mylist-empty">
                <h2>My Exercise List</h2>
                <p>You haven't saved any exercises yet.</p>
                <p>Add exercises from the main page to see them here!</p>
            </div>
        )
    }
    return(
        <div className="mylist-container">
      <h2>My Exercise List ({mytasks.length})</h2>

      <div className="mylist-grid">
        {mytasks.map((item) => (
          <div className="mylist-card" key={item.id}>
            {item.images?.[0] && (
              <img
                src={`https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${item.images[0]}`}
                alt={item.name}
                loading="lazy"
              />
            )}

            <h3>{item.name}</h3>

            <p>
              <strong>Primary muscles:</strong>{" "}
              {item.primaryMuscles?.join(", ") || "N/A"}
            </p>

            <p>
              <strong>Equipment:</strong> {item.equipment || "N/A"}
            </p>

            <p>
              <strong>Level:</strong> {item.level || "N/A"}
            </p>

            <button onClick={() => onSelect(item)}>
              View Details
            </button>

            <button
              onClick={() => toggleList(item)}
              disabled={!isSaved(item.id)}
            >
              Remove from My List
            </button>
          </div>
        ))}
      </div>
    </div>

    )
}
export default MyList;