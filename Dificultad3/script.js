let currentPage = 1;
const data = {
    1: [
        { ingresado: 'V', ticket: '054723', cliente: 'Isaac', requerimiento: 'Otros', prioridad: '0', transcurrido: '00:49:59', estado: 'ANEXO 1' },
        { ingresado: 'V', ticket: '054734', cliente: 'Lenin', requerimiento: 'Otros', prioridad: '0', transcurrido: '00:00:00', estado: 'ANEXO 2' }
    ],
    2: [
        { ingresado: 'V', ticket: '054735', cliente: 'Juan', requerimiento: 'Otros', prioridad: '1', transcurrido: '01:00:00', estado: 'ANEXO 3' },
        { ingresado: 'f', ticket: '054736', cliente: 'Perez', requerimiento: 'Otros', prioridad: '1', transcurrido: '01:30:00', estado: 'ANEXO 4' }
    ]
};

function highlightCard(selectedCard) {
    const cards = document.querySelectorAll('.dashboard .card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.add('highlighted');
            card.classList.remove('dim');
        } else {
            card.classList.remove('highlighted');
            card.classList.add('dim');
        }
    });
}

function changePage(page) {
    currentPage = page;
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';
    data[page].forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.ingresado}</td>
            <td>${row.ticket}</td>
            <td>${row.cliente}</td>
            <td>${row.requerimiento}</td>
            <td class="priority">${row.prioridad}</td>
            <td class="time">${row.transcurrido}</td>
            <td>${row.estado}</td>
        `;
        tableBody.appendChild(tr);
    });
}
