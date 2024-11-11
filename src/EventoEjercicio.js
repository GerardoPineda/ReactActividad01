import react from "react";

const ListaDeLibros = () => {
    // Arreglo de objetos, cada objeto representa un libro
    const libros = [
      { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
      { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605 },
      { titulo: '1984', autor: 'George Orwell', año: 1949 },
      { titulo: 'El principito', autor: 'Antoine de Saint-Exupéry', año: 1943 },
    ];
  
    return (
      <div>
        <h2>Lista de Libros</h2>
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>
              <strong>Título:</strong> {libro.titulo} <br />
              <strong>Autor:</strong> {libro.autor} <br />
              <strong>Año de Publicación:</strong> {libro.año}
            </li>
          ))}
        </ul>
      </div>
    )
  };

export default ListaDeLibros;