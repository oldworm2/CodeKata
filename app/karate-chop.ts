export const chop = (target: number, sortedList: number[]): number => {
  let startIndex = 0;
  let endIndex = sortedList.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.ceil((startIndex + endIndex) / 2);
    const middleValue = sortedList[middleIndex];

    if (middleValue === target) {
      return middleIndex;
    } else if (middleValue < target) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
};