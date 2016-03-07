function Sister(fName, lName){

    Person.call(this, fName, lName);

    var _section = {};

    this.getSection = function () {
        return _section;
    }

    this.setSection = function (section) {
        _section = section;
    }
}

Sister.prototype.giveMedicine =  function(pacient){
    if (pacient == null) {
        return false;
    }
    console.log('Sister ' + this.getFName() + this.getLName() + ' gave ' +
        pacient.getFName() + pacient.getLName() + ' in room ' +
        pacient.getRoom().getNumber() + ' in section ' + this.getSection().getName()
        + ' medicine.');
}