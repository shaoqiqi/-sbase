import React from 'react';
import store from '../store/index';
class reg extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
   
   
    render() {
        return <div>我是注册

<span onClick={(e)=>this.aaaww(55,55,e)}>主持词</span>

		</div>;

    }
    componentWillMount(){
       // console.log(this.props.match.params.mingzi)
       
console.log(store.getState())
       console.log(this)
     this.setState( { mingzi: this.props.match.params.mingzi });
       // console.log(React.$getJsonByb4(this.props.match.params.mingzi))
    }
}

export default reg;
export const _reg = reg;