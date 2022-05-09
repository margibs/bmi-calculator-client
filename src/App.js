import { Routes, Route } from 'react-router-dom';
import { StandardBmi, MetricBmi, NavBar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className='container'>
    <NavBar />
    <div className='row'>
      <h2 className='text-center mt-3'>BMI Calculator</h2>
      <div className="col-md-4 offset-md-4" style={{border:"1px black"}}>
        <Routes>
          <Route path="/" element={<StandardBmi />} />
          <Route path="/metric" element={<MetricBmi />} />
        </Routes>
      </div>
    </div>
  </div>
  );
}

export default App;
