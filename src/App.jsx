import Footer from "./Footer.jsx"

function App() {
  let name = "James"

  const sum = () => {
    console.log(5+2)
  }
  return (
    <div>
    <h1>hello {name}</h1>
    <h2>How you doing?</h2>
    <button onClick={sum}>Sumar</button>
    <Footer />
    </div>
  )
}

export default App
