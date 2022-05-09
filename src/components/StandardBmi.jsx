import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorStandard } from "../utils/APIRoutes";

const StandardBmi = () => {

    const [weight, setWeight] = useState(0);
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [bmi, setBmi] = useState('');

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
    }

    return (
        <>
            <form onSubmit={(event) => calculateBMI(event)} className="mb-5">
                <div className="form-group row mb-3 mt-2">
                    <label className='col-md-3 col-form-label'>Height (ft)</label>
                    <div className="col-md-3">
                        <input type='number' className="form-control" value={feet} onChange={(event) => setFeet(parseInt(event.target.value))} required/>
                    </div>

                    <label className='col-md-3 col-form-label'>(in)</label>
                    <div className="col-md-3">
                        <input type='number' className="form-control" value={inches} onChange={(event) => setInches(parseInt(event.target.value))} required/>
                    </div>
                </div>
                <div className="form-group row mb-3">
                    <label className='col-sm-3 col-form-label'>Weight (lbs)</label>
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

export default StandardBmi;