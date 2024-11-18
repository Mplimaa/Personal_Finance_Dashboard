# Personal_Finance_Dashboard - Em construção 🏗️⚒️🔨

Personal Finance Dashboard
O Personal Finance Dashboard é uma aplicação web que permite o gerenciamento das finanças pessoais de forma fácil e interativa. Desenvolvido com HTML, CSS e JavaScript, ele oferece um painel visual para acompanhar suas receitas, despesas e saldo total.

Índice
Recursos
Pré-requisitos
Instalação
Uso
Formato da Planilha para Importação
Funcionalidades Futuras
Contribuição
Licença
Recursos
Adição manual de transações (receitas e despesas)
Resumo financeiro com saldo total, receitas e despesas
Visualização gráfica de receitas vs. despesas usando Chart.js
Tabela de transações recentes
Interface intuitiva e responsiva

Pré-requisitos
Nenhum software adicional é necessário. Basta um navegador moderno (Google Chrome, Firefox, Edge).

Instalação
Clone ou baixe este repositório:

bash
Copiar código
git clone https://github.com/Mplimaa/personal-finance-dashboard.git
cd personal-finance-dashboard
Abra o arquivo index.html diretamente no seu navegador (basta dar um duplo clique ou abrir manualmente).


Uso
1. Adicionar Transações Manualmente
As transações são pré-carregadas com dados fictícios para demonstração.
Em breve, será possível adicionar novas transações via formulário na tela.

2. Importar Transações via Arquivo Excel (Funcionalidade em desenvolvimento)
Em breve, será permitido importar arquivos .xlsx para adicionar transações em massa.
Será disponibilizado um template para download com o formato necessário, para garantir a segurança e evitar injeções de dados incorretos.
Formato da Planilha para Importação (Planejado)
Data	Descrição	Tipo	Categoria	Valor
2024-11-01	Salário	Receita	Salário	2700.00
2024-11-05	Aluguel	Despesa	Moradia	-1200.00
2024-11-10	Supermercado	Despesa	Alimentação	-450.00
Data: formato YYYY-MM-DD
Descrição: texto livre
Tipo: Receita ou Despesa
Categoria: categorias padrão (ex.: Alimentação, Moradia, Salário, etc.)
Valor: números positivos para receitas, negativos para despesas


Funcionalidades Futuras
 Formulário na tela para adicionar novas transações manualmente.
 Suporte para importação e exportação de transações em formato Excel (.xlsx).
 Armazenamento de dados em um arquivo JSON local para persistência.
 Validação de dados para evitar entradas incorretas ou maliciosas.
 Melhorar a experiência do usuário com gráficos dinâmicos.
 Tema escuro para visualização mais confortável.


Contribuição
Contribuições são bem-vindas! Se deseja ajudar:


Faça um fork deste repositório.
Crie uma nova branch para suas alterações (git checkout -b minha-nova-feature).
Commit suas alterações (git commit -m 'Adiciona nova funcionalidade').
Push para a branch (git push origin minha-nova-feature).
Abra um Pull Request para análise.


Licença
Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes. Permitido o uso somente para fins educacionais.
