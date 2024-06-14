export const calculateFees = async (amount: number): Promise<number> => {
  // Simulate an API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simple mock calculation of fees based on the amount
  const feeRate = 0.01; // 1% fee rate
  const fees = amount * feeRate;

  return parseFloat(fees.toFixed(6)); // Return the fees rounded to 6 decimal places
};
