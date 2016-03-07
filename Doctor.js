function Doctor(fName, lName){

    Person.call(this, fName, lName);

    var _patients = [];

    this.getPatients = function () {
        return _patients;
    }

    this.setPatients = function (patients) {
        _patients = patients;
    }

}

Doctor.prototype.visit =  function(pacient){
    console.log('Doctor' + this.getFName() + this.getLName() + ' visited ' +
                pacient.getFName() + pacient.getLName() + ' in room ' +
                pacient.getRoom().getNumber() + ' in section ' + pacient.getPlan().getDiagnose());
    var patientTreatment = pacient.getTreatment();
    patientTreatment --;
    pacient.setTreatment(patientTreatment);
    if(patientTreatment == 0){
        pacient.goHome();
    }
};

Doctor.prototype.makePlan = function (pacient, plan) {
    pacient.setPlan(plan);
};

Doctor.prototype.addPatient = function (patient) {
    var patients = this.getPatients();
    patients.push(patient);
    this.setPatients(patients);
    patient.setDoctor(this);
    var plan = this.makePlan();
    patient.setPlan(plan);
}

Doctor.prototype.removePatient = function (patient) {
    var patientIndex = -1;
    var patients = this.getPatients();
    for(var i = 0; i < patients.length; i++){
        if(patients[i] == patient){
            patientIndex = i;
            break;
        }
    }

    if(patientIndex > -1){
        patients.splice(patientIndex, 1);
        this.setPatients(patients);
    }
}

Doctor.prototype.makePlan = function () {
    var diagnose = ['kardiologia', 'ortopedia', 'virysologia'];
    var medicine = ['aspirin', 'analgin', 'antibiotik'];
    var procedures = ['spane', 'lejane', 'qdene'];
    var index = Math.floor(Math.random() * 3);
    var plan = new Plan(diagnose[index], medicine[index], procedures[index]);
    return plan;
}