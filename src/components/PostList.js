import React from "react";
import { fetchPost } from "../redux/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Details from "./Details";

const PostList = () => {
  const data = useSelector((state) => state?.posts);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  const d=(x)=>{
    <Details item={x}/>
  }
  const renderList=()=>{
    return data?.data?.data.map((item,index)=>{
      return(
        <div
        key={index}
        className="  "
        id="character"
        style={{
          marginTop: "2em",
          display: "flex",
          flexDirection: "column",
          alignItems:"center",
          justifyContent:"center",
          flexBasis: "20em",
        }}
        onClick={() => { navigate("/details",{state:{item}})
     
      }

        }
      >
        <div className="image">
          <img
            src={item.image}
            style={{
              height: "14em",
              width: "18em",
            }}
          ></img>
        </div>
       
      </div>
      )
    })
  }
  const list = () => {
    return (
      <div className="ui container" style={{marginTop:"6rem"}}>
        <div className="ui grid">
          <div
            className="doubling four column row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {renderList()}
          </div>
        </div>
      </div>
    );
  };
  return(
    <div style={{}}>
      <Header/>
        {list()}
    </div>
  )
};
export default PostList;
