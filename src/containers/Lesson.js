import React, { useEffect, useState } from "react";
import "./Lesson.scss";
import getLessonById from "../selectors/getLessonById";
import { useSelector, useDispatch } from "react-redux";
import Image from "../components/Image";
import Text from "../components/Text";
import lesson from "../reducers/lesson";
const generateContent = (lesson) => {
  switch (lesson.type) {
    case "text":
      return <Text {...lesson} />;
    case "image":
      return <Image {...lesson} />;
    default:
      return <div></div>;
  }
};
const Lesson = () => {
  const les = useSelector(getLessonById);
  const [index, setIndex] = useState(0);
  const [lessons, setLessons] = useState(
    les.lessons.map((l) => ({ ...l, view: false }))
  );
  const updateView = (i) => {
    setLessons((prevState)=> {
        const clone = [...prevState];
        clone[i].view = true;
        return clone
    })
  }
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
  <li key={i} className={l.view ? 'hasView': ''}>{i}</li>
  )) 
  const content = lessons[index].content.map((l, index) => (
    <span key={`${l.lessonId}-${index}`}>{generateContent(l)}</span>
  ));

  return (
    <div className="lessonCard">
        <ul className="bullets">
            {bullets}
        </ul>
      <button onClick={prevSlide} disabled={0=== index}> {`<`} </button>
      <button onClick={nextSlide} disabled={lessons.length-1 === index}> {`>`} </button>
      <div>{content}</div>
    </div>
  );
};
export default Lesson;
