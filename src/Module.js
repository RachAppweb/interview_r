import React, { useState } from "react";
import "./Module.css"

const Module = () => {
  const qustions = [
    {
      questiontext: "how can we define the RestFull Api ?",
      answersoptions: [
        {
          answertext: "is methode to only get the data from server",
          is_correct: false,
        },
        {
          answertext:
            "is way that intreact with website using some standard http methods",
          is_correct: true,
        },
        { answertext: "is mecahnisme to access the data ", is_correct: false },
      ],
    },
    {
      questiontext:
        "why we add the authentication and authorization in our web service ?",
      answersoptions: [
        {
          answertext: "to make our website more profissional",
          is_correct: false,
        },
        {
          answertext: "to let the users have a great expirience",
          is_correct: false,
        },
        {
          answertext:
            "to prevent the access to the users data and managing the requests depend on the user type and roles",
          is_correct: true,
        },
      ],
    },
    {
      questiontext: "what is the difference btween SQL and NoSQL ?",
      answersoptions: [
        {
          answertext:
            "SQL databases are relational and they use structred Query language while NoSql not it can handlle unrelational data",
          is_correct: true,
        },
        {
          answertext:
            "SQL databases is where the huge amount of data are stored while NoSQL is not",
          is_correct: false,
        },
        {
          answertext:
            "SQl is database where the unorgnized data are stored however NoSQL is storing the well orginized data",
          is_correct: false,
        },
      ],
    },
    {
      questiontext: "what is the process for build responsive web design ?",
      answersoptions: [
        {
          answertext: "first we design the web site based on the envirement we are working on then try it on other envirement to make it suitable for any devices",
          is_correct: true,
        },
        {
          answertext:
            "we design the media that will match devices and then focuse on the envirement we working on",
          is_correct: false,
        },
        { answertext: "there is no process  ", is_correct: false },
      ],
    },
    {
      questiontext: "how can we approach improving web page performance ?",
      answersoptions: [
        {
          answertext: "we approach it by deploy our website on dedicated server",
          is_correct: false,
        },
        {
          answertext:
            "we do that by focusing on the structure of our websit like make it ceo friendlly",
          is_correct: false,
        },
        { answertext: "we approach it using techniques like caching & content delivery, minimize HTTPrequests,Reduce Redirect,Enable Compression,Optimize Html Css and JavaScrip ", is_correct: true },
      ],
    },
    {
      questiontext: "what virtual DOM do ?",
      answersoptions: [
        {
          answertext: "it resolves around the conceptof encapsulation",
          is_correct: false,
        },
        {
          answertext:
            "it groups together several changes and does a single re-render instead of many small ones",
          is_correct: true,
        },
        { answertext: "it adds a substree of DOM elements into the rendering of a document,instead of adding it to the main documents DOM tree", is_correct: false },
      ],
    },

  ];
  let [currentindex,setindex]=useState(0)
  const [showscore,setShowScore]=useState(false)
  let [score,setScore]=useState(0)
  const goback=()=>{
   setShowScore(false)
   let newindex=currentindex=0
   let newScore=score=0
   setindex(newindex)
   setScore(newScore)
  }
  const changecurrent=(is_correct)=>{
    if (is_correct){
     let thenewscore=score+1
      setScore(thenewscore)
    }
    let thenewindex=currentindex+1
    if (thenewindex<qustions.length){
      setindex(thenewindex)
    }else{
      setShowScore(true)
      
      
    }
    
  }

  return (<>{showscore ?<div className="main"> 
    <h3 >you scored {score}</h3>
    <button className="goback"onClick={()=>{goback()}}>GoBack</button>
  </div>
    :<div className="main">
    <div className="inpo">
    <div className="index">
      <b>{currentindex+1}/{qustions.length}</b>
    </div>
    <div className="points">
      <b>points : {score}</b>
    </div>
    </div>
   <span className="question">
     <b className="quest">{qustions[currentindex].questiontext}</b>
   </span>
   <div className="answers">
    {qustions[currentindex].answersoptions.map((question)=>{
      return <>
      <button  className="ans" onClick={()=>{changecurrent(question.is_correct)}} >{question.answertext}</button>
      </>
    })}
    
    

   </div>
  </div>
  }
  </>
  );
};

export default Module;
