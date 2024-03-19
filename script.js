//id;firstName;lastName;age
const persons = [];

addPerson.onclick = function () {
    const person = new Person(personID.value.trim(), firstName.value.trim(), lastName.value.trim(), age.value);
    if (findPerson(persons, person.id) === -1) {
        persons.push(person);
    } else {
        alert("Exists");
    }
    personID.value = firstName.value = lastName.value = age.value = "";

}


showPersons.onclick = function () {
    printPersons(persons);
}

calcStats.onclick = function () {
    printStats(persons);
}

function findPerson(persons, id) {
    return persons.findIndex(p => p.id === id);
}

function printPersons(persons) {
    personsList.innerHTML = "";
    persons.forEach(p => {
        const li = createInfoElement(p.toString(), 'li');
        const delButton = document.createElement('button');
        delButton.textContent = "Delete";
        delButton.addEventListener('click', function (){
            const index = persons.findIndex(person => person.id === p.id);
            if (index !== -1) {
                persons.splice(index, 1);
                printPersons(persons);
            }
        });
        li.appendChild(delButton);
        personsList.appendChild(li);
    });
}

//*
function printStats(persons) {
    stats.innerHTML = "";
    if (persons.length) {
        const start = persons[0].age
        const minAge = persons.reduce((res, p) => p.age < res ? p.age : res, start);
        const maxAge = persons.reduce((res, p) => p.age > res ? p.age : res, start);
        const avgAge = persons.reduce((res, p) => p.age + res, 0) / persons.length;
        const divStats = document.createElement('div')
        const h3avg = createInfoElement(`Average age: ${avgAge.toFixed(1)}`, 'h3');
        const h3min = createInfoElement(`Min age: ${minAge}`, 'h3');
        const h3max = createInfoElement(`Max age: ${maxAge}`, 'h3');
        divStats.append(h3avg, h3min, h3max);
        stats.appendChild(divStats);
    } else {
        stats.appendChild(createInfoElement('No stats', 'h3'));
    }
}

function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
    this.toString = function () {
        return `ID: ${this.id}, Name: ${this.fullName()}, Age: ${this.age}`
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}