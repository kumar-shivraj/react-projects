const insertionSort = async (
  arr,
  setArray,
  { updateBarColor, sleep, speed = 5 }
) => {
  const length = arr.length;
  const arrayCopy = [...arr];

  for (let i = 1; i < length; i++) {
    let key = arrayCopy[i];
    let j = i - 1;

    // Highlight the current element being inserted
    updateBarColor([i], "yellow");
    await sleep(speed);

    while (j >= 0 && arrayCopy[j].value > key.value) {
      //   updateBarColor([j], "yellow");
      updateBarColor([j], "pink");
      arrayCopy[j + 1] = arrayCopy[j];
      j--;
      setArray([...arrayCopy]);
      await sleep(speed);

      updateBarColor([j + 1], "black"); // Reset previous highlight
    }

    arrayCopy[j + 1] = key;
    setArray([...arrayCopy]);
    await sleep(speed);
    // from 0 till i, make it's color as green
    for (let k = 0; k <= i; k++) {
      updateBarColor([k], "green");
      await sleep(5);
    }
  }
};

export default insertionSort;
