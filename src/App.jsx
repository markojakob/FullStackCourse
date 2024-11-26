 /*
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
*/

const Hello = (props) => {
  const {name, age } = props

  const bornYear = () => new Date().getFullYear() - age
  

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = "Mark"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Mark" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App 