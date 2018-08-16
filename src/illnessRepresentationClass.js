// idea is to take piece of json which represents illness (one with property 'dis_tag') and render it

import window from 'preact';
import Header from "./header";
const { h, Component } = window;

class Illness extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        return <pre>{JSON.stringify(this.state, null, 4)}</pre>
    }
}

export default Illness;