import addDate from "./addDate";
import checkId from "./checkId";

export const defaultMiddleWare = (getDefaultMiddleware) => getDefaultMiddleware().concat(addDate, checkId)