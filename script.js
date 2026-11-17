
// ======================================
// SISTEMA DE GESTÃO COMUNITÁRIA
// Associação Unidos pelo Bairro
// ======================================

const carregar = (chave) => {
  try {
    return JSON.parse(localStorage.getItem(chave)) || [];
  } catch {
    return [];
  }
};

let moradores = carregar("moradores");
let solicitacoes = carregar("solicitacoes");

const salvarDados = () => {
  localStorage.setItem("moradores", JSON.stringify(moradores));
  localStorage.setItem("solicitacoes", JSON.stringify(solicitacoes));
};

// NAVEGAÇÃO ENTRE TELAS

function abrirPagina(pagina) {
  document.querySelectorAll(".page").forEach(tela => {
    tela.classList.remove("active");
  });

  document.querySelectorAll(".nav-item").forEach(botao => {
    botao.classList.remove("active");
  });

  const tela = document.getElementById(pagina);

  if (tela) tela.classList.add("active");

  document.querySelectorAll(`[data-page="${pagina}"]`)
    .forEach(botao => {
      if (botao.classList.contains("nav-item")) {
        botao.classList.add("active");
      }
    });

  if (pagina === "cadastro") atualizarSelectMoradores();
  if (pagina === "consultas") listarSolicitacoes();
  if (pagina === "relatorios") gerarResumo();
  if (pagina === "inicio") atualizarPainel();
}

document.querySelectorAll("[data-page]").forEach(botao => {
  botao.addEventListener("click", () => {
    abrirPagina(botao.dataset.page);
  });
});

// CADASTRAR MORADOR

document.getElementById("formMorador")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nomeMorador").value.trim();
    const contato = document.getElementById("contatoMorador").value.trim();
    const referencia = document.getElementById("referenciaMorador").value.trim();

    if (!nome) return;

    const morador = {
      id: crypto.randomUUID(),
      nome,
      contato,
      referencia,
      dataCadastro: new Date().toISOString()
    };

    moradores.push(morador);
    salvarDados();

    this.reset();

    document.getElementById("mensagemMorador").textContent =
      "Morador cadastrado com sucesso!";

    atualizarPainel();
  });

// ATUALIZAR LISTA DE MORADORES

function atualizarSelectMoradores() {
  const select = document.getElementById("moradorSolicitacao");

  select.innerHTML = '<option value="">Selecione um morador</option>';

  moradores.forEach(morador => {
    const option = document.createElement("option");
    option.value = morador.id;
    option.textContent = morador.nome;
    select.appendChild(option);
  });
}

// CADASTRAR SOLICITAÇÃO

document.getElementById("dataSolicitacao").value =
  new Date().toISOString().slice(0, 10);

document.getElementById("formSolicitacao")
  .addEventListener("submit", function(event) {

    event.preventDefault();

    const moradorId =
      document.getElementById("moradorSolicitacao").value;

    const morador = moradores.find(item => item.id === moradorId);

    if (!morador) {
      alert("Selecione um morador cadastrado.");
      return;
    }

    const solicitacao = {
      id: crypto.randomUUID(),
      moradorId,
      morador: morador.nome,
      tipo: document.getElementById("tipoSolicitacao").value,
      descricao: document.getElementById("descricaoSolicitacao").value.trim(),
      data: document.getElementById("dataSolicitacao").value,
      status: "Aberta",
      observacao: "",
      dataCriacao: new Date().toISOString()
    };

    if (!solicitacao.descricao || !solicitacao.tipo || !solicitacao.data) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    solicitacoes.push(solicitacao);
    salvarDados();

    this.reset();

    document.getElementById("dataSolicitacao").value =
      new Date().toISOString().slice(0, 10);

    document.getElementById("mensagemSolicitacao").textContent =
      "Solicitação registrada com sucesso!";

    atualizarPainel();
  });

// INDICADORES DO PAINEL

function atualizarPainel() {
  const quantidade = status =>
    solicitacoes.filter(item => item.status === status).length;

  document.getElementById("abertas").textContent = quantidade("Aberta");
  document.getElementById("andamento").textContent = quantidade("Em andamento");
  document.getElementById("concluidas").textContent = quantidade("Concluída");
  document.getElementById("canceladas").textContent = quantidade("Cancelada");
}

// CONSULTAR SOLICITAÇÕES

function criarElemento(tag, texto, classe) {
  const elemento = document.createElement(tag);
  if (texto !== undefined) elemento.textContent = texto;
  if (classe) elemento.className = classe;
  return elemento;
}

function listarSolicitacoes() {
  const lista = document.getElementById("listaSolicitacoes");
  const pesquisa = document.getElementById("pesquisa").value.toLowerCase();
  const filtro = document.getElementById("filtroStatus").value;

  lista.replaceChildren();

  const resultados = solicitacoes.filter(item => {
    const correspondeTexto =
      item.morador.toLowerCase().includes(pesquisa) ||
      item.descricao.toLowerCase().includes(pesquisa);

    const correspondeStatus = !filtro || item.status === filtro;

    return correspondeTexto && correspondeStatus;
  });

  if (resultados.length === 0) {
    lista.appendChild(criarElemento(
      "p",
      "Nenhuma solicitação encontrada.",
      "empty"
    ));
    return;
  }

  resultados.forEach(item => {
    const card = criarElemento("article", undefined, "request");

    card.appendChild(criarElemento("h3", item.tipo));
    card.appendChild(criarElemento("p", `Morador: ${item.morador}`));
    card.appendChild(criarElemento("p", `Descrição: ${item.descricao}`));
    card.appendChild(criarElemento("p", `Data: ${item.data}`));

    const classeStatus = "status-" + item.status
      .toLowerCase()
      .replaceAll(" ", "-");

    const status = criarElemento("span", item.status, `status ${classeStatus}`);
    card.appendChild(status);

    card.appendChild(criarElemento("p", "Atualizar status:"));

    const select = document.createElement("select");
    select.setAttribute("aria-label", `Novo status da solicitação de ${item.morador}`);

    ["Aberta", "Em andamento", "Concluída", "Cancelada"]
      .forEach(opcao => {
        const option = document.createElement("option");
        option.value = opcao;
        option.textContent = opcao;
        option.selected = item.status === opcao;
        select.appendChild(option);
      });

    card.appendChild(select);

    const label = criarElemento("label", "Observações");
    const observacao = document.createElement("textarea");
    observacao.rows = 2;
    observacao.maxLength = 500;
    observacao.value = item.observacao || "";
    observacao.placeholder = "Digite uma observação...";
    label.appendChild(observacao);
    card.appendChild(label);

    const salvar = criarElemento("button", "Salvar atualização");

    salvar.addEventListener("click", () => {
      const registro = solicitacoes.find(reg => reg.id === item.id);

      if (!registro) return;

      registro.status = select.value;
      registro.observacao = observacao.value.trim();

      salvarDados();
      listarSolicitacoes();
      atualizarPainel();

      salvar.focus();
    });

    card.appendChild(salvar);
    lista.appendChild(card);
  });
}

document.getElementById("pesquisa")
  .addEventListener("input", listarSolicitacoes);

document.getElementById("filtroStatus")
  .addEventListener("change", listarSolicitacoes);

// RELATÓRIOS

function gerarResumo() {
  const total = solicitacoes.length;

  const concluidas =
    solicitacoes.filter(item => item.status === "Concluída").length;

  const abertas =
    solicitacoes.filter(item => item.status === "Aberta").length;

  const andamento =
    solicitacoes.filter(item => item.status === "Em andamento").length;

  const canceladas =
    solicitacoes.filter(item => item.status === "Cancelada").length;

  const resumo = document.getElementById("resumoRelatorio");
  resumo.replaceChildren();

  [
    `Total de solicitações: ${total}`,
    `Abertas: ${abertas}`,
    `Em andamento: ${andamento}`,
    `Concluídas: ${concluidas}`,
    `Canceladas: ${canceladas}`,
    `Total de moradores cadastrados: ${moradores.length}`
  ].forEach(texto => {
    resumo.appendChild(criarElemento("p", texto));
  });
}

// EXPORTAR CSV

document.getElementById("exportarCSV")
  .addEventListener("click", () => {

    const cabecalho = [
      "Morador",
      "Tipo",
      "Descricao",
      "Data",
      "Status",
      "Observacao"
    ];

    const linhas = solicitacoes.map(item => [
      item.morador,
      item.tipo,
      item.descricao,
      item.data,
      item.status,
      item.observacao || ""
    ]);

    const escapar = valor =>
      `"${String(valor ?? "").replaceAll('"', '""')}"`;

    const csv = [cabecalho, ...linhas]
      .map(linha => linha.map(escapar).join(";"))
      .join("\n");

    const arquivo = new Blob(
      ["\uFEFF" + csv],
      { type: "text/csv;charset=utf-8;" }
    );

    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");

    link.href = url;
    link.download = "relatorio-solicitacoes.csv";
    link.click();

    URL.revokeObjectURL(url);
  });

// INICIALIZAÇÃO

atualizarSelectMoradores();
atualizarPainel();
