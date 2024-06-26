const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);


/*exemplos de inserção com o insert many*/

db['bd3-nosql-atv6'].insertMany(
    [
    {
    "nome": "Aluno 1",
    "cpf": 12345678901,
    "rg": 331608777,
    "tel_aluno": 1198898-4377,
    "tel_resp": 1198528-9571,
    "email": "alunoteste1@gmail.com",
    "data_nascimento": 21/11/2003,
    },
    {
    "nome": "Aluno 2",
    "cpf": 48061733803,
    "rg": 382149579,
    "tel_aluno": 1199793-1387,
    "tel_resp": 1198841-9638,
    "email": "alunoteste2@gmail.com",
    "data_nascimento": 9/10/2007,
    },
    
    {
    "nome": "Aluno 3",
    "cpf": 81336571802,
    "rg": 351455310,
    "tel_aluno": 1197211-8821,
    "tel_resp": 1198016-2772,
    "email": "alunoteste3@gmail.com",
    "data_nascimento": 4/5/2011,
    },

    {
    "nome": "Aluno 4",
    "cpf": 61194574882,
    "rg": 410895908,
    "tel_aluno": 1196821-5623,
    "tel_resp": 1199554-4189,
    "email": "alunoteste4@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 5",
    "cpf": 25520491844,
    "rg": 395912015,
    "tel_aluno": 1198894-5122,
    "tel_resp": 1197944-9567,
    "email": "alunoteste5@gmail.com",
    "data_nascimento": 29/8/2011,
    },

    {
    "nome": "Aluno 6",
    "cpf": 69191467896,
    "rg": 179738136,
    "tel_aluno": 1198153-6384,
    "tel_resp": 1198742-8845,
    "email": "alunoteste6@gmail.com",
    "data_nascimento": 14/4/2006,
    },

    {
    "nome": "Aluno 7",
    "cpf": 30914767828,
    "rg": 476497735,
    "tel_aluno": 1198912-8684,
    "tel_resp": 1199208-1490,
    "email": "alunoteste7@gmail.com",
    "data_nascimento": 3/3/2011,
    },

    {
    "nome": "Aluno 8",
    "cpf": 84198134863,
    "rg": 471786147,
    "tel_aluno": 1198067-1671,
    "tel_resp": 1197987-2104,
    "email": "alunoteste8@gmail.com",
    "data_nascimento": 27/9/2009,
    },

    {
    "nome": "Aluno 9",
    "cpf": 78087845838,
    "rg": 274557137,
    "tel_aluno": 1198852-4863,
    "tel_resp": 1196822-3812,
    "email": "alunoteste9@gmail.com",
    "data_nascimento": 21/8/2008,
    },
    ]
);