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
  const name = "Aleks"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Kaupo" age={26 + 10}/>
      <Hello name={name} age={age}/>
      <Footer />
    </div>
  )
}

export default App