const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);


/*exemplos de inserção com o insert many*/

db[collection].insertMany(
    [
    {
    "nome": "Aluno 1",
    "cpf": 12345678901,
    "rg": 331608777,
    "tel_aluno": 11963667759,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },
    {
    "nome": "Aluno 2",
    "cpf": 48061733803,
    "rg": 382149579,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },
    
    {
    "nome": "Aluno 3",
    "cpf": 81336571802,
    "rg": 351455310,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 4",
    "cpf": 61194574882,
    "rg": 410895908,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 5",
    "cpf": 25520491844,
    "rg": 395912015,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 6",
    "cpf": 69191467896,
    "rg": 179738136,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 7",
    "cpf": 30914767828,
    "rg": 476497735,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 8",
    "cpf": 84198134863,
    "rg": 471786147,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },

    {
    "nome": "Aluno 9",
    "cpf": 78087845838,
    "rg": 274557137,
    "tel_aluno": 11234567890,
    "tel_resp": 1123456789,
    "email": "alunoteste@gmail.com",
    "data_nascimento": 21/11/2003,
    },
    ]
)