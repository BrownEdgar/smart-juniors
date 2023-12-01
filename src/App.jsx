// // import { useDispatch, useSelector } from "react-redux"
// // import { addCount,  } from "./users/Karen/Redux/feuters/count/countSlice"
// // import { minCount } from "./users/Karen/Redux/feuters/count/countSlice"

// import { useDispatch, useSelector } from "react-redux"
// import { addUsers, removeUser } from "./users/Karen/Redux/feuters/count/countSlice"
// // import { addCount, minCount } from "./users/Karen/Redux/feuters/count/countSlice"

// // export default function App() {
// //   const state=useSelector((state)=>state)

// //   const dispatch = useDispatch()

// //   const handleAdd=()=>{
// //     dispatch(addCount())
// //   } 

// //   const handleMinus =()=>{
// //     dispatch(minCount())
// //   }



// //   return (
// //     <div>
// //       <h1>Hello react in git {JSON.stringify(state.count)}</h1>
// //       <button onClick={handleAdd}>Add count</button>
// //       <button onClick={handleMinus}>Minus</button>
// //     </div>
// //   )
// // }



// export default function App() {
// const state=useSelector((state)=>state)
// const dispatch=useDispatch()

// // state.subscribe(()=>console.log(state.getState))

// // const handleClick=()=>{
// //   dispatch(addCount())
// // }

// // const handleMinus=()=>{
// //   dispatch(minCount())
// // }

// const handleAddUsers=()=>{
//   dispatch(addUsers())
// }

// const handleRemoveUsers=()=>{
//   dispatch(removeUser())
// }

//   return (
//     <div>
//       {/* <h1>Count is a {stat.count}</h1> */}
//       {/* <button onClick={handleClick}>Add count</button>
//       <button onClick={handleMinus}>Minus count</button> */}
//       <h1>The our users {JSON.stringify(state.count)}</h1>
//       <button onClick={handleAddUsers}>Add users</button>
//       <button onClick={handleRemoveUsers}>Remove users</button>
//     </div>
//   )
// }
