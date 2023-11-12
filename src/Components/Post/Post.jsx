import App, {handleLikeClick, likeCount, handleDislikeClick, dislikeCount} from 'App';

export default fuction; App(); {
    const [counters, setCountersd] = useState([" "])
   
    return (
      <div className="App">

      <form>
        <input type="text" name="counterName" />
        <input type="submit" name="Add Counter" />
      </form>
        {counters.map(name => {
            return(
                <Counter name={name} />
            )
        })}
        
       </div>

    );
}

/* user's name
body of post
like/dislike button
*/