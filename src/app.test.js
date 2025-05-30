const { dayOfTheWeek } = require('./app');
const { monthOfTheYear} = require('./app');

test('getDay returns the long-format day of the week', () => {
    const day = dayOfTheWeek( new Date('3/11/2020') );
    expect( day ).toBe('Wednesday');
});

test('getDay returns the month day of the week', () => {
    const monst = monthOfTheYear( new Date('3/11/2020') );
    expect( month ).toBe('November');
});