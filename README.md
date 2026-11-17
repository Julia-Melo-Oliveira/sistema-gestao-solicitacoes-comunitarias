## 🏘️ Sistema de Gestão de Solicitações Comunitárias

Associação Comunitária Unidos pelo Bairro

Sistema web desenvolvido para auxiliar a Associação Comunitária Unidos pelo Bairro no cadastro, organização, consulta e acompanhamento das solicitações realizadas pelos moradores da comunidade.

## 📌 1. Sobre o Projeto

O Sistema de Gestão de Solicitações Comunitárias é um MVP (Produto Mínimo Viável) desenvolvido com o objetivo de solucionar dificuldades enfrentadas pela associação no gerenciamento das demandas dos moradores.

Atualmente, muitas solicitações são registradas por meio de cadernos, planilhas e mensagens de WhatsApp. Essa forma de organização pode ocasionar perda de informações, retrabalho, dificuldades de localização de registros e atrasos no acompanhamento das demandas.

Para solucionar esse problema, foi desenvolvida uma aplicação web simples, intuitiva e responsiva, que centraliza as principais informações em um único ambiente.

A proposta é facilitar o trabalho dos responsáveis pela associação, melhorar a organização administrativa e contribuir para um atendimento mais eficiente à comunidade.

## 🎯 2. Objetivos do Sistema

O sistema possui os seguintes objetivos:

Centralizar o registro das solicitações dos moradores.
Permitir o cadastro e a identificação dos moradores.
Facilitar a consulta das demandas registradas.
Possibilitar a atualização do andamento das solicitações.
Manter observações relacionadas ao atendimento.
Apresentar indicadores para acompanhamento das demandas.
Disponibilizar relatórios básicos para apoiar a gestão comunitária.
## 👥 3. Público-Alvo

Usuários diretos:

Presidente da associação.
Atendentes.
Colaboradores responsáveis pelo recebimento e acompanhamento das solicitações.

Beneficiados indiretos:

Moradores da comunidade.
Voluntários e demais colaboradores da associação.

O sistema foi planejado considerando usuários com conhecimentos básicos de informática, priorizando uma interface simples e de fácil navegação.

## 💻 4. Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias fundamentais para aplicações web.

Tecnologia	Utilização
HTML5	Estrutura das páginas e formulários
CSS3	Estilização, cores, organização visual e responsividade
JavaScript	Funcionalidades, validações e interações
LocalStorage	Armazenamento local dos registros no navegador
GitHub	Versionamento e hospedagem do código-fonte
GitHub Pages	Publicação gratuita da aplicação web
Por que essas tecnologias foram escolhidas?

A utilização de HTML, CSS e JavaScript puro permite desenvolver uma aplicação sem depender de frameworks complexos ou instalações adicionais.

Essa escolha facilita a manutenção do código, reduz a complexidade do desenvolvimento e atende às necessidades iniciais do MVP.

O LocalStorage foi utilizado para armazenar os dados diretamente no navegador durante a fase de prototipação funcional.

## 📁 5. Estrutura do Projeto

O projeto está organizado da seguinte maneira:

text
sistema-gestao-solicitacoes-comunitarias/
│
├── index.html
│
├── style.css
│
├── script.js
│
└── README.md


Descrição dos arquivos:

index.html: contém a estrutura das telas, menus, formulários e áreas de consulta.
style.css: define a identidade visual, cores, espaçamentos, cartões e adaptação para dispositivos móveis.
script.js: implementa as funcionalidades de cadastro, pesquisa, atualização de status, indicadores e exportação de relatórios.
README.md: apresenta a documentação do projeto e orientações de utilização.
⚙️ 6. Funcionalidades Implementadas
6.1. Menu Inicial

A tela inicial apresenta um painel de controle com informações gerais sobre as solicitações cadastradas.

São apresentados quatro indicadores:

Solicitações abertas.
Solicitações em andamento.
Solicitações concluídas.
Solicitações canceladas.

Também estão disponíveis atalhos para acessar as principais funcionalidades do sistema.

6.2. Cadastro de Moradores

Permite registrar os moradores da comunidade.

Campos disponíveis:

Nome completo.
Contato opcional.
Referência comunitária.

Após o preenchimento e envio do formulário, o morador é armazenado no navegador e fica disponível para associação a novas solicitações.

6.3. Cadastro de Solicitações

Permite registrar novas demandas comunitárias.

Campos disponíveis:

Morador responsável pela solicitação.
Tipo de solicitação.
Descrição do problema.
Data do registro.

As categorias disponíveis incluem:

Iluminação pública.
Limpeza urbana.
Infraestrutura.
Saneamento.
Segurança.
Outros.

Após o preenchimento dos campos obrigatórios, o sistema registra a solicitação com o status inicial Aberta.

6.4. Consulta de Solicitações

Permite visualizar as solicitações registradas.

O usuário pode:

Consultar todas as solicitações.
Pesquisar pelo nome do morador.
Pesquisar pela descrição da demanda.
Filtrar por status.
Visualizar informações da solicitação.
Atualizar o status.
Registrar observações sobre o atendimento.
6.5. Atualização de Status

O sistema disponibiliza quatro situações:

Status	Significado
Aberta	Solicitação registrada e aguardando atendimento
Em andamento	Demanda em processo de atendimento
Concluída	Atendimento finalizado
Cancelada	Solicitação cancelada

A atualização permite acompanhar a evolução das demandas da comunidade.

6.6. Relatórios

O painel de relatórios apresenta:

Quantidade total de solicitações.
Solicitações abertas.
Solicitações em andamento.
Solicitações concluídas.
Solicitações canceladas.
Quantidade de moradores cadastrados.

Também é possível exportar os registros das solicitações em formato CSV, que pode ser aberto em programas como Microsoft Excel e LibreOffice Calc.

## 🚀 7. Como Executar o Sistema

Para executar o projeto localmente, siga as instruções:

Passo 1 – Obter os arquivos

Faça o download do repositório pelo GitHub ou clone o projeto utilizando:

bash
git clone https://github.com/SEU-USUARIO/sistema-gestao-solicitacoes-comunitarias.git


Substitua SEU-USUARIO pelo nome de usuário correspondente ao repositório.

Passo 2 – Abrir o projeto

Abra a pasta do projeto no Visual Studio Code.

Passo 3 – Verificar os arquivos

Certifique-se de que os seguintes arquivos estejam na mesma pasta:

index.html
style.css
script.js

Passo 4 – Executar

Abra o arquivo index.html diretamente no navegador.

Outra possibilidade é utilizar a extensão Live Server no Visual Studio Code.

Passo 5 – Utilizar

Após a abertura, o sistema apresentará o menu inicial e permitirá navegar pelas funcionalidades disponíveis.

## 📝 8. Manual de Utilização
Para utilizar corretamente o sistema, recomenda-se seguir esta sequência:

1. Cadastrar um morador

Acesse a opção Cadastrar Morador.
Informe o nome completo.
Preencha os demais campos, se necessário.
Clique em Cadastrar Morador.
2. Registrar uma solicitação

Acesse Nova Solicitação.
Selecione um morador previamente cadastrado.
Escolha o tipo da solicitação.
Descreva o problema.
Informe a data.
Clique em Registrar Solicitação.
3. Consultar uma solicitação

Acesse Consultar Solicitações.
Utilize o campo de pesquisa para localizar uma demanda.
Se necessário, selecione um status para filtrar os resultados.
Consulte as informações apresentadas.
4. Atualizar o andamento

Localize a solicitação desejada.
Selecione o novo status.
Registre uma observação, se necessário.
Clique em Salvar atualização.
5. Consultar os indicadores

Acesse a opção Relatórios.
Visualize o resumo das solicitações.
Caso necessário, clique em Exportar relatório CSV.
## 💾 9. Armazenamento dos Dados
Nesta versão do MVP, os registros são armazenados utilizando o recurso LocalStorage do navegador.

Isso significa que:

Os dados permanecem disponíveis após atualizar a página no mesmo navegador.
Os registros ficam associados ao navegador e à origem utilizada para acessar a aplicação.
Os dados não são compartilhados automaticamente entre diferentes computadores ou dispositivos.
A limpeza dos dados do navegador pode ocasionar a perda dos registros.
Importante: esta versão utiliza armazenamento local e não possui banco de dados centralizado, autenticação ou sincronização entre usuários.

Para testes acadêmicos, recomenda-se utilizar informações fictícias, evitando o armazenamento de dados pessoais reais dos moradores.

## ♿ 10. Acessibilidade e Responsividade
O desenvolvimento considera princípios básicos de acessibilidade e facilidade de utilização.

Entre os cuidados adotados estão:

Identificação dos campos por rótulos.
Mensagens de orientação.
Contraste entre cores e textos.
Identificação dos status por texto, além das cores.
Navegação por botões.
Destaque visual durante a navegação pelo teclado.
Adaptação da interface para computadores e smartphones.
Esses recursos buscam facilitar o acesso ao sistema por diferentes usuários e dispositivos. A conformidade com padrões completos de acessibilidade ainda exige testes específicos.

## 🌱 11. Relação com os Objetivos de Desenvolvimento Sustentável
O projeto está relacionado ao ODS 11 – Cidades e Comunidades Sustentáveis, estabelecido pela Organização das Nações Unidas.

A solução contribui para esse objetivo ao apoiar a organização das demandas comunitárias, melhorar os processos administrativos da associação e fortalecer sua capacidade de acompanhar os problemas apresentados pelos moradores.

A centralização das solicitações também pode favorecer a identificação de problemas recorrentes e apoiar decisões voltadas à melhoria da qualidade de vida na comunidade.

## 🚧 12. Limitações e Melhorias Futuras
Por se tratar de um MVP, algumas funcionalidades não fazem parte desta primeira versão.

Limitações atuais:

Não possui integração com WhatsApp.
Não possui aplicativo móvel nativo.
Não possui banco de dados remoto.
Não possui autenticação de usuários.
Não permite sincronização de dados entre diferentes dispositivos.
Não possui integração com órgãos públicos.
Melhorias futuras:

Implementação de banco de dados centralizado.
Criação de tela de login e controle de permissões.
Sincronização das informações entre computadores e celulares.
Histórico detalhado de alterações.
Geração de relatórios em PDF.
Ampliação dos recursos de acessibilidade.
Possibilidade de acompanhamento das solicitações pelos moradores.

## 📌 13. Considerações Finais
O Sistema de Gestão de Solicitações Comunitárias representa uma proposta tecnológica para melhorar a organização administrativa da Associação Comunitária Unidos pelo Bairro.

O desenvolvimento do MVP possibilitou transformar um problema identificado no contexto comunitário em uma solução digital com funcionalidades direcionadas às necessidades dos usuários.

A aplicação demonstra como tecnologias web podem contribuir para a melhoria dos processos de organizações comunitárias, promovendo maior organização, eficiência e participação social.

O projeto também representa uma experiência prática de desenvolvimento de software, envolvendo levantamento de requisitos, planejamento, prototipação, programação, testes e documentação.

Projeto: Sistema de Gestão de Solicitações Comunitárias
Organização parceira: Associação Comunitária Unidos pelo Bairro
Versão: 1.0
Tecnologias: HTML5, CSS3 e JavaScript
Armazenamento: LocalStorage
Modalidade: Aplicação Web Responsiva
