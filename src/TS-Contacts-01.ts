type User = {
    name: string;
    age: number;
    group: string;
};

const persons: User[] = [
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
];

const logPerson = (persons: User): void => {
    console.log(`${persons.name}, ${persons.age}`);
};

console.log('Users:');
persons.forEach(logPerson);
