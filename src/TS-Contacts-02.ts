type User = {
    name: string;
    age: number;
    group: string;
};

type Admin = {
    name: string;
    age: number;
    role: string;
};

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Константин Макаревич',
        age: 23,
        group: 'Frontend Developer',
    },
    {
        name: 'Кирилл Петров',
        age: 35,
        group: 'Переводчик',
    },
    {
        name: 'Иван Иванов',
        age: 19,
        group: 'Семья',
    },
    {
        name: 'Сергей Александров',
        age: 33,
        role: 'Администратор',
    },
];

const logPerson = (persons: Person): void => {
    console.log(`${persons.name}, ${persons.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
