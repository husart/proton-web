import { createSelector } from 'reselect'
import topics from '../data/topics';

const getTopics = () => topics;
const getApp = (state) => state.config.app;
const getSelectedTopic = (state) => state.config.selectedTopic;
export default createSelector([getTopics,getSelectedTopic], (allTopics, id) => {
    return allTopics.find(x=> x.topicId === id);
})