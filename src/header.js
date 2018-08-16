import window from 'preact';
const { h } = window;

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

const Header = ({
                    patient_info, healthcare_professional,
                    approver, test_metodology, laboratory_info }) => (
    <div>
        <PatientInfo {...patient_info }/><hr/>
        <HealthcareProfessional {...healthcare_professional}/><hr/>
    </div>
);

export default Header;