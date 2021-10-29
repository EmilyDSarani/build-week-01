const Exponent = require ('./pow');

//the goal of this test is that I want it to be able to read any of the numbers I would put in for the actualy number and the exponent number

describe ('Exponent', () => {
    it('should multiply number acording to exponent', async () => {
        const total = Exponent(Math.pow(3,2));
        expect(total).toEqual('9');
    })
})