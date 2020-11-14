import { createSelector } from 'reselect'
import topics from '../data/topics';

const getTopics = () => topics;
const getApp = (state) => state.config.app;
export default createSelector([getTopics,getApp], (allTopics, app) => {
    return allTopics.filter(x=> x.appId === app);
})