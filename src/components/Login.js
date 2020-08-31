import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

import Tower from '../components/img/pics/industries.jpg';

const LoginStyle = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    background-size: cover;
    background-position: 50%;
    padding:  50px;

   .contained{
    margin: 0px auto;
    color: #336702;
    height: 45vh;
    width: 40vw;
    border: 3px solid #336702;
    border-radius: 25px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
    background-color: white;
    opacity: .8;
    }

    form{
        color: black;
        margin: 5rem;
    }

    .btn{
        background-color: #336702; 
        color: white;
    }

    h1{
        margin-top: 25px;
        text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1700px){
        .contained{
            overflow-y: auto;
        }

        form{
            margin: 1rem;
        }
    }

    @media screen and (min-width: 0px) and (max-width: 768px){
        padding: 20px 0px;
        height: 100vh;

        .contained{
            height: 65vh;
            width: 80vw;
        }

        form{
            margin: 1rem;
        }
    }
`;

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            token: '',
            user: '',
            errors: {
                email: '',
                password: '',
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    value.includes(String.fromCharCode(64))
                        && value.includes(String.fromCharCode(46))
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters or longer!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }

    async handleSubmit(event) {
        event.preventDefault();

        if (validateForm(this.state.errors)) {

            // this.props.handleLog()

            const data = {
                email: this.state.email,
                password: this.state.password
            }

            // console.log(data)

            await axios.post('http://127.0.0.1:8000/api/login', data)
                .then(response => {
                    if (response.data.token) {
                        let result = response.data
                        this.props.setBearToken(result.token, result.user)
                        this.props.handleLog()
                        // console.log(response.data);

                        window.localStorage.setItem('token', JSON.stringify(result.token))
                        window.localStorage.setItem('user', JSON.stringify(result.user))
                        window.localStorage.setItem('isLoggedIn', JSON.stringify(true))
                        // return response.data
                        this.props.history.push('/')
                        console.log('logged in succesfully')
                    }
                    else {
                        alert('incorrect password')
                    }
                })
                .catch(function (error) {

                    if (error.response.status === 422) {
                        alert('email was not found')
                    }
                    else if (error.response.status === 401) {
                        alert('incorrect password')
                    }
                    else {
                        console.log(error);
                    }
                })

        }

        else {
            // console.error('Invalid Form')
            window.alert('Form was entered incorrectly, please try again')
        }

    }

    render() {
        const { errors } = this.state
        return (
            <LoginStyle style={{ backgroundImage: `url(${Tower})` }}>
                <div >
                    <div className='contained'>
                        <div>
                            <h1>Login</h1>

                            <form onSubmit={this.handleSubmit} className='mt-3' noValidate>

                                <div className="email form-group">
                                    <label htmlFor='email'>Email address</label>
                                    <input onChange={this.handleChange} name='email' type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" noValidate />
                                    {errors.email.length > 0 &&
                                        <span className='error text-danger'>{errors.email}</span>
                                    }
                                </div>

                                <div className="password form-group">
                                    <label>Password</label>
                                    <input onChange={this.handleChange} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" noValidate />
                                    {errors.password.length > 0 &&
                                        <span className='error text-danger'>{errors.password}</span>
                                    }
                                </div>

                                <input className='btn btn-lg' type="submit" value="Login" />

                            </form>
                        </div>
                    </div>
                </div>
            </LoginStyle>
        )
    }
}



export default withRouter(Login);