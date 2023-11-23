
import checkUserMiddleWare from "./checkuser"

const mainMD = (getDefaultMiddleware) => getDefaultMiddleware().concat(checkUserMiddleWare)

export default mainMD