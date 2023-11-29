CREATE TABLE Premiacoes (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Ano INT,
    Categoria VARCHAR(255),
    NomeFilme VARCHAR(255),
    NomePessoa VARCHAR(255),
    Ganhou BOOLEAN
);

-- Exemplo de inserção de dados fictícios
INSERT INTO Premiacoes (Ano, Categoria, NomeFilme, NomePessoa, Ganhou)
VALUES 
    (2004, 'Melhor Atriz Coadjuvante', 'Closer', 'Natalie Portman', 0),
    (1927, 'Melhor Atriz', 'Jackie', 'Natalie Portman', 0),
    (2016, 'Melhor Atriz', 'Jackie', 'Natalie Portman', 0),
    (2010, 'Melhor Atriz', 'Cisne Negro', 'Natalie Portman', 1),
    (2021, 'Melhor Ator', 'Filme B', 'John Doe', 1),
    (2008, 'Melhor Atriz', 'Dúvida', 'Amy Adams', 0),
    (2007, 'Melhor Atriz', 'Encantada', 'Amy Adams', 0),
    (2016, 'Melhor Atriz', 'A Chegada', 'Amy Adams', 0),
    (2013, 'Melhor Atriz', 'Trapaça', 'Amy Adams', 0),
    (2012, 'Melhor Atriz', 'O Mestre', 'Amy Adams', 0),
    (2011, 'Melhor Filme', 'Toy Story 3', NULL, 1),
    (1929, 'Melhor Atriz', 'Sete Oportunidades', 'Janet Gayno', 1),
    (2019, 'Melhor Atriz', 'Filme E', 'Jane Doe', 0),
    (2006, 'Melhor Filme', 'Crash', NULL, 1),
    (1999, 'Melhor Atriz', 'Central do Brasil', 'Fernanda Montenegro', 0);