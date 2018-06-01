import React, { Component } from 'react';
import * as actions from '../Actions/Index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import UserList from '../Components/userList'
import Error from '../Components/Error'
import Loader from '../Components/Loader'





class Home extends Component {
   constructor(props){
		super(props);
this.state = {poststatus:""}
          this.postFire = this.postFire.bind(this)
	}
postFire(){
 axios.get('http://demo5152489.mockable.io/swati_get')
    .then(responce => { this.setState({poststatus:"success"}) },
    err => { this.setState({poststatus:"Error"}) }
  )
}
  componentDidMount(){
   console.log('hello')
this.props.fetch();
   
  }
  render() {
    
     const {count } = this.props;
  if(count.isFetch){
return (<Loader />)
}else if(count.error) {
return (<Error />)
}

    return (
      <div>
{this.state.poststatus}
   <button onClick={this.postFire} >clickMe</button><br />
 <UserList datas={count.datas} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {return {
        count: state
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));