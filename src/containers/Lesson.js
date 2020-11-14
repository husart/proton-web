import React, { useEffect, useState } from "react";
import "./Lesson.scss";
import getLessonById from "../selectors/getLessonById";
import { useSelector, useDispatch } from "react-redux";
import Image from "../components/Image";
import Text from "../components/Text";
import lesson from "../reducers/lesson";
import Congrats from "../components/Congrats";
import history from '../history';
const generateContent = (lesson) => {
  switch (lesson.type) {
    case "text":
      return <Text {...lesson} />;
    case "image":
      return <Image {...lesson} />;
    default:
      return <Congrats {...lesson} />;
  }
};
const Lesson = () => {
  const les = useSelector(getLessonById);
  const config = useSelector(state=>state.config)
  const [index, setIndex] = useState(0);
  const l = les.lessons.map((l) => ({ ...l, view: false }));
  l.push({title: "Congrats!",
    view: false,
    content:[{ type: 'congrats', title: les.title, lessonId:'lastSlide'}]
    });
  const [lessons, setLessons] = useState(l);
  const updateView = (i) => {
    setLessons((prevState)=> {
        const clone = [...prevState];
        clone[i].view = true;
        return clone
    })
  }
  useEffect(()=> {
    if(!config.selectedTopic) {
      history.push('/')
    }
  },[])
  useEffect(()=> {
    updateView(index)
  },[les])
  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const nextSlide = () => {
    if (index < lessons.length - 1) {
        const newIndex =index + 1 
      
       
      setIndex(newIndex);
      updateView(newIndex)
    }
  };
  
  const bullets = lessons.map((l,i) => (
  <li key={i}
   className={`${l.view ? 'hasView': ''} ${index===i? 'current': ''}`} 
   onClick={()=>{
     l.view && setIndex(i);
   }}
   >{i+1}</li>
  )) 
  const content = lessons[index].content.map((l, index) => (
    <span key={`${l.lessonId}-${index}`}>{generateContent(l)}</span>
  ));

  return (
    <div className="lessonCard">
        <ul className="bullets">
            {bullets}
        </ul>
        <span className="arrows">
            <img className="arrow" className={`preview ${0=== index ? 'disabled':''}`} src="/preview.svg" onClick={prevSlide}/>
            <img className={`next ${lessons.length-1 === index? 'disabled':''}`} src="/next.svg" onClick={nextSlide} />
        </span>
        
       <div className="cont">{content}</div>
     
        
    </div>
  );
};
export default Lesson;
