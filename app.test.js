/**
 * @jest-environment jsdom
 */

const groupPlayers = require('./app')


test('groupPlayers() calls without names and groupNum', () => {
    expect(groupPlayers()).toBe('');
});

// possible scenarios that can be tested:

// test when params "names" are provided and "groupNum" not

// test when params "names" are not provided and "groupNum" is

// test when "groupNum" is more than number of "names"

