const database = 'BD3-NoSQL-AtlasMongoDB';


const collection = 'bd3-nosql-atv6';

// ACESSA O BANCO DE DADOS 
use(database);

// CRIA A COLLECTION 
db.createCollection(collection);