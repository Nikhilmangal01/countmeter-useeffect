import react,{useEffect, useState} from 'react'



const UseState=()=>{

  
  
  const[count,setCount] = useState(0)
  console.log(count);

  useEffect(()=>{

    alert("Your Count Is Now: "+ count);

  },[count])
  
    
    const handleIncrement=()=>{
      if (count<100) {
        
        setCount(count+1);
      }
    }
    
    const handleDecrement=()=>{
  if (count>0) {
    
  setCount(count-1);
  
  }
}



 

    return (
      
    <div>
       <div className="box">
        <div className="text">
      <h1>Count: <div className="box1">{count}</div> </h1><br />
<div className="gap">
<button onClick={handleIncrement}>Increment </button>
<button onClick={handleDecrement}>Decrement </button>
</div>


      
    </div>
    </div>
    
    </div>
     
  )
}

export default UseState




