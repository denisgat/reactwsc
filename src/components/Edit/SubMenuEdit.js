       
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const Styling = styled.div`
    /* min-height: 100%; */
    background-color: #f0f0f5;
`;

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            token: '',
            submenuheader: '',
            submenubody: ''

        }

        this.handleBody = this.handleBody.bind(this);
        this.handleHeader = this.handleHeader.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

  async  componentDidMount(){
        //gets the menu name from the url 
        const lowerCaseMenuName= window.location.pathname.split('/')[1]

        //gets the submenuId from the url
        const submenuId = parseInt(window.location.pathname.split('/')[3])

        //takes the menu name and capitalizes the first letter of the name
        const upperCaseMenuName = (lowerCaseMenuName.charAt(0).toUpperCase() + lowerCaseMenuName.slice(1))

        //takes the menu name and finds the corresponding menu array's id
        const menuId = (this.props.menus.filter(item => item.name === upperCaseMenuName)[0].id) - 1


        //finds the submenu that matches the id from the url
        const submenuArray = this.props.menus[menuId].submenu.filter(item => item.id === submenuId)[0]

        
        await  this.setState({
                submenuheader: submenuArray.header,
                submenubody: submenuArray.body
        })

        // console.log(this.state.submenuArray)
    }


    handleHeader(event) {
        this.setState({
            submenuheader: event.target.value,
        })
    }


    handleBody(event) {
        this.setState({
            submenubody: event.target.value,
        })
    }



    async handleSubmit(event) {
        event.preventDefault();

        const data = {
            submenuheader: this.state.title,
            submenubody: this.state.body,
        }

        console.log(data)

        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data',
        //         'Authorization': 'Bearer ' + this.props.token
        //     }
        // }


        // await axios.put('http://127.0.0.1:8000/api/post/create', data, config)
        //     .then(response => {
        //         // console.log(response.data.data);
        //         // return response.data
        //         this.props.setPosts(response.data.data);
        //         this.props.history.push('/' + this.state.menus.name)
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     })

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
                                <input onChange={this.handleHeader} value={this.state.submenuheader} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Post Title" required/>
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea rows='16' onChange={this.handleBody} value={this.state.submenubody} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Post Body" required/>
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


