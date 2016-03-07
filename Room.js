function Room(number, gender){

    var _number = number;

    var _gender = gender;

    var _beds = [];

    var __maxCount = 3;

    var _count = 0;

    this.getNumber = function () {
        return _number;
    }

    this.setNumber = function (number) {
        _number = number;
    }

    this.getGender = function () {
        return _gender;
    }

    this.setGender = function () {
        _gender = gender;
    }

    this.getBeds = function(){
        return _beds
    }

    this.setBeds = function(beds){
        _beds = beds;
    }

    this.getMaxCount = function () {
        return __maxCount;
    }

    this.getCount = function(){
        return _count;
    }

    this.setCount = function(count){
       _count = count;
    }
}
