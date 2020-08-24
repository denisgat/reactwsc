import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Body = styled.span`
`;


function HomeBody() {
    return (
        <Body>
            <div className='fourrow'>
                <div className='topscript'>
                    <div className='col-12'>
                        <p>
                            WorkerServices can be utilized by any organization with the need for flexibility in
                            collecting forms, posting files, and distributing documents electronically and securely.
                            It is a documentation hub, collector, and distributor, all in one.
                        </p>
                    </div>
                </div>
                <div className='grid row text-center'>
                    <div className='column col-lg-3 p-0'>
                        <p><strong>Remote Employees</strong></p>
                        <p className='subbodyheader'>
                            The workforce is spread out and mobile, but the company office is not.
                            </p>
                        <Link to='/application/remote-employees' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className='column col-lg-3 p-0'>
                        <p><strong>Displaced Workers</strong></p>
                        <p className='subbodyheader'>
                            Inherited Service Contract Act (SCA/SCLS) employees work for you now.
                        </p>
                        <Link to='/application/displaced-workers' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className='column col-lg-3 p-0'>
                        <p><strong>Compliance</strong></p>
                        <p className='subbodyheader'>
                            If you're not in compliance, nothing else makes any difference.
                        </p>
                        <Link to='/application/compliance' className='btn'>
                            Learn More
                        </Link>
                    </div>
                    <div className='column col-lg-3 p-0'>
                        <p><strong>Forms Library</strong></p>
                        <p className='subbodyheader'>
                            A sampling of the fillable form submission process.
                        </p>
                        <Link to='/application/forms-library' className='btn'>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </Body>
    );
}

export default HomeBody;