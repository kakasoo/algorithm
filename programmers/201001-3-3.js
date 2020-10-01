const k앞자르기 = (arr, k) => {
  let ans = "";
  for (let i = k; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
};

//res = k앞자르기([1, 2, 3, 4, 5, 6, 7], 3);
res = [1, 2, 3, 4, 5, 6, 7].slice(3);
console.log(res);
