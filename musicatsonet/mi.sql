Create database MusicatSonet;

Use MusicatSonet;

-- TABLAS: Usuarios, Artistas, Genero, GéneroMusical , Canciones 
-- Albumnes, lista_Canciones 
-- Historial de reproduccion , Favoritos 

create table
	Membresia (
		id_Menbresia int primary key not null,
		nombre_Menbresia varchar(80) not null
	);

Create table
	GeneroMusical (
		id_GeneroMusical int primary key auto_increment,
		nombre_GeneroMusical varchar(20) not null
	);

create table
	Genero (
		id_Genero int primary key auto_increment,
		nombre_Genero varchar(20) not null
	);

Create table
	Canciones (
		id_Cancion int primary key auto_increment,
		titulo_Cancion varchar(30) not null,
		duracion_Cancion time not null,
		url_ArchivoCancion varchar(150),
		cant_ReproduccionCancion int default 0,
		id_GeneroMusical int,
		id_Albumnes int,
		Foreign key (id_Albumnes) references Albumnes (id_Albumnes),
		Foreign key (id_GeneroMusical) references GeneroMusical (id_GeneroMusical)
	);

create table
	Albumnes (
		id_Albumnes int primary key auto_increment,
		titulo_Albumnes varchar(30) not null,
		lanzamiento_Albumnes year,
		coverImage_Albumnes varchar(200),
		id_Artista int not null,
		Foreign key (id_Artista) references Artistas (id_Artista)
	);

Create table
	Lista_Canciones (
		id_ListaCanciones int primary key auto_increment key not null,
		nombre_ListaCanciones varchar(100) not null,
		orden_ListaCanciones int,
		id_Usuario int not null,
		id_Cancion int,
		Foreign key (id_Cancion) references Canciones (id_Cancion),
		Foreign key (id_Usuario) references Usuario (id_Usuario)
	);

Create table
	Favoritos (
		id_favoritos int primary key auto_increment not null,
		registro_Favorito datetime,
		id_usuario int,
		id_Cancion int,
		id_album int,
		Foreign key (id_Usuario) references Usuarios (id_Usuario),
		Foreign key (id_Cancion) references Canciones (id_Cancion),
		Foreign key (id_Albumnes) references Albumnes (id_Albumnes)
	)


	Create table
	Usuarios (
		id_Usuario int primary key auto_increment not null,
		nombre_Usuario varchar(30) not null,
		email_Usuario varchar(180) not null unique,
		registro_Usuario date,
		clave_Usuario varchar(20),
		id_Menbresia int not null,
		id_Genero int,
		Foreign key (id_Genero) references Genero (id_Genero),
		Foreign key (id_Menbresia) references Menbresia (id_Menbresia)
	);



create table
	Artistas (
		id_Artista int primary key auto_increment not null,
		nombre_Artista varchar(200),
		banda_Artista varchar(200),
		genero_Artista varchar(50),
		id_Genero int,
		id_Albumnes int,
		id_Canciones int,
		Foreign key (id_Genero) references Genero (id_Genero),
		Foreign key (id_Albumnes) references Albumnes (id_Albumnes),
		Foreign key (id_Canciones) references Canciones (id_Canciones)
	);