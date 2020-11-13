import { createSelector } from 'reselect'
import topics from '../data/topics';

const getTopics = () => topics;
const getType = (state) => state.config.type;
export default createSelector([getTopics,getType], (allTopics, type) => {
    return allTopics.filter(x=> x.type === type);
})