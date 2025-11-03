DROP DATABASE IF EXISTS MusicatSonet;
CREATE DATABASE MusicatSonet;
USE MusicatSonet;

-- 1. Tablas base (sin dependencias)
CREATE TABLE Membresia (
    id_Membresia INT PRIMARY KEY AUTO_INCREMENT,
    nombre_Membresia VARCHAR(80) NOT NULL
);

CREATE TABLE Genero (
    id_Genero INT PRIMARY KEY AUTO_INCREMENT,
    nombre_Genero VARCHAR(20) NOT NULL
);

CREATE TABLE GeneroMusical (
    id_GeneroMusical INT PRIMARY KEY AUTO_INCREMENT,
    nombre_GeneroMusical VARCHAR(20) NOT NULL
);

-- 2. Usuarios
CREATE TABLE Usuarios (
    id_Usuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_Usuario VARCHAR(30) NOT NULL,
    email_Usuario VARCHAR(180) NOT NULL UNIQUE,
    registro_Usuario DATE,
    clave_Usuario VARCHAR(20),
    id_Membresia INT NOT NULL,
    id_Genero INT,

    FOREIGN KEY (id_Genero) REFERENCES Genero(id_Genero),
    FOREIGN KEY (id_Membresia) REFERENCES Membresia(id_Membresia)
);

-- 3. Artistas
CREATE TABLE Artistas (
    id_Artista INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_Artista VARCHAR(200),
    banda_Artista VARCHAR(200),
    genero_Artista VARCHAR(50),
    id_Genero INT,

    FOREIGN KEY (id_Genero) REFERENCES Genero(id_Genero)
);

-- 4. Álbumes
CREATE TABLE Albumnes (
    id_Albumnes INT PRIMARY KEY AUTO_INCREMENT,
    titulo_Albumnes VARCHAR(30) NOT NULL,
    lanzamiento_Albumnes YEAR,
    coverImage_Albumnes VARCHAR(200),
    id_Artista INT NOT NULL,

    FOREIGN KEY (id_Artista) REFERENCES Artistas(id_Artista)
);

-- 5. Canciones
CREATE TABLE Canciones (
    id_Cancion INT PRIMARY KEY AUTO_INCREMENT,
    titulo_Cancion VARCHAR(30) NOT NULL,
    duracion_Cancion TIME NOT NULL,
    url_ArchivoCancion VARCHAR(150),
    cant_ReproduccionCancion INT DEFAULT 0,
    id_GeneroMusical INT,
    id_Albumnes INT,

    FOREIGN KEY (id_Albumnes) REFERENCES Albumnes(id_Albumnes),
    FOREIGN KEY (id_GeneroMusical) REFERENCES GeneroMusical(id_GeneroMusical)
);

-- 6. Lista de Canciones
CREATE TABLE Lista_Canciones (
    id_ListaCanciones INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_ListaCanciones VARCHAR(100) NOT NULL,
    orden_ListaCanciones INT,
    id_Usuario INT NOT NULL,
    id_Cancion INT,

    FOREIGN KEY (id_Cancion) REFERENCES Canciones(id_Cancion),
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario)
);

-- 7. Favoritos
CREATE TABLE Favoritos (
    id_Favoritos INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    registro_Favorito DATETIME,
    id_Usuario INT,
    id_Cancion INT,
    id_Albumnes INT,

    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    FOREIGN KEY (id_Cancion) REFERENCES Canciones(id_Cancion),
    FOREIGN KEY (id_Albumnes) REFERENCES Albumnes(id_Albumnes)
);

CREATE TABLE HistorialReproduccion (
    id_Historial INT PRIMARY KEY AUTO_INCREMENT,
    id_Usuario INT,
    id_Cancion INT,
    fecha_Reproduccion DATETIME,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(id_Usuario),
    FOREIGN KEY (id_Cancion) REFERENCES Canciones(id_Cancion)
);


