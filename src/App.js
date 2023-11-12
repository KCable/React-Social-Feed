import './App.css';
import activeBtn from "./Components/activeBtn/activeBtn";

function App() {

  return (
    <div className="container">
    <div className="btn-container">
      <button
        className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
        onClick={handleLikeClick}>
        <span className="material-symbols-rounded">thumb_up</span>
        Like {likeCount}
      </button>
   
      <button
        className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
        onClick={handleDisikeClick}
      >
        <span className="material-symbols-rounded">thumb_down</span>
        Dislike {dislikeCount}
      </button>
    </div>
  </div>);
  
}

export default App; 

