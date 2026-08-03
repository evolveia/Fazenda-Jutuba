import {
  ExperienceItem,
  ComfortItem,
  DistanceItem,
  FAQItem,
  ChecklistSectionData
} from '../types';

export const FAZENDA_JUTUBA_CONFIG = {
  nome: "Fazenda Jutuba",
  subtitulo: "Eco-Resort & Reserva Particular",
  localizacao: "Santarém, Pará — Amazônia Brasileira",
  areaTotal: "272 hectares",
  extensaoPraia: "Mais de 2 km",
  coordenadas: "2°25'26.60\"S 54°52'08.14\"W",
  googleEarthLink: "https://earth.google.com/earth/d/1UD5jUDUDnTdcA3PxCegttr9b8lU3bFAn?usp=sharing",
  whatsappNumber: "5591996156672",
  whatsappFormatted: "(91) 996156672",
  emailContato: "contato@fazendajutuba.com.br",
  cnpjPlaceholder: "00.000.000/0001-00",
  matriculaPlaceholder: "Matrícula nº 14.892 – CRI de Santarém/PA",
  regimeLegal: "CAR (PA-1506806) & SIGEF Regularizados",
};

export const HERO_INDICATORS = [
  { id: "01", label: "RESERVA", sectionId: "a-fazenda" },
  { id: "02", label: "PRAIA", sectionId: "experiencias" },
  { id: "03", label: "SEGURANÇA", sectionId: "conforto-seguranca" },
  { id: "04", label: "LOCALIZAÇÃO", sectionId: "localizacao" },
  { id: "05", label: "VILAS", sectionId: "reserva-jutuba" },
  { id: "06", label: "CONTATO", sectionId: "contato" },
];

export const STATS_DATA = [
  {
    id: "stat-1",
    label: "RESERVA PRESERVADA",
    value: 272,
    unit: "ha",
    suffix: " ha",
    detail: "Mata nativa 100% Intacta",
  },
  {
    id: "stat-2",
    label: "ORLA PARTICULAR",
    prefix: "+",
    value: 2,
    unit: "km",
    suffix: " km",
    detail: "Praia de rio e areia clara",
  },
  {
    id: "stat-3",
    label: "DOCUMENTAÇÃO",
    value: 100,
    unit: "%",
    suffix: "%",
    detail: "Matrícula, CAR & SIGEF",
  },
  {
    id: "stat-4",
    label: "LAZER NATURAL",
    prefix: "+",
    value: 20,
    unit: "",
    suffix: "",
    detail: "Experiências e Infraestrutura",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Praia Particular de Areia Clara",
    category: "Praia de Rio",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    description: "Mais de 2 km de margem exclusiva banhada por águas quentes e cristalinas no Rio Tapajós.",
  },
  {
    id: "exp-2",
    title: "Píer Estruturado Jutuba",
    category: "Náutica",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
    description: "Ancoradouro para lanchas, jet-skis e embarcações com área VIP de observação do pôr do sol.",
  },
  {
    id: "exp-3",
    title: "Trilhas Ecológicas Sinalizadas",
    category: "Eco-Aventura",
    image: "https://images.unsplash.com/photo-1511497584788-876761c12355?auto=format&fit=crop&w=1200&q=85",
    description: "Caminhadas sob a copa de árvores centenárias da floresta amazônica preservada.",
  },
  {
    id: "exp-4",
    title: "Birdwatching & Fauna Silvestre",
    category: "Natureza",
    image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85",
    description: "Pontos estratégicos de observação de tucanos, araras e aves endêmicas do Tapajós.",
  },
  {
    id: "exp-5",
    title: "Lounge da Mata & Redário",
    category: "Bem-estar",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=85",
    description: "Espaço de relaxamento integrado à vegetação com redário suspenso e brisa constante do rio.",
  },
  {
    id: "exp-6",
    title: "Fogueira & Espaço Camping",
    category: "Convivência",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=85",
    description: "Luau ribeirinho com praça do fogo ao ar livre sob um dos céus mais estrelados da Amazônia.",
  },
  {
    id: "exp-7",
    title: "Mirante Pôr do Sol no Tapajós",
    category: "Vista Panorâmica",
    image: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=85",
    description: "Decks elevados com vista de 180° para o horizonte dourado da praia e das ilhas fluviais.",
  },
  {
    id: "exp-8",
    title: "Base de Caiaque e Stand Up Paddle",
    category: "Esportes Aquáticos",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    description: "Equipamentos à disposição para navegar pelas enseadas tranquilas de água morna.",
  },
];

export const COMFORT_SAFETY_ITEMS: ComfortItem[] = [
  {
    id: "cs-1",
    iconName: "ShieldCheck",
    label: "Portaria com Controle de Acesso",
    description: "Guarita inteligente com identificação biológica e cancelas automáticas.",
  },
  {
    id: "cs-2",
    iconName: "Camera",
    label: "Monitoramento 24h",
    description: "Câmeras de alta definição e ronda interna em todo o perímetro habitável.",
  },
  {
    id: "cs-3",
    iconName: "Anchor",
    label: "Píer Estruturado no Rio",
    description: "Acesso direto para embarcações com marina flutuante de apoio.",
  },
  {
    id: "cs-4",
    iconName: "MapPin",
    label: "Trilhas Sinalizadas",
    description: "Circuitos demarcados com mapas de biodiversidade e pontos de apoio.",
  },
  {
    id: "cs-5",
    iconName: "Sun",
    label: "Mirante do Pôr do Sol",
    description: "Arquitetura e decks integrados à paisagem nativa da praia.",
  },
  {
    id: "cs-6",
    iconName: "Waves",
    label: "Área de Caiaque & SUP",
    description: "Guarderia náutica equipada e plataforma de apoio aquático.",
  },
  {
    id: "cs-7",
    iconName: "Zap",
    label: "Energia Solar & Poço Artesiano",
    description: "Matriz energética limpa e abastecimento hídrico mineral automatizado.",
  },
  {
    id: "cs-8",
    iconName: "Users",
    label: "Convivência Ribeirinha",
    description: "Espaço comunitário gourmet com parrilla, forno a lenha e decks de madeira.",
  },
  {
    id: "cs-9",
    iconName: "Dog",
    label: "Pet Friendly",
    description: "Áreas abertas de lazer para animais de estimação em contato com a natureza.",
  },
  {
    id: "cs-10",
    iconName: "Car",
    label: "Estacionamento de Visitantes",
    description: "Vagas sombreadas para condôminos e convidados com estação de recarga.",
  },
];

export const DISTANCES: DistanceItem[] = [
  {
    id: "dist-1",
    destination: "Aeroporto de Santarém (STM)",
    distanceTime: "35 min",
    iconName: "Plane",
    tag: "Acesso Aéreo Internacional/Nacional",
  },
  {
    id: "dist-2",
    destination: "Alter do Chão",
    distanceTime: "20 min",
    iconName: "Palmtree",
    tag: "O 'Caribe Amazônico'",
  },
  {
    id: "dist-3",
    destination: "Centro Urbano de Santarém",
    distanceTime: "40 min",
    iconName: "Building2",
    tag: "Comércio, Hospitais & Serviços",
  },
  {
    id: "dist-4",
    destination: "Rodovia PA-457 / BR-163",
    distanceTime: "15 min",
    iconName: "Navigation",
    tag: "Eixo Rodoviário Pavimentado",
  },
];

export const CHECKLIST_SECTIONS: ChecklistSectionData[] = [
  {
    id: "reserva-jutuba",
    title: "Reserva Jutuba",
    subtitle: "A Experiência do Resort Ribeirinho",
    description: "O núcleo residencial de convivência foi concebido para harmonia total entre o conforto contemporâneo e a mata amazônica. Estruturas em madeira sustentável, iluminação de baixo impacto e decks com vista para as águas límpidas.",
    checkpoints: [
      "Píer Flutuante e Ancoradouro de Embarcações",
      "Deck Solarium com Espreguiçadeiras e Duchas",
      "Lounge Ribeirinho com Serviço de Apoio",
      "Espaço Gourmet com Parrilla e Forno a Lenha",
      "Arena Esportiva de Beach Tennis na Areia Nativa",
      "Piscina Natural Integrada ao Rio",
      "Guarita de Acesso com Segurança 24h",
      "Espaço Kids Ecológico em Madeira Sustentável",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=85",
        caption: "Lounge da Reserva Jutuba e decks integrados à exuberante vegetação amazônica"
      },
      {
        url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
        caption: "Píer ancoradouro e praia particular de águas calmas no Rio Tapajós"
      },
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        caption: "Orla com mais de 2 km de areia alva e floresta nativa preservada em Santarém"
      }
    ]
  },
  {
    id: "vila-do-rio",
    title: "Vila do Rio",
    subtitle: "A Imersão Ecológica & Lazer Ativo",
    description: "Para os amantes da floresta viva, a Vila do Rio conecta o morador às trilhas interpretativas, estações de observação de aves, mirantes elevados e áreas de camping sob a luz das estrelas.",
    checkpoints: [
      "Trilhas Ecológicas com Placas de Biodiversidade",
      "Mirante Panorâmico do Pôr do Sol",
      "Espaço Fogueira & Camping sob a Copa Nativas",
      "Postos de Observação de Aves (Birdwatching)",
      "Guarderia de Caiaque, SUP e Canoa Havaiana",
      "Praça de Jogos ao Ar Livre",
      "Horta Comunitária de Ervas Amazônicas",
      "Redário e Espaço de Meditação na Mata",
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1511497584788-876761c12355?auto=format&fit=crop&w=1200&q=85",
        caption: "Trilhas sombreadas sob a copa de árvores gigantes da Amazônia"
      },
      {
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=85",
        caption: "Espaço Fogueira e camping para noites inesquecíveis sob o céu do Tapajós"
      },
      {
        url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1200&q=85",
        caption: "Visual deslumbrante do pôr do sol no horizonte do Rio Tapajós"
      }
    ]
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "O imóvel está 100% legalizado e documentado?",
    answer: "Sim. A Fazenda Jutuba possui situação jurídica impecável e 100% regularizada. Possui Matrícula individual registrada no Cartório do Registro de Imóveis de Santarém/PA, Cadastro Ambiental Rural (CAR) ativo e homologado (PA-1506806), e certificação SIGEF/INCRA com georreferenciamento de precisão.",
  },
  {
    id: "faq-2",
    question: "Como funciona o agendamento de visitas?",
    answer: "Organizamos recepções VIP exclusivas com atendimento personalizado. As visitas podem ser agendadas presencialmente por via terrestre ou com travessia privativa de barco partindo de Alter do Chão/Santarém. Basta preencher o formulário no site ou acionar o botão de WhatsApp.",
  },
  {
    id: "faq-3",
    question: "Qual é a infraestrutura de utilidades no local?",
    answer: "O empreendimento foi projetado sob o conceito de autonomia sustentável de alto padrão: usina de energia solar fotovoltaica, rede elétrica subterrânea nas áreas sociais, poço artesiano de água mineral com tratamento, sistema de fita bacteriológica e sinal de internet de alta velocidade via satélite de baixa órbita.",
  },
  {
    id: "faq-4",
    question: "Quais são as regras de preservação ambiental?",
    answer: "Como a prioridade é o eco-living de luxo, mais de 80% dos 272 hectares permanecem como Reserva Legal e Área de Preservação Permanente (APP) intocadas. As construções seguem normas estritas de bioarquitetura (limite de gabarito, taxa de ocupação reduzida e uso de materiais regionais de manejo certificado).",
  },
  {
    id: "faq-5",
    question: "Quais são as formas de pagamento e parcelamento?",
    answer: "Oferecemos plano facilitado de pré-lançamento direto com a incorporadora, sem burocracia bancária. Disponibilizamos entrada parcelada e financiamento em até 60 meses, além de descontos especiais para quitação à vista.",
  },
];
