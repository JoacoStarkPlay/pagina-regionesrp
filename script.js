fetch('config.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('enlaces-container');
    data.enlaces.forEach(enlace => {
      const btn = document.createElement('button');
      btn.className = 'enlace-btn';
      btn.textContent = enlace.nombre;
      btn.onclick = () => window.open(enlace.url, '_blank');
      container.appendChild(btn);
    });
  })
  .catch(error => {
    console.error("Error al cargar config.json:", error);
  });