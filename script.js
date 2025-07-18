
const ramos = [
    { nombre: "Química General I", id: "qg1", prereqs: [] },
    { nombre: "Química General II", id: "qg2", prereqs: ["qg1"] },
    { nombre: "Química Orgánica I", id: "qo1", prereqs: ["qg2"] },
    { nombre: "Bioquímica", id: "bq", prereqs: ["qo1"] },
];

const grid = document.querySelector('.grid');

ramos.forEach(ramo => {
    const div = document.createElement('div');
    div.className = 'ramo';
    div.id = ramo.id;
    div.textContent = ramo.nombre;
    div.addEventListener('click', () => toggleRamo(ramo));
    grid.appendChild(div);
});

function toggleRamo(ramo) {
    const div = document.getElementById(ramo.id);
    if (div.classList.contains('activo')) return;
    const ready = ramo.prereqs.every(p => document.getElementById(p).classList.contains('activo'));
    if (ready) div.classList.add('activo');
    else alert('Debes aprobar primero: ' + ramo.prereqs.join(', '));
}
