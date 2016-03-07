function Section(name){

    var _name = name;

    var _sisters = [];

    var patients = [];

    var _rooms = [];

    var __maxCount = 10;

    var _count = 0;

    this.getName = function () {
        return _name;
    }

    this.setName = function () {
        _name = name;
    }

    this.getSisters = function () {
        return _sisters;
    }

    this.setSisters = function (sisters) {
        _sisters = sisters;
    }

    this.getRooms = function(){
        return _rooms;
    }

    this.setRooms = function(rooms){
        _rooms = rooms;
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

Section.prototype.addRoom = function (number) {
    var index = Math.floor(Math.random() * 2);
    var gender = index ? 'm' : 'f';
    var room = new Room(number, gender);
    var rooms = this.getRooms();
    rooms.push(room);
    this.setRooms(rooms);
}

Section.prototype.addSister = function (fName, lName) {
    var sister = new Sister(fName, lName, this);
    var sisters = this.getSisters();
    sisters.push(sister);
    this.setSisters(sisters);
    sister.setSection(this);
}

Section.prototype.removePatient = function () {

}