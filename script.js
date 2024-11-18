// Dados fictícios iniciais
let transactions = [
    { date: "2024-11-01", description: "Salário", type: "Receita", category: "Salário", amount: 2700 },
    { date: "2024-11-05", description: "Aluguel", type: "Despesa", category: "Moradia", amount: -1200 },
    { date: "2024-11-10", description: "Supermercado", type: "Despesa", category: "Alimentação", amount: -450 },
    { date: "2024-11-15", description: "Freelance", type: "Receita", category: "Outros", amount: 800 }
];

// Função para calcular o saldo total, receita e despesas
function updateSummary() {
    const totalIncome = transactions
        .filter(item => item.type === "Receita")
        .reduce((sum, item) => sum + item.amount, 0);

    const totalExpense = transactions
        .filter(item => item.type === "Despesa")
        .reduce((sum, item) => sum + Math.abs(item.amount), 0);

    const totalBalance = totalIncome - totalExpense;

    document.getElementById('total-balance').textContent = `R$ ${totalBalance.toFixed(2)}`;
    document.getElementById('total-income').textContent = `R$ ${totalIncome.toFixed(2)}`;
    document.getElementById('total-expense').textContent = `R$ ${totalExpense.toFixed(2)}`;
}

// Função para renderizar o gráfico
function renderChart() {
    const ctx = document.getElementById('incomeExpenseChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Receita', 'Despesas'],
            datasets: [{
                label: 'Finanças',
                data: [
                    transactions.filter(t => t.type === "Receita").reduce((sum, t) => sum + t.amount, 0),
                    transactions.filter(t => t.type === "Despesa").reduce((sum, t) => sum + Math.abs(t.amount), 0)
                ],
                backgroundColor: ['#16a085', '#c0392b']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Função para preencher a tabela de transações
function renderTransactions() {
    const tableBody = document.getElementById('transactionTable');
    tableBody.innerHTML = '';

    transactions.forEach(transaction => {
        const row = `<tr>
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.type}</td>
            <td>${transaction.category}</td>
            <td>R$ ${transaction.amount.toFixed(2)}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Adicionando nova transação pelo formulário
document.getElementById('transactionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const newTransaction = {
        date: document.getElementById('date').value,
        description: document.getElementById('description').value,
        type: document.getElementById('type').value,
        category: document.getElementById('category').value,
        amount: parseFloat(document.getElementById('amount').value)
    };

    transactions.push(newTransaction);
    updateSummary();
    renderTransactions();
    renderChart();
});

// Importar transações do Excel
document.getElementById('excelInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const importedData = XLSX.utils.sheet_to_json(sheet);

        importedData.forEach(row => {
            const transaction = {
                date: row.Data,
                description: row.Descricao,
                type: row.Tipo,
                category: row.Categoria,
                amount: parseFloat(row.Valor)
            };
            transactions.push(transaction);
        });

        updateSummary();
        renderTransactions();
        renderChart();
    };
    reader.readAsArrayBuffer(file);
});

// Inicializar o Dashboard
updateSummary();
renderChart();
renderTransactions();
