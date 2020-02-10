export const people = [
  { id: "1", name: "jiwon", age: 19, gender: "male" },
  {
    id: "2",
    name: "Tom",
    age: 20,
    gender: "male"
  }
];

export const getById = id => {
  const filteredMovies = people.filter(person => id === id);
  return filteredPeople[0];
};
