

import React from 'react';
import styled from 'styled-components';

const DisplacedStyling = styled.div`
`;

const DisplacedEmployees = () => {
    return (
        <DisplacedStyling >
            <div className='subpage container'>
                <p>
                Service Contract Act (SCA/SCLS) employees are unique, in that when a contractor gets a new SCA/SCLS job, the contract often brings with it an inherited set of new employees. For the inherited worker, life may not initially change much: on Friday worked for Company A, on Monday working for Company B. The only noticeable difference may be the name of who signs the paycheck.
                </p>

                <p>
                How does the contractor truly make these inherited workers part of their company? How does the worker know what is expected by their new employer? And how does the contractor show to the Contracting Officer their ducks are in a row?
                </p>

                <p>
                WorkerServices is a tool that government contractors can use in their onboarding process for these newly inherited SCA/SLCS employees. This is especially beneficial for contracts in a new geographic location. Through WorkerServices, companies can post:
                </p>

                <ul className=''>
                    <li>Employee benefit program policy forms and documents, to include items for Health, Life and other types of Insurance, Retirement Plan forms and notices, and Paid Time Off policies, among others</li>
                    <li>Company specific policies, programs and procedure</li>
                    <li>OSHA Safety program forms, documents, policies, and videos</li>
                    <li>Job-specific training videos</li>
                    <li>Wage determinations</li>
                    <li>Tax and withholding forms</li>
                    <li>Employment Applications</li>
                    <li>Background check forms</li>
                </ul>

                <p>WorkerServices is a communication tool that spans distances when face to face just isn’t possible. 
                </p>
            </div>
        </DisplacedStyling >

    );
};


export default DisplacedEmployees;