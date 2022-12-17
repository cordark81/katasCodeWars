//https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

/*Three 1's => 1000 points
Three 6's =>  600 points
Three 5's =>  500 points
Three 4's =>  400 points
Three 3's =>  300 points
Three 2's =>  200 points
One   1   =>  100 points
One   5   =>   50 point */

const dado = new Map()
  .set(1, [100, 0, 1000])
  .set(2, [0, 0, 200])
  .set(3, [0, 0, 300])
  .set(4, [0, 0, 400])
  .set(5, [50, 0, 500])
  .set(6, [0, 0, 600]);

function score(dice, res = 0) {
  if (dice.length === 0) {
    return res;
  }

  const num = dice[0];
  const len = dice.filter((elf) => elf === num).length;

  if ((num === 1 || num === 5) && len % 3 != 0) {
    res += dado.get(num)[0] * Math.trunc(len % 3);
  }

  res += dado.get(num)[2] * Math.trunc(len / 3);
  dice = dice.filter((elf) => elf !== num);

  return score(dice, res);
}

const array = [4, 4, 4, 4, 4, 4, 3, 3, 3,1,1,1,1];

console.log(score(array));
