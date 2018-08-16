import window from 'preact';
const { h, Component } = window;

const PatientInfo = ({ id, dob, gender }) => (
    <div class="patient-info">
        <h1>Про пациента!!!!!!!!1111</h1>
        <div><span class="field-name">id:</span> {id}</div>
        <div><span class="field-name">dob:</span> {dob}</div>
        <div><span class="field-name">gender:</span>{ gender == "M" ? "МУЖИК!!!" : "Female"} </div>
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
            <PatientInfo {...this.state.patient_info }/><hr/>
            q
            <HealthcareProfessional {...this.state.healthcare_professional}/><hr/>

        </div>
    }

    //static(in order to limit call constructor) method is used to determine can 'content' be rendered(displayed) with this class
    static is_applicable(content) {
        //todo is this check required?
        // only 'object' is expected
        if (typeof content  !== "object") {return false;}

        // "patient_info" and "healthcare_professional" properties must be present
        return "patient_info" in content && "healthcare_professional" in content;
    }
}

export default Header;