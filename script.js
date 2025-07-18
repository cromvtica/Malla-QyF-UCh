document.addEventListener('DOMContentLoaded', () => {
  // Obtener todos los ramos
  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    ramo.addEventListener('click', () => {
      // Si está bloqueado no hace nada
      if (ramo.classList.contains('bloqueado')) return;

      // Alternar estado aprobado
      const aprobado = ramo.classList.toggle('aprobado');

      // Actualizar estado de los prerrequisitos de otros ramos
      actualizarEstadoRamos();
    });
  });

  function actualizarEstadoRamos() {
    // Obtener todos los ramos
    const ramos = document.querySelectorAll('.ramo');

    ramos.forEach(ramo => {
      const prerrequisitos = ramo.getAttribute('data-prerrequisitos');
      if (!prerrequisitos) {
        // No tiene prerrequisitos, desbloqueado siempre
        ramo.classList.remove('bloqueado');
        return;
      }

      // Lista de IDs prerrequisitos
      const listaPrerrequisitos = prerrequisitos.split(',');

      // Verificar si todos los prerrequisitos están aprobados
      const todosAprobados = listaPrerrequisitos.every(id => {
        const prereqRamo = document.getElementById(id.trim());
        return prereqRamo && prereqRamo.classList.contains('aprobado');
      });

      if (todosAprobados) {
        ramo.classList.remove('bloqueado');
      } else {
        // Si no está aprobado, bloquear
        if (!ramo.classList.contains('aprobado')) {
          ramo.classList.add('bloqueado');
        }
      }
    });
  }

  // Ejecutar la primera actualización al cargar la página
  actualizarEstadoRamos();
});

