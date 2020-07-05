const functions = require('./functions');
// .toBe
// .not
// .toBeNull
// .toBeUndefined
// .toBeDefined
// .toBeTruthy
// .toBeFalsy

// using .toBe matcher
test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Subtract 3 - 2 to equal 1', () => {
  expect(functions.subtract(3, 2)).toBe(1);
});

test('Muliply 2 by 3 to equal 6', () => {
  expect(functions.multiply(2, 3)).toBe(6);
});

test('Divide 4 by 2 to equal 2', () => {
  expect(functions.divide(4, 2)).toBe(2);
});

// using .not matcher
test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Subtract 3 - 2 to equal 1', () => {
  expect(functions.subtract(3, 2)).not.toBe(2);
});

test('Muliply 2 by 3 to equal 6', () => {
  expect(functions.multiply(2, 3)).not.toBe(7);
});

test('Divide 4 by 2 to equal 2', () => {
  expect(functions.divide(4, 2)).not.toBe(4);
});

// .toBeNull
test('Shoud be null', () => {
  expect(functions.isNull(0)).toBeNull();
});

// .toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy();
})

// .toBeTruthy
test('Should be truthy', () => {
  expect(functions.checkValue(31)).toBeTruthy();
})

// .toBeUndefined
// .toBeDefined

// .toStrictEqual
test('User should be Brad Smith object', () => {
  const user = {
    "firstName": "Brad",
    "lastName": "Smith"
  }
  expect(functions.createUser()).toStrictEqual(user)
})

// .toEqual
test('User should be Brad Smith object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Smith' })
})

// Greater than and less than
test('Should be under 1600', () => {
  load1 = 800;
  load2 = 799.9999999999998;
  expect(load1 + load2).toBeLessThan(1600)
})

// Greater than and less than
test('Should NOT be under 1600', () => {
  load1 = 800;
  load2 = 799.9999999999999;
  expect(load1 + load2).not.toBeLessThan(1600)
})

// regex
test('There is no I in team', () => {
  expect('teamI').not.toMatch('/I/i/');
})

// .toContain   Arrays
test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin']
  expect(usernames).toContain('admin');
})

// working with async data

// test('User fetched name should be Leanne Graham', () => {
//   expect.assertions(1)
//   return functions.fetchUser()
//     .then(data => {
//       expect(data.name).toEqual('Leanne Graham')
//     })
// })
