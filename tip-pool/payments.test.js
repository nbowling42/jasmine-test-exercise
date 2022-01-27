describe('Payments test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

    it('should add to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
    });

    it('should return object with bill, tip, and tip percent on createCurPayment()', function () {
        let expectedValue = { billAmt: '100', tipAmt: '10', tipPercent: 10 };
        expect(createCurPayment()).toEqual(expectedValue);
    });

    it('should append to the payment table on appendPaymentTable()', function () {
        let currentPayment = createCurPayment();
        appendPaymentTable(currentPayment);
        const allTd = document.querySelectorAll('#paymentTable tbody tr td');
        expect(allTd[0].innerText).toEqual('$100');
        expect(allTd[1].innerText).toEqual('$10');
        expect(allTd[2].innerText).toEqual('10%');
    });

    it('should update the summary table values on updateSummary()', function () {
        submitPaymentInfo();
        expect(summaryTds[0].innerText).toEqual('$100');
        expect(summaryTds[1].innerText).toEqual('$10');
        expect(summaryTds[2].innerText).toEqual('10%');
    });

    afterEach(function () {
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
});