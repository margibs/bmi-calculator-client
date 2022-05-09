import { useState } from 'react';
import axios from 'axios';

import { bmiCalculatorMetric} from "../utils/APIRoutes";

const MetricBmi = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [msg, setMsg] = useState('');
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const calculateBMI = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            const result = await axios.post(bmiCalculatorMetric, 
                {
                    "weight" : weight,
                    "height" : height,
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

export default MetricBmi