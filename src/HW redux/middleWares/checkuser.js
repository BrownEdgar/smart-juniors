const checkUserMiddleWare = (store) =>(next)=>(action) =>{

        if (action.type === "users/addUser" ) {
         const users = store.getState().users
       
        action.payload.date = new Date().toLocaleTimeString()
        console.log(users, action.payload)
        return [...users, action.payload]
       
        
        }
         next(action)
         }
         export default checkUserMiddleWare
         