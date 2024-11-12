const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

//git

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/GertenP">Gerten Pilv</a>
    </div>
  )
}

const App = () => {
  const friends = [ "Kaupo Sokhin", "Kardo SOkhin"]

  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App