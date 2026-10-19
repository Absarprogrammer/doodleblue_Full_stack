import "./ExerciseDetails.css";

const IMAGE_BASE =
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";

function ExerciseDetails({
  exercise,
  onBack,
  isSaved,
  toggleList,
}) {
  if (!exercise) {
    return (
      <div className="details-page">
        <h2>Exercise not found</h2>
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <button className="back-button" onClick={onBack}>
        ← Back
      </button>

      <h1>{exercise.name}</h1>

      <div className="details-content">
        
        <div className="details-images">
          {exercise.images?.length > 0 ? (
            exercise.images.map((image, index) => (
              <img
                key={image}
                src={`${IMAGE_BASE}${image}`}
                alt={`${exercise.name} - image ${index + 1}`}
                loading="lazy" 
              />
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>

        <div className="details-info">
          <p>
            <strong>Primary Muscles:</strong>{" "}
            {exercise.primaryMuscles?.join(", ") || "N/A"}
          </p>

          <p>
            <strong>Secondary Muscles:</strong>{" "}
            {exercise.secondaryMuscles?.join(", ") || "N/A"}
          </p>

          <p>
            <strong>Equipment:</strong>{" "}
            {exercise.equipment || "N/A"}
          </p>

          <p>
            <strong>Difficulty:</strong>{" "}
            {exercise.level || "N/A"}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {exercise.category || "N/A"}
          </p>

          <p>
            <strong>Force:</strong>{" "}
            {exercise.force || "N/A"}
          </p>

          <p>
            <strong>Mechanic:</strong>{" "}
            {exercise.mechanic || "N/A"}
          </p>
        </div>
      </div>

      <section className="instructions">
        <h2>Instructions</h2>

        {exercise.instructions?.length > 0 ? (
          <ol>
            {exercise.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available.</p>
        )}
      </section>

    
      <button
        className="save-button"
        onClick={() => toggleList(exercise)}
      >
        {isSaved ? "Remove from My List" : "Add to My List"}
      </button>
    </div>
  );
}

export default ExerciseDetails;
