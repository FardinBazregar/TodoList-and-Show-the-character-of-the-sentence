const showSentence = (sentece) => {
  let obj = {};
  const word = [...sentece];

  word.forEach((value) => {
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value] += 1;
    }
  });
  return obj;
};

console.log(
  showSentence(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni debitis atque consequatur quae harum."
  )
);
