async function cargarPersonas() {
  const response = await fetch('/api/personas'); // Asegúrate que esta ruta coincide con tu backend
  const personas = await response.json();
  const lista = document.getElementById('lista-personas');
  lista.innerHTML = '';

  personas.forEach(p => {
    const li = document.createElement('li');
    li.textContent = `${p.nombre} (${p.edad})`; // Ajusta a tus campos reales
    lista.appendChild(li);
  });
}
