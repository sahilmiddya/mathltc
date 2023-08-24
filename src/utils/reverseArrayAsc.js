export function reverseArrayAsc(arr = []) {
  const arr1 = [...arr];
  arr1.sort((a, b) => {
    return +a?.list_sequence - +b?.list_sequence;
  });

  return arr1;
}

export const rev = (arr) => {
  let arr1=[]
  //  = [...arr];
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
};
