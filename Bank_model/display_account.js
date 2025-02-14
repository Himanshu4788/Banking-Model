document.addEventListener('DOMContentLoaded', function() {
    loadAccounts();
});

function loadAccounts() {
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    const tableBody = document.getElementById('accountTableBody');

    tableBody.innerHTML = ''; // Clear existing rows

    accounts.forEach(account => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${account.name}</td>
            <td>${account.acc_no}</td>
            <td>${account.email}</td>
            <td>${account.occupation}</td>
            <td>${account.phone_no}</td>
            <td>$0</td> <!-- Assuming money is not part of the form -->
        `;
        tableBody.appendChild(row);
    });
}

function highlightRow(event) {
    event.preventDefault();
    const searchValue = document.getElementById('searchBox').value.toLowerCase();
    const rows = document.querySelectorAll('#accountTableBody tr');

    rows.forEach(row => {
        const accNo = row.cells[1].textContent.toLowerCase();
        if (accNo.includes(searchValue)) {
            row.style.backgroundColor = 'yellow';
        } else {
            row.style.backgroundColor = '';
        }
    });
}