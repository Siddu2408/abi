import DoctorList from './components/DoctorList';
import 'antd/dist/antd.css';
import data  from "./data"

function App() {
  return (
    <div className="App">
      <DoctorList data={data}></DoctorList>
    </div>
  );
}

export default App;
