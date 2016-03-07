var myHospital = new Hospital();
myHospital.createSections();

myHospital.addDoctor('Ivan', 'Ivanov');
myHospital.addDoctor('Penka', 'Pencheva');

myHospital.addSister('Ivanka', 'Ivanova');
myHospital.addSister('Tonka', 'Toncheva');
myHospital.addSister('Tinka', 'Tincheva');
myHospital.addSister('Yonka', 'Yoncheva');

myHospital.addPatient('Vancho', 'Vanchev', 'm');
myHospital.addPatient('Petka', 'Petkova', 'f');
myHospital.addPatient('Dancho', 'Dankov', 'm');
myHospital.addPatient('Dochka', 'Dochkova', 'f');
myHospital.addPatient('Ginka', 'Gincheva', 'f');

myHospital.work(10);
