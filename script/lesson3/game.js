function generateNumber() {
  const arr = [];
  while (arr.length < 4) {
    const d = Math.floor(Math.random() * 10);
    if (arr.indexOf(d) < 0) {
      arr.push(d);
    }
  }
  return arr;
}
