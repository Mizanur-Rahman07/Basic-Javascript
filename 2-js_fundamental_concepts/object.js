var student ={ id: 123, phone: 5546, name:"Mizan"};
var student2 ={ id: 145, phone: 567, name: "Harun"};

var phoneProName =student["phone"];
var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phoneNo3 = student[phoneProName];
// update phone no
student2.phone = 12233;
student2["phone"] = 33445;
student2["id"] = 458;

student.phone = 447788;

// new property add
student2.cenema = "dhum2"

console.log(phoneNo1);
console.log(student);
console.log(student2);

