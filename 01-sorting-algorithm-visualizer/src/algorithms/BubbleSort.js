const BubbleSort = async (
  arr,
  setArray,
  { updateBarColor, sleep, speed = 50 }
) => {
  const length = arr.length;
  const arrayCopy = [...arr];

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      // Highlight the elements being compared
      updateBarColor([j, j + 1], "yellow");
      await sleep(speed);

      if (arrayCopy[j].value > arrayCopy[j + 1].value) {
        // Swap values
        const temp = arrayCopy[j];
        arrayCopy[j] = arrayCopy[j + 1];
        arrayCopy[j + 1] = temp;

        setArray([...arrayCopy]);
        await sleep(speed);
      }
      updateBarColor([j, j + 1], "black");
    }
    updateBarColor([length - i - 1], "green");
  }

  // Mark the first element green at the end (fully sorted) cz it will be left alone
  if (length > 0) {
    updateBarColor([0], "green");
  }
};

export default BubbleSort;
