-- TABLE
CREATE TABLE Consultas (
    ConsultaID INT PRIMARY KEY,
    PacienteID INT,
    MedicoID INT,
    DataConsulta DATETIME,
    Valor INT,
  	Convenio VARCHAR(50), Medicamento TEXT,
    FOREIGN KEY (PacienteID) REFERENCES Pacientes(PacienteID),
    FOREIGN KEY (MedicoID) REFERENCES Medicos(MedicoID)
);
CREATE TABLE Enfermeiros (
    EnfermeiroID INT PRIMARY KEY,
    Nome VARCHAR(50),
    CRE VARCHAR(100),
  	Turno VARCHAR(50)
);
CREATE TABLE Hospital (
    DepartamentoID INT PRIMARY KEY,
    Localidade VARCHAR(50),
  	Atendimento VARCHAR(50)
);
CREATE TABLE Medicos (
    MedicoID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Especialidade VARCHAR(50),
    CRM VARCHAR(20),
    Turno VARCHAR(15)
);
CREATE TABLE Pacientes (
    PacienteID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Endereco VARCHAR(100),
  	Documento VARCHAR(50),
    DataNascimento DATE,
    Telefone VARCHAR(15),
  	Convenio VARCHAR(50)
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
