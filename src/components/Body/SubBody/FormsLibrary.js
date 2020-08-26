
import React from 'react';
import styled from 'styled-components';

const DisplacedStyling = styled.div`
`;

const DisplacedEmployees = (props) => {
    return (
        <DisplacedStyling >
            <div className='subpage container'>
                <p>
                    {props.menus[1].submenu[3].body}
                {/* If a form can be filled out with a pen, it can be converted to a fillable form and posted to WorkerServices. If assistance is needed with this, contact us to have us convert, create, and post the form for you. */}
                </p>

                {/* <p>
                Some of the forms that have been created for use on WorkerServices include:
                </p>

                <ul className=''>
                    <li>Employment Applications</li>
                    <li>background check forms</li>
                    <li>Right to Continuation of Group Health Insurance Coverage(COBRA forms)</li>
                    <li>Non-Disclosure Agreements</li>
                    <li>Direct Deposit forms</li>
                    <li>Insurance application and beneficiary forms</li>
                    <li>Open enrollment election forms</li>
                    <li>401(k) distribution, deferral, and beneficiary forms</li>
                    <li>Employee Loan Repayment Agreements</li>
                    <li>Apprenticeship Instruction Agreements</li>
                    <li>Tax and withholding forms</li>
                    <li>Emloyee Time Sheets</li>
                    <li>Employee Attendance Record forms</li>
                </ul>

                <p>WorkerServices is a communication tool that spans distances when face to face just isn’t possible. 
                </p> */}
            </div>
        </DisplacedStyling >

    );
};


export default DisplacedEmployees;