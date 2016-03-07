function Person(fName, lName){

    if(this instanceof Person){
        throw new Error('You cannot create instances of Person!');
    }

    var _fName = fName;

    var _lName = lName;

    this.getFName = function(){
        return _fName;
    }

    this.setFName = function(fName){
        _fName = fName;
    }

    this.getLName = function(){
        return _lName;
    }

    this.setLName = function(lName){
        _lName = lName;
    }
}

