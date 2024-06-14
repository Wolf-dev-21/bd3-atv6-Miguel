use('BD3-NoSQL-AtlasMongoDB');
/* SELECIONA TODOS OS DADOS DE TODOS OS ARQUIVOS DA COLLECTION */
db['bd3-nosql-atv6'].find();

//Por CPF
use('BD3-NoSQL-AtlasMongoDB');
db['bd3-nosql-atv6'].find({"cpf":48061733803}, {"_id":0,});