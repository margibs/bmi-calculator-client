import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorMetric} from "../utils/APIRoutes";

const MetricBmi = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const calculateBMI = async (event) => {
        event.preventDefault();

        const result = await axios.post(bmiCalculatorMetric, 
            {
                "weight" : weight,
                "height" : height,
            }
        );
        setBmi(result.data.bmi);
    }

    return (
        <>
            <form onSubmit={(event) => calculateBMI(event)} className="mb-5">
                <div className="form-group row mb-3 mt-2">
                    <label className='col-sm-3 col-form-label'>Height (cm)</label>
                    <div className="col-sm-9">
                        <input type='number' className="form-control" value={height} onChange={(event) => setHeight(parseInt(event.target.value))} required/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className='col-sm-3 col-form-label'>Weight (kg)</label>
                    <div className="col-sm-9">
                        <input type='number' className="form-control" value={weight} onChange={(event) => setWeight(parseInt(event.target.value))}  required/>
                    </div>
                </div>
                <div className='col text-center'>
                    <button className='btn btn-primary btn-block' type='submit'>Submit</button>
                </div>
            </form>
            <div className='text-center'>
                <h3>BMI: {bmi}</h3>
            </div>
        </>
    )
}

export default MetricBmi