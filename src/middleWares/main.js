import checkCounters from './checkCounters';

const mainMiddleWares = (getDefaultMD) => getDefaultMD().concat(checkCounters)

export default mainMiddleWares