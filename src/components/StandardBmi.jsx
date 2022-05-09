import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorStandard } from "../utils/APIRoutes";

const StandardBmi = () => {

    const [weight, setWeight] = useState(0);
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    const calculateBMI = async (event) => {
        event.preventDefault();

        const result = await axios.post(bmiCalculatorStandard, 
            {
              "weight" : weight,
              "feet" : feet,
              "inches" : inches
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
                    <label>Height (ft)</label>
                    <input type='number' value={feet} onChange={(event) => setFeet(parseInt(event.target.value))} required/>
                    <label>(in)</label>
                    <input type='number' value={inches} onChange={(event) => setInches(parseInt(event.target.value))} required/>
                </div>
                <div>
                    <label>Weight (lbs)</label>
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

export default StandardBmi;