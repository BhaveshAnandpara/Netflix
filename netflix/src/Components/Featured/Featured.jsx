import { Add, PlayArrow } from "@mui/icons-material"
import "./Featured.css"

import React from 'react'

function Featured({type}) {
  return (
    <div className="Featured">
        {type && (
            <div className="category">
                <span>{ type === "movie" ? "Movie" : "Series"} </span>
                <select name="genre" id="genre">
                    <option value="">Genre</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Historical">Historical</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Western">Western</option>
                    <option value="Animation">Animation</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>
        )}
    <div className="gradient"></div>

    <div className="info">
        <div className="title">
            <p>NETFLIX Original</p>
            <p>STRANGER THINGS</p>
            <div className="extra-info">
                <span className="match"> 95% Match</span>
                <span> 2015 </span>
                <span> 4 Seasons</span>
            </div>
    </div>
    <p>
            Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea minima dolorum neque at laboriosam, labore optio iusto pariatur totam natus sequi ab exercitationem distinctio ratione! Quidem recusandae quas laudantium labore, ut corporis unde itaque facilis impedit eligendi numquam veritatis vel perferendis nam repudiandae esse?
    </p>

<div className="btns">

    <button className="Btn" id="Play">
        <PlayArrow/>
        PLAY
    </button>
    <button className="Btn" id="myList">
        <Add/>
        MY LIST
    </button>

</div>


</div>

</div>
  )
}

export default Featured
