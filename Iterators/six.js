// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((nums) => nums > 5);
// console.log(newNums);
let books = [
  {
    title: "book one",
    genere: "fiction",
    publish: 1987,
    edition: 2023,
  },
  {
    title: "book two",
    genere: "english",
    publish: 1999,
    edition: 2013,
  },
  {
    title: "book three",
    genere: "java",
    publish: 1965,
    edition: 2003,
  },
  {
    title: "book ten",
    genere: "Non_fiction",
    publish: 1966,
    edition: 2009,
  },
  {
    title: "book four",
    genere: "fiction",
    publish: 1990,
    edition: 2017,
  },
  {
    title: "book five",
    genere: "engineering",
    publish: 1932,
    edition: 2012,
  },
  {
    title: "book six",
    genere: "DS",
    publish: 1956,
    edition: 2005,
  },
  {
    title: "book seven",
    genere: "Non_fiction",
    publish: 1987,
    edition: 2022,
  },
  {
    title: "book eight",
    genere: "programming",
    publish: 2003,
    edition: 2013,
  },
  {
    title: "book nine",
    genere: "History",
    publish: 2007,
    edition: 2016,
  },
];
let mybooks = books.filter((bk) => bk.edition >= 2020);
// console.log(mybooks);
mybooks.filter((bk) => {
  return bk.edition >= 1990;
});
console.log(mybooks);
