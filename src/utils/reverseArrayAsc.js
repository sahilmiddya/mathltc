export function reverseArrayAsc(arr = []) {
  const arr1 = [...arr];
  arr1.sort((a, b) => {
    return +a?.list_sequence - +b?.list_sequence;
  });

  return arr1;
}
