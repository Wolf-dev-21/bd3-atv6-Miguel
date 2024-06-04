const database = 'BD3-NoSQL-AtlasMongoDB';

const collection = 'bd3-nosql-atv6';

use(database);


/*exemplos de inserção com o insert many*/

db[collection].insertOne(
    {

        "nome": "Aluno Teste ",
        "cpf": 12345678901,
        "rg": 123456780,
        "tel_aluno": 11234567890,
        "tel_resp": 1123456789,
        "email": "alunoteste@gmail.com",
        "data_nascimento": 21/11/2003,

    }
)