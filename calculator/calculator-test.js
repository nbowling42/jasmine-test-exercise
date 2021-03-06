describe("calculating the monthly rate", function () {
  it('should calculate the monthly rate correctly', function () {
    const values = { amount: 10000, rate: 5, years: 5 }
    expect(calculateMonthlyPayment(values)).toEqual('188.71')
  });

  it("should return a result with 2 decimal places", function () {
    const values = { amount: 10043, rate: 5.8, years: 8 }
    expect(calculateMonthlyPayment(values)).toEqual('131.00')
  });
})
