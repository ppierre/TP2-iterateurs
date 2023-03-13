import csv from "csvtojson";

const toutLesFilms = await csv({
  ignoreEmpty: true,
  checkType: true,
}).fromFile("./All Movies.csv");
console.table(toutLesFilms);

for (const film of toutLesFilms) {
  console.log(film.Title);
}
