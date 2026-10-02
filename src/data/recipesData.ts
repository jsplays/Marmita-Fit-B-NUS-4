export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  category: 'proteina' | 'carboidrato' | 'vegetal' | 'tempero' | 'outro';
}

export interface Recipe {
  id: number;
  title: string;
  subtitle: string;
  yieldDefault: number;
  yieldUnit: string;
  prepTime: string;
  cookTime: string;
  category: 'frango' | 'carne' | 'peixe' | 'vegetariano' | 'pratico';
  categoryLabel: string;
  ingredients: Ingredient[];
  accompanimentIngredients?: Ingredient[];
  steps: string[];
  assemblyTips: string[];
  conservationTip: string;
  chefTip?: string;
  tags: string[];
  caloriesEst?: string;
  imageEmoji: string;
  badgeColor: string;
}

export const RECIPES_DATA: Recipe[] = [
  {
    id: 1,
    title: "Frango Colorido com Arroz e Legumes",
    subtitle: "Prato clássico, equilibrado e cheio de cor e nutrientes",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "15 min",
    cookTime: "25 min",
    category: "frango",
    categoryLabel: "Frango",
    imageEmoji: "🍗",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
    ingredients: [
      { name: "Peito de frango em cubos", amount: 600, unit: "g", category: "proteina" },
      { name: "Arroz cozido", amount: 2, unit: "xícaras", category: "carboidrato" },
      { name: "Cenoura média em cubos", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Abobrinha média em cubos", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Dentes de alho picados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Suco de limão", amount: 0.5, unit: "limão", category: "tempero" },
      { name: "Páprica doce ou defumada", amount: 1, unit: "colher de chá", category: "tempero" },
      { name: "Cúrcuma (açafrão-da-terra)", amount: 1, unit: "colher de café", category: "tempero" },
      { name: "Pimenta-do-reino e cheiro-verde", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Sal", amount: 1, unit: "pequena quantidade", category: "tempero" },
    ],
    steps: [
      "Tempere o frango com limão, alho, páprica, cúrcuma e pimenta.",
      "Aquece uma panela com o azeite e doure o frango em cubos.",
      "Acrescente a cebola picada e refogue até murchar.",
      "Adicione a cenoura em cubos e um pouquinho de água para criar vapor.",
      "Quando a cenoura estiver começando a amolecer, acrescente a abobrinha.",
      "Cozinhe até os legumes ficarem macios, porém ainda firmes (al dente).",
      "Divida o arroz já cozido entre 4 potes adequados.",
      "Acrescente as porções de frango com legumes e finalize com cheiro-verde fresco."
    ],
    assemblyTips: [
      "Arroz: aproximadamente ½ a 1 xícara cozida por pote.",
      "Frango: uma porção compatível com a sua fome.",
      "Legumes: preencha o restante do pote (pelo menos metade da marmita)."
    ],
    conservationTip: "Refrigerar por até 3 a 4 dias ou congelar por até 90 dias em pote hermético fechado.",
    chefTip: "Não cozinhe demais a abobrinha na panela, pois ao reaquecer no micro-ondas ela continuará cozinhando no próprio vapor!",
    tags: ["Sem Glúten", "Rico em Proteína", "Cores Vivas", "Clássico Fit"]
  },
  {
    id: 2,
    title: "Carne Moída com Batata e Vagem",
    subtitle: "Conforto afetivo com excelente aporte proteico e fibras",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "20 min",
    cookTime: "25 min",
    category: "carne",
    categoryLabel: "Carne Bovina",
    imageEmoji: "🥩",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-300",
    ingredients: [
      { name: "Carne moída magra (patinho ou coxão mole)", amount: 500, unit: "g", category: "proteina" },
      { name: "Batatas médias em cubos", amount: 4, unit: "unidades", category: "carboidrato" },
      { name: "Vagem picada", amount: 300, unit: "g", category: "vegetal" },
      { name: "Tomate picado maduro", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Dentes de alho picados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Azeite", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Páprica, cominho e pimenta", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Cheiro-verde picadinho", amount: 2, unit: "colheres de sopa", category: "tempero" },
      { name: "Sal", amount: 1, unit: "pequena quantidade", category: "tempero" },
    ],
    steps: [
      "Descasque e corte as batatas em cubos uniformes.",
      "Cozinhe em água com uma pitada de sal até ficarem macias, sem desmanchar.",
      "Cozinhe a vagem separadamente (no vapor ou água fervente) até ficar al dente.",
      "Refogue a cebola e o alho picados no azeite.",
      "Acrescente a carne moída e mexa vigorosamente para soltar bem até cozinhar por completo.",
      "Adicione o tomate picado, a páprica, o cominho e a pimenta.",
      "Misture a batata e a vagem com delicadeza para não desmanchar os cubos.",
      "Distribua a preparação harmoniosamente nos 4 potes de marmita."
    ],
    assemblyTips: [
      "Distribua a carne, a batata e a vagem nos potes.",
      "Se quiser, acompanhe com uma porção de folhas verdes em pote separado."
    ],
    conservationTip: "Batata cozida mantém boa textura congelada quando misturada à carne moída e molho. Geladeira: 3 dias.",
    chefTip: "Substituição versátil: Você pode trocar a carne bovina por frango moído, proteína de soja texturizada ou lentilha cozida!",
    tags: ["Prato Único", "Muito Saboroso", "Econômico", "Opção Vegetariana Fácil"]
  },
  {
    id: 3,
    title: "Frango Desfiado com Purê de Abóbora",
    subtitle: "Cremoso, leve e com baixíssima densidade calórica",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "20 min",
    cookTime: "30 min",
    category: "frango",
    categoryLabel: "Frango",
    imageEmoji: "🎃",
    badgeColor: "bg-orange-100 text-orange-800 border-orange-300",
    ingredients: [
      { name: "Peito de frango", amount: 600, unit: "g", category: "proteina" },
      { name: "Abóbora descascada (cabotiá ou japonesa)", amount: 800, unit: "g", category: "carboidrato" },
      { name: "Cebola picada", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Dentes de alho picados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Tomate maduro picado", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Água", amount: 0.5, unit: "copo", category: "outro" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Páprica, pimenta e ervas secas", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Cheiro-verde picadinho", amount: 2, unit: "colheres de sopa", category: "tempero" },
      { name: "Sal", amount: 1, unit: "pequena quantidade", category: "tempero" }
    ],
    steps: [
      "Cozinhe o peito de frango em água temperada até ficar totalmente cozido.",
      "Desfie o frango e reserve.",
      "Cozinhe a abóbora até ficar bem macia.",
      "Amasse a abóbora com um garfo ou mixer.",
      "Refogue metade da cebola e do alho no azeite.",
      "Acrescente a abóbora amassada e misture até formar um purê aveludado.",
      "Em outra panela, refogue o restante da cebola e alho, acrescentando o tomate picado, frango desfiado e temperos com ½ copo de água para dar suculência.",
      "Monte as marmitas com o purê de abóbora, o frango desfiado suculento e legumes adicionais."
    ],
    assemblyTips: [
      "Base de purê de abóbora cremosa.",
      "Frango desfiado com molho caseiro por cima.",
      "Acrescente brócolis, couve-flor ou cenoura cozida como acompanhamento."
    ],
    conservationTip: "Purê de abóbora congela maravilhosamente bem e não perde a textura. Congelar até 60 dias.",
    chefTip: "Cozinhe a abóbora com casca e retire a polpa com uma colher para economizar tempo e esforço de descascar.",
    tags: ["Low Carb", "Sem Lactose", "Anti-inflamatório", "Fácil de Desfiar"]
  },
  {
    id: 4,
    title: "Almôndegas Assadas com Macarrão e Molho de Tomate",
    subtitle: "Clássico italiano em versão nutritiva, assada e proteica",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "25 min",
    cookTime: "25 min",
    category: "carne",
    categoryLabel: "Carne Bovina",
    imageEmoji: "🍝",
    badgeColor: "bg-red-100 text-red-800 border-red-300",
    ingredients: [
      { name: "Carne moída magra", amount: 500, unit: "g", category: "proteina" },
      { name: "Ovo", amount: 1, unit: "unidade", category: "proteina" },
      { name: "Aveia em flocos finos ou farinha de aveia", amount: 3, unit: "colheres de sopa", category: "carboidrato" },
      { name: "Cebola picadinha", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Alho picado", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Páprica e pimenta-do-reino", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Cheiro-verde", amount: 2, unit: "colheres de sopa", category: "tempero" },
    ],
    accompanimentIngredients: [
      { name: "Macarrão (integrais ou grano duro)", amount: 250, unit: "g", category: "carboidrato" },
      { name: "Molho de tomate caseiro ou sem aditivos", amount: 500, unit: "ml", category: "vegetal" },
      { name: "Abobrinha fatiada", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" }
    ],
    steps: [
      "Misture a carne moída, o ovo, a aveia, a cebola picada, o alho e os temperos até dar liga.",
      "Modele bolinhas pequenas e uniformes (rende cerca de 16 a 20 almôndegas).",
      "Disponha em uma assadeira untada com um fio de azeite.",
      "Asse em forno preaquecido a 200°C por cerca de 20 minutos até dourarem e cozinharem por completo.",
      "Cozinhe o macarrão em água fervente com sal até ficar 'al dente'.",
      "Aqueça o molho de tomate.",
      "Grelhe ou asse as fatias de abobrinha com azeite e ervas.",
      "Monte as marmitas com macarrão, molho por cima, almôndegas assadas e a abobrinha grelhada."
    ],
    assemblyTips: [
      "Coloque o molho de tomate sobre a massa para mantê-la hidratada.",
      "Disponha 4 a 5 almôndegas por pote.",
      "Complete a outra metade com fatias de abobrinha grelhada."
    ],
    conservationTip: "Se congelar, deixe a massa bem al dente para não ficar mole ao reaquecer. Validade: 45 dias no freezer.",
    chefTip: "Se usar molho pronto, verifique a lista de ingredientes: prefira tomates, cebola e azeite sem adição de açúcar ou excesso de sódio.",
    tags: ["Massa Fit", "Almôndegas Assadas", "Sem Fritura", "Fibras de Aveia"]
  },
  {
    id: 5,
    title: "Peixe Assado com Batata e Brócolis",
    subtitle: "Rico em ômega-3, leveza e digestão rápida",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "15 min",
    cookTime: "25 min",
    category: "peixe",
    categoryLabel: "Peixe",
    imageEmoji: "🐟",
    badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-300",
    ingredients: [
      { name: "Filés de peixe branco (tilápia, merluza ou pescada)", amount: 4, unit: "filés", category: "proteina" },
      { name: "Batatas médias em rodelas", amount: 4, unit: "unidades", category: "carboidrato" },
      { name: "Brócolis fresco", amount: 1, unit: "maço", category: "vegetal" },
      { name: "Limão", amount: 1, unit: "unidade", category: "tempero" },
      { name: "Dentes de alho amassados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Azeite de oliva extra virgem", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Ervas secas (orégano/tomilho)", amount: 1, unit: "colher de chá", category: "tempero" },
      { name: "Pimenta e sal em pequena quantidade", amount: 1, unit: "a gosto", category: "tempero" }
    ],
    steps: [
      "Tempere os filés de peixe com suco de limão, alho, ervas, pimenta e uma pitada de sal.",
      "Corte as batatas em rodelas médias.",
      "Cozinhe as batatas em água fervente por 7 minutos, apenas até ficarem parcialmente macias (pré-cozimento).",
      "Disponha o peixe e as rodelas de batata em uma assadeira untada.",
      "Regue com o azeite de oliva.",
      "Asse em forno a 200°C por 18 a 20 minutos até o peixe estar totalmente cozido e as batatas douradas.",
      "Cozinhe o brócolis no vapor ou em água fervente rápida (3 a 4 min) mantendo o verde bem vivo.",
      "Divida os filés, batatas e brócolis nos 4 potes com cuidado."
    ],
    assemblyTips: [
      "1 filé de peixe por pote.",
      "Rodelas de batata ao lado.",
      "Brócolis ocupando o restante do espaço para um visual verde e apetitoso."
    ],
    conservationTip: "O peixe deve estar totalmente cozido antes de armazenar. Consumir em até 2 a 3 dias na geladeira.",
    chefTip: "Atenção: peixe não tolera descongelamentos lentos. Na marmita, prefira consumir fresco nos primeiros dias da semana!",
    tags: ["Ômega 3", "Leve & Digestivo", "Cozimento Rápido", "Low Fat"]
  },
  {
    id: 6,
    title: "Escondidinho de Frango com Mandioca",
    subtitle: "A energia sustentada da raiz brasileira com recheio bem úmido",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "25 min",
    cookTime: "30 min",
    category: "frango",
    categoryLabel: "Frango",
    imageEmoji: "🍲",
    badgeColor: "bg-yellow-100 text-yellow-800 border-yellow-300",
    ingredients: [
      { name: "Frango cozido e desfiado", amount: 600, unit: "g", category: "proteina" },
      { name: "Mandioca (aipim/macaxeira) descascada", amount: 700, unit: "g", category: "carboidrato" },
      { name: "Tomate maduro picado", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Dentes de alho picados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Água do cozimento", amount: 0.5, unit: "xícara", category: "outro" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Páprica e pimenta", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Cheiro-verde picadinho", amount: 2, unit: "colheres de sopa", category: "tempero" }
    ],
    steps: [
      "Cozinhe a mandioca em água com sal até ficar bem macia.",
      "Retire o fiozinho central fibroso e amasse ainda quente com garfo ou espremedor, usando um pouco da água do cozimento.",
      "Refogue a cebola e o alho picados no azeite.",
      "Acrescente o tomate e o frango cozido desfiado.",
      "Adicione a água e cozinhe em fogo baixo até ficar bem úmido e suculento.",
      "Tempere com a páprica, pimenta e cheiro-verde abundante.",
      "Nos recipientes de marmita, coloque uma camada de purê de mandioca.",
      "Acrescente o recheio de frango suculento no meio.",
      "Finalize com outra camada de purê de mandioca por cima."
    ],
    assemblyTips: [
      "Camada de purê de mandioca na base (¼).",
      "Recheio de frango no centro (¼).",
      "Cobertura com purê restante e acompanhamento de legumes ao lado ou pote extra."
    ],
    conservationTip: "Escondidinho resiste muito bem ao congelador (até 60 dias). No micro-ondas, fica com textura de feito na hora.",
    chefTip: "Variação inteligente: Substitua a mandioca por batata-inglesa, batata-doce ou abóbora assada para variar o cardápio!",
    tags: ["Raiz Brasileira", "Sensação de Saciedade", "Muito Cremoso", "Perfeito Congelado"]
  },
  {
    id: 7,
    title: "Arroz, Feijão, Ovo e Couve Refogada",
    subtitle: "A tradição brasileira perfeita: econômica, completa e afetiva",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "15 min",
    cookTime: "20 min",
    category: "vegetariano",
    categoryLabel: "Ovos & Grãos",
    imageEmoji: "🍳",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
    ingredients: [
      { name: "Arroz cozido", amount: 2, unit: "xícaras", category: "carboidrato" },
      { name: "Feijão cozido (carioca ou preto)", amount: 2, unit: "xícaras", category: "carboidrato" },
      { name: "Ovos caipiras ou brancos", amount: 8, unit: "unidades", category: "proteina" },
      { name: "Couve fatiada em tiras finas", amount: 1, unit: "maço", category: "vegetal" },
      { name: "Cebola picadinha", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Dentes de alho picados", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Limão", amount: 1, unit: "unidade", category: "tempero" },
      { name: "Pimenta e cheiro-verde", amount: 1, unit: "a gosto", category: "tempero" }
    ],
    steps: [
      "Aqueça o arroz e o feijão separadamente.",
      "Em uma frigideira com fio de azeite, refogue a cebola e o alho.",
      "Acrescente a couve fatiada e refogue muito rapidamente (1 a 2 minutos) para murchar levemente sem perder a cor verde-viva.",
      "Prepare os 8 ovos (2 por marmita) conforme sua preferência: cozidos com gema firme, mexidos cremosos ou em omelete com cheiro-verde.",
      "Divida o arroz e o feijão nas 4 marmitas.",
      "Disponha os ovos e a couve refogada.",
      "Corte gomos de limão para levar em pote pequeno ou embrulhados para espremer na couve só na hora de comer."
    ],
    assemblyTips: [
      "Arroz e feijão lado a lado.",
      "2 ovos por marmita.",
      "Couve refogada farta.",
      "Leve o gomo de limão à parte."
    ],
    conservationTip: "Ovo cozido deve ser mantido refrigerado por no máximo 3 dias. Não congele ovos cozidos com gema dura, pois a clara perde a textura.",
    chefTip: "O limão espremido na hora sobre a couve ajuda a absorver melhor o ferro vegetal do feijão e da couve graças à vitamina C!",
    tags: ["Prato Nacional", "Econômico", "Proteína Vegetariana", "Rico em Ferro"]
  },
  {
    id: 8,
    title: "Grão-de-Bico com Legumes e Frango em Cubos",
    subtitle: "Rico em fibras solúveis, saciedade prolongada e cores intensas",
    yieldDefault: 4,
    yieldUnit: "marmitas",
    prepTime: "15 min",
    cookTime: "20 min",
    category: "frango",
    categoryLabel: "Frango & Leguminosas",
    imageEmoji: "🥗",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-300",
    ingredients: [
      { name: "Grão-de-bico cozido", amount: 2, unit: "xícaras", category: "carboidrato" },
      { name: "Frango em cubos", amount: 400, unit: "g", category: "proteina" },
      { name: "Cenoura em cubinhos", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Abobrinha em cubinhos", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Pimentão vermelho ou amarelo", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Alho picado", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Azeite de oliva", amount: 1, unit: "colher de sopa", category: "tempero" },
      { name: "Suco de limão", amount: 1, unit: "unidade", category: "tempero" },
      { name: "Páprica defumada, cominho e cheiro-verde", amount: 1, unit: "a gosto", category: "tempero" }
    ],
    steps: [
      "Tempere os cubos de frango com limão, páprica defumada e cominho.",
      "Aqueça o azeite em uma panela e doure o frango.",
      "Acrescente a cebola e o alho e refogue até perfumar.",
      "Adicione a cenoura, a abobrinha e o pimentão picados.",
      "Cozinhe mexendo até que os legumes fiquem macios, porém crocantes.",
      "Misture o grão-de-bico já cozido para agregar todos os sabores.",
      "Finalize com cheiro-verde e desligue o fogo.",
      "Divida igualmente entre os quatro recipientes herméticos."
    ],
    assemblyTips: [
      "Pode ser consumido tanto morno quanto como salada fria refrescante no verão!",
      "Ótimo para quem não tem micro-ondas no local de trabalho."
    ],
    conservationTip: "Dura até 4 dias na geladeira com textura impecável. Também pode ser congelado por até 45 dias.",
    chefTip: "Versão 100% vegetariana: Retire o frango e acrescente cubos de tofu grelhado, ovos cozidos ou aumente para 3 xícaras de grão-de-bico!",
    tags: ["Pode Comer Frio", "Rico em Fibras", "Opção Veggie", "Super Colorido"]
  },
  {
    id: 9,
    title: "Panqueca de Frango com Salada Fresca",
    subtitle: "Discos finos e nutritivos com recheio cremoso e salada crocante",
    yieldDefault: 4,
    yieldUnit: "porções (8 panquecas)",
    prepTime: "25 min",
    cookTime: "20 min",
    category: "pratico",
    categoryLabel: "Prático & Leve",
    imageEmoji: "🌯",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
    ingredients: [
      { name: "Ovos", amount: 2, unit: "unidades", category: "proteina" },
      { name: "Leite ou bebida vegetal de sua preferência", amount: 1, unit: "xícara", category: "outro" },
      { name: "Farinha de trigo ou farinha de aveia", amount: 1, unit: "xícara", category: "carboidrato" },
      { name: "Pitada de sal", amount: 1, unit: "pitada", category: "tempero" },
      { name: "Azeite para untar", amount: 1, unit: "colher de chá", category: "tempero" },
      { name: "Frango cozido e desfiado", amount: 500, unit: "g", category: "proteina" },
      { name: "Tomate maduro picado", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Alho picado", amount: 2, unit: "dentes", category: "tempero" },
      { name: "Páprica e pimenta-do-reino", amount: 1, unit: "a gosto", category: "tempero" },
      { name: "Cheiro-verde picadinho", amount: 2, unit: "colheres de sopa", category: "tempero" }
    ],
    accompanimentIngredients: [
      { name: "Folhas verdes (alface, rúcula)", amount: 1, unit: "maço", category: "vegetal" },
      { name: "Cenoura ralada", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Pepino em rodelas", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Tomate cereja ou em fatias", amount: 1, unit: "xícara", category: "vegetal" }
    ],
    steps: [
      "Bata no liquidificador ou com um garfo os ovos, o leite, a aveia/farinha e o sal até obter uma massa lisa e líquida.",
      "Aqueça uma frigideira antiaderente levemente untada com azeite e faça 8 discos finos, dourando ambos os lados.",
      "Para o recheio: refogue a cebola, o alho e o tomate no azeite.",
      "Acrescente o frango desfiado, a páprica, a pimenta e o cheiro-verde.",
      "Distribua o recheio nos discos de massa e enrole com cuidado.",
      "Armazene 2 panquecas por marmita no pote principal.",
      "Higienize e seque perfeitamente as folhas, a cenoura e o pepino da salada.",
      "Guarde a salada em recipiente separado e leve o molho à parte em pote pequeno de 50 a 100ml."
    ],
    assemblyTips: [
      "2 panquecas enroladas no pote principal.",
      "Salada fresca mantida em pote separado para não murchar nem amornar.",
      "Molho de azeite, limão e ervas levado em potinho dosador."
    ],
    conservationTip: "As panquecas podem ser congeladas já recheadas (até 30 dias). A salada deve ser fresca da semana (até 3 dias).",
    chefTip: "Para o disco não grudar nem quebrar, deixe a frigideira esquentar bem antes de despejar a primeira concha de massa!",
    tags: ["Versátil", "Queridinha das Crianças", "Massa com Aveia", "Salada Separada"]
  },
  {
    id: 10,
    title: "Torta de Legumes com Atum de Liquidificador",
    subtitle: "Rápida, assa de uma vez só e rende refeições nutritivas a semana toda",
    yieldDefault: 6,
    yieldUnit: "porções",
    prepTime: "15 min",
    cookTime: "35 min",
    category: "peixe",
    categoryLabel: "Atum & Prático",
    imageEmoji: "🥧",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
    ingredients: [
      { name: "Atum em conserva bem escorrido", amount: 2, unit: "latas", category: "proteina" },
      { name: "Ovos", amount: 2, unit: "unidades", category: "proteina" },
      { name: "Leite ou bebida vegetal", amount: 1, unit: "xícara", category: "outro" },
      { name: "Farinha de aveia ou trigo", amount: 1, unit: "xícara", category: "carboidrato" },
      { name: "Fermento químico em pó", amount: 1, unit: "colher de sopa", category: "outro" },
      { name: "Cenoura ralada fininha", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Abobrinha ralada (sem excesso de água)", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Tomate picado sem sementes", amount: 1, unit: "unidade", category: "vegetal" },
      { name: "Cebola picada", amount: 0.5, unit: "unidade", category: "vegetal" },
      { name: "Cheiro-verde, pimenta e sal", amount: 1, unit: "a gosto", category: "tempero" }
    ],
    steps: [
      "Em uma tigela ou liquidificador, misture os ovos, o leite e a farinha de aveia até homogeneizar.",
      "Acrescente o fermento em pó e misture suavemente.",
      "Adicione o atum escorrido, a cenoura ralada, a abobrinha ralada, o tomate e a cebola picada.",
      "Tempere com o cheiro-verde picadinho, a pimenta e uma pequena quantidade de sal.",
      "Despeje a mistura em uma assadeira média untada.",
      "Asse em forno preaquecido a 180°C por cerca de 30 a 35 minutos até a torta firmar e dourar por cima.",
      "Espere esfriar completamente antes de cortar para que os pedaços fiquem firmes e bonitos.",
      "Divida em 6 porções e armazene nos potes individuais."
    ],
    assemblyTips: [
      "1 a 2 fatias generosas por refeição.",
      "Excelente para almoço ou lanche intermediário substancioso.",
      "Combina muito com tomatinhos cereja frescos e folhas ao lado."
    ],
    conservationTip: "Geladeira: 4 dias. Freezer: até 60 dias (embale cada fatia em papel manteiga ou pote hermético).",
    chefTip: "Se usar atum em lata, escorra totalmente o líquido. Prefira atum em água ou azeite de boa procedência com menor teor de sódio.",
    tags: ["Assa Tudo Junto", "Zero Bagunça", "Prática no Transporte", "Rende 6 Marmitas"]
  }
];
