function Patient(fName, lName, gender){

    Person.call(this, fName, lName);

    var _gender = gender;

    var _plan = {};

    var _room =  {};

    var _doctor = {};

    var _treatment = 3;

    this.getGender = function(){
        return _gender;
    }

    this.setGender = function(gender){
        _gender = gender;
    }

    this.getPlan = function(){
        return _plan;
    }

    this.setPlan = function(plan){
        _plan = plan;
    }

    this.getRoom = function(){
        return _room;
    }

    this.setRoom = function(room){
        _room = room;
    }

    this.getDoctor = function(){
        return _doctor;
    }

    this.setDoctor = function (doctor) {
        _doctor = doctor;
    }

    this.getTreatment = function () {
        return _treatment;
    }

    this.setTreatment =  function(){
        _treatment = Math.floor( 3 + (Math.random() * 3));
    }
}

Patient.prototype.goHome = function () {
    console.log('Patient ' + this.getFName() + ' ' + this.getLName() + ' ' +
                this.getGender() + ' ' + this.getPlan().getDiagnose() +
                ' is going home.');
    var countBeds = this.getRoom().getCount();
    var bedIndex = -1;
    for(var i = 0; i < countBeds; i++){
        if(this == this.getRoom().getBeds()[i]){
            bedIndex = i;
            break;
        }
    }
    if(bedIndex > -1){
        this.getRoom().getBeds()[bedIndex] = null;
        countBeds ++;
        this.getRoom().setCount(countBeds);
    }
    var doctor = this.getDoctor();
    var doctorsPatients = doctor.getPatients();
    for(var i = 0; i < doctorsPatients.length; i++){
        if(this === doctorsPatients[i]){
            doctor.removePatient(this);
        }
    }
}