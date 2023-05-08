function swapBits(num, p1, p2) {
  if (p1 < 0 || p1 > 31 || p2 < 0 || p2 > 31) {
    return "Invalid positions!";
  }

  let bit1 = (num >> p1) & 1;
  let bit2 = (num >> p2) & 1;

  num ^= bit1 << p2;
  num ^= bit2 << p1;

  return num;
}

console.log(swapBits(245, 0, 2));
