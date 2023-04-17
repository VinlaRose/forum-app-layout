
import './others/App.css';
import { NavLink, Route, Routes  } from 'react-router-dom';
import { Home } from './pages/Home';
import { Ques } from './pages/Ques';
import { Ans } from './pages/Ans';


function App() {
  return (
    <div className="App">
     <h1>Forum App</h1>
     <nav>
      <NavLink style={{ margin: '20px' }} to = "/">Home</NavLink>
      <NavLink style={{ margin: '20px' }} to = "/ques">Questions</NavLink>
      
     </nav>


     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/ques" element={<Ques/>} />
      <Route path="/ans/:ansID" element={<Ans/>} />
     </Routes>
    </div>
  );
}

export default App;
