import { addDate, checkEmail } from './';

const mainMiddlewares = (getDefaultMiddleware) => getDefaultMiddleware().concat(addDate, checkEmail);

export default mainMiddlewares;
