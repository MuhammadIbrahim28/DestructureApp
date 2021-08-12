const animals = [
  {
    name: "cat",
    sound: "meow",
    feeding: {
      food: 1,
      ice: 3
    }
  },
  { name: "dog", sound: "woof" }
];
function useanimals(animals) {
  return [
    animals.name,
    function () {
      console.log(animals.sound);
    }
  ];
}
export default animals;
export { useanimals };
