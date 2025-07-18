const ramos = [
    { nombre: "Química General I", id: "qg1", prereqs: [] },
    { nombre: "Técnicas de Laboratorio Químico", id: "tlq", prereqs: [] },
    { nombre: "Mecánica", id: "mec", prereqs: [] },
    { nombre: "Introducción al Cálculo", id: "calc0", prereqs: [] },
    { nombre: "Químico Farmacéutico y su Acción", id: "qfaccion", prereqs: [] },
    { nombre: "Inglés I", id: "ing1", prereqs: [] },
    { nombre: "Química General II", id: "qg2", prereqs: ['qg1'] },
    { nombre: "Laboratorio de Química General", id: "labqg", prereqs: ['qg1', 'tlq'] },
    { nombre: "Electromagnetismo", id: "em", prereqs: ['calc0', 'mec'] },
    { nombre: "Cálculo Diferencial e Integral", id: "calc", prereqs: ['calc0'] },
    { nombre: "Biología General", id: "bio", prereqs: [] },
    { nombre: "Medicamento y su Evolución", id: "med", prereqs: ['qfaccion'] },
    { nombre: "Inglés II", id: "ing2", prereqs: ['ing1'] },
    { nombre: "Química Orgánica I", id: "qo1", prereqs: ['qg2'] },
    { nombre: "Química Analítica I", id: "qa1", prereqs: ['qg2', 'labqg'] },
    { nombre: "Laboratorio de Química Orgánica", id: "labqo", prereqs: ['qg2', 'labqg'] },
    { nombre: "Estadística y Análisis de Datos", id: "est", prereqs: ['calc'] },
    { nombre: "Fisiología Celular", id: "fisio_cell", prereqs: ['bio', 'qg1', 'em'] },
    { nombre: "Investigación para las Ciencias Farmacéuticas", id: "inv", prereqs: ['med', 'ing2'] },
    { nombre: "Inglés III", id: "ing3", prereqs: ['ing2'] },
    { nombre: "Química Orgánica II", id: "qo2", prereqs: ['qo1'] },
    { nombre: "Laboratorio de Análisis Químico", id: "labaq", prereqs: ['qa1', 'est'] },
    { nombre: "Química Analítica II", id: "qa2", prereqs: ['qa1'] },
    { nombre: "Fisicoquímica", id: "fisicoq", prereqs: ['mec', 'qo1'] },
    { nombre: "Fisiología de Sistemas", id: "fisio_sis", prereqs: ['fisio_cell'] },
    { nombre: "Práctica Intermedia", id: "practica_i", prereqs: ['inv'] },
    { nombre: "Inglés IV", id: "ing4", prereqs: ['ing3'] },
    { nombre: "Laboratorio de Análisis Instrumental", id: "labai", prereqs: ['labaq', 'qa2'] },
    { nombre: "Botánica y Farmacognosia", id: "bot", prereqs: ['qa2', 'qo2'] },
    { nombre: "Química de Heterocíclicos y Análisis Espectroscópico", id: "qhqe", prereqs: ['qo2'] },
    { nombre: "Bioquímica", id: "bq", prereqs: ['fisicoq', 'qo2'] },
    { nombre: "Farmacología General", id: "farma_gen", prereqs: ['fisio_sis', 'labaq'] },
    { nombre: "Gestión de Calidad", id: "gestion", prereqs: ['inv'] },
    { nombre: "Microbiología", id: "micro", prereqs: ['bq'] },
    { nombre: "Farmacoquímica I", id: "farmq1", prereqs: ['farma_gen', 'qhqe'] },
    { nombre: "Farmacología de Sistemas I", id: "farma_sis1", prereqs: ['farma_gen'] },
    { nombre: "Fisiopatología Molecular", id: "fisiop_mol", prereqs: ['bq', 'fisio_sis'] },
    { nombre: "Legislación Farmacéutica", id: "leg", prereqs: ['gestion', 'practica_i'] },
    { nombre: "Fisicoquímica Farmacéutica", id: "fisicoqf", prereqs: ['fisicoq'] },
    { nombre: "Fisiopatología y Semiología", id: "fisiop_semio", prereqs: ['fisiop_mol'] },
    { nombre: "Farmacoquímica II", id: "farmq2", prereqs: ['farmq1'] },
    { nombre: "Farmacología de Sistemas II", id: "farma_sis2", prereqs: ['micro', 'farma_sis1'] },
    { nombre: "Salud Pública", id: "salud_pub", prereqs: ['leg'] },
    { nombre: "Tecnología Farmacéutica I", id: "tecf1", prereqs: ['fisicoqf', 'leg'] },
    { nombre: "Operaciones Unitarias", id: "op_unit", prereqs: ['fisicoqf'] },
    { nombre: "Análisis de Medicamentos, Doping y Drogas de Abuso", id: "analisis_med", prereqs: ['farmq2', 'labai'] },
    { nombre: "Nutrición Clínica", id: "nutricion", prereqs: ['fisiop_semio'] },
    { nombre: "Bioquímica Clínica", id: "bqc", prereqs: ['fisiop_semio'] },
    { nombre: "Biofarmacia y Farmacocinética", id: "biofarma", prereqs: ['farma_gen', 'tecf1'] },
    { nombre: "Tecnología Farmacéutica II", id: "tecf2", prereqs: ['tecf1', 'op_unit'] },
    { nombre: "Administración y Gestión Farmacéutica", id: "adm", prereqs: ['tecf1'] },
    { nombre: "Estadística Farmacéutica", id: "estfarm", prereqs: ['salud_pub', 'est'] },
    { nombre: "Farmacología Clínica", id: "farmacoclin", prereqs: ['biofarma', 'bqc'] },
    { nombre: "Bromatología", id: "bromat", prereqs: ['nutricion', 'labai'] },
    { nombre: "Toxicología", id: "toxico", prereqs: ['bqc', 'farma_sis2'] },
    { nombre: "Farmacia Asistencial", id: "farm_asist", prereqs: ['adm', 'salud_pub'] },
    { nombre: "Tecnología Cosmética", id: "tec_cosm", prereqs: ['tecf2'] },
    { nombre: "Farmacia Clínica", id: "farmclinica", prereqs: ['farmacoclin'] },
    { nombre: "Práctica Profesional en Farmacia Comunitaria", id: "ppfc", prereqs: ['farmacoclin', 'toxico', 'adm'] },
    { nombre: "Biotecnología Farmacéutica", id: "biotec", prereqs: ['fisiop_mol', 'tecf2'] },
    { nombre: "Economía y Marketing Farmacéutico", id: "economia", prereqs: ['adm', 'salud_pub', 'farmacoclin'] },
    { nombre: "Innovación y Proyectos", id: "innov", prereqs: ['estfarm'] },
    { nombre: "Actividad Final de Titulación", id: "actfinal", prereqs: ['innov', 'economia', 'farmclinica', 'biotec', 'ppfc'] }
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
    else alert('Debes aprobar primero: ' + ramo.prereqs.map(id => ramos.find(r => r.id === id).nombre).join(', '));
}
