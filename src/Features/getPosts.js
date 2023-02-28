import data from "../data/data.json" assert { type: "json" };
function getPosts(number) {
  let ret = [];
  if (data) {
    for (var i = 0; i < number; i++) {
      if (data[i]) {
        ret.push(data[i]);
      }
    }
    console.log(ret);
    return ret;
  }
}
export default getPosts;
