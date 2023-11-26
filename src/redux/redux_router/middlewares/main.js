import checkAdmin from "./checkAdmin";

export const defaultMiddleWare = (getDefaultMiddleware) => getDefaultMiddleware().concat(checkAdmin)