function Queue() {
    this.dataList = [];
    this.enq = enq;
    this.deq = deq;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enq(el) {
    this.dataList.push(el);
}

function deq() {
    return this.dataList.shift();
}

function front() {
    return this.dataList[0];
}

function back() {
    return this.dataList[this.dataList.length - 1];
}

function toString() {
    var str = '';
    for (var i = 0; i < this.dataList.length; i++) {
        str += this.dataList[i] + '\n';
    }

    return str;
}

function empty() {
    if (this.dataList.length == 0) {
        return true;
    } else {
        return false;
    }
}


// 큐 테스트
var q = new Queue();
q.enq('하이루');
q.enq('ㅎㅇㅎㅇ22');
q.enq('ㅎㅇ33333');

console.log(q.toString());

q.deq();

console.log(q.toString());;
console.log("Front of queue: " + q.front());
console.log("Back of queue: "+ q.back());



