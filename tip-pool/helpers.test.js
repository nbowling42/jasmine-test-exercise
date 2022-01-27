describe('Helpers test (with setup and tear-down)', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    });

    it('should calculate sum of every type in sumPaymentTotal()', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 30;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(200);
        expect(sumPaymentTotal('tipAmt')).toEqual(45);
        expect(sumPaymentTotal('tipPercent')).toEqual(45);
    });

    it('should calculate the tip percent on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 60)).toEqual(60);
        expect(calculateTipPercent(200, 20)).toEqual(10);
    });

    it('should create and append a new td with appendTd()', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual('test');
    });

    it('should add remove button on appendDeleteBtn()', function () {
        let paymentTds = document.querySelectorAll('#paymentTable tbody tr td');
        expect(paymentTds.length).toEqual(4);
    });

    afterEach(function () {
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });
});