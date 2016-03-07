function Plan(diagnose, medicine, procedure){

    var _diagnose = diagnose;

    var _medicine = medicine;

    var _procedure = procedure;

    this.getDiagnose = function () {
        return _diagnose;
    }

    this.setDiagnose = function(diagnose){
        _diagnose = diagnose;
    }

    this.getMedicine = function () {
        return _medicine;
    }

    this.setMedicine = function (medicine) {
        _medicine = medicine;
    }

    this.getProcedure = function () {
        return _procedure;
    }

    this.setProcedure = function (procedure) {
        _procedure = procedure;
    }
}