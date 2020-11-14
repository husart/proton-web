import { createSelector } from 'reselect'
import lessons from '../data/lessons';
import getTopicById from './getTopicById';

const allLessons = () => lessons;
export default createSelector([allLessons, getTopicById], (lessons, topic) => {
    if(!topic) {
        return {lessons:[]}
    }
    return lessons.find(x=> x.lessonId === topic.lessonId)
})