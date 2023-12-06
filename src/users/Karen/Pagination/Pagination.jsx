

export default function Pagination({PostsTotal,perpage,changePage}) {

const arr = [] 

for (let i = 1,total = Math.ceil(PostsTotal/perpage); i <= total; i++) {
    arr.push(i)
    
}



  return (
    <ul className="PostsTotal">
       {
        arr.map(num =>{
            return(
                <li key={num} onClick={() => changePage(num)}>{num}</li>
            )
        })
       } 
    </ul>
  )
}
