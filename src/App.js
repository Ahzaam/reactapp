// import logo from './logo.svg';
import './App.css';

// Person function

const Person = (props) => {
  return (
    <>
      <h1>Name :{props.name}</h1>
      <h2>Last Name :{props.name2}</h2>
    </>
  )
}


// App
function App() {
  const name = 'Ahzam'
  const name2 = 'A380'
  const isTrue  = false


  return (
    <div className="App">
      <h1 cla>Hello {name} {2 + 2}!</h1>
      {isTrue ?(
        <>
          test
        </>
        ): (
          <>
            <h1>hi {name}!</h1>
            <h2>There in no name</h2>
            <Person name={name} name2={name2}/>

            <Person name={name} name2={name}/>
            
          </>
          
        )} 
    </div>
  );
}

export default App;
