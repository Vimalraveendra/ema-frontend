import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="text-center">
      <Header/>
       <EmployeeList/>
       <Footer/>
    </div>
  );
}

export default App;
