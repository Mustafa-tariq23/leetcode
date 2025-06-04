function answerString(word, numFriends) {
  const box = []; 
  const n = word.length;

  function splitHelper(start, parts) {
    if (parts.length === numFriends) {
      if (start < n) return;
      box.push(...parts);
      return;
    }

    for (let end = start + 1; end <= n; end++) {
      const part = word.slice(start, end);
      splitHelper(end, [...parts, part]);
    }
  }

  splitHelper(0, []);

  return box.sort().at(-1);
}

console.log(answerString("qfeofvnknijahbnkoeed", 20))