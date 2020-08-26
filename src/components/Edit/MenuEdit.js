
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components'
import axios from 'axios'

const Styling = styled.div`
    min-height: 100vh;
    background-color: #f0f0f5;
`;


class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: '',
            menuId: '',
            menuheader: '',
            menubody: ''

        }

        this.handleBody = this.handleBody.bind(this);
        this.handleHeader = this.handleHeader.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        // const menuName= window.location.pathname.split('/')[1]
        // const console.log(window.location.pathname.split('/')[2])
        const menuId = parseInt(window.location.pathname.split('/')[3])
        const newmenuArray = this.props.menus.filter(item => item.id === menuId)[0]

        await this.setState({
            menuId: newmenuArray.id,
            menuheader: newmenuArray.header,
            menubody: newmenuArray.body
        })
    }


    handleHeader(event) {
        this.setState({
            menuheader: event.target.value,
        })
    }


    handleBody(event) {
        this.setState({
            menubody: event.target.value,
        })
    }



    async handleSubmit(event) {
        event.preventDefault();


        const data = {
            menuheader: this.state.menuheader,
            menubody: this.state.menubody,
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + this.props.token
            }
        }

        // console.log(data, config, this.state.menuId)

        await axios.put('http://127.0.0.1:8000/api/menu/update/' + this.state.menuId, data, config)
            .then(response => {
                // console.log(response.data.data);
                this.props.setMenu(response.data.data);
                this.props.history.push('/')
            })
            .catch(function (error) {
                console.log(error);
            })

        // console.log(result)

        // console.log(this.state)

    }



    render() {
        // console.log(this.props)

        return (
            <Styling className=''>
                <div className='container px-5' >
                    <h1 className='text-center pt-5'>Editing</h1>
                    <form onSubmit={this.handleSubmit} className='mt-5'>
                        <div className="form-group">
                            <label>Header</label>
                            <input onChange={this.handleHeader} value={this.state.menuheader} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Header" required />
                        </div>
                        <div className="form-group">
                            <label>Body</label>
                            <textarea rows='8' onChange={this.handleBody} value={this.state.menubody} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Enter Body Text" required />
                        </div>
                        <br></br>
                        <input className='btn btn-lg btn-primary' type="submit" value="Save" />
                    </form>
                </div>
            </Styling>
        )
    }
}


export default withRouter(Edit);


