import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'
import ProductCard from './ProductCard'
 

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Jess");
//   const name = 'john'

  function greet() {
    return 'good morning'
  }

//   const obj = { name: 'janhavi', age: 12 }
  const fruits = ['apple', 'banana', 'guava', 'lichi']
   const [dark,setDark]=useState(false);

  return (
    <>
    <h1>19-08-2026</h1>
    <h2>counter</h2>
    <h1>count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>  + </button>
    <button onClick={() => setCount(count - 1)}>  -</button>
    <button onClick={() => setCount(0)}>  Reset </button>

    <h1 style={{color:name==="jess"?"blue":"red"}}>Name: {name}</h1>
    <button onClick={()=>setName(name==="jess"?"ram":"jess")}>Toggle name</button>
    <div  className="box" style={{width:"300px",height:"300px",border:"2px solid black",backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <button style={{width:"200px",height:"40px"}}onClick={() => setDark(!dark)}>
  Toggle Theme dark or light
</button>
          </div>
    {/* last name delete */}

      <ProductCard />

      {/* <h1>hello world</h1>
      <p>this is my first react project {name + 'jjj'}</p>
      <p>this is project {name}</p>
      <div>this is a div</div>
      <h2>this is a h2</h2>
      <p className="test">this is a p tag of class test</p>
      <p>{greet()}</p>
      <p>{greet().toUpperCase()}</p>
      <p>{obj.name}, {obj.age}</p>
      <p>{obj['name']}</p>
      <p style={{ color: 'blue', fontSize: '40px' }}>group 1 </p>
      <img src={heroImg} alt="hero" />

      <div className="box" style={{ background: 'linear-gradient(to bottom, lightgreen,cyan)', borderRadius: '12px', border: '2px solid black', width: '500px', height: '500px', marginLeft: '40px' }}>
        <h1 style={{ marginBottom: '20px' }}>Dyson</h1>
        <h2>Engineered to capture fine dust and allergens.</h2>
        <h3>Traps 99.99% of particles as small as 0.3 microns.</h3>
        <ul>
          <li>Powerful Suction</li>
          <li>Cordless Freedom</li>
          <li>Advanced Filtration</li>
          <li>Easy to Clean</li>
          <li>Lightweight Design</li>
        </ul>
      </div>

      <div
        className="box"
        style={{
          border: '3px solid #333',
          width: '500px',
          height: 'auto',
          margin: '40px auto',
          padding: '20px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #f9f9f9, #e6e6e6)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        <h1 style={{ marginBottom: '10px', color: '#4B0082', fontSize: '2.5rem', textAlign: 'center' }}>
          Dyson
        </h1>

        <h2 style={{ marginBottom: '10px', color: '#333', fontWeight: '600', textAlign: 'center' }}>
          Engineered to capture fine dust and allergens.
        </h2>

        <h3 style={{ marginBottom: '20px', color: '#555', fontWeight: '400', textAlign: 'center' }}>
          Traps 99.99% of particles as small as 0.3 microns.
        </h3>

        <ul style={{ listStyle: 'none', padding: '0', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li style={{ marginBottom: '8px' }}>✨ Powerful Suction</li>
          <li style={{ marginBottom: '8px' }}>🔋 Cordless Freedom</li>
          <li style={{ marginBottom: '8px' }}>🌬️ Advanced Filtration</li>
          <li style={{ marginBottom: '8px' }}>🧼 Easy to Clean</li>
          <li style={{ marginBottom: '8px' }}>⚖️ Lightweight Design</li>
        </ul>

        <p style={{ marginTop: '20px', textAlign: 'center', fontWeight: 'bold', color: '#4B0082' }}>
          Experience the Dyson Difference Today!
        </p>
      </div>

      <h1>14-08-2026</h1>

      <p>{fruits[0]}</p>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul> */}
    </>
  )
}

export default App