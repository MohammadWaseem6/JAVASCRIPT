const coding = ["js", "cpp", "java", "js", "ruby"];

// coding.forEach(function (item){
//     console.log(item);
// } )

// coding.forEach( (item) =>{
//     console.log(item);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)

// coding.forEach((item , index, arr) =>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
    language: "java",
    languagefilename: "java",
    },
    {
    language: "pyhton",
    languagefilename: "py",
    },
    {
    language: "c++",
    languagefilename: "cpp",
    },
    {
    language: "javascript",
    languagefilename: "JS",
    },
];
myCoding.forEach((item) => {
    console.log(item.languagefilename);
});
