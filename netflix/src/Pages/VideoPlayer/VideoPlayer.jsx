import { ArrowBack } from "@mui/icons-material"
import { useLocation } from 'react-router-dom';
import "./VideoPlayer.css"

export default function VideoPlayer() {


  const location = useLocation()
  console.log(location)

  return (
    <div className="Watch">

        <div className="backTrack">
            <ArrowBack/>
           Home
        </div>

        <video type="video/mp4" src="https://player.vimeo.com/video/704899674?h=450d04c7d2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="video" autoPlay controls></video>

    </div>
  )
}
