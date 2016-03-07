function Hospital() {

    var _doctors = [];

    var _sections = [];

    this.getDoctors = function () {
        return _doctors;
    }

    this.setDoctors = function (doctors) {
        _doctors = doctors;
    }

    /*   this.getSisters = function () {
     return _sisters;
     }

     this.setSisters = function (sisters) {
     _sisters = sisters;
     }*/

    this.getSections = function () {
        return _sections;
    }

    this.setSections = function (sections) {
        _sections = sections;
    }
}

Hospital.prototype.addPatient = function (fName, lName, gender) {
    var patient = new Patient(fName, lName, gender);
    var sections = this.getSections();
    var roomIndex = -1;
    var doctorIndex = Math.floor(Math.random() * this.getDoctors().length);
    var doctor = this.getDoctors()[doctorIndex];
    patient.setDoctor(doctor);
    doctor.addPatient(patient);

    for (var i = 0; i < sections.length; i++) {
        if (patient.getPlan().getDiagnose() === sections[i].getName()) {
            var rooms = this.getSections()[i].getRooms();
            for (var j = 0; j < rooms.length; j++) {
                if (rooms[j].getCount() < 3 && rooms[j].getGender() === patient.getGender()) {
                    roomIndex = j;
                    break;
                }
            }
        }
    }
    if (roomIndex > -1) {
        var beds = rooms[roomIndex].getBeds();
        beds.push(patient);
        rooms[roomIndex].setBeds(beds);
        var count = rooms[roomIndex].getCount();
        count++;
        rooms[roomIndex].setCount(count);
        patient.setRoom(rooms[roomIndex]);

        console.log('Patient ' + patient.getFName() + ' ' + patient.getLName() + ' gender ' + patient.getGender() +
            ' with diagnose: ' + patient.getPlan().getDiagnose() + ' with doctor: ' + patient.getDoctor().getFName() + ' ' + patient.getDoctor().getLName()
            + ' in room:' + patient.getRoom().getNumber());

    }

    else {
        console.log('Not enough beds!');
        doctor.removePatient(patient);
    }
}

Hospital.prototype.addDoctor = function (fName, lName) {
    var doctor = new Doctor(fName, lName);
    var doctors = this.getDoctors();
    doctors.push(doctor);
    this.setDoctors(doctors);
}

Hospital.prototype.addSister = function (fName, lName) {
    var sister = new Sister(fName, lName);
    var index = Math.floor(Math.random() * 3);
    var section = this.getSections()[index];
    sister.setSection(section);
    section.addSister(sister.getFName(), sister.getLName());
}

Hospital.prototype.createSections = function () {
    var names = ['kardiologia', 'ortopedia', 'virysologia'];
    var section = {};
    var sections = [];
    for (var i = 0; i < names.length; i++) {
        section = new Section(names[i]);
        for (var j = 0; j < 10; j++) {
            section.addRoom(j + 1);
        }
        sections.push(section)
    }
    this.setSections(sections);
}

Hospital.prototype.getFreeBeds = function () {
    var sum = 0;
    var sections = this.getSections();
    for (var i = 0; i < sections.length; i++) {
        var rooms = this.getSections()[i].getRooms();
        for (var j = 0; j < rooms.length; j++) {
            sum += rooms[j].getMaxCount() - rooms[j].getCount();
        }
    }
    return sum;
}

Hospital.prototype.doctorsPatients = function () {
    var patientsCountOfADoctor = [];
    var doctors = this.getDoctors();
    var string = '';
    for (var i = 0; i < doctors.length; i++) {
        string = '';
        string += doctors[i].getFName() + ' ' + doctors[i].getLName() + ':' +
            doctors[i].getPatients().length;
        patientsCountOfADoctor.push(string);
    }
    return patientsCountOfADoctor.toString();
}

Hospital.prototype.getPatientsInSection = function (section) {
    var patients = [];
    var rooms = section.getRooms();
    for (var i = 0; i < rooms.length; i++) {
        var beds = rooms[i].getBeds();
        for (var j = 0; j < beds.length; j++) {
            patients.push(beds[j]);
        }
    }
    return patients;
}

Hospital.prototype.removePatient = function (patient) {
    patient.goHome();
}

Hospital.prototype.work = function (days) {
    var breakCondition = false;
    var currentDay = 0;
    var self = this;
    
    var workDays = setInterval(function () {
        if (currentDay >= days) {
            clearInterval(workDays);
            return false;
        }

        console.log('Day:' + (currentDay + 1));
        for (var j = 0; j < self.getDoctors().length; j++) {
            var doctor = self.getDoctors()[j];
            var doctorsPatients = doctor.getPatients();
            if (doctor.getPatients().length > 0) {
                for (var k = 0; k < doctorsPatients.length; k++) {
                    doctor.visit(doctorsPatients[k]);
                }
            }
            else{
                breakCondition = true;
                break;
            }
        }

        var sections = self.getSections();

        for (var i = 0; i < sections.length; i++) {
            var sisterPatients = self.getPatientsInSection(sections[i]);
            var sisters = sections[i].getSisters();
            for (var j = 0; j < sisters.length; j++) {
                if (sisters[j].getSection() === sections[i]) {
                    if (sisterPatients.length > 0) {
                        for (var k = 0; k < sisterPatients.length; k++) {
                            sisters[j].giveMedicine(sisterPatients[k]);
                        }
                    }
                }
            }
        }
        var sections = self.getSections();
        for (var k = 0; k < sections.length; k++) {
            var patients = self.getPatientsInSection(sections[k]);
            for (var j = 0; j < patients.length; j++) {
                if (patients[j] != null && currentDay + 1 == patients[j].getTreatment()) {
                    patients[j].goHome();
                }
            }
        }
        if(breakCondition){
            clearInterval(workDays);
        }

        currentDay++;

    }, 5000);

}

Hospital.prototype.patientsGoingHomeTheNextDay = function(){
    var patientsGoingHomeTomorrow = [];
    var sections = this.getSections();
    for(var i = 0; i < sections.length; i++ ){
        patients = this.getPatientsInSection(sections[i]);
        for(var j = 0; j < patients.length; j++){
            if(patients[i].getTreatment() == 1){
                patientsGoingHomeTomorrow.push(patients[i]);
            }
        }
    }
    return patientsGoingHomeTomorrow;
}