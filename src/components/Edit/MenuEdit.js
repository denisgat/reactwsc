       
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            header: '',
            body: '',
            token: '',
            menuArray: [],

        }

        this.handleBody = this.handleBody.bind(this);
        this.handleHeader = this.handleHeader.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const menuName= window.location.pathname.split('/')[1]
        // const console.log(window.location.pathname.split('/')[2])
        const menuId = parseInt(window.location.pathname.split('/')[3])
        const newmenuArray = this.props.menus.filter(item => item.id === menuId) 

        this.setState({
            menuArray: newmenuArray
        })
        // console.log(this.state.menuArray)
    }


    handleHeader(event) {
        this.setState({
            header: event.target.value,
        })
    }


    handleBody(event) {
        this.setState({
            body: event.target.value,
        })
    }



    async handleSubmit(event) {
        event.preventDefault();


        // console.log(this.state)


        // const data = {
        //     title: this.state.title,
        //     body: this.state.body,
        //     user_id: this.props.user.id,
        //     subreddit_id: this.state.subreddit.id,
        //     img: this.state.img
        // }
        // console.log(data)

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
                <div className='' style={{ height: '100vh', backgroundColor: '#f0f0f5' }}>
                    <div className='container px-5' >
                        <h1 className='text-center pt-5'>Editing</h1>
                        <form onSubmit={this.handleSubmit} className='mt-5'>
                            <div className="form-group">
                                <label>Header</label>
                                <input onChange={this.handleHeader} value={this.state.header} type="text" className="form-control" id="exampleInputSubname" aria-describedby="emailHelp1" placeholder="Header" required/>
                            </div>
                            <div className="form-group">
                                <label>Body</label>
                                <textarea rows='8' onChange={this.handleBody} value={this.state.body} type="text" className="form-control" id="exampleInputDesc" aria-describedby="emailHelp2" placeholder="Body" required/>
                            </div>
                            <br></br>
                            <input className='btn btn-lg btn-primary' type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            )
        

    }
}


export default withRouter(Edit);


