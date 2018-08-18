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

class Header extends Component {
    constructor(data) {
        super();
        this.state = data;
    }
    render() {
        return <div>
            <PatientInfo {...this.state.header.patient_info }/><hr/>
            <HealthcareProfessional {...this.state.header.healthcare_professional}/><hr/>

        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {

        var keys = Object.keys(content);
        //single item "header" should be present
        // and "patient_info" and "healthcare_professional" properties must be present in "header"
        return keys.length === 1 && "header" in content && "patient_info" in content["header"] && "healthcare_professional" in content["header"];
    }

    static process(data) {
        render(createElement(Header, data), document.body);
    }
}

export default Header;