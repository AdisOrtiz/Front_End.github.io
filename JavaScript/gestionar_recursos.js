document.addEventListener("DOMContentLoaded", function () {
    const resources = [
        { date: "2023-01-02", name: "HTML", concept: "Concepto del documento del desarrollo web", edited: "DD/MM/AA HH:MM:SS", status: "Terminado", views: "20.010" },
        { date: "2023-01-02", name: "CSS", concept: "Concepto del documento del desarrollo web", edited: "DD/MM/AA HH:MM:SS", status: "Pendiente", views: "0" },
        { date: "2023-01-02", name: "JAVASCRIPT", concept: "Concepto del documento del desarrollo web", edited: "DD/MM/AA HH:MM:SS", status: "Anulado", views: "3.400" },
        { date: "2023-01-02", name: "ANGULAR", concept: "Concepto del documento del desarrollo web", edited: "DD/MM/AA HH:MM:SS", status: "Pendiente", views: "1,159.00" }
    ];

    const tableBody = document.getElementById("resource-table");

    resources.forEach(resource => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><button class="btn-date">${resource.date}</button></td>
            <td>${resource.name}</td>
            <td>${resource.concept}</td>
            <td>${resource.edited}</td>
            <td class="${getStatusClass(resource.status)}">${resource.status}</td>
            <td>${resource.views}</td>
            <td>
                <a href="/HTML/editar_recurso.html"><i class="material-icons icon-btn">edit</i></a>
                <i class="material-icons icon-btn">delete</i>
            </td>
        `;

        tableBody.appendChild(row);
    });

    function getStatusClass(status) {
        switch (status) {
            case "Terminado": return "status-terminado";
            case "Pendiente": return "status-pendiente";
            case "Anulado": return "status-anulado";
            default: return "";
        }
    }
});