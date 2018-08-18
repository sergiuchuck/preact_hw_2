// class is responsible for displaying recommendations in disease section
import window from 'preact';
const { h, Component, render, createElement} = window;

const PatientInfo = ({ id, dob, gender }) => (
    <div class="patient-info">
        <h1>Про пациента!!!!!!!!1111</h1>
        <div><span class="field-name">id:</span> {id}</div>
        <div><span class="field-name">dob:</span> {dob}</div>
        <div><span class="field-name">gender:</span>{ gender === "M" ? "МУЖИК!!!" : "Female"} </div>
    </div>
);

const HealthcareProfessional = ({ name, address_string_1, address_string_2 }) => (
    <div>{name} --- {address_string_1} --- {address_string_2} </div>
);

const Header_ = ({
                    patient_info, healthcare_professional,
                    approver, test_metodology, laboratory_info }) => (
    <div>
        <PatientInfo {...patient_info }/><hr/>
        <HealthcareProfessional {...healthcare_professional}/><hr/>
    </div>
);

//https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_form_checkbox
//{text: "Вы не находитесь в группе кардиориска.", selected: 1}
const Recomendation = ({text, selected}) => (
    /*<input type="checkbox" name="recomendation" disabled> {text}</input>*/
    /*<li>{text} { selected == 1 ? "Yes" : ""}</li>*/
    <li>
    <label>
    {text}
    <input
        name="recomendation"
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
        return <div>
            recomendations:
            {/*{JSON.stringify(this.state, null, 4)}*/}
            <ul>{Recomendations_}</ul>
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