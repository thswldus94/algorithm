function Stack() {
    this.dataList = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

function push(el) {
    this.dataList[this.top++] = el;
}

function pop() {
    return this.dataList[--this.top];
}

function peek() {
    return this.dataList[this.top - 1];
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}


// 실행

var stack = new Stack();
stack.push("손지연");
stack.push("송수호");
stack.push("집에가고싶다");
stack.push("로또 당첨 제발..");

console.log("length: " + stack.length());
console.log(stack.peek());

stack.pop();
console.log(stack.peek());
stack.push("추가로 하나 더 넣었슈");
console.log(stack.peek());

stack.clear();
console.log("length: " + stack.length());
console.log(stack.peek());