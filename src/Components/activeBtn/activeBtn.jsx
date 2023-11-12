import {useState} from "react";
import "./activeBtn.css";

const activeBtn = (props) => {

function handleClick(){
    //TODO: toggle between thumbs up and thumbs down }
        
    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like'){
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
    }};

    
    const handleDisikeClick = () => {
        if (activeBtn === "none") {
            setDislikeCount(dislikeCount + 1);
            setActiveBtn("dislike");
            return;
        }

        if (activeBtn === 'dislike'){
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "like") {
            setDislikeCount(dislikeCount + 1);
            setLikeCount(likeCount - 1);
            setActiveBtn("dislike");
    }};

    return (
        <div>
            <button className="inactive" onClick={handleClick}>{props.message}</button>
        </div>
    )

    }}

    export default activeBtn;
