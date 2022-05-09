import { Routes, Route } from 'react-router-dom';
import { StandardBmi, MetricBmi, NavBar } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className='container'>
    <NavBar />
    <div className='row'>
      <h2 className='center'>BMI Calculator</h2>
      <Routes>
        <Route path="/" element={<StandardBmi />} />
        <Route path="/metric" element={<MetricBmi />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;
