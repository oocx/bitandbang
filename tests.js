describe('when calling card.js', () => {

    it('should output contact details to the console', () => {
        let output = '';

        spyOn(console, 'log').and.callFake(msg => {
            output += msg;
        });

        require('./bin/card.js');

        expect(console.log).toHaveBeenCalled();
        expect(output).toContain('https://github.com/oocx');
    });
})