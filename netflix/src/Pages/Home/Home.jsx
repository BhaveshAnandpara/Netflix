

import '../../style.css';
import Navbar from '../../Components/Navbar/Navbar';
import Featured from '../../Components/Featured/Featured';
import List from '../../Components/List/List';
import axios from "axios";
import { useState , useEffect } from 'react';


const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmQ0MDg5YTg0Mjc5YmU2MWRiNWQzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTk5OTU3NCwiZXhwIjoxNjUyNDMxNTc0fQ.Qdho91oRGvhlDojwv4XH4hCDo_pHBD28dTrqAv6qM7U",
            },
          }
        );
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list,index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};


export default Home;
