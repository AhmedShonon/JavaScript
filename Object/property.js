const student = {
  name: "Adritro Sporsho",
  id: 2011535,
  city: "Sherpur",
  isSingle: false,
  friends: ["sabbir", "aslam", "toufique", "sojib"],

  girlFriend: {
    name: ["sokina", "rogina", "korima", "bilkis"],
    job: false,
    color: "black",
    character: {
      behavior: "bad",
      timeManage: "none",
      study: "fail",
      travel: "A lot",
    },
  },
};

console.log(student);
console.log(student.girlFriend);
console.log(student.girlFriend.character);
