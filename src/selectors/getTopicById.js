import { createSelector } from 'reselect'
import topics from '../data/topics';

const getTopics = () => topics;
const getSelectedTopic = (state) => state.config.selectedTopic;
export default createSelector([getTopics,getSelectedTopic], (allTopics, id) => {
    return allTopics.find(x=> x.topicId === id);
})