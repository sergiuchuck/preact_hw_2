// class is responsible for displaying recommendations in disease section
import window from 'preact';
const { h, Component, render, createElement} = window;

//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_progress010
const Analyzed_ = ({done, from, percentage}) => (
    <div>
        <li>Сделано: {done}</li>
        <li>Всего требуется сделать: {from}</li>
        <li>Прогресс: {percentage}</li>
    <progress value={done} max={from}>
    </progress>
    </div>
);

class Analyzed extends Component {
    constructor(data) {
        super();
        this.state = data.analyzed;
    }
    render() {

        return <div class="analyzed">
            <h4>Проанализировано:</h4>
            <Analyzed_ {...this.state }/><hr/>
        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        var keys = Object.keys(content);
        //single item "header" should be present
        // and "patient_info" and "healthcare_professional" properties must be present in "header"
        return keys.length === 1 && "analyzed" in content && "done" in content["analyzed"] && "from" in content["analyzed"] && "percentage" in content["analyzed"];
    }

    static process(data) {
        render(createElement(Analyzed, data), document.body);
    }
}

export default Analyzed;