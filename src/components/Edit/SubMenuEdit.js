       
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'

const Styling = styled.div`
    min-height: 100vh;
    background-color: #f0f0f5;
`;

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuName: '',
            submenuId: '',
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
        const urlsubmenuId = parseInt(window.location.pathname.split('/')[3])

        //takes the menu name and capitalizes the first letter of the name
        const upperCaseMenuName = (lowerCaseMenuName.charAt(0).toUpperCase() + lowerCaseMenuName.slice(1))

        //takes the menu name and finds the corresponding menu array's id
        const menuId = (this.props.menus.filter(item => item.name === upperCaseMenuName)[0].id) - 1


        //finds the submenu that matches the id from the url
        const submenuArray = this.props.menus[menuId].submenu.filter(item => item.id === urlsubmenuId)[0]

        await  this.setState({
            menuName: lowerCaseMenuName,
            submenuId: submenuArray.id,
            submenuheader: submenuArray.header,
            submenubody: submenuArray.body
            })
        

        // console.log(this.state)
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
            submenuheader: this.state.submenuheader,
            submenubody: this.state.submenubody,
        }

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + this.props.token
            }
        }


        await axios.put('http://127.0.0.1:8000/api/submenu/update/' + this.state.submenuId, data, config)
            .then(response => {
                this.props.setMenu(response.data.data);
                console.log(this.state.menuName)
                this.props.history.push(`/${this.state.menuName}`)
                
                alert('successfully updated')
            })
            .catch(function (error) {
                console.log(error);
            })

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
                                <input onChange={this.handleHeader} value={this.state.submenuheader} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Header" required/>
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea rows='16' onChange={this.handleBody} value={this.state.submenubody} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Body" required/>
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


