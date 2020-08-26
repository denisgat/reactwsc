import React from 'react';
import styled from 'styled-components';

const Styling = styled.div`
`;

const RemoteEmployees = (props) => {
    return (
        <Styling >
            <div className='subpage container'>
                <p>
                    {props.menus[1].submenu[0].body}
                    {/* For a company with a decentralized work force, providing required notices and 
                    documents to employees can be challenging. Receiving paperwork from these same remote employees, 
                    securely and filled out completely, can be equally challenging. WorkerServices provides a secure 
                    means to post items for employee use and reference, along with the ability for employees to upload documents back to the home office. */}
                </p>

                {/* <p>
                    What types of files can be securely transmitted and stored?
                </p>

                <ul className=''>
                    <li>Fillable forms with attachments</li>
                    <li>Scanned documents</li>
                    <li>Employment Applications</li>
                    <li>Benefits Enrollment forms</li>
                    <li>Time sheets</li>
                    <li>Job site photographs and drawings</li>
                    <li>Punch lists</li>
                    <li>Company policy and procedure documents</li>
                    <li>Safety and attendance records</li>
                    <li>Certification cards</li>
                    <li>Training videos and attendance sheets</li>
                </ul>

                <p>Sometimes it is the tasks that should be easiest (getting a timecard submitted on time, receiving an insurance beneficiary form, 
                    finding a copy of an employee’s most recent OSHA training)
                that take the most time. Fundamentally, WorkerServices is a tool that, with proper use, greatly simplifies the task at hand.
                </p> */}
            </div>
        </Styling >

    );
};

export default RemoteEmployees;