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
  const friends = [
    { name: "Aleks", age: 2 },
    { name: "Kaupo", age: -2 }
  ]

  return [
    <div>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
    </div>
  ]
}

export default App