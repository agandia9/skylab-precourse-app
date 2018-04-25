import React, {Component } from 'react'
import './subject.css'
import {Exercise} from '../exercise/exercise'

export class Subject extends Component {
    state = {nsubject: 0}
    componentWillReceiveProps(nextProps){
        
		let {nsubject} = nextProps.match.params
		console.log(nsubject)
		this.setState({
			nsubject
		})
	}
    render(){
        return(
            <div className="main-subject">
                <h3> Subjectssss.....{this.state.nsubject} </h3>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                <p>aqui encontraremos info, recursos y descripción sobre el tema, y renderizará todos los ejercicios
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi facere aspernatur necessitatibus ex dolorem neque quos similique, maiores earum iusto consequatur, ducimus repudiandae, veniam corrupti odit minus suscipit quaerat?
                Voluptate quo labore voluptatem beatae vero laudantium! Maiores esse ratione adipisci sequi maxime quidem, debitis tenetur vero? Perferendis reiciendis, magni expedita, consequuntur consequatur ad commodi, repellat omnis odio molestiae nobis!
                Tenetur dignissimos explicabo soluta quis ab deserunt ipsum alias minus doloribus dolorem ex at, neque repellendus consectetur perferendis atque maxime corrupti dolorum, quasi sint eum sequi iusto inventore. Odit, totam.
                Omnis vitae eius provident, ex, voluptatum veniam ea quasi id porro dolorem iste ullam dolor, deserunt atque libero et commodi? Sequi iste inventore quod architecto odio hic cum illo odit.
                </p>
                
            </div>
        )
    }
}