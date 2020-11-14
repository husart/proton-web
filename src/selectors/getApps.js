import { createSelector } from 'reselect'
import apps from '../data/apps';

const getApps = () => apps;
const getType = (state) => state.config.type;
export default createSelector([getApps,getType], (allApps, type) => {
    return allApps.filter(x=> x.type === type);
})