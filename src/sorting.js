const serv = (arr) => {
  const newArr = [...arr];
  return newArr;
};
export const bubbleSort = (arr) => {
  const proccesArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].height > arr[j + 1].height) {
        let swap = arr[j];

        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        proccesArr.push(serv(arr));
      }
    }
  }
  return proccesArr;
};
