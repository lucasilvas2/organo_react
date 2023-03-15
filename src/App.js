
import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Forms';
import TextFilder from './components/TextField';

function App() {
  const [employees, setEmployess] = useState('')
  const newEmployees = (employees) => {
    console.log(employees)
  }
  return (
    <div className="App">
      <Banner />
      <Form employeesRegistered={newEmployees} />
    </div>
  );
}

export default App;
