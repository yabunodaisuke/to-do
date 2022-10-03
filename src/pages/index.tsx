/* eslint-disable func-style */
import React, {useState, useEffect } from 'react'


// const Home: React.FC = () => (
//   <main className='mx-auto max-w-6xl py-6'>
//     <h1 className='text-lg font-bold text-primary-800'>
//       Welcome to Kikagaku Next.js Starter Kit!!
//     </h1>
//   </main>
// );

// export default Home;

// export default function Home() {

//  const [val, setVal] = useState(0)
//  const [msg, setMsg] = useState('set a number')

//  const dochange = (event) => {
//    setVal(event.target.value)
//  }

//  useEffect(() => {
//    let total = 0
//    for ( let i =0; i<= val; i++) {
//      total += 1
//    }
//    setMsg('total: '+ total + '.')
//  })
//    return (
//     <div>
//     <div>{msg}</div>
//     <div className='border-2'>
//       <label>Input:</label>
//       <input type='number' className='form-control'onChange={dochange} />
//     </div>

//     </div>
   
//   )
// }

function useCounter() {
  const [num, setNum] = useState(0)

  const count = () => {
    setNum(num +1)
  }
  return [num, count]
}

function Alert() {
  const [counter, plus] = useCounter()
  return(

    <div >
      <h4 className='text-xl'>count:{counter}</h4>
     <button onClick={plus}>count</button>
    </div>
  )
   
  
}

function Home() {
 
  return (
    <div>
      <Alert />
    </div>
  )
}

export default Home











  





