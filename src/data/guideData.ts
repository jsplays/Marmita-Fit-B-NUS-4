export interface PoteItem {
  id: number;
  title: string;
  indication: string;
  capacity: string;
  bullets: string[];
  icon: string;
  badge: string;
}

export interface MealCombination {
  protein: string;
  carb: string;
  vegetables: string;
  note?: string;
}

export interface MealPrepPhase {
  id: number;
  timeRange: string;
  minutes: string;
  title: string;
  description: string;
  tasks: string[];
  icon: string;
}

export interface SpiceBlend {
  name: string;
  category: string;
  ingredients: string[];
  tips: string;
}

export const HEALTH_DISCLAIMER_TEXT = {
  title: "Aviso importante",
  fullText: `Este material tem finalidade educativa e não substitui consulta, diagnóstico ou tratamento realizado por médico, nutricionista, psicólogo ou outro profissional habilitado.

As sugestões são gerais e podem não ser adequadas para todas as pessoas. Gestantes, lactantes, adolescentes, pessoas idosas, pessoas com diabetes, hipertensão, doenças renais, doenças gastrointestinais, transtornos alimentares, alergias ou outras condições de saúde devem buscar orientação individualizada antes de iniciar mudanças alimentares ou de atividade física.

Não existe resultado igual para todas as pessoas. O objetivo deste programa é ajudar você a desenvolver hábitos mais consistentes, e não estabelecer uma meta obrigatória de peso.

Interrompa a atividade e procure atendimento se sentir dor no peito, falta de ar intensa, desmaio, confusão, palpitações persistentes ou qualquer sintoma importante. Sinta-se à vontade para ajustar o ritmo conforme necessário para sua segurança. Por favor, confirme se você compreendeu estas diretrizes de segurança antes de prosseguir.`
};

export const GUIDE_BENEFITS = [
  "Reduz decisões impulsivas de última hora na rua",
  "Facilita o controle total da qualidade dos ingredientes",
  "Economiza centenas de reais todo mês",
  "Permite variar as refeições com comida caseira de verdade",
  "Evita longos períodos de jejum indesejado",
  "Adapta as porções exatamente à sua fome e objetivo"
];

export const FIVE_POTS: PoteItem[] = [
  {
    id: 1,
    title: "1. Pote Principal",
    indication: "Almoço ou Jantar",
    capacity: "500 ml a 1.000 ml",
    bullets: [
      "Prefira tampa com boa vedação de silicone e travas laterais",
      "Vidro borossilicato é superdurável e não absorve manchas nem odores",
      "Plásticos livres de BPA próprios para alimentos também funcionam muito bem"
    ],
    icon: "🍱",
    badge: "Essencial"
  },
  {
    id: 2,
    title: "2. Pote Pequeno",
    indication: "Frutas, castanhas, molhos ou sobremesas",
    capacity: "100 ml a 250 ml",
    bullets: [
      "Ideal para separar alimentos úmidos e molhos dos secos",
      "Evita que as castanhas percam a crocância",
      "Perfeito para levar azeite temperado ou vinagrete"
    ],
    icon: "🫙",
    badge: "Crocância"
  },
  {
    id: 3,
    title: "3. Pote para Salada",
    indication: "Folhas, legumes crus e acompanhamentos frios",
    capacity: "500 ml a 750 ml",
    bullets: [
      "Use recipiente separado do prato quente",
      "Leve o molho SEMPRE à parte para as folhas não murcharem",
      "Seque bem as folhas com centrífuga antes de guardar"
    ],
    icon: "🥗",
    badge: "Frescor"
  },
  {
    id: 4,
    title: "4. Garrafa de Água",
    indication: "Hidratação contínua durante todo o dia",
    capacity: "600 ml a 1.000 ml",
    bullets: [
      "Tamanho anatômico fácil de transportar na mochila ou bolsa",
      "Higienize o bocal e tampa diariamente com água e sabão",
      "Evite deixar água esquecida no calor por muitos dias"
    ],
    icon: "💧",
    badge: "Hidratação"
  },
  {
    id: 5,
    title: "5. Bolsa Térmica",
    indication: "Transporte seguro e controle de temperatura",
    capacity: "Média (cabe 2 marmitas + fruta + garrafa)",
    bullets: [
      "Use blocos de gelo reutilizável (gelox) nos dias quentes",
      "Evite deixar alimentos perecíveis em temperatura ambiente",
      "Ao chegar ao trabalho ou destino, transfira para a geladeira assim que possível"
    ],
    icon: "👜",
    badge: "Segurança"
  }
];

export const POT_CARE_TIPS = [
  "Lave os potes logo após o uso com esponja macia para não riscar.",
  "Verifique periodicamente a borracha de vedação e se não há rachaduras no vidro.",
  "Descarte imediatamente potes plásticos manchados, deformados ou com cheiro forte persistente.",
  "Observe as instruções do fabricante para micro-ondas (sempre aqueça com a tampa entreaberta ou destampada).",
  "Nunca aqueça recipientes que não sejam certificados para altas temperaturas."
];

export const VISUAL_FORMULA = {
  vegetables: {
    proportion: "½ do prato (50%)",
    name: "Verduras e Legumes",
    description: "Cores variadas, fibras abundantes, saciedade e micronutrientes essenciais (cenoura, abobrinha, brócolis, couve, vagem, folhas).",
    color: "from-emerald-500 to-green-600"
  },
  protein: {
    proportion: "¼ do prato (25%)",
    name: "Proteína",
    description: "Estrutura muscular, termogênese e saciedade prolongada (frango, patinho moído, peixe, ovos caipiras, atum, tofu).",
    color: "from-rose-500 to-amber-600"
  },
  carbohydrate: {
    proportion: "¼ do prato (25%)",
    name: "Carboidrato",
    description: "Energia estável para a rotina diária (arroz, batata, batata-doce, mandioca, macarrão integral, aveia).",
    color: "from-amber-400 to-orange-500"
  },
  extras: [
    {
      title: "Leguminosas (Feijão, Grão-de-bico, Lentilha)",
      desc: "Podem acompanhar o arroz dividindo o espaço do carboidrato ou substituindo parte da proteína."
    },
    {
      title: "Gorduras Boas (Azeite, Castanhas, Sementes)",
      desc: "Usar em pequenas porções para absorção de vitaminas lipossolúveis (A, D, E, K) e sabor aromático."
    }
  ]
};

export const MEAL_COMBINATIONS: MealCombination[] = [
  { protein: "Frango em cubos", carb: "Arroz cozido", vegetables: "Cenoura e abobrinha", note: "Clássico e colorido" },
  { protein: "Carne moída (patinho)", carb: "Batatas em cubos", vegetables: "Vagem picadinha", note: "Conforto caseiro" },
  { protein: "Filé de peixe assado", carb: "Mandioca cozida", vegetables: "Brócolis no vapor", note: "Leve e rico em ômega-3" },
  { protein: "Ovos caipiras (2 un)", carb: "Arroz e feijão", vegetables: "Couve refogada com alho", note: "O clássico do Brasil" },
  { protein: "Frango desfiado", carb: "Batata-doce assada", vegetables: "Abóbora refogada", note: "Fibras e baixo índice glicêmico" },
  { protein: "Tofu grelhado com ervas", carb: "Macarrão al dente", vegetables: "Pimentão e abobrinha", note: "100% à base de plantas" },
  { protein: "Atum escorrido", carb: "Arroz integral", vegetables: "Folhas verdes e tomate", note: "Rápido de montar" }
];

export const ANTI_DRY_TIPS = [
  {
    title: "1. Molho caseiro envolvente",
    text: "Adicione um molho de tomate caseiro, creme leve de abóbora ou vinagrete suave para manter o prato úmido."
  },
  {
    title: "2. Base aromática de tomate e cebola",
    text: "Refogados que levam cebola picada e tomate soltam água natural e suculência rica ao serem aquecidos."
  },
  {
    title: "3. Caldo do feijão à parte",
    text: "Se você gosta do caldo cremoso, leve em pote pequeno e despeje por cima apenas na hora de aquecer."
  },
  {
    title: "4. Limão e vinagre só na hora",
    text: "Temperos ácidos colocados dias antes murcham os vegetais e 'cozinham' as fibras quimicamente."
  },
  {
    title: "5. Ponto dos legumes 'al dente'",
    text: "Nunca cozinhe demais no fogo. Deixe-os firmes, pois o vapor do reaquecimento no micro-ondas terminará a cocção."
  },
  {
    title: "6. Fio de azeite pós-aquecimento",
    text: "Finalizar com um fio de azeite extra virgem imediatamente antes de comer devolve o aroma e o brilho."
  }
];

export const SALAD_STEPS = [
  "1. Higienize as folhas e vegetais com solução apropriada para alimentos conforme as orientações sanitárias.",
  "2. Seque MUITO BEM cada folha usando uma centrífuga manual ou pano limpo exclusivo.",
  "3. Guarde a salada seca em pote estanque exclusivo (nunca junto com a comida quente).",
  "4. Leve o molho (azeite, limão, sal, ervas) em um pequeno frasco separado.",
  "5. Regue e misture o molho apenas nos segundos que antecedem a primeira garfada."
];

export const ANVISA_SAFETY_RULES = {
  intro: "A Anvisa (Agência Nacional de Vigilância Sanitária) enfatiza o controle rigoroso de higiene, tempo e temperatura para garantir refeições saudáveis e sem contaminação.",
  beforeStoring: [
    "Lave bem as mãos com água e sabão antes de manipular qualquer alimento.",
    "Higienize rigorosamente a bancada, tábuas de corte e utensílios.",
    "Cozinhe completamente carnes, frangos e peixes (não deixe carnes cruas no centro).",
    "Mantenha alimentos crus rigorosamente separados dos já cozidos para evitar contaminação cruzada.",
    "Use recipientes perfeitamente limpos e com tampa ajustada.",
    "Identifique o pote com a data de preparo e o prato.",
    "Espere o vapor mais intenso diminuir antes de vedar hermeticamente para não gerar condensação excessiva."
  ],
  refrigerating: [
    "Guarde a marmita na geladeira até no máximo 1 a 2 horas após o preparo.",
    "Mantenha a geladeira abaixo de 5°C em prateleiras intermediárias (evite a porta).",
    "Consuma preparações refrigeradas em até 3 a 4 dias (peixes e ovos em até 2 a 3 dias).",
    "Se notar qualquer alteração de odor, aparência esbranquiçada/viscosa, tampa estufada ou sabor estranho, descarte sem hesitar."
  ],
  freezing: [
    "1. Divida em porções individuais que serão consumidas de uma só vez.",
    "2. Etiquete com o nome do prato e a data de congelamento.",
    "3. Retire todo o excesso de ar dos recipientes ou sacos próprios.",
    "4. Congele o mais rápido possível após esfriar.",
    "5. NUNCA recongele um alimento que já foi descongelado.",
    "6. Nunca congele folhas cruas, pepino, maionese ou ovo cozido inteiro."
  ],
  defrosting: [
    "Forma recomendada: transfira do freezer para a geladeira na noite anterior (descongelamento lento e seguro).",
    "Uso rápido: utilize a função 'Descongelar' do micro-ondas e aqueça completamente logo em seguida.",
    "Direto no fogo/forno: preparações ensopadas ou escondidinhos podem ir do congelador direto ao reaquecimento com fogo brando.",
    "PERIGO: Nunca deixe a marmita descongelando sobre a pia em temperatura ambiente por várias horas!"
  ],
  transporting: [
    "Utilize sempre bolsa térmica bem estruturada com isolamento de qualidade.",
    "Coloque gelo reutilizável (gelox congelado) colado aos recipientes.",
    "Mantenha a bolsa fechada durante o trajeto.",
    "Ao chegar ao trabalho, transfira imediatamente os potes para a geladeira.",
    "Aqueça apenas a porção exata que você vai consumir naquele momento."
  ]
};

export const MEAL_PREP_ROUTINE: MealPrepPhase[] = [
  {
    id: 1,
    timeRange: "0 a 15 min",
    minutes: "15 min",
    title: "Organização e Mise en Place",
    description: "Preparar a cozinha, equipamentos e focar no planejamento",
    tasks: [
      "Lave as mãos e higienize a bancada de trabalho",
      "Separe e alinhe todos os potes e tampas limpos",
      "Confira todos os ingredientes na geladeira e despensa",
      "Coloque uma panela grande com água para ferver",
      "Ligue o forno a 200°C para pré-aquecer"
    ],
    icon: "🧼"
  },
  {
    id: 2,
    timeRange: "15 a 40 min",
    minutes: "25 min",
    title: "Iniciar Cozimentos Base",
    description: "Colocar as bases que demandam tempo para cozinhar sozinhas",
    tasks: [
      "Coloque o arroz na panela para cozinhar em fogo baixo",
      "Aqueça o feijão já previamente cozido",
      "Coloque as batatas ou abóbora para assar no forno ou cozinhar na água",
      "Inicie o cozimento do frango na panela de pressão ou peito em cubos"
    ],
    icon: "🔥"
  },
  {
    id: 3,
    timeRange: "40 a 70 min",
    minutes: "30 min",
    title: "Preparar Proteínas Principais",
    description: "Foco no sabor e cozimento completo das carnes e ovos",
    tasks: [
      "Desfie o frango cozido ou prepare a carne moída refogada com cebola e alho",
      "Modele e asse as almôndegas ou grelhe os filés de peixe",
      "Acerte os temperos naturais (páprica, cúrcuma, alho, ervas)",
      "Verifique se o centro das carnes está totalmente cozido e seguro"
    ],
    icon: "🍳"
  },
  {
    id: 4,
    timeRange: "70 a 95 min",
    minutes: "25 min",
    title: "Preparar Vegetais e Acompanhamentos",
    description: "Cozimento rápido para preservar cores, texturas e vitaminas",
    tasks: [
      "Cozinhe o brócolis no vapor rápido (3 a 4 minutos)",
      "Refogue a abobrinha com azeite e ervas finas",
      "Cozinhe a cenoura e a vagem no ponto al dente",
      "Prepare a couve refogada rápida ou higienize a salada de folhas"
    ],
    icon: "🥦"
  },
  {
    id: 5,
    timeRange: "95 a 115 min",
    minutes: "20 min",
    title: "Linha de Montagem das Marmitas",
    description: "Distribuir com precisão e harmonia visual",
    tasks: [
      "Deixe os alimentos perderem o excesso de vapor quente por 5 minutos",
      "Divida as porções equilibradas (½ vegetais, ¼ carbo, ¼ proteína)",
      "Coloque molhos e acompanhamentos úmidos em potes auxiliares",
      "Tampe bem os recipientes e certifique-se da vedação",
      "Etiquete com o nome do prato e a data de hoje"
    ],
    icon: "🍱"
  },
  {
    id: 6,
    timeRange: "115 a 120 min",
    minutes: "5 min",
    title: "Armazenamento e Limpeza Final",
    description: "Guardar nos locais corretos e deixar a cozinha brilhando",
    tasks: [
      "Coloque na geladeira as marmitas dos próximos 2 a 3 dias",
      "Leve ao congelador/freezer as porções dos dias posteriores",
      "Lave os últimos utensílios e deixe a pia e bancada limpas",
      "Celebre: sua semana inteira de comida saudável está 100% garantida!"
    ],
    icon: "✨"
  }
];

export const SPICE_BLENDS: SpiceBlend[] = [
  {
    name: "Mistura Especial para Frango",
    category: "Aves",
    ingredients: ["Páprica doce ou defumada", "Alho amassado", "Suco de limão", "Pimenta-do-reino", "Orégano desidratado", "Cheiro-verde picadinho"],
    tips: "Deixe marinar por 15 minutos antes de dourar para que os temperos penetrem fundo nas fibras."
  },
  {
    name: "Mistura Especial para Carne Bovina",
    category: "Carnes",
    ingredients: ["Alho fresco picado", "Cebola ralada", "Cominho em pó", "Páprica picante ou doce", "Pimenta preta moída na hora", "Cheiro-verde"],
    tips: "O cominho realça a intensidade da carne moída e combina perfeitamente com batatas e legumes cozidos."
  },
  {
    name: "Mistura Especial para Legumes",
    category: "Vegetais",
    ingredients: ["Azeite de oliva extra virgem", "Suco de limão", "Ervas secas (alecrim, tomilho e orégano)", "Pimenta-do-reino", "Alho laminado"],
    tips: "Regue os legumes antes de assar no forno para caramelizar as bordas e concentrar a doçura natural."
  }
];

export const QUICK_TOMATO_SAUCE = {
  title: "Molho de Tomate Rápido Caseiro",
  yield: "Rende cerca de 500 ml",
  ingredients: [
    "4 tomates bem maduros picados (com casca e sementes)",
    "½ cebola picadinha",
    "1 dente de alho amassado",
    "Folhas de manjericão fresco",
    "Pimenta-do-reino",
    "Uma pitadinha de sal e 1 colher de sopa de azeite"
  ],
  steps: [
    "Aqueça o azeite e refogue a cebola e o alho até perfumar.",
    "Acrescente os tomates maduros picados e mexa bem.",
    "Cozinhe em fogo baixo com a panela semitampada até os tomates desmancharem.",
    "Amasse com as costas da colher ou passe rapidamente no mixer para textura rústica.",
    "Desligue o fogo e finalize com as folhas de manjericão fresco.",
    "Guarde em pote de vidro esterilizado na geladeira por 5 dias ou congele em forminhas."
  ]
};

export const INITIAL_SHOPPING_LIST = [
  // Proteínas
  { id: 'p1', category: 'Proteínas', name: 'Peito de frango', checked: false },
  { id: 'p2', category: 'Proteínas', name: 'Carne moída magra (patinho)', checked: false },
  { id: 'p3', category: 'Proteínas', name: 'Filés de peixe', checked: false },
  { id: 'p4', category: 'Proteínas', name: 'Ovos', checked: false },
  { id: 'p5', category: 'Proteínas', name: 'Atum em lata', checked: false },
  { id: 'p6', category: 'Proteínas', name: 'Grão-de-bico', checked: false },
  { id: 'p7', category: 'Proteínas', name: 'Feijão (carioca ou preto)', checked: false },
  { id: 'p8', category: 'Proteínas', name: 'Tofu ou Lentilha (opcional)', checked: false },

  // Carboidratos
  { id: 'c1', category: 'Carboidratos', name: 'Arroz', checked: false },
  { id: 'c2', category: 'Carboidratos', name: 'Batatas', checked: false },
  { id: 'c3', category: 'Carboidratos', name: 'Batata-doce', checked: false },
  { id: 'c4', category: 'Carboidratos', name: 'Mandioca (aipim)', checked: false },
  { id: 'c5', category: 'Carboidratos', name: 'Macarrão', checked: false },
  { id: 'c6', category: 'Carboidratos', name: 'Aveia (flocos ou farinha)', checked: false },
  { id: 'c7', category: 'Carboidratos', name: 'Farinha de aveia ou trigo', checked: false },

  // Legumes e verduras
  { id: 'v1', category: 'Legumes e Verduras', name: 'Cenoura', checked: false },
  { id: 'v2', category: 'Legumes e Verduras', name: 'Abobrinha', checked: false },
  { id: 'v3', category: 'Legumes e Verduras', name: 'Brócolis', checked: false },
  { id: 'v4', category: 'Legumes e Verduras', name: 'Couve fatiada', checked: false },
  { id: 'v5', category: 'Legumes e Verduras', name: 'Vagem', checked: false },
  { id: 'v6', category: 'Legumes e Verduras', name: 'Abóbora cabotiá', checked: false },
  { id: 'v7', category: 'Legumes e Verduras', name: 'Tomate maduro', checked: false },
  { id: 'v8', category: 'Legumes e Verduras', name: 'Pepino', checked: false },
  { id: 'v9', category: 'Legumes e Verduras', name: 'Pimentão', checked: false },
  { id: 'v10', category: 'Legumes e Verduras', name: 'Folhas variadas (alface, rúcula)', checked: false },
  { id: 'v11', category: 'Legumes e Verduras', name: 'Cebola', checked: false },
  { id: 'v12', category: 'Legumes e Verduras', name: 'Alho', checked: false },

  // Frutas
  { id: 'f1', category: 'Frutas', name: 'Bananas', checked: false },
  { id: 'f2', category: 'Frutas', name: 'Maçãs', checked: false },
  { id: 'f3', category: 'Frutas', name: 'Mamão', checked: false },
  { id: 'f4', category: 'Frutas', name: 'Laranja', checked: false },
  { id: 'f5', category: 'Frutas', name: 'Limões', checked: false },
  { id: 'f6', category: 'Frutas', name: 'Frutas da estação', checked: false },

  // Temperos e complementos
  { id: 't1', category: 'Temperos e Complementos', name: 'Azeite de oliva', checked: false },
  { id: 't2', category: 'Temperos e Complementos', name: 'Páprica (doce ou defumada)', checked: false },
  { id: 't3', category: 'Temperos e Complementos', name: 'Cúrcuma (açafrão)', checked: false },
  { id: 't4', category: 'Temperos e Complementos', name: 'Orégano e ervas secas', checked: false },
  { id: 't5', category: 'Temperos e Complementos', name: 'Pimenta-do-reino', checked: false },
  { id: 't6', category: 'Temperos e Complementos', name: 'Cominho em pó', checked: false },
  { id: 't7', category: 'Temperos e Complementos', name: 'Cheiro-verde fresco (salsa e cebolinha)', checked: false },
  { id: 't8', category: 'Temperos e Complementos', name: 'Vinagre de maçã', checked: false },

  // Materiais
  { id: 'm1', category: 'Materiais e Utensílios', name: 'Potes com tampa hermética (500 a 1000ml)', checked: false },
  { id: 'm2', category: 'Materiais e Utensílios', name: 'Potes pequenos para molho (100 a 250ml)', checked: false },
  { id: 'm3', category: 'Materiais e Utensílios', name: 'Bolsa térmica com isolamento', checked: false },
  { id: 'm4', category: 'Materiais e Utensílios', name: 'Bloco de gelo reutilizável (gelox)', checked: false },
  { id: 'm5', category: 'Materiais e Utensílios', name: 'Etiquetas adesivas ou fita crepe', checked: false },
  { id: 'm6', category: 'Materiais e Utensílios', name: 'Caneta permanente para anotações', checked: false }
];

export const INITIAL_CHECKLIST_PHASES = [
  {
    phaseId: 'before',
    title: '1. Antes de Cozinhar',
    icon: '📋',
    items: [
      { id: 'b1', text: 'Planejei as refeições e o cardápio da semana.', checked: false },
      { id: 'b2', text: 'Conferi todos os ingredientes na geladeira e armário.', checked: false },
      { id: 'b3', text: 'Separei os potes, tampas e assadeiras limpos.', checked: false },
      { id: 'b4', text: 'Lavei muito bem as mãos com sabão.', checked: false },
      { id: 'b5', text: 'Higienizei a bancada de trabalho.', checked: false },
      { id: 'b6', text: 'Separei tábuas e alimentos crus dos cozidos.', checked: false }
    ]
  },
  {
    phaseId: 'during',
    title: '2. Durante o Preparo',
    icon: '🍳',
    items: [
      { id: 'd1', text: 'Cozinhei carnes, frango e peixes completamente.', checked: false },
      { id: 'd2', text: 'Evitei usar a mesma tábua para alimentos crus e prontos.', checked: false },
      { id: 'd3', text: 'Usei temperos naturais e reduzi o excesso de sódio.', checked: false },
      { id: 'd4', text: 'Preparei porções compatíveis com minha fome.', checked: false },
      { id: 'd5', text: 'Evitei deixar alimentos em temperatura ambiente por muito tempo.', checked: false }
    ]
  },
  {
    phaseId: 'after',
    title: '3. Depois do Preparo',
    icon: '🏷️',
    items: [
      { id: 'a1', text: 'Identifiquei os potes com nome e data de preparo.', checked: false },
      { id: 'a2', text: 'Separei na geladeira o que será consumido em até 3 dias.', checked: false },
      { id: 'a3', text: 'Separei no congelador o que será consumido depois.', checked: false },
      { id: 'a4', text: 'Coloquei a salada e o molho em recipientes separados.', checked: false },
      { id: 'a5', text: 'Deixei a cozinha limpa e organizada.', checked: false }
    ]
  },
  {
    phaseId: 'leaving',
    title: '4. Para Sair de Casa',
    icon: '👜',
    items: [
      { id: 'l1', text: 'Coloquei a marmita dentro da bolsa térmica fechada.', checked: false },
      { id: 'l2', text: 'Levei gelo reutilizável quando não houver geladeira rápida.', checked: false },
      { id: 'l3', text: 'Levei talheres higienizados.', checked: false },
      { id: 'l4', text: 'Levei minha garrafa de água cheia.', checked: false },
      { id: 'l5', text: 'Levei uma fruta fresca ou lanche saudável de reserva.', checked: false },
      { id: 'l6', text: 'Coloquei a marmita na geladeira do trabalho assim que cheguei.', checked: false }
    ]
  }
];
