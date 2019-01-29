import React,{Component} from 'react'
import styled from 'styled-components'

class TodoList extends Component {
    render() {
      return (
        <Div>
          {this.props.items.map(item => (
            <P key={item.id}><Strong>BillyVasquez</Strong> {item.text}</P>
          ))}
        </Div>
      );
    }
  }
export default TodoList  

const Div = styled.div`
    margin-top:0.4em;
`
const P = styled.p`
  font-size:0.75em;
  margin-top:-0.8em;
  @media (min-width: 80em) {
        margin-top:0.5em;
     }
`
const Strong = styled.strong``