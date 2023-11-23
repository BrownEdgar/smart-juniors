import checkCountersMiddleWare from "./checkCounters"
// import checkUsersMiddleWare from "./checkusers"
import myFirstMiddleWare from "./myfirstcheck"

const mainMiddleWare = (getDefaultMiddleware) => getDefaultMiddleware().concat(myFirstMiddleWare).concat(checkCountersMiddleWare)

export default mainMiddleWare