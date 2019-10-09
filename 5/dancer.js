function Queue() {
    this.dataList = [];
    this.enq = enq;
    this.deq = deq;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
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

function count() {
    return this.dataList.length;
}


function Dancer(name, sex) {
    this.name = name;
    this.sex = sex;
}


function getDancers(males, females) {
    var txt = `F sonjiyeon
M songsuho
F kimminiji
M chiominjae
M kohisung
F leenuri
F ryujihee
F packsohyun`;

    var names = txt.split("\n");
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
    }

    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];

        if (sex == "F") {
            females.enq(new Dancer(name, sex));
        } else {
            males.enq(new Dancer(name, sex));
        }
    }  
}

function dance(males, females) {
    console.log("춤춰봅시다. 각자 짝들은??? ");

    while (!females.empty() && !males.empty()) {
        person = females.deq();
        console.log("Female dancer is : " + person.name);
        person = males.deq();
        console.log("Male dancer is : " + person.name);
    }    
}


var maleDancers = new Queue();
var femaleDancers = new Queue();

getDancers(maleDancers, femaleDancers);

dance(maleDancers, femaleDancers);

if (!femaleDancers.empty()) {
    console.log(femaleDancers.front().name  + " is waiting to dance");
    console.log(femaleDancers.count() + ' female dencers are waiting');
    
}
if (!maleDancers.empty()) {
    console.log(maleDancers.front().name  + " is waiting to dance");
    console.log(maleDancers.count() + ' male dencers are waiting');
}