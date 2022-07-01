import './App.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import MiddleBar from './components/MiddleBar';
import Endbar from './components/Endbar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='Rightside'>
        <div><Topbar/></div>
        <MiddleBar/>
        <div><Endbar/></div>
      </div>
    </div>
  );
}

export default App;
