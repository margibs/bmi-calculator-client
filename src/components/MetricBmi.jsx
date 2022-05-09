import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorMetric} from "../utils/APIRoutes";

const MetricBmi = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    const calculateBMI = async (event) => {
        event.preventDefault();

        const result = await axios.post(bmiCalculatorMetric, 
            {
                "weight" : weight,
                "height" : height,
            }
        );

        setBmi(result.data.bmi);
        setMessage(result.data.message);

    }

    return (
        <div className="app">
            <div className='container'>
            <form onSubmit={(event) => calculateBMI(event)}>
                <div>
                    <label>Height (cm)</label>
                    <input type='number' value={height} onChange={(event) => setHeight(parseInt(event.target.value))} required/>
                </div>
                <div>
                    <label>Weight (kg)</label>
                    <input type='number' value={weight} onChange={(event) => setWeight(parseInt(event.target.value))}  required/>
                </div>
                <div>
                    <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>

            <div className='center'>
                <h3>Your BMI is: {bmi}</h3>
                <p>{message}</p>
            </div>
            </div>
        </div>
    )
}

export default MetricBmi