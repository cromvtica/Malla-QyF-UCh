<script>
  const ramos = document.querySelectorAll('.ramo');
  const ramosArray = Array.from(ramos);
  const estadoRamos = {};

  function inicializarEstados() {
    // Intentar cargar desde localStorage
    const guardado = localStorage.getItem('estadoRamos');
    if (guardado) {
      const obj = JSON.parse(guardado);
      ramosArray.forEach(ramo => {
        if(obj[ramo.dataset.id]) {
          estadoRamos[ramo.dataset.id] = obj[ramo.dataset.id];
        } else {
          // Si no está en guardado, poner bloqueado o desbloqueado según prereqs
          estadoRamos[ramo.dataset.id] = (ramo.dataset.prereqs === "") ? 'desbloqueado' : 'bloqueado';
        }
      });
    } else {
      // Sin guardado, inicializar por prereqs
      ramosArray.forEach(ramo => {
        estadoRamos[ramo.dataset.id] = (ramo.dataset.prereqs === "") ? 'desbloqueado' : 'bloqueado';
      });
    }
  }

  function actualizarDesbloqueo() {
    ramosArray.forEach(ramo => {
      if (estadoRamos[ramo.dataset.id] === 'aprobado') return;

      const prereqs = ramo.dataset.prereqs.split(',').map(s => s.trim()).filter(s => s !== "");
      if (prereqs.length === 0) {
        estadoRamos[ramo.dataset.id] = 'desbloqueado';
      } else {
        const todosAprobados = prereqs.every(id => estadoRamos[id] === 'aprobado');
        estadoRamos[ramo.dataset.id] = todosAprobados ? 'desbloqueado' : 'bloqueado';
      }
    });
  }

  function actualizarClases() {
    ramosArray.forEach(ramo => {
      ramo.classList.remove('bloqueado', 'desbloqueado', 'aprobado');
      ramo.classList.add(estadoRamos[ramo.dataset.id]);
    });
  }

  function guardarEstado() {
    localStorage.setItem('estadoRamos', JSON.stringify(estadoRamos));
  }

  function onClickRamo(event) {
    const ramo = event.currentTarget;
    const id = ramo.dataset.id;
    const estado = estadoRamos[id];

    if (estado === 'bloqueado') return;

    if (estado === 'desbloqueado') estadoRamos[id] = 'aprobado';
    else if (estado === 'aprobado') estadoRamos[id] = 'desbloqueado';

    actualizarDesbloqueo();
    actualizarClases();
    guardarEstado();
  }

  ramosArray.forEach(ramo => {
    ramo.addEventListener('click', onClickRamo);
  });

  inicializarEstados();
  actualizarDesbloqueo();
  actualizarClases();
</script>

