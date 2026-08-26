import type { Content } from "./types";

export const pt: Content = {
  meta: {
    title: "Barbara Paschoalini — RH e Comportamento Organizacional",
    description:
      "Consultora de Projetos na Consultoria RH Junior (FGV e Mackenzie) e estudante de Psicologia no Mackenzie. Recrutamento e seleção, clima, avaliação de desempenho e plano de carreira.",
    htmlLang: "pt-BR",
  },

  nav: {
    items: [
      { href: "#metodo", label: "Método" },
      { href: "#trajetoria", label: "Trajetória" },
      { href: "#entregas", label: "Entregas" },
      { href: "#repertorio", label: "Repertório" },
      { href: "#competencias", label: "Competências" },
      { href: "#contato", label: "Contato" },
    ],
    toggleLabel: "Ver em inglês",
  },

  hero: {
    eyebrow: "Registro profissional",
    name: "Barbara Paschoalini",
    fields: [
      { label: "cargo", value: "Consultora de Projetos, Consultoria RH Junior" },
      { label: "formação", value: "Psicologia · Mackenzie · quarto semestre" },
      { label: "idiomas", value: "Inglês fluente · Espanhol intermediário" },
      { label: "base", value: "São Paulo · presencial, híbrido ou remoto" },
    ],
    thesis: "Transformo diagnóstico de pessoas em processo que a equipe roda sem mim.",
    body: "Estudo Psicologia no Mackenzie, no quarto semestre. Entrei como trainee na Consultoria RH Junior — empresa júnior formada por alunos da FGV e do Mackenzie — em março de 2026, e cheguei a Consultora de Projetos em junho. Hoje conduzo projetos de recrutamento e seleção, clima, avaliação de desempenho e plano de carreira para empresas clientes: do diagnóstico à devolutiva para a liderança.",
    primaryCta: "Falar comigo",
    secondaryCta: "LinkedIn",
    resumeCta: "Currículo (PDF)",
    status: "Aberta a estágio em RH e Talent Acquisition",
  },

  profile: {
    title: "Perfil de estilo de trabalho",
    note: "Autorrelato · escala de 7 pontos",
    rows: [
      { left: "Evidência", right: "Intuição", value: 2 },
      { left: "Processo", right: "Improviso", value: 2 },
      { left: "Escuta", right: "Direção", value: 3 },
      { left: "Individual", right: "Coletivo", value: 6 },
      { left: "Profundidade", right: "Velocidade", value: 3 },
    ],
    caption: "Instrumento ilustrativo, sem valor psicométrico.",
  },

  method: {
    eyebrow: "Como eu trabalho",
    title: "Três etapas, sempre nesta ordem",
    lede: "Empresa júnior ensina uma coisa cedo: cliente não compra relatório, compra decisão que ele consegue tomar. Por isso todo projeto passa pelas mesmas três etapas.",
    steps: [
      {
        key: "01",
        title: "Diagnóstico",
        body: "Antes de propor, eu escuto: conversa com a liderança, conversa com o time e leitura do que a empresa já mede. O que o cliente pede raramente é o que o cliente precisa.",
      },
      {
        key: "02",
        title: "Desenho",
        body: "Construo junto de quem vai usar — processo, critério e material de apoio. Se depois da entrega alguém precisar me ligar para conseguir aplicar, o material está incompleto.",
      },
      {
        key: "03",
        title: "Devolutiva",
        body: "Apresento para a liderança o que encontrei, o que recomendo e o que não deu para responder. Devolutiva honesta é o que faz o cliente chamar de novo.",
      },
    ],
  },

  timeline: {
    eyebrow: "Trajetória",
    title: "Da formação à entrega para cliente",
    lede: "Três posições em seis meses na mesma consultoria, com a graduação acontecendo junto.",
    entries: [
      {
        role: "Consultora de Projetos",
        org: "Consultoria RH Junior",
        period: "jun 2026 — atual",
        body: "Conduzo projetos de gestão de pessoas com autonomia sobre o cliente: diagnóstico da necessidade, construção da proposta, execução e devolutiva. Recrutamento e seleção, descrição de cargos e funções, pesquisa de clima organizacional, avaliação de desempenho e plano de carreira.",
        current: true,
      },
      {
        role: "Trainee de Projetos",
        org: "Consultoria RH Junior",
        period: "mai 2026 — jun 2026",
        body: "Primeiro contato com projeto de cliente de verdade. Apoiei a execução em R&S, clima, avaliação de desempenho e plano de carreira, e aprendi a parte difícil: transformar análise em material que a empresa consegue usar sozinha.",
      },
      {
        role: "Trainee",
        org: "Consultoria RH Junior",
        period: "mar 2026 — mai 2026",
        body: "Formação em processo de consultoria e prática de RH, com foco em comportamento organizacional, recrutamento e desenvolvimento de pessoas.",
      },
      {
        role: "Graduação em Psicologia",
        org: "Universidade Presbiteriana Mackenzie",
        period: "fev 2025 — nov 2030",
        body: "Quarto semestre. Interesse acadêmico em neuropsicologia, cognição e comportamento humano — a base de como as pessoas decidem e aprendem dentro de uma estrutura de trabalho. Atuei também na organização da Semana da Psicologia, nas áreas de administração e comunicação.",
      },
    ],
  },

  cases: {
    eyebrow: "Entregas",
    title: "Projetos e o que saiu deles",
    lede: "Cada projeto pelo que mudou para quem recebeu, não pelo trabalho que deu.",
    fields: { context: "Contexto", action: "O que eu fiz", result: "Resultado" },
    items: [
      {
        label: "Plano de carreira · projeto de formação",
        title: "Trilha de carreira para a Asfaltec",
        context:
          "Projeto de inserção na Consultoria RH Junior, com empresa-caso: a Asfaltec não tinha caminho de crescimento definido nem para o administrativo nem para o operacional.",
        action:
          "Com o meu grupo, desenhei trilhas verticais para os dois setores, ligando progressão, desenvolvimento e critério de promoção.",
        result:
          "Entregamos o plano e mais um Guia de Implementação que não estava no escopo: o passo a passo de como aplicar a trilha. O plano deixou de ser um PDF e virou algo que a empresa consegue rodar sozinha.",
      },
      {
        label: "Desafio de consultoria · primeiro lugar",
        title: "Blueprint",
        context:
          "Desafio entre grupos: analisar um problema real de negócio e defender uma proposta estratégica diante de uma banca.",
        action:
          "Estruturei a análise com o meu grupo, montei a proposta e apresentei a solução para os avaliadores.",
        result:
          "Primeiro lugar na edição. O prêmio foi uma conversa de duas horas com o time de RH da IGC Partners, empresa de fusões e aquisições, incluindo a sócia responsável pela área.",
      },
      {
        label: "Consultoria · empresas clientes",
        title: "Projetos de RH em cliente real",
        context:
          "As empresas chegam com sintoma, não com diagnóstico: vaga que não fecha, time desalinhado, avaliação sem critério, cargo que ninguém sabe descrever.",
        action:
          "Recrutamento e seleção, pesquisa de clima organizacional, avaliação de desempenho e descrição de cargos e funções — do diagnóstico inicial à devolutiva para a liderança.",
        result:
          "{{PREENCHER: número de projetos ou de empresas atendidas e um resultado concreto, ex. X vagas fechadas, Y cargos descritos e validados, taxa de resposta da pesquisa de clima}}",
      },
    ],
  },

  repertoire: {
    eyebrow: "Repertório",
    title: "A parte da formação que não está na grade",
    lede: "Quem trabalha com pessoas precisa de repertório sobre empresas. Vou atrás de quem já está lá dentro.",
    items: [
      {
        org: "Bruna Z. Russo · Diretora de RH da BIC (Brasil e Argentina)",
        meta: "ago 2026",
        detail:
          "Bate-papo sobre ferramentas de RH na prática: como acompanhamento de desempenho, feedback e desenvolvimento sustentam decisão, e não só rotina.",
      },
      {
        org: "IGC Partners",
        meta: "prêmio do Blueprint",
        detail:
          "Duas horas com a sócia de RH e o time da área, sobre processo, cultura e desenvolvimento profissional dentro de uma empresa de fusões e aquisições.",
      },
      {
        org: "Finscale",
        meta: "abr 2026",
        detail:
          "Treinamento de marketing estratégico: como uma área de apoio se conecta ao objetivo do negócio — a mesma pergunta que eu faço sobre RH.",
      },
      {
        org: "Integration",
        meta: "mar 2026",
        detail:
          "Palestra sobre a trajetória da empresa e sobre os desafios reais de quem trabalha com recursos humanos.",
      },
      {
        org: "Semana da Psicologia · Mackenzie",
        meta: "organização",
        detail:
          "Atuei nas áreas de administração e comunicação: planejamento e divulgação dos eventos acadêmicos.",
      },
    ],
  },

  skills: {
    eyebrow: "Competências",
    title: "O que eu levo para dentro de um time de RH",
    groups: [
      {
        title: "Gestão de pessoas",
        items: [
          "Recrutamento e seleção",
          "Descrição de cargos e funções",
          "Pesquisa de clima organizacional",
          "Avaliação de desempenho",
          "Plano de carreira",
          "Desenvolvimento organizacional",
        ],
      },
      {
        title: "Consultoria e projeto",
        items: [
          "Diagnóstico organizacional",
          "Construção de proposta",
          "Relacionamento com cliente",
          "Gestão de projetos",
          "Apresentação para liderança",
          "Trabalho em equipe",
        ],
      },
      {
        title: "Ferramentas",
        items: [
          "Excel · Google Sheets",
          "PowerPoint · Slides",
          "Canva",
          "{{PREENCHER: ATS usado, ex. Gupy}}",
          "{{PREENCHER: outras ferramentas}}",
        ],
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Português", level: "Nativo", value: 5 },
      { name: "Inglês", level: "Fluente", value: 5 },
      { name: "Espanhol", level: "Intermediário", value: 3 },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Se o seu time precisa de alguém que entrega e volta com o que combinou, vamos conversar.",
    body: "Procuro estágio em Recrutamento e Seleção, Talent Acquisition, Desenvolvimento Organizacional e Gestão de Pessoas — presencial em São Paulo, híbrido ou remoto.",
    emailLabel: "E-mail",
    linkedinLabel: "LinkedIn",
    locationLabel: "Base",
    location: "São Paulo, Brasil",
    pending: "PREENCHER em src/site.ts",
  },

  footer: {
    note: "Barbara Paschoalini · RH e comportamento organizacional",
    credit: "Site próprio, feito à mão.",
  },
};
