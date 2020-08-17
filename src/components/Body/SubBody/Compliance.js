
import React from 'react';
import styled from 'styled-components';

const DisplacedStyling = styled.div`
    font-size: 23px;

    .container{
        min-width: 59%;
        margin: 3.5rem auto 10rem;
    }

    ul{
        padding-left: 5rem;
    }
`;

const DisplacedEmployees = () => {
    return (
        <DisplacedStyling >
            <div className='container'>
                <p>
                There are regulatory agencies, federal, state, and local authorities, and contractual requirements. Compliance is only easy if you don’t care how much money you spend.  
                </p>

                <p>
                WorkerServices is designed to be an “aggravation reducer”, an administrative tool to help stay on the right side of compliance. Some of the items that have been posted for easy access on WorkerServices include:
                </p>

                <ul className=''>
                    <li>Company policies and procedures</li>
                    <li>Training videos and records</li>
                    <li>Safety (OSHA) programs</li>
                    <li>Employee notices</li>
                    <li>Fillable Forms</li>
                </ul>

                <p>
                Ready access to policies and procedures can help companies avoid costly fines and penalties. The flexibility of WorkerServices allows each company to use the tool as it best sees fit.  
                </p>
            </div>
        </DisplacedStyling >

    );
};


export default DisplacedEmployees;