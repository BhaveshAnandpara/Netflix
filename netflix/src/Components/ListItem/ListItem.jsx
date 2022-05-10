import "./ListItem.css"
import { PlayArrow , Add, ThumbUpOutlined , ThumbDownOutlined} from "@mui/icons-material"
import { useEffect , useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom";


export default function ListItem({item}) {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ0MDg5YTg0Mjc5YmU2MWRiNWQzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTk5OTU3NCwiZXhwIjoxNjUyNDMxNTc0fQ.Qdho91oRGvhlDojwv4XH4hCDo_pHBD28dTrqAv6qM7U",
          },
        });
        console.log(res.data)
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);


  return (
    <Link to={{pathname: "/watch" , movie: movie}} className='listItem' style={{backgroundImage: `url("${movie.img}")`}}>

      <div className="play">
        <PlayArrow/>
      </div>

    </Link>
  )
}
