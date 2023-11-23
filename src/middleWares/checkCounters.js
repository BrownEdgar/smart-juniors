const checkCountersMiddleWare = (store) =>(next)=>(action) =>{

    if (action.type === "counters/addCount" ) {
     const counters = store.getState().counters
     if (counters.includes(action.payload)) {
         alert(action.payload)
         console.log(counters)
         return;
     }
    } 
     next(action)
     }

     export default checkCountersMiddleWare