const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Mitt Fail-version test LOTR - version
test ('Lord of the rings: Gandalf falls down into Khazad-dûm', () => {
    //The fellowship runs over the bridge in this order:
    stack.push("Frodo");
    stack.push("Boromir");
    stack.push("Legolas");
    stack.push("Gandalf");

    //The Balrog attacks and pulls down Gandalf into the abyss: "FLY, you fools!"
    stack.pop();

    //Frodo shouts "NOOO!" and desperately hopes that Gandalf is still there :´(
    expect(stack.peek()).toBe("Gandalf");
})