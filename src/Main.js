import React, {Component} from 'react';
import { Link } from 'react-router';


export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div id='main-container'>
        <div className='nav-bar-container'>
          <div className='nav-image'>
            <img id='profile-pic' src={this.props.getAppState.profilePic}></img>
            <p>{this.props.getAppState.username}</p>
            <p>{this.props.getAppState.repoName}</p>
          </div>
          <div className='nav-links-container'>
            <ul>
              <li><Link className='list' to='/Main/Profile'><i className="fa fa-user" aria-hidden="true"></i>My Profile</Link></li>
              <li><Link className='list' to='/Main/GitTree'><i className="fa fa-tree" aria-hidden="true"></i>Global Git Tree</Link></li>
              <li><Link className='list' to='/Main/LocalGitTree'><i className="fa fa-code-fork" aria-hidden="true"></i>Local Git Tree</Link></li>
              <li><Link className='list' to='/Main/Analytics'><i className="fa fa-bar-chart" aria-hidden="true"></i>Analytics</Link></li>
							<li><Link className='list' to='/Main/Terminal'><i className="fa fa-terminal" aria-hidden="true"></i>Terminal</Link></li>
							<li><Link className='list' to='/Main/Chat'><i className="fa fa-comment-o" aria-hidden="true"></i>Chat</Link></li>
              <li><Link className='list' to='/'><i className="fa fa-sign-out" aria-hidden="true"></i>Log Out</Link></li>
            </ul>
          </div>
        </div>

	      <div className='view-container'>{this.props.children && React.cloneElement(this.props.children, { setAppState: this.props.setAppState, getAppState: this.props.getAppState } )}</div>
      </div>
    );
  }
}
