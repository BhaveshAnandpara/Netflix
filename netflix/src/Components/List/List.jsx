import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../ListItem/ListItem";
import "./list.css";
import { moveforward, movebackward } from "./List-js";

export default function List({list}) {

  const listRef = useRef();

  let move = 0;

  return (
    <div className="List ">
      <span className="list-title ">{list.title}</span>
      <div className="wrapper ">

        <ArrowBackIosOutlined id="backArrow" onClick={() => {

          if (move < 480) {
            move+= 120
            document.getElementById("list-container").style.transform += "translateX(120px)"
          }

        }
        } />

        <div className="show-conatiner ">

          <div className="list-container " id="list-container" ref={listRef}>
            {list.content.map((item,index) => (
              <ListItem key={index} item={item} />
            ))}
          </div>
        </div>
        <ArrowForwardIosOutlined id="forwardArrow" onClick={() => {

          if (move > -480) {
            move-= 120
            document.getElementById("list-container").style.transform += "translateX(-120px)"
          }


        }} />

      </div>
    </div>
  );
}