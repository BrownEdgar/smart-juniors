const myFirstMiddleWare = (store) =>(next)=>(action) =>{

    if (action.type === "users/addUser") {
      const newpayload = {
        id:Math.random().toString(36).slice(2,8),
        username: action.payload
    }
        action.payload = newpayload  
        console.log(action)
    }
    
    next(action)
    }
    export default myFirstMiddleWare