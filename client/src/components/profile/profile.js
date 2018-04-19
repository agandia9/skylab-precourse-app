import React,  { Component } from 'react';


class Profile extends Component {
	constructor(){
		super()
		this.state={
			username:''
		}
	}
	componentWillMount(){
  		let {username} = this.props.match.params
  		this.setState({
  			username
  		})
  	}
  render() {
  	
    return (
      <div>
        <div className="profile">
        	<h3>Hello {this.state.username}</h3>
        	<p><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius rem repellendus id necessitatibus recusandae corrupti incidunt dolores. Sed, distinctio. Culpa numquam id cumque, fuga ducimus! Dolor id, accusantium. Explicabo, laudantium.</div>
        	<div>Praesentium, sint! Atque, cum. Natus commodi, repellat dolor iste provident voluptas, optio. Totam recusandae quisquam quae perferendis, laborum nobis impedit ipsa provident iure accusamus nesciunt aspernatur unde dolore quod harum.</div>
        	<div>Enim quidem ab assumenda hic vero dolores nihil temporibus sunt soluta repudiandae eveniet quis voluptatibus inventore neque suscipit odit placeat voluptate accusamus cum natus, unde voluptatum earum, harum recusandae! Distinctio.</div></p>
        </div>
      </div>
    );
  }
}

export default Profile;