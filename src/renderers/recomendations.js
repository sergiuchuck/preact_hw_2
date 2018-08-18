// class is responsible for displaying recommendations in disease section
import window from 'preact';
const { h, Component, render, createElement} = window;

//https://reactjs.org/docs/forms.html#handling-multiple-inputs
//https://codepen.io/gaearon/pen/wgedvV?editors=0010
//e.g. {text: "Вы не находитесь в группе кардиориска.", selected: 1}
const Recomendation = ({text, selected}) => (
    <li>
    <label>
    {text}
    <input
        type="checkbox"
        disabled
        checked={ selected == 1 ? true : false}/>
    </label>
    </li>
);

class Recomendations extends Component {
    constructor(data) {
        super();
        this.state = data.recomendations;
    }
    render() {
        //assuming that this.state contains array, which is checked by Self.is_applicable
        const Recomendations_ = this.state.map((item_) => <Recomendation {...item_ }/>);
        return <div class="recomendations">
            <h4>Рекомендации:</h4>
            {/*{JSON.stringify(this.state, null, 4)}*/}
            <ul>{Recomendations_}</ul><hr/>
        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        var keys = Object.keys(content);
        //single item "header" should be present
        // and "patient_info" and "healthcare_professional" properties must be present in "header"
        return keys.length === 1 && "recomendations" in content && content["recomendations"] instanceof Array ;
    }

    static process(data) {
        render(createElement(Recomendations, data), document.body);
    }
}

export default Recomendations;