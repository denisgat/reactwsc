
import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
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
        /* min-height: 40vh; */
    }
`;


class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            menuName: '',
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
            menuName: newmenuArray.name,
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


    handleBody(value) {
        this.setState({
            menubody: value
        })
    }



    async handleSubmit(event) {
        event.preventDefault();

        if (this.state.menubody.length > 3000 && this.state.menuheader.length > 255) {
            alert('Content is too long')
        }

        else {

            const data = {
                menuheader: this.state.menuheader,
                menubody: this.state.menubody,
            }

            // console.log(data)

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + this.props.token
                }
            }

            // console.log(data, config, this.state.menuId)

            await axios.put('http://127.0.0.1:8000/api/menu/update/' + this.state.menuId, data, config)
                .then(async response => {
                    // console.log(response.data.data);
                    this.props.setMenu(response.data.data);
                    if (this.state.menuName === 'Home') {
                        this.props.history.push(`/`)
                        alert('successfully updated')
                    }
                    else {
                        this.props.history.push(`/${this.state.menuName}`)
                        alert('successfully updated')
                    }
                })
                .catch(function (error) {
                    // console.log(error);
                    alert('failed to update, error: ' + error)
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
        'color',
        'bold', 'italic', 'underline', 'strike',
        'list', 'bullet', 'indent',
        'link',
    ]





    render() {
        // console.log(this.props)

        return (
            <Styling className='' style={{ backgroundImage: `url(${Application})` }}>
                <div className='container px-5' >
                    <h1 className='pt-5'>Editing {this.state.menuName}</h1>
                    <form onSubmit={this.handleSubmit} className='mt-5'>
                        <div className="form-group">
                            <label><h3><strong>Header</strong></h3></label>
                            <input onChange={this.handleHeader} value={this.state.menuheader} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Header" required />
                        </div>
                        <div className="form-group">
                            <label><h3><strong>Body</strong></h3></label>
                            {/* <textarea rows='8' onChange={this.handleBody} value={this.state.menubody} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Body" /> */}
                            <ReactQuill
                                id='quill'
                                ref={(el) => this.quill = el}
                                value={this.state.menubody}
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
            </Styling>
        )
    }
}


export default withRouter(Edit);


