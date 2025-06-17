import "../css/Card.css";

export const Card = ({ nombre, profesion, descripcion, direccion }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={direccion} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Profesion: {profesion}</h6>
        <p className="card-text">{descripcion}</p>
      </div>
      
      <div className="card-body">
        <a href="#" className="card-link">Ver más</a>
        <a href="#" className="card-link">Contacto</a>
      </div>
    </div>
  );
};



