CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
# 1 A - USAMOS VARCHAR NO ID, NO NOME E NO GENERO POR ESTARMOS LIDANDO COM STRINGS. NA DATA DE NASCIMENTO
# A ÚNICA ALTERNATIVA POSSÍVEL É QUE FOI UTILIZADA DE DATA

SHOW TABLES;
SHOW DATABASES;
# 1 B - OS DOIS SÃO BEM AUTO-EXPLICATIVOS COM RELAÇÃO A SUAS FUNÇÕES PELOS SEUS NOMES. UM ME MOSTRA MINHA
# BASE DE DADOS ONDE ESTOU CRIANDO TABELAS E O OUTRO MOSTRA AS TABELAS QUE ESTÃO NESSA BASE DE DADOS.

DESCRIBE Actor;
# 1 C - AO UTILIZAR O COMANDO DE DESCRIBE ELE ME TRAZ OS ITENS QUE DESEJO PREENCHER COM INFORMAÇÕES
# NA TABELA QUE CRIEI E SE EXISTEM INFORMAÇÕES JÁ NA TABELA E QUAIS OS TIPOS DE DADOS ESPERADOS NOS ITENS

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

# 2 ITEM A CRIANDO A ATRIZ GLORIA PIRES
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Menezes",
  1400000,
  "1963-05-13", 
  "female"
);
# 2 B - TESTE DE CADASTRO COM O MESMO ID. CODIGO DE ERRO: 1062 DUPLICATE ENTRY FOR KEY PRIMARY. A CHAVE DE ENTRADA
# PRIMARIA FOI DUPLICADA

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# 2 C - FALTAVAM AS INFORMAÇÕES => birth_date E gender

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
# 3 D - NESTE CASO FALTAVA A INFORMAÇÃO => NAME 

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "005", 
  719333.33,
  "1979-03-26", 
  "female"
);
# 2 E - PREENCHI O NOME ANTES DE TESTAR O ERRO COM O ITEM ANTERIOR ENTÃO TESTEI ESTE SEM O NOME E O ERRO QUE OBTIVE FOI
#1364 DIZENDO QUE O CAMPO DE NOME NÃO TEM UM VALOR DEFAULT

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
# 2 E - REFAZENDO ESTE ITEM O QUE ESTAVA ERRADO ERA A FORMA DE DECLARAR A DATA QUE NÃO CONTEM ASPAS
# O CODIGO DE ERRO GERADO FOI 1292 COM VALOR INCORRETO PARA A DATA NA COLUNA DATA DE NASCIMENTO
# NA LINHA 1

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
# 2 E - REFEITO COM OS DADOS CORRETOS

# 2 F 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Maria Fernanda Cândido",
   1933333,
  "1974-05-21", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Dan Stulbach",
  49632,
  "1969-07-26", 
  "male"
);

# EXERCICIO 3
# A
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

# B
SELECT salary from Actor WHERE name = "Tony Ramos";

# C
SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
#NÃO FOI RETORNADA NENHUMA LINHA POIS EM TODOS O CAMPO GENERO ESTÁ PREENCHIDO

# D
SELECT id, name, salary from Actor WHERE salary < 500000;

# E
SELECT id, nome from Actor WHERE id = "002";
# O CODIGO DE ERRO OBTIDO FOI 1054 PORQUE NAME ESTÁ ESCRITO COMO NOME NO CAMPO DE LISTA

# EXERCICIO 4
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" OR name LIKE "J%") AND salary > 300000;
# 4 A - NA QUERY ACIMA LIMITAMOS AS CONDIÇÕES A VALORES BEM ESPECÍFICOS PARA FILTRAR MELHOR OS DADOS COM CONDIÇÕES
#PRE ESTABELECIDAS

# 4 B
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

# 4 C
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%");

# 4 D
SELECT * FROM Actor
WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

# 5 A
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

# 5 B
INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
);

# 5 C

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
);


# 5 D

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-02",
    8
);

# 5 E

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Bacurau",
    "Os moradores de Bacurau, um pequeno povoado do sertão brasileiro, descobrem que a comunidade não consta mais em qualquer mapa. Aos poucos, eles percebem algo estranho na região: enquanto drones passeiam pelos céus, estrangeiros chegam à cidade. Quando carros são baleados e cadáveres começam a aparecer, Teresa, Domingas, Acácio, Plínio, Lunga e outros habitantes chegam à conclusão de que estão sendo atacados. Agora, o grupo precisa identificar o inimigo e criar coletivamente um meio de defesa.",
    "2019-08-23",
    9
);

# EXERCICIO 6
# A
SELECT id, title, rating from Movie WHERE id = "003";

# B
SELECT id, title, synopsis, release_date, rating from Movie WHERE title = "Se Eu Fosse Você";

# C
SELECT id, title, synopsis from Movie WHERE rating >= 7;

# EXERCICIO 7
# A
SELECT * FROM Movie
WHERE (title  LIKE "%vida%");

# B
SELECT * FROM Movie
WHERE (title OR synopsis  LIKE "%vida%");

# C
SELECT * FROM Movie
WHERE (release_date < "2022-04-12");

# D
SELECT * FROM Movie
WHERE (title OR synopsis  LIKE "%vida%") AND rating > 7;