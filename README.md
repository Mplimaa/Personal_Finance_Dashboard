# Personal_Finance_Dashboard

O Personal Finance Dashboard é uma aplicação web que permite o gerenciamento das finanças pessoais de forma interativa e intuitiva. A aplicação foi desenvolvida com HTML, CSS e JavaScript, e está em fase de desenvolvimento para incluir funcionalidades avançadas, como importação/exportação de dados em formato Excel e armazenamento em um repositório JSON.

* Índice
* Recursos
 *Pré-requisitos
* Instalação
* Uso
* Formato da Planilha para Importação
* Funcionalidades Futuras
* Contribuição
* Licença


* Recursos
Cadastro manual de transações (receitas e despesas)
Resumo financeiro (saldo total, receitas e despesas)
Gráfico de receitas vs. despesas
Importação de transações a partir de arquivos Excel (.xlsx)
Interface intuitiva e responsiva
Importação segura com validação de dados para evitar injeção de conteúdo não permitido


* Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

Node.js (opcional, se for usar um servidor local)
Um navegador moderno (Google Chrome, Firefox, Edge)
Git (se for clonar o repositório)


* Instalação
1. Clone o repositório
bash
Copiar código
git clone https://github.com/seu-usuario/personal-finance-dashboard.git
cd personal-finance-dashboard
2. Abra o projeto em um servidor local
Você pode usar uma extensão como o Live Server no Visual Studio Code ou um comando básico do Python:

bash
Copiar código
# Usando Python 3
python -m http.server 8080
Acesse o projeto em http://localhost:8080.


* Uso
1. Adicionar Transações Manualmente
Preencha o formulário na seção "Adicionar Transação" com a data, descrição, tipo (receita ou despesa), categoria e valor.
Clique no botão "Adicionar" para salvar a transação.
A tabela será atualizada automaticamente e o resumo financeiro será recalculado.

2. Importar Transações via Excel
Clique no botão de upload e selecione um arquivo .xlsx.
O arquivo Excel deve seguir um formato específico (veja abaixo).
As transações válidas serão adicionadas à tabela, e o resumo será atualizado.

3. Exportar Transações para Download
(Funcionalidade em desenvolvimento)

* Formato da Planilha para Importação
Para garantir que suas transações sejam importadas corretamente, a planilha Excel deve seguir o formato abaixo:

Data	Descricao	Tipo	Categoria	Valor
2024-11-01	Salário	Receita	Salário	2700.00
2024-11-05	Aluguel	Despesa	Moradia	-1200.00
2024-11-10	Supermercado	Despesa	Alimentação	-450.00
Data: formato YYYY-MM-DD.
Descrição: texto livre.
Tipo: Receita ou Despesa.
Categoria: categoria específica da transação.
Valor: número (use sinal negativo para despesas).
Nota: Qualquer linha que não estiver em conformidade com o formato acima será ignorada.

* Funcionalidades Futuras
 Implementar um repositório JSON para armazenamento de transações.
 Possibilidade de exportar os dados financeiros em formato .xlsx para download.
 Melhorar a segurança ao validar dados importados para prevenir injeção de código malicioso.
 Gráficos mais dinâmicos, permitindo visualizações personalizadas (ex.: gráficos de pizza, linha).
 Dark Mode (tema escuro) para melhor experiência de usuário.
Contribuição
Contribuições são bem-vindas! Se você deseja contribuir com este projeto:

Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b minha-feature).
Commit suas alterações (git commit -m 'Adiciona nova funcionalidade').
Faça um push para a branch (git push origin minha-feature).
Abra um Pull Request.


* Licença
Este projeto está licenciado sob a MIT License - somente pra uso educacional.

