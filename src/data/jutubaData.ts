import {
  ExperienceItem,
  ComfortItem,
  DistanceItem,
  FAQItem,
  ChecklistSectionData
} from '../types';

export const FAZENDA_JUTUBA_CONFIG = {
  nome: "Fazenda Jutuba",
  subtitulo: "Venda de Terreno & Reserva Particular",
  localizacao: "Santarém, Pará — Amazônia Brasileira",
  areaTotal: "272,70 hectares (2,74 km²)",
  perimetro: "272,70 ha",
  extensaoPraia: "+400 metros de Orla",
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
  { id: "01", label: "TERRENO", sectionId: "a-fazenda" },
  { id: "02", label: "ORLA", sectionId: "experiencias" },
  { id: "03", label: "SEGURANÇA", sectionId: "conforto-seguranca" },
  { id: "04", label: "LOCALIZAÇÃO", sectionId: "localizacao" },
  { id: "05", label: "PROJETO", sectionId: "reserva-jutuba" },
  { id: "06", label: "CONTATO", sectionId: "contato" },
];

export const STATS_DATA = [
  {
    id: "stat-1",
    label: "PERÍMETRO TOTAL",
    value: 272.7,
    unit: "ha",
    suffix: " ha",
    detail: "Perímetro de 272,70 ha",
  },
  {
    id: "stat-2",
    label: "ÁREA DO TERRENO",
    value: 2.74,
    unit: "km²",
    suffix: " km²",
    detail: "Área de 2,74 km² na Amazônia",
  },
  {
    id: "stat-3",
    label: "ORLA EXCLUSIVA",
    prefix: "+",
    value: 400,
    unit: "m",
    suffix: "m",
    detail: "+400m de Orla no Rio Tapajós",
  },
  {
    id: "stat-4",
    label: "DOCUMENTAÇÃO",
    value: 100,
    unit: "%",
    suffix: "%",
    detail: "Matrícula, CAR & SIGEF OK",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Orla Privativa de Areia Clara (+400m)",
    category: "Praia de Rio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe53nNXsPFWR21kw_qjoAYOS4n7QS5hlgX7rfWDYi9rB84qSPhYr79YLNt&s=10",
    description: "Mais de 400 metros de margem exclusiva banhada por águas quentes e cristalinas no Rio Tapajós.",
  },
  {
    id: "exp-2",
    title: "Encontro das Águas em Santarém",
    category: "Patrimônio Natural",
    image: "https://vemparaalter.com.br/wp-content/uploads/2024/11/turismo-em-santararem-encontro-das-aguas-1.webp",
    description: "Espetáculo único onde o Rio Tapajós de águas azuis encontra o Rio Amazonas sem se misturar.",
  },
  {
    id: "exp-3",
    title: "Píer & Marina Flutuante Jutuba",
    category: "Náutica",
    image: "https://originalexperience.com.br/wp-content/uploads/2022/08/tour-santarem.jpg",
    description: "Acesso hidroviário direto para lanchas, iates e jet-skis com ancoradouro privativo no terreno.",
  },
  {
    id: "exp-4",
    title: "Alter do Chão e Enseadas do Tapajós",
    category: "Localização",
    image: "https://s2-redeglobo.glbimg.com/Fs4woi7v-W8RvGvQmqU_UzH1Mj8=/0x0:1080x1330/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf600a0/internal_photos/bs/2021/w/k/ih0AkxRSaEBJr9TlXTOQ/24d8b890-cd18-43aa-b18b-e2696e7d2df1.jpg",
    description: "Proximidade imediata do Caribe Amazônico com praias de areia branca e turismo de alto padrão.",
  },
  {
    id: "exp-5",
    title: "Floresta Nativa Preservada (2,74 km²)",
    category: "Eco-Aventura",
    image: "https://blog.123milhas.com/wp-content/uploads/2022/01/IMAGEM-02-FLONA-FLORESTA-NACIONAL-TAPAJOS-TEM-QUE-IR-SANTAREM-1024-X-650-123MILHAS.jpg",
    description: "272,70 hectares de mata virgem com biodiversidade exuberante e trilhas ecológicas mapeadas.",
  },
  {
    id: "exp-6",
    title: "Orla Urbana e Infraestrutura de Santarém",
    category: "Conveniência",
    image: "https://casasaimiri.com.br/wp-content/uploads/2023/10/Orla-de-Santarem-2.jpg",
    description: "Acesso rápido ao centro, aeroporto internacional, restaurantes e polos de desenvolvimento regional.",
  },
  {
    id: "exp-7",
    title: "Patrimônio Cultural e Histórico",
    category: "Cultura & História",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Santar%C3%A9m_-_Igreja_do_Semin%C3%A1rio_%28cropped%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original",
    description: "Tradição secular e rica história cultural de Santarém, a Pérola do Tapajós.",
  },
  {
    id: "exp-8",
    title: "Porto e Logística Fluvial",
    category: "Logística",
    image: "https://portodesantarem.com.br/wp-content/uploads/2023/10/21.jpg",
    description: "Eixo logístico estratégico no Rio Tapajós com total facilidade de abastecimento e navegação.",
  },
];

export const COMFORT_SAFETY_ITEMS: ComfortItem[] = [
  {
    id: "cs-1",
    iconName: "ShieldCheck",
    label: "+400 metros de frente para a praia",
    description: "Orla privativa de praia de rio com areia clara e águas límpidas no Rio Tapajós.",
  },
  {
    id: "cs-2",
    iconName: "Camera",
    label: "Monitoramento & Acesso Controlado",
    description: "Identificação e privacidade garantida em todo o perímetro da propriedade.",
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
      "+400 metros de frente para a praia",
      "Espaço Kids Ecológico em Madeira Sustentável",
    ],
    images: [
      {
        url: "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/santarem_foto_ivo_lima00306172016.jpeg",
        caption: "Vista panorâmica das praias límpidas do Tapajós em Santarém"
      },
      {
        url: "https://flordejambu.com/wp-content/uploads/2022/07/Pontos-Turisticos-em-Santarem.png",
        caption: "Pontos turísticos paradisíacos e águas mornas de Santarém/PA"
      },
      {
        url: "https://casasaimiri.com.br/wp-content/uploads/2023/12/WhatsApp-Image-2025-02-19-at-16.03.54-scaled-e1739991907727.jpeg",
        caption: "Praia de rio privativa com +400m de orla exclusiva no Rio Tapajós"
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
