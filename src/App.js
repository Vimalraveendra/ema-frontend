import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="text-center">
      <Header/>
       <EmployeeList/>
    </div>
  );
}

export default App;
