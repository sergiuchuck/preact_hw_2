// idea is to take piece of json which represents illness (one with property 'dis_tag') and render it

import window from 'preact';
const { h, Component } = window;

class Illness extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render(){
        console.log("Illness.is_applicable(this.state)");
        console.log(Illness.is_applicable(this.state));
        console.log(this.state);
        return <pre>{JSON.stringify(this.state, null, 4)}</pre>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        //todo is this check required?
        // only 'object' is expected
        if (typeof content  !== "object") {return false;}

        // "dis_tag" property must be present
        return "dis_tag" in content;
    }
}

export default Illness;