import React, {Component } from 'react'
import './welcome.css'

export class Welcome extends Component {
    render(){
        return(
            <div>
                <h3> Welcome to Skylab Coders Precourse </h3>
                <div className="info">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error reiciendis dignissimos eveniet illum vero perspiciatis iure doloremque, laboriosam praesentium mollitia. Recusandae ex iure aperiam dolorem, reiciendis quia quod quisquam. Cum?Voluptatibus exercitationem eos saepe harum natus in perferendis delectus, laudantium accusantium doloribus, earum asperiores impedit veritatis a quod eum aperiam blanditiis nisi tempore magni id officiis illo. Voluptates, ea hic!</p>
                </div>
                <div className="contact">
                    <p>Contact</p>
                    <div className="contact-social">

                    </div>
                </div>

            </div>
        )
    }
}