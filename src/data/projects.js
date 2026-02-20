export const projects = [
  {
    id: 1,
    title: "Dashboards desenvolvidos (BI)",
    category: "Power BI",
    description: "Dashboards de marcos contratuais, pré-venda de materiais e acompanhamento de fabricação. Criados com dados reais do sistema da empresa para análise de KPIs e indicadores do PMO.",
    icon: "📊",
    gradient: "linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%)",
    date: "03/12/2025",
    sections: [
      {
        heading: "Marcos contratuais",
        text: "Apresenta o cumprimento do Índice de Cumprimento dos Marcos contratuais, categorizando-os como Realizado ou Em aberto, dentro ou fora do prazo, fazendo contagem de dias de atraso.",
        image: "https://wessite.notion.site/image/attachment%3Af520a97e-81e1-4623-8ce5-9feaf884e178%3ADashboard_-_Marcos_contratuais.jpg?table=block&id=28862f90-746e-800b-a8d5-c07197ca776f&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "RENF's — pré venda de materiais",
        text: "Usando o banco de dados da empresa com todas as vendas de materiais ao cliente, desenvolvi este painel para evitar que a equipe preencha planilhas de controle, tendo em vista que todos os dados das vendas foram realizadas no sistema oficial da Empresa.",
        image: "https://wessite.notion.site/image/attachment%3Ad0b07ee3-c808-48b6-a984-9b597c45c746%3A1760728648891.jpg?table=block&id=28862f90-746e-805d-91cf-e672b51bf819&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Acompanhamento de fabricação",
        text: "Foi realizado uma atualização neste dashboard já existente, facilitando a interpretação de alguns indicadores, acrescentando visual de previsto x fabricado, listagem dos projetos com avanço de material suprido e materiais pendentes/necessários para iniciar a fabricação.",
        image: "https://wessite.notion.site/image/attachment%3Ab2695515-5720-491f-a95f-ca2ce2a5d515%3ADashboard_-_Fabricao.jpg?table=block&id=28862f90-746e-8071-b305-f11f935d7407&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  },
  {
    id: 2,
    title: "Sistema para gestão do almoxarifado",
    category: "Excel VBA",
    description: "Sistema completo criado dentro do Excel para gerir entradas e saídas de materiais do estoque, com interface limpa, relatórios PDF e mais de 1000 linhas de automação VBA.",
    icon: "📦",
    gradient: "linear-gradient(135deg, #2d4a3e 0%, #3d6a54 100%)",
    date: "12/09/2023",
    sections: [
      {
        heading: "Visão geral do sistema",
        text: "Sistema voltado para equipe de almoxarifado gerir entradas e saídas de materiais do estoque da empresa. No lado direito tem as transações realizadas (entrada e saída), contendo data, quantidade e uma descrição. No lado inferior, há uma janela de materiais com saldo baixo. À esquerda, a disponibilidade total de materiais categorizados.",
        image: "https://wessite.notion.site/image/attachment%3Ad4c8d44a-6db8-4409-8b69-7ff08dd621a0%3Acapa.png?table=block&id=19c62f90-746e-80d1-b3a3-cb7dcfbb2c53&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Cadastro e relatório em PDF",
        text: "É possível imprimir ou gerar um PDF com uma relação de todo o material disponível em estoque. Há também um botão para cadastrar materiais na base de dados.",
        image: "https://wessite.notion.site/image/attachment%3A1fada010-7cee-46a8-ae8f-d6a9a29a77c4%3Acadastro.png?table=block&id=19c62f90-746e-8072-b22f-f731c5dfbb32&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=1670&userId=&cache=v2"
      },
      {
        heading: "Código VBA — Inicialização",
        text: "Logo ao abrir a planilha, o sistema é iniciado via código de inicialização, que oculta barras do Excel, desativa atualizações de tela e abre o form principal — garantindo uma experiência limpa e focada.",
        image: "https://wessite.notion.site/image/attachment%3A40634a90-721f-4649-9c7e-0fa9507c0058%3A1.png?table=block&id=19c62f90-746e-8080-b1f5-c3e2a34f4d54&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=1340&userId=&cache=v2"
      }
    ]
  },
  {
    id: 3,
    title: "Renomear arquivos PDF (Script Python)",
    category: "Python",
    description: "Script em Python para renomear automaticamente arquivos PDF em lote exportados do SAMC Petrobras, padronizando nomes e eliminando trabalho manual repetitivo.",
    icon: "🐍",
    gradient: "linear-gradient(135deg, #2d3a50 0%, #3d5070 100%)",
    date: "27/07/2023",
    sections: [
      {
        heading: "O problema",
        text: "Havia uma alta demanda de renomear arquivos PDF exportados do SAMC Petrobras. O objetivo era renomear as evidências de medição com um nome padrão: 'RO-Base-0000/2023 - SS-001/2023'. Onde RO era o número do Documento e SS, o número da Obra.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fefd26d9e-c048-4f1c-95ca-2152578620a8%2F4b181ace-5f84-4554-8831-d0161dc2b8e1%2FUntitled.png?table=block&id=be53f821-e18e-4098-b763-2ece5d789ebd&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=1060&userId=&cache=v2"
      },
      {
        heading: "A solução",
        text: "O código é capaz de ler PDFs: acessa o arquivo um por um, identifica o padrão de texto definido e renomeia o arquivo com o nome desejado automaticamente.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fefd26d9e-c048-4f1c-95ca-2152578620a8%2Fe7c4442b-8efa-4c6a-9061-46cd3355a010%2FUntitled.png?table=block&id=ff62e91f-ef55-4dc5-99e4-cfd9e355f127&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  },
  {
    id: 4,
    title: "VBA para geração de relatório",
    category: "Excel VBA",
    description: "Macro VBA que reduziu o tempo de geração de relatórios de 5~10 minutos para 4~8 segundos, com Clean Code e tratamento de erros para uso em produção.",
    icon: "📄",
    gradient: "linear-gradient(135deg, #3a2d50 0%, #5a3d70 100%)",
    date: "10/02/2023",
    observations: "Otimização de código",
    sections: [
      {
        heading: "O desafio",
        text: "Neste projeto o intuito foi reduzir o tempo de geração de um relatório de uma planilha com centenas de solicitações. Antes demorava 5~10min. Após a otimização, reduzi para 4~8 segundos.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F60ec0aec-428f-4a9d-a056-9dec5b11121b%2FUntitled.png?table=block&id=fca6a285-a245-4067-89df-8d872139d32c&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Técnicas aplicadas",
        text: "O principal fator de ganho de performance foi trabalhar com tabelas estruturadas ao invés de iterar pelas ~1 milhão de linhas do Excel. Cada loop acessa apenas os dados da tabela, com escrita eficiente e sem processamento desnecessário. Clean Code aplicado em todos os trechos."
      }
    ]
  },
  {
    id: 5,
    title: "Cronograma de Andaime (Gantt)",
    category: "Excel",
    description: "Cronograma com Gráfico de Gantt para controlar atividades com andaime — substituindo o MS Project sem licença, com status e desvios visuais de execução.",
    icon: "📅",
    gradient: "linear-gradient(135deg, #4a3d2d 0%, #6a5a3d 100%)",
    date: "02/02/2023",
    observations: "Programação e gestão de atividades com andaime",
    sections: [
      {
        heading: "Visão do Gráfico de Gantt",
        text: "A planilha possui espaço para escrita da demanda com status para acompanhamento e um Gráfico de Gantt para medir os desvios. Na barra superior é apresentado o programado e na linha inferior o que foi executado.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F66d373b6-0548-4e01-9bac-fe1a248cb683%2FUntitled.png?table=block&id=f41d3f37-0981-484d-9494-7ef7a2f710c1&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Formatação condicional inteligente",
        text: "O usuário digita uma data e o gráfico pinta automaticamente o local correspondente — mostrando visualmente o período planejado para cada atividade.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F527b7aaf-559e-4d33-a719-c5a773ecf8d2%2FUntitled.png?table=block&id=67e72b10-cf86-4211-9990-747034f30cfc&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  },
  {
    id: 6,
    title: "Abertura de Notas no SAP (Robô)",
    category: "SAP Script / VBA",
    description: "Robô VBA para abrir Notas de Manutenção no SAP, liberá-las, salvá-las e enviar e-mail ao planejador responsável — com prazo de vencimento embutido. Adotado em 4 bases Petrobras.",
    icon: "🤖",
    gradient: "linear-gradient(135deg, #2d4a4a 0%, #3d6a6a 100%)",
    date: "06/08/2022",
    observations: "Disponível nas Bases: Imbetiba, Imboassica, Cabiúnas e Áreas Externas.",
    sections: [
      {
        heading: "O sistema",
        text: "Script criado para substituir a planilha de abertura de OS, devido à alta demanda de solicitações e problemas com múltiplos usuários simultaneamente. Após reunião com a Engenharia Petrobras, foi liberada a funcionalidade de Notas de Manutenção no SAP. O robô abre a nota, libera, salva e envia e-mail ao planejador informando o prazo de vencimento.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d50ac00-475b-4ea5-9f80-221395e93778%2FUntitled.png?table=block&id=bf5a4dc4-dc0a-4560-9ee5-6031962a0411&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Tutorial integrado e expansão para 4 bases",
        text: "Com a adoção em outras bases Petrobras em Macaé, fui convidado a realizar treinamentos para usuários de Imboassica, Imbetiba, UTE Áreas Externas e Cabiúnas. O sistema conta com uma tela de tutorial integrada mostrando o procedimento prático.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6602bd7d-3a99-44fc-9e13-dbbde83ad6d9%2FUntitled.png?table=block&id=bbee7ae8-efff-4b5a-9aae-546cbd410ff6&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  },
  {
    id: 7,
    title: "Sistema de abertura de solicitações",
    category: "Excel VBA",
    description: "Sistema em Excel para abertura e acompanhamento de solicitações de manutenção, com numeração automática, controle de prazo, geração de PDF e base de dados colaborativa via Office 365.",
    icon: "📋",
    gradient: "linear-gradient(135deg, #3a3a2d 0%, #5a5a3d 100%)",
    date: "23/03/2022",
    sections: [
      {
        heading: "Tela de abertura de solicitação",
        text: "Tela onde o solicitante descreve o tipo de atividade e demanda. Possui número de solicitação automático, descrição, local, prioridade, prazo e empresa executante.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8cfb5b46-0a4b-4c91-b87a-3dadd8c98626%2FUntitled.png?table=block&id=3aaa89d0-d4f2-4dc8-86d3-fb04299dfaf6&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Base de dados colaborativa",
        text: "Todas as solicitações abertas ficam arquivadas na base de dados. Como toda a gerência usa Microsoft Office 365, todos tratam as solicitações em tempo real. A planilha acusa automaticamente quando a solicitação foi tratada dentro ou fora do prazo.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F688da0c5-8003-4834-8b44-795b4ebc2d26%2FUntitled.png?table=block&id=c1752b5c-c488-410e-98d1-7fda945e98ad&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Exportação em PDF",
        text: "Tela de impressão com botões de Gerar PDF e Imprimir, garantindo o range correto das células e o tamanho de arquivo adequado para envio por e-mail.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d37a601-9e60-4a7b-9ead-fd73a1f8798a%2FUntitled.png?table=block&id=17bdd414-fbc9-4a7a-beda-a0ff2a00d0ca&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=1380&userId=&cache=v2"
      }
    ]
  },
  {
    id: 8,
    title: "Coleção de Scripts para o SAP",
    category: "SAP Script / VBA",
    description: "Suite de automações VBA para o SAP: abertura de Notas, envio de e-mails com anexos, inclusão/remoção de status em Ordens de Manutenção e outras operações em massa.",
    icon: "⚙️",
    gradient: "linear-gradient(135deg, #3d2d4a 0%, #5d3d6a 100%)",
    date: "26/02/2022",
    observations: "Em constante atualização e novas implementações",
    sections: [
      {
        heading: "Gestão de anexos e e-mails via SAP",
        text: "Script que alimenta anexos em texto nas Ordens de Manutenção e envia e-mails através das próprias Notas, com suporte a anexar arquivos informando o caminho do arquivo.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F74dbcddd-00ed-4384-aaa1-6963e10e74fd%2FUntitled.png?table=block&id=aef31c5c-c494-4bc1-8b82-cd21d3639879&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Gestão de status em Ordens",
        text: "Script para remover e incluir status de usuário (SPRG, TRIA, etc.) em Ordens de Manutenção no SAP — operações que podem interferir na tratativa e encerramento das ordens.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc9d712b1-fce8-45f0-a72b-e59b7ac92f50%2FUntitled.png?table=block&id=aba3840f-dbb9-4c33-8518-66adc70aa41e&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Lista de scripts disponíveis",
        text: "O arquivo Excel concentra vários scripts em uma única planilha, constantemente atualizada com novas automações para o SAP.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d9d3dbe-1ed1-4818-b747-ec9abc61c68d%2FUntitled.png?table=block&id=98ab780f-0713-483a-8391-55895c5fa2cc&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=1350&userId=&cache=v2"
      }
    ]
  },
  {
    id: 9,
    title: "Gestão de solicitações para fiscalização",
    category: "Excel VBA",
    description: "Planilha v4.0 usada pela equipe Petrobras/Manserv. Com 7 ciclos de melhoria contínua, integra extração do SAP, controle de prazos, status de medição, gráficos e abono automático.",
    icon: "🔍",
    gradient: "linear-gradient(135deg, #2d3a3a 0%, #3d5a5a 100%)",
    date: "15/01/2022",
    observations: "Passou por diversos upgrades até a atual versão 4.0",
    sections: [
      {
        heading: "Capa e visão geral",
        text: "Planilha usada pela equipe de planejamento da fiscalização Petrobras/Manserv. Passou por 7 processos de melhoria contínua desde sua criação. Os dados são extraídos do SAP através de um layout pré-configurado.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69b94739-a329-4537-bef6-015702d45bce%2FUntitled.png?table=block&id=55c4cf97-e74b-4c33-972e-399d8531015e&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=860&userId=&cache=v2"
      },
      {
        heading: "Área de trabalho e tratativas",
        text: "Área de trabalho com status de planejamento, descrições da tratativa atual, tempo decorrido desde a abertura com bandeiras de notificação de prazo e controle de abonos.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F151efc6a-de23-45b7-8c2f-b227429bdfcc%2FUntitled.png?table=block&id=bb9ec4b3-12f5-4173-b00a-b68397dd67a5&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Relatório e gráficos",
        text: "Tela com relatório e gráficos do andamento da carteira de solicitações, com visão de dentro/fora do prazo e registro de devoluções de documentos físicos.",
        image: "https://wessite.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa9edb7c5-a089-4a7e-abf6-8a4e669146ad%2FUntitled.png?table=block&id=7a4674e8-a942-4611-be7a-2d2c1656b042&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  },
  {
    id: 10,
    title: "Cronograma de Pintura (Gantt)",
    category: "Excel",
    description: "Freelancer: cronograma de pintura com Gráfico de Gantt, avanço percentual de conclusão, informações quantitativas e seletor de período para medições mensais.",
    icon: "🎨",
    gradient: "linear-gradient(135deg, #4a2d3a 0%, #6a3d5a 100%)",
    date: "22/08/2023",
    sections: [
      {
        heading: "Planilha de controle com Gantt",
        text: "Além de uma visão planilhada com informações das atividades e avanço de conclusão em porcentagem, é possível escolher o período medido (medições mensais). Há quadradinhos coloridos com informações quantitativas e uma data de 'início de projeto' que serve para selecionar a range de visualização do gráfico de Gantt.",
        image: "https://wessite.notion.site/image/attachment%3A21f403f3-7872-4b2a-819e-85fa157df9fc%3A1.png?table=block&id=19c62f90-746e-8000-b355-e29a48475586&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      },
      {
        heading: "Gráfico de Gantt visual",
        text: "Visualização completa do Gráfico de Gantt com barras de progresso coloridas, facilitando o acompanhamento de cada etapa da pintura.",
        image: "https://wessite.notion.site/image/attachment%3A5088ee81-9310-49ce-a7fa-a3efd870442d%3A2.png?table=block&id=19c62f90-746e-80bc-b0d3-dc27c2b38ab8&spaceId=efd26d9e-c048-4f1c-95ca-2152578620a8&width=2000&userId=&cache=v2"
      }
    ]
  }
];

export const technicalSkills = [
  { name: "Excel Avançado / VBA", level: 95 },
  { name: "SAP (Scripts & Automação)", level: 85 },
  { name: "Power BI", level: 88 },
  { name: "MS Project", level: 82 },
  { name: "SQL", level: 75 },
  { name: "Uso de IA", level: 78 }
];

export const softSkills = [
  "Pensamento Crítico",
  "Adaptabilidade",
  "Resolução de Problemas",
  "Autodidata"
];
