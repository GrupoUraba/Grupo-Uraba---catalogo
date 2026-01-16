const servicios = [
  {
    nombre: "Mantenimiento integral",
    descripcion: "Servicios de mantenimiento preventivo y correctivo.",
    imagen: "https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg"
  },
  {
    nombre: "Videovigilancia CCTV",
    descripcion: "Instalación y mantenimiento de cámaras de seguridad.",
    imagen: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg"
  },
  {
    nombre: "Redes y cableado",
    descripcion: "Diseño e instalación de redes estructuradas.",
    imagen: "https://images.pexels.com/photos/159306/network-cable-ethernet-computer-159306.jpeg"
  },
  {
    nombre: "Soluciones tecnológicas",
    descripcion: "Soporte y soluciones tecnológicas empresariales.",
    imagen: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
  },
  {
    nombre: "Mantenimiento locativo",
    descripcion: "Mantenimiento de instalaciones físicas.",
    imagen: "https://images.pexels.com/photos/8961130/pexels-photo-8961130.jpeg"
  }
];

const contenedor = document.getElementById("productos");

servicios.forEach(servicio => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${servicio.imagen}" alt="${servicio.nombre}">
    <div class="card-body">
      <h3>${servicio.nombre}</h3>
      <p>${servicio.descripcion}</p>
      <a class="btn" href="https://wa.me/573013335008?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(servicio.nombre)}" target="_blank">
        Consultar
      </a>
    </div>
  `;

  contenedor.appendChild(card);
});
