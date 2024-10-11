export const getTopCreators = (creators) => {
  if (!Array.isArray(creators) || creators.length === 0) {
    // Return an empty array if creators is not an array or if it's empty
    return [];
  }

  const finalCreators = [];

  const finalResults = creators.reduce((index, currentValue) => {
    if (currentValue && currentValue.seller && currentValue.price) {
      (index[currentValue.seller] = index[currentValue.seller] || []).push(currentValue);
    }
    return index;
  }, {});

  Object.entries(finalResults).forEach((item) => {
    const seller = item[0];
    const total = item[1]
      .map((newItem) => Number(newItem.price))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    finalCreators.push({ seller, total });
  });

  return finalCreators;
};
