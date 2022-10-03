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
export default function Home() {
  const [val, setVal] = useState(1000)
  const [tax1, setTax1] = useState(0)
  const [tax2, setTax2] = useState(0)
  const [msg, setMsg] = useState(<p>set a price....</p>)

  const doChange= (event) => {
    setVal(event.target.value)
  }

  useEffect(() => {
    const res = <div>
      <p>軽減税率(8%): {tax1} 円</p>
      <p>軽減税率(10%): {tax2} 円</p>
    </div>
    setMsg(res)
  })

  useEffect(() => {
    setTax1(Math.floor(val * 1.08))
  })

  useEffect(() => {
    setTax2(Math.floor(val * 1.1))
  })

  return(
    <div>
      <h1>React</h1>
      <div>{msg}</div>
      <div>
        <label>Input:</label>
        <input className='form-control' type='number' onChange={doChange} /> 
      </div>
    </div>
  )
}











  





