import React,{useEffect, useState} from 'react'

const Counter=()=>{
    const[counter,setCounter] = useState(0);
    console.log("button cilcked");
    const handleadd=()=>{
        console.log("clicked");
        setCounter(prev=>prev+1);
    }
    useEffect(()=>{
    
        handleadd();
    },[])
    return(
        <>
            <div>
             <h1>counter: {counter}</h1>
             <button onClick={handleadd}>button</button>
             {/* <button onClick={()=>setCounter(counter+1)}>button</button>
             <button onClick={()=>setCounter(0)}>Reset</button>
             <button onClick={()=>setCounter(prev=>prev+1)}>+</button>
             <button onClick={()=>setCounter(prev=>prev-1)}>-</button>
             <button onClick={handleadd()}>handleadd</button> */}

            </div>
        </>
    )
}

export default  Counter;

