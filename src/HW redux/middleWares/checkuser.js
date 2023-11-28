const checkUserMiddleWare = (store) =>(next)=>(action) =>{

        if (action.type === "users/addUser" ) {
        action.payload.date = new Date().toLocaleTimeString()
        }
         next(action)
         }
         export default checkUserMiddleWare
         