import React ,{useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const decreaseHandle = () =>{
        setCount(count-1);
    }

    const increaseHandle = () =>{
        setCount(count+1);
    }
    const resetHandle = () =>{
        setCount(0);
    }

  return (
    <div>
        <div className="w-full h-screen bg-zinc-700 flex justify-center items-center flex-col gap-5"> 
            <div className="font-semibold text-2xl text-blue-300 font-medium">Increment & Decrement</div>
            <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
                <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={decreaseHandle}>-</button>
                <div>
                    <h1 className="font-bold gap-12 text-5xl">{count}</h1>
                </div>
                <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={increaseHandle}>+</button>
            </div>
            <button onClick={resetHandle}
            className ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-xl "
            >reset</button>
        </div>
    </div>
  )
}

export default Counter