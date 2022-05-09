import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorStandard } from "../utils/APIRoutes";

const StandardBmi = () => {

    const [weight, setWeight] = useState(0);
    const [feet, setFeet] = useState(0);
    const [inches, setInches] = useState(0);
    const [bmi, setBmi] = useState('');
    const [msg, setMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const calculateBMI = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const result = await axios.post(bmiCalculatorStandard, 
                {
                "weight" : weight,
                "feet" : feet,
                "inches" : inches
                }
            );

            setBmi(result.data.bmi);
            setMsg(result.data.message);
            setIsLoading(false);
            setIsError(false);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
        }
    }

    return (
        <>
            {isError && 
                <div className="alert alert-danger">
                    <strong>Network Error</strong> Please run the backend server.
                </div> 
            }
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
                    {
                        !isLoading ?
                            <button className='btn btn-primary btn-block' type='submit'>Submit</button>
                        :
                            <div className="spinner-border" role="status">
                                <span className="sr-only"></span>
                            </div>
                    }
                </div>
                
            </form>

            <div className='text-center'>
                <h3>BMI: {bmi} <small className="text-muted">{msg}</small></h3>
            </div>
        </>
    )
}

export default StandardBmi;