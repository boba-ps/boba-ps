export function randomStr(len: number, set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
  let s = "";

  for (let i = 0; i < len; i++) {
    s += set[(Math.random() * set.length) >>> 0];
  }

  return s;
}
