import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'
import ReactQuill from 'react-quill';

import Application from '../../components/img/pics/application.jpg';


const Styling = styled.div`
    min-height: 100vh;
    background-color: #f0f0f5;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;

    h1, h2, h3 {
        color: green;
        text-shadow: 0px 1px 0px rgba(255,255,255,.8);
    }

    #quill{
        color: black;
        background-color: white;
    }
`;

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuName: '',
            submenuId: '',
            submenuname: '',
            submenuheader: '',
            submenubody: ''
        }

        this.handleBody = this.handleBody.bind(this);
        this.handleHeader = this.handleHeader.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        //gets the menu name from the url 
        const lowerCaseMenuName = window.location.pathname.split('/')[1]

        //gets the submenuId from the url
        const urlsubmenuId = parseInt(window.location.pathname.split('/')[3])

        //takes the menu name and capitalizes the first letter of the name
        const upperCaseMenuName = (lowerCaseMenuName.charAt(0).toUpperCase() + lowerCaseMenuName.slice(1))

        //takes the menu name and finds the corresponding menu array's id
        const menuId = (this.props.menus.filter(item => item.name === upperCaseMenuName)[0].id) - 1


        //finds the submenu that matches the id from the url
        const submenuArray = this.props.menus[menuId].submenu.filter(item => item.id === urlsubmenuId)[0]

        await this.setState({
            menuName: lowerCaseMenuName,
            submenuId: submenuArray.id,
            submenuname: submenuArray.name,
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


    handleBody(value) {
        this.setState({
            submenubody: value,
        })
    }



    async handleSubmit(event) {
        event.preventDefault();

        if (this.state.submenubody.length >= 6000 && this.state.submenuheader.length >= 255) {
            alert('Content is too long')
        }

        else {

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

    }

    modules = {
        toolbar: [
            //   [{ 'header': [1, 2, false] }],
            // [{ size: ['small', false, 'large', 'huge'] }],
            [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"]}],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link'],
            // ['clean']
        ],

        clipboard: {
            matchVisual: false,
        },
    }

    formats = [
        'size',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link',
    ]



    render() {
        // console.log(this.props)

        return (
            <Styling className='' style={{ backgroundImage: `url(${Application})` }}>
                {this.props.isLoggedIn
                ?
                <div className='container px-5' >
                    <h1 className='text-center pt-5'>Editing {this.state.submenuname}</h1>
                    <form onSubmit={this.handleSubmit} className='mt-5'>
                        <div className="form-group">
                            <label><h3><strong>Header</strong></h3></label>
                            <input onChange={this.handleHeader} value={this.state.submenuheader} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Header" required />
                        </div>
                        <div className="form-group">
                            <label><h3><strong>Body</strong></h3></label>
                            {/* <textarea rows='16' onChange={this.handleBody} value={this.state.submenubody} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Body" required/> */}

                            <ReactQuill
                                id='quill'
                                ref={(el) => this.quill = el}
                                value={this.state.submenubody}
                                onChange={(e) => this.handleBody(e)}
                                theme='snow'
                                modules={this.modules}
                                formats={this.formats}
                            />
                        </div>
                        <br></br>
                        <input className='btn btn-lg btn-primary' type="submit" value="Save" />
                    </form>
                </div>
                :
                <div>
                    <h1>Must Be Logged In</h1>
                </div>
                }
            </Styling>
        )


    }
}


export default withRouter(Edit);


