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