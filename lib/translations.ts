export type Language = 'pt' | 'en' | 'fr' | 'es' | 'de';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      accommodations: 'Alojamentos',
      services: 'Serviços',
      owners: 'Proprietários',
      partnerships: 'Parcerias',
      about: 'Sobre Nós',
      contact: 'Contactos',
      book: 'Reservar',
      imOwner: 'Sou Proprietário',
    },
    hero: {
      headline: 'Alojamento Local em Sesimbra, com conforto e autenticidade',
      subheadline: 'Descubra estadias únicas junto ao mar ou rentabilize o seu imóvel com uma equipa local de confiança.',
      bookNow: 'Reservar Agora',
      imOwner: 'Sou Proprietário',
      trustBadges: {
        local: 'Gestão Local',
        personalized: 'Experiências Personalizadas',
        personalizedShort: 'Experiências',
        support: 'Apoio ao Hóspede',
      },
    },
    dualJourney: {
      heading: 'Como podemos ajudar?',
      description: 'Seja para encontrar o alojamento perfeito ou para rentabilizar o seu imóvel em Sesimbra',
      guestBadge: 'Hóspedes',
      ownerBadge: 'Proprietários',
      guestBenefits: {
        homes: 'Casas de férias em Sesimbra',
        booking: 'Reserva segura e fácil',
        support: 'Apoio local durante a estadia',
      },
      ownerBenefits: {
        management: 'Gestão completa do seu alojamento',
        profitability: 'Maximização da rentabilidade',
        noWorries: 'Sem preocupações, sem stress',
      },
      guest: {
        title: 'Procura alojamento em Sesimbra?',
        description: 'Encontre casas, apartamentos e estadias com vista mar, piscina ou localização privilegiada.',
        cta: 'Ver Alojamentos',
      },
      owner: {
        title: 'Tem um imóvel em Sesimbra?',
        description: 'A DolceStay trata da gestão, reservas, hóspedes, limpeza e rentabilização do seu imóvel.',
        cta: 'Pedir Proposta',
      },
    },
    accommodations: {
      title: 'Alojamentos em Destaque',
      subtitle: 'Descubra as nossas propriedades selecionadas',
      badge: 'Alojamento Sesimbra',
      featured: 'Destaque',
      guests: 'pessoas',
      bedrooms: 'quartos',
      ctaTitle: 'Reserve com confiança',
      bookingNote:
        'As reservas são concluídas de forma segura através da nossa plataforma oficial.',
      ctaButton: 'Ver todos os alojamentos',
      ctaHint: 'Disponibilidade atualizada',
      book: 'Reservar',
      features: {
        seaView: 'Vista Mar',
        pool: 'Piscina',
        garden: 'Jardim',
        center: 'Centro',
        terrace: 'Terraço',
        modern: 'Apartamento Moderno',
        beach: 'Praia',
        wifi: 'Wi-Fi',
        parking: 'Estacionamento',
        aircon: 'Ar Condicionado',
      },
      perNight: '/noite',
      from: 'Desde',
      items: [
        { id: 1, subtitle: 'Casa a 5 min da Praia com Jardim e Churrasqueira' },
        { id: 2, subtitle: 'Studio a 50m da Praia de Sesimbra' },
        { id: 3, subtitle: 'Casa com Piscina e Vista Mar' },
        { id: 4, subtitle: 'Apartamento Moderno no Centro' },
      ],
    },
    services: {
      title: 'Os Nossos Serviços',
      subtitle: 'Gestão completa do seu alojamento local',
      badge: 'Gestão de Alojamento Local',
      ctaDescription: 'Interessado em saber mais sobre como podemos ajudar a rentabilizar o seu imóvel?',
      learnMore: 'Saber Mais',
      items: {
        bookingManagement: {
          title: 'Gestão de Reservas',
          description: 'Colocamos e gerimos as reservas do seu alojamento em plataformas como Airbnb, Booking.com e o nosso próprio site.',
        },
        checkInOut: {
          title: 'Check-in e Check-out',
          description: 'A nossa equipa recebe os hóspedes e acompanha-os, garantindo uma experiência pessoal.',
        },
        cleaning: {
          title: 'Limpeza e Lavandaria',
          description: 'Garantimos que o seu imóvel está sempre impecável para receber novos hóspedes.',
        },
        pricing: {
          title: 'Otimização de Preços',
          description: 'Ajustamos os preços dinamicamente para maximizar a ocupação e rentabilidade.',
        },
        guestSupport: {
          title: 'Atendimento ao Hóspede',
          description: 'Apoio 24/7 aos hóspedes durante toda a estadia para garantir a melhor experiência.',
        },
        marketing: {
          title: 'Divulgação e Marketing',
          description: 'Promovemos o seu alojamento nas nossas redes sociais e website.',
        },
        maintenance: {
          title: 'Manutenção e Apoio Local',
          description: 'Tratamos de pequenas reparações e coordenamos serviços de manutenção.',
        },
        preparation: {
          title: 'Preparação do Imóvel',
          description: 'Preparamos o seu imóvel para receber hóspedes com todos os detalhes.',
        },
      },
    },
    owners: {
      title: 'Rentabilize o seu imóvel sem preocupações',
      subtitle: 'Tratamos da gestão completa do seu alojamento local para que possa obter mais rendimento com menos esforço.',
      badge: 'Rentabilizar imóvel Sesimbra',
      whyTitle: 'Porquê trabalhar connosco?',
      whyDescription: 'A DolceStay encarrega-se da colocação dos alojamentos locais em várias plataformas de arrendamentos de curta, média e longa duração, da gestão das reservas e na estipulação dos preços a praticar. Questões logísticas como check-ins, check-outs, acompanhamento dos hóspedes durante a estadia, limpezas, lavandaria, etc, são também geridas por nós.',
      offersTitle: 'O que oferecemos',
      ctaTitle: 'Pronto para começar?',
      ctaDescription: 'Entre em contacto connosco e descubra como podemos maximizar o rendimento do seu imóvel em Sesimbra.',
      ctaPills: {
        fastSetup: 'Setup rápido',
        dedicatedTeam: 'Equipa dedicada',
        premiumManagement: 'Gestão premium',
      },
      ctaDisclaimer: 'Sem compromisso inicial. Resposta em menos de 24h.',
      benefits: {
        fullManagement: 'Gestão completa',
        visibility: 'Mais visibilidade',
        localSupport: 'Apoio local em Sesimbra',
        guestComm: 'Comunicação com hóspedes',
        cleaningMaint: 'Limpeza e manutenção',
        pricingOpt: 'Otimização de preços',
        bookingMgmt: 'Gestão de reservas',
        personalized: 'Acompanhamento personalizado',
      },
      steps: {
        title: 'Como funciona',
        step1: {
          title: 'Avaliamos o seu imóvel',
          description: 'Analisamos o potencial do seu imóvel e apresentamos uma proposta personalizada.',
        },
        step2: {
          title: 'Preparamos a estratégia',
          description: 'Definimos a melhor estratégia de rentabilização para o seu alojamento.',
        },
        step3: {
          title: 'Gerimos tudo',
          description: 'Tratamos de reservas, hóspedes e todas as operações do dia-a-dia.',
        },
      },
      cta: 'Quero Rentabilizar o Meu Imóvel',
    },
    howItWorks: {
      title: 'Como funciona',
      subtitle: 'Um processo claro, transparente e pensado para resultados consistentes.',
      stepLabel: 'STEP',
      steps: {
        step1: {
          title: 'Contacto inicial',
          description: 'Percebemos o seu objetivo e validamos o perfil do imóvel.',
        },
        step2: {
          title: 'Avaliação da propriedade',
          description: 'Analisamos potencial, mercado e rentabilidade esperada.',
        },
        step3: {
          title: 'Preparação e otimização',
          description: 'Preparamos o imóvel e otimizamos anúncio, preço e posicionamento.',
        },
        step4: {
          title: 'Gestão contínua',
          description: 'Executamos operações, reservas, limpeza e comunicação com hóspedes.',
        },
        step5: {
          title: 'Relatórios e resultados',
          description: 'Partilhamos indicadores e ajustamos a estratégia para crescer.',
        },
      },
    },
    trustMetrics: {
      badge: 'CONFIANÇA DOLCESTAY',
      title: 'Uma marca premium construída em resultados consistentes.',
      subtitle:
        'Indicadores editáveis para apresentação comercial. Substitua estes valores pelos seus números reais sem alterar a estrutura.',
      metrics: {
        metric1: {
          value: '100%',
          label: 'Transparência operacional',
          counterType: 'percent',
          counterValue: 100,
        },
        metric2: {
          value: '4.9',
          label: 'Satisfação média dos hóspedes',
          counterType: 'decimal',
          counterValue: 4.9,
        },
        metric3: {
          value: '+32%',
          label: 'Potencial de otimização de receita',
          counterType: 'percentPlus',
          counterValue: 32,
        },
        metric4: {
          value: '24/7',
          label: 'Apoio contínuo para hóspedes e proprietários',
          counterType: 'static',
        },
      },
    },
    partnerships: {
      title: 'Parcerias',
      subtitle: 'Os melhores planos para as suas férias',
      description: 'Na DolceStay procuramos proporcionar aos nossos hóspedes umas férias de sonho, autênticas e personalizadas. Para este fim, apresentamos diversas parcerias com restaurantes, bares e empresas que exploram o turismo em Sesimbra.',
      exclusiveTitle: 'Experiências exclusivas para hóspedes DolceStay',
      exclusiveDescription: 'Ao reservar connosco, tem acesso a recomendações personalizadas e descontos especiais nos nossos parceiros locais.',
      partners: 'parceiros',
      zoomIn: 'Aumentar zoom',
      zoomOut: 'Diminuir zoom',
      mapComingSoon: 'Mapa interativo disponível em breve. Contacte-nos para recomendações personalizadas.',
      mapLocation: 'Sesimbra, Portugal',
      mapPartnersCount: '21 parceiros DolceStay',
      openInGoogleMaps: 'Abrir no Google Maps',
      mapUnavailableTitle: 'Mapa indisponível',
      mapUnavailableDescription:
        'Configure a chave da API Google Maps para ver o mapa interativo dos parceiros.',
      mapUnavailableRestart:
        'Adicione a chave em .env.local e reinicie o servidor de desenvolvimento (npm run dev).',
      mapUnavailableLoadError:
        'Não foi possível carregar o Google Maps. Verifique se a chave é válida e se a Maps JavaScript API está ativa.',
      categories: {
        experiences: 'Experiências Turísticas',
        restaurants: 'Restaurantes & Bares',
      },
      learnMore: 'Saiba Mais',
      mapTitle: 'Explore os nossos parceiros em Sesimbra',
      typeLabels: {
        restaurant: 'Restaurante',
        bar: 'Bar',
        gelataria: 'Gelataria',
      },
    },
    about: {
      hero: {
        badge: 'Gestão Local em Sesimbra',
        title: 'Somos locais. Gerimos como proprietários.',
        description:
          'Ajudamos proprietários a maximizar o rendimento dos seus imóveis enquanto criamos experiências memoráveis para quem visita Sesimbra.',
        ctaPrimary: 'Falar Connosco',
        ctaSecondary: 'Conhecer os Serviços',
        imageAlt: 'Vista de Sesimbra com praia e costa atlântica',
      },
      stats: {
        stat1: { value: '+15', label: 'Propriedades geridas', counterType: 'plus' as const, counterValue: 15 },
        stat2: { value: '+500', label: 'Hóspedes recebidos', counterType: 'plus' as const, counterValue: 500 },
        stat3: { value: '4.9★', label: 'Avaliação média', counterType: 'decimal' as const, counterValue: 4.9 },
        stat4: { value: '24/7', label: 'Apoio permanente', counterType: 'static' as const },
      },
      story: {
        title: 'Nascemos em Sesimbra',
        paragraphs: [
          'A DolceStay nasceu da vontade de elevar a gestão de alojamento local num destino que conhecemos como a palma da nossa mão.',
          'Vivemos e trabalhamos em Sesimbra. Conhecemos as praias, os proprietários, os ritmos da temporada e o que faz cada estadia ser inesquecível.',
          'Para nós, cada imóvel é um projecto: tratamos da operação diária para que proprietários ganhem tempo e hóspedes vivam Sesimbra com autenticidade.',
        ],
        imageAlt: 'Vista aérea de Sesimbra com o castelo, a vila e a baía',
      },
      whyUs: {
        title: 'Porquê escolher a DolceStay',
        subtitle:
          'Gestão premium com foco local, resultados mensuráveis e proximidade real com proprietários e hóspedes.',
        items: [
          {
            title: 'Conhecimento local',
            description:
              'Conhecemos Sesimbra, a sua oferta e o que os viajantes procuram em cada época do ano.',
          },
          {
            title: 'Comunicação rápida',
            description:
              'Respostas ágeis a proprietários e hóspedes, com acompanhamento próximo em cada fase da estadia.',
          },
          {
            title: 'Gestão completa',
            description:
              'Da reserva à limpeza, passando por manutenção e check-in — tudo centralizado numa só equipa.',
          },
          {
            title: 'Equipa dedicada',
            description:
              'Profissionais locais que tratam cada imóvel com o cuidado de quem conhece o território.',
          },
          {
            title: 'Estratégias de rentabilização',
            description:
              'Preços dinâmicos, posicionamento premium e optimização contínua da performance do imóvel.',
          },
          {
            title: 'Experiência do hóspede',
            description:
              'Detalhes que fazem a diferença: acolhimento, recomendações locais e estadias memoráveis.',
          },
        ],
      },
      mission: {
        missionTitle: 'Missão',
        missionText:
          'Maximizar o potencial dos imóveis e elevar a experiência turística em Sesimbra.',
        valuesTitle: 'Valores',
        values: ['Transparência', 'Proximidade', 'Excelência', 'Confiança'],
      },
      sesimbra: {
        title: 'Porque escolhemos Sesimbra',
        panoramicAlt: 'Panorâmica da costa e vila de Sesimbra',
        panoramicCaption: 'Um destino autêntico entre o mar, a serra e a aldeia.',
        cards: [
          {
            title: 'Praias únicas',
            description:
              'Da Praia da Califórnia ao Ribeiro do Cavalo — areias, falésias e águas cristalinas.',
            imageAlt: 'Praia em Sesimbra',
          },
          {
            title: 'Natureza protegida',
            description:
              'Parque Natural da Arrábida, trilhos e paisagens que convidam a explorar devagar.',
            imageAlt: 'Natureza na região de Sesimbra',
          },
          {
            title: 'Gastronomia e cultura',
            description:
              'Marisco fresco, vinhos locais e uma comunidade acolhedora com raízes fortes.',
            imageAlt: 'Gastronomia e cultura em Sesimbra',
          },
        ],
      },
      cta: {
        title: 'Pronto para rentabilizar o seu imóvel?',
        description: 'Descubra quanto pode faturar com uma gestão profissional.',
        button: 'Agendar Conversa',
        pills: ['Sem compromisso', 'Equipa local', 'Avaliação personalizada'],
        disclaimer: 'Resposta em menos de 24 horas.',
      },
    },
    contact: {
      title: 'Contactos',
      subtitle: 'Entre em contacto connosco',
      viewAccommodations: 'Ver Alojamentos Disponíveis',
      messageSent: 'Mensagem Enviada!',
      thankYou: 'Obrigado pelo seu contacto. Responderemos em breve.',
      sendAnother: 'Enviar outra mensagem',
      form: {
        firstName: 'Nome',
        lastName: 'Apelido',
        email: 'Email',
        phone: 'Telefone',
        type: 'Tipo de contacto',
        types: {
          reservation: 'Reserva',
          owner: 'Proprietário',
          partnership: 'Parceria',
          other: 'Outro',
        },
        message: 'Mensagem',
        submit: 'Enviar Mensagem',
      },
      whatsapp: 'Falar no WhatsApp',
      location: 'Sesimbra, Portugal',
    },
    footer: {
      description: 'Gestão de alojamento local em Sesimbra. Conforto para hóspedes, resultados para proprietários.',
      quickLinks: 'Links Rápidos',
      legal: 'Legal',
      addressTitle: 'DolceStay Accommodations',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      legalLinks: {
        complaints: 'Livro de Reclamações',
        terms: 'Termos e Condições',
        privacy: 'Política de Privacidade',
        disputes: 'Litígios de Consumo',
      },
      copyright: 'Todos os direitos reservados.',
      callCost: 'Custo de Chamada para a Rede Móvel Nacional',
    },
    testimonials: {
      title: 'O que dizem os nossos clientes',
      subtitle: 'Testemunhos de hóspedes e proprietários',
      prevLabel: 'Testemunho anterior',
      nextLabel: 'Próximo testemunho',
      indicatorsLabel: 'Indicadores de testemunhos',
      testimonialLabel: 'Testemunho',
      guest: 'Hóspede',
      owner: 'Proprietário',
      starsLabel: 'de 5 estrelas',
      items: [
        {
          text: 'O anfitrião responde muito rapidamente e é muito atencioso. O sítio é muito agradável, ideal para uns dias na praia. O apartamento não tem nada de desnecessário, apenas o básico, tudo o que é necessário para uns dias relaxantes.',
          author: 'João Pedro',
          location: 'Almada, Portugal',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Excelente experiência! A equipa da DolceStay tratou de tudo, desde a preparação do imóvel até à gestão das reservas. O rendimento do meu apartamento aumentou significativamente.',
          author: 'Maria Santos',
          location: 'Lisboa, Portugal',
          type: 'owner',
          rating: 5,
        },
        {
          text: 'Localização perfeita, a poucos minutos da praia. O apartamento estava impecável e a comunicação com a equipa foi excelente durante toda a estadia.',
          author: 'Pierre Dubois',
          location: 'Paris, França',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Finalmente posso rentabilizar o meu imóvel em Sesimbra sem preocupações. A DolceStay é muito profissional e os resultados são visíveis.',
          author: 'António Ferreira',
          location: 'Setúbal, Portugal',
          type: 'owner',
          rating: 5,
        },
      ],
    },
    header: {
      toggleMenu: 'Abrir menu',
      logoAlt: 'Logo DolceStay',
    },
    common: {
      loading: 'A carregar...',
      error: 'Ocorreu um erro',
      viewAll: 'Ver Todos',
      close: 'Fechar',
      whatsappChat: 'Conversar no WhatsApp',
    },
  },
  en: {
    nav: {
      home: 'Home',
      accommodations: 'Accommodations',
      services: 'Services',
      owners: 'Property Owners',
      partnerships: 'Partnerships',
      about: 'About Us',
      contact: 'Contact',
      book: 'Book Now',
      imOwner: 'I\'m an Owner',
    },
    hero: {
      headline: 'Local Accommodation in Sesimbra, with comfort and authenticity',
      subheadline: 'Discover unique stays by the sea or monetize your property with a trusted local team.',
      bookNow: 'Book Now',
      imOwner: 'I\'m an Owner',
      trustBadges: {
        local: 'Local Management',
        personalized: 'Personalized Experiences',
        personalizedShort: 'Experiences',
        support: 'Guest Support',
      },
    },
    dualJourney: {
      heading: 'How can we help?',
      description: 'Whether you are looking for the perfect accommodation or want to monetize your property in Sesimbra',
      guestBadge: 'Guests',
      ownerBadge: 'Owners',
      guestBenefits: {
        homes: 'Holiday homes in Sesimbra',
        booking: 'Safe and easy booking',
        support: 'Local support during your stay',
      },
      ownerBenefits: {
        management: 'Complete management of your rental',
        profitability: 'Maximize profitability',
        noWorries: 'No worries, no stress',
      },
      guest: {
        title: 'Looking for accommodation in Sesimbra?',
        description: 'Find houses, apartments and stays with sea views, pools or prime locations.',
        cta: 'View Accommodations',
      },
      owner: {
        title: 'Do you own a property in Sesimbra?',
        description: 'DolceStay handles management, bookings, guests, cleaning and monetization of your property.',
        cta: 'Request Proposal',
      },
    },
    accommodations: {
      title: 'Featured Accommodations',
      subtitle: 'Discover our selected properties',
      badge: 'Sesimbra Accommodation',
      featured: 'Featured',
      guests: 'guests',
      bedrooms: 'bedrooms',
      ctaTitle: 'Book with confidence',
      bookingNote:
        'Reservations are completed securely through our official platform.',
      ctaButton: 'View all accommodations',
      ctaHint: 'Availability updated',
      book: 'Book',
      features: {
        seaView: 'Sea View',
        pool: 'Pool',
        garden: 'Garden',
        center: 'City Center',
        terrace: 'Terrace',
        modern: 'Modern Apartment',
        beach: 'Beach',
        wifi: 'Wi-Fi',
        parking: 'Parking',
        aircon: 'Air Conditioning',
      },
      perNight: '/night',
      from: 'From',
      items: [
        { id: 1, subtitle: 'House 5 min from the beach with garden and BBQ' },
        { id: 2, subtitle: 'Studio 50m from Sesimbra beach' },
        { id: 3, subtitle: 'House with pool and sea view' },
        { id: 4, subtitle: 'Modern apartment in the center' },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete management of your local accommodation',
      badge: 'Local Accommodation Management',
      ctaDescription: 'Interested in learning more about how we can help monetize your property?',
      learnMore: 'Learn More',
      items: {
        bookingManagement: {
          title: 'Booking Management',
          description: 'We list and manage your bookings on platforms like Airbnb and Booking.com.',
        },
        checkInOut: {
          title: 'Check-in & Check-out',
          description: 'Our team welcomes guests and accompanies them, ensuring a personal experience.',
        },
        cleaning: {
          title: 'Cleaning & Laundry',
          description: 'We ensure your property is always impeccable for new guests.',
        },
        pricing: {
          title: 'Price Optimization',
          description: 'We dynamically adjust prices to maximize occupancy and profitability.',
        },
        guestSupport: {
          title: 'Guest Support',
          description: '24/7 guest support during their entire stay to ensure the best experience.',
        },
        marketing: {
          title: 'Marketing & Promotion',
          description: 'We promote your accommodation on our social media and website.',
        },
        maintenance: {
          title: 'Maintenance & Local Support',
          description: 'We handle small repairs and coordinate maintenance services.',
        },
        preparation: {
          title: 'Property Preparation',
          description: 'We prepare your property to receive guests with attention to every detail.',
        },
      },
    },
    owners: {
      title: 'Monetize your property worry-free',
      subtitle: 'We handle the complete management of your local accommodation so you can earn more with less effort.',
      badge: 'Monetize Property Sesimbra',
      whyTitle: 'Why work with us?',
      whyDescription: 'DolceStay handles listing local accommodations on various short, medium and long-term rental platforms, managing reservations and setting prices. Logistics such as check-ins, check-outs, guest support during stays, cleaning, laundry, etc., are also managed by us.',
      offersTitle: 'What we offer',
      ctaTitle: 'Ready to get started?',
      ctaDescription: 'Get in touch with us and discover how we can maximize your property income in Sesimbra.',
      ctaPills: {
        fastSetup: 'Fast setup',
        dedicatedTeam: 'Dedicated team',
        premiumManagement: 'Premium management',
      },
      ctaDisclaimer: 'No initial commitment. Response in less than 24h.',
      benefits: {
        fullManagement: 'Complete management',
        visibility: 'More visibility',
        localSupport: 'Local support in Sesimbra',
        guestComm: 'Guest communication',
        cleaningMaint: 'Cleaning and maintenance',
        pricingOpt: 'Price optimization',
        bookingMgmt: 'Booking management',
        personalized: 'Personalized follow-up',
      },
      steps: {
        title: 'How it works',
        step1: {
          title: 'We evaluate your property',
          description: 'We analyze your property\'s potential and present a personalized proposal.',
        },
        step2: {
          title: 'We prepare the strategy',
          description: 'We define the best monetization strategy for your accommodation.',
        },
        step3: {
          title: 'We manage everything',
          description: 'We handle bookings, guests and all day-to-day operations.',
        },
      },
      cta: 'I Want to Monetize My Property',
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'A clear, transparent process designed for consistent results.',
      stepLabel: 'STEP',
      steps: {
        step1: {
          title: 'Initial contact',
          description: 'We understand your goals and validate your property profile.',
        },
        step2: {
          title: 'Property assessment',
          description: 'We analyze potential, market conditions and expected profitability.',
        },
        step3: {
          title: 'Preparation & optimization',
          description: 'We prepare the property and optimize listing, pricing and positioning.',
        },
        step4: {
          title: 'Ongoing management',
          description: 'We handle operations, bookings, cleaning and guest communication.',
        },
        step5: {
          title: 'Reports & results',
          description: 'We share key metrics and adjust strategy to grow performance.',
        },
      },
    },
    trustMetrics: {
      badge: 'DOLCESTAY TRUST',
      title: 'A premium brand built on consistent results.',
      subtitle:
        'Editable indicators for commercial presentations. Replace these values with your real numbers without changing the structure.',
      metrics: {
        metric1: {
          value: '100%',
          label: 'Operational transparency',
          counterType: 'percent',
          counterValue: 100,
        },
        metric2: {
          value: '4.9',
          label: 'Average guest satisfaction',
          counterType: 'decimal',
          counterValue: 4.9,
        },
        metric3: {
          value: '+32%',
          label: 'Revenue optimization potential',
          counterType: 'percentPlus',
          counterValue: 32,
        },
        metric4: {
          value: '24/7',
          label: 'Continuous support for guests and owners',
          counterType: 'static',
        },
      },
    },
    partnerships: {
      title: 'Partnerships',
      subtitle: 'The best plans for your holidays',
      description: 'At DolceStay we seek to provide our guests with dream holidays, authentic and personalized. To this end, we present various partnerships with restaurants, bars and companies that explore tourism in Sesimbra.',
      exclusiveTitle: 'Exclusive experiences for DolceStay guests',
      exclusiveDescription: 'By booking with us, you get access to personalized recommendations and special discounts at our local partners.',
      partners: 'partners',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      mapComingSoon: 'Interactive map coming soon. Contact us for personalized recommendations.',
      mapLocation: 'Sesimbra, Portugal',
      mapPartnersCount: '21 DolceStay partners',
      openInGoogleMaps: 'Open in Google Maps',
      mapUnavailableTitle: 'Map unavailable',
      mapUnavailableDescription:
        'Set up your Google Maps API key to show the interactive partners map.',
      mapUnavailableRestart:
        'Add the key to .env.local and restart the dev server (npm run dev).',
      mapUnavailableLoadError:
        'Could not load Google Maps. Check that the key is valid and Maps JavaScript API is enabled.',
      categories: {
        experiences: 'Tourist Experiences',
        restaurants: 'Restaurants & Bars',
      },
      learnMore: 'Learn More',
      mapTitle: 'Explore our partners in Sesimbra',
      typeLabels: {
        restaurant: 'Restaurant',
        bar: 'Bar',
        gelataria: 'Ice Cream Shop',
      },
    },
    about: {
      hero: {
        badge: 'Local Management in Sesimbra',
        title: 'We are locals. We manage like owners.',
        description:
          'We help property owners maximize their rental income while creating memorable experiences for everyone who visits Sesimbra.',
        ctaPrimary: 'Talk to Us',
        ctaSecondary: 'Explore Our Services',
        imageAlt: 'Sesimbra coastline with beach and Atlantic views',
      },
      stats: {
        stat1: { value: '+15', label: 'Properties managed', counterType: 'plus' as const, counterValue: 15 },
        stat2: { value: '+500', label: 'Guests hosted', counterType: 'plus' as const, counterValue: 500 },
        stat3: { value: '4.9★', label: 'Average rating', counterType: 'decimal' as const, counterValue: 4.9 },
        stat4: { value: '24/7', label: 'Always-on support', counterType: 'static' as const },
      },
      story: {
        title: 'Born in Sesimbra',
        paragraphs: [
          'DolceStay was founded to raise the standard of local accommodation management in a destination we know inside out.',
          'We live and work in Sesimbra. We know the beaches, the owners, the seasonal rhythms and what makes every stay unforgettable.',
          'For us, every property is a project: we handle daily operations so owners gain time and guests experience Sesimbra authentically.',
        ],
        imageAlt: 'Aerial view of Sesimbra with the castle, town and bay',
      },
      whyUs: {
        title: 'Why choose DolceStay',
        subtitle:
          'Premium management with a local focus, measurable results and genuine closeness to owners and guests.',
        items: [
          {
            title: 'Local expertise',
            description:
              'We know Sesimbra, its offering and what travelers look for in every season.',
          },
          {
            title: 'Fast communication',
            description:
              'Quick responses to owners and guests, with close follow-up at every stage of the stay.',
          },
          {
            title: 'Full management',
            description:
              'From booking to cleaning, maintenance and check-in — everything handled by one team.',
          },
          {
            title: 'Dedicated team',
            description:
              'Local professionals who care for every property as people who know the area.',
          },
          {
            title: 'Revenue strategies',
            description:
              'Dynamic pricing, premium positioning and continuous performance optimization.',
          },
          {
            title: 'Guest experience',
            description:
              'Details that matter: warm welcome, local recommendations and memorable stays.',
          },
        ],
      },
      mission: {
        missionTitle: 'Mission',
        missionText:
          'To maximize property potential and elevate the tourist experience in Sesimbra.',
        valuesTitle: 'Values',
        values: ['Transparency', 'Closeness', 'Excellence', 'Trust'],
      },
      sesimbra: {
        title: 'Why we chose Sesimbra',
        panoramicAlt: 'Panoramic view of Sesimbra coast and village',
        panoramicCaption: 'An authentic destination between sea, hills and village life.',
        cards: [
          {
            title: 'Unique beaches',
            description:
              'From Praia da Califórnia to Ribeiro do Cavalo — sand, cliffs and crystal-clear waters.',
            imageAlt: 'Beach in Sesimbra',
          },
          {
            title: 'Protected nature',
            description:
              'Arrábida Natural Park, trails and landscapes that invite you to explore slowly.',
            imageAlt: 'Nature in the Sesimbra region',
          },
          {
            title: 'Food and culture',
            description:
              'Fresh seafood, local wines and a welcoming community with deep roots.',
            imageAlt: 'Food and culture in Sesimbra',
          },
        ],
      },
      cta: {
        title: 'Ready to monetize your property?',
        description: 'Find out how much you could earn with professional management.',
        button: 'Schedule a Call',
        pills: ['No commitment', 'Local team', 'Personalized assessment'],
        disclaimer: 'Response within 24 hours.',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      viewAccommodations: 'View Available Accommodations',
      messageSent: 'Message Sent!',
      thankYou: 'Thank you for your message. We will respond shortly.',
      sendAnother: 'Send another message',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        phone: 'Phone',
        type: 'Contact Type',
        types: {
          reservation: 'Reservation',
          owner: 'Property Owner',
          partnership: 'Partnership',
          other: 'Other',
        },
        message: 'Message',
        submit: 'Send Message',
      },
      whatsapp: 'Chat on WhatsApp',
      location: 'Sesimbra, Portugal',
    },
    footer: {
      description: 'Local accommodation management in Sesimbra. Comfort for guests, results for owners.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      addressTitle: 'DolceStay Accommodations',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      legalLinks: {
        complaints: 'Complaints Book',
        terms: 'Terms and Conditions',
        privacy: 'Privacy Policy',
        disputes: 'Consumer Disputes',
      },
      copyright: 'All rights reserved.',
      callCost: 'Call cost to National Mobile Network',
    },
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Testimonials from guests and owners',
      prevLabel: 'Previous testimonial',
      nextLabel: 'Next testimonial',
      indicatorsLabel: 'Testimonial indicators',
      testimonialLabel: 'Testimonial',
      guest: 'Guest',
      owner: 'Owner',
      starsLabel: 'out of 5 stars',
      items: [
        {
          text: 'The host responds very quickly and is very attentive. The place is very pleasant, ideal for a few days at the beach. The apartment has nothing unnecessary, just the basics, everything needed for a relaxing few days.',
          author: 'João Pedro',
          location: 'Almada, Portugal',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Excellent experience! The DolceStay team handled everything, from preparing the property to managing bookings. My apartment\'s income increased significantly.',
          author: 'Maria Santos',
          location: 'Lisbon, Portugal',
          type: 'owner',
          rating: 5,
        },
        {
          text: 'Perfect location, just minutes from the beach. The apartment was spotless and communication with the team was excellent throughout the stay.',
          author: 'Pierre Dubois',
          location: 'Paris, France',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'I can finally monetize my property in Sesimbra without worries. DolceStay is very professional and the results are visible.',
          author: 'António Ferreira',
          location: 'Setúbal, Portugal',
          type: 'owner',
          rating: 5,
        },
      ],
    },
    header: {
      toggleMenu: 'Toggle menu',
      logoAlt: 'DolceStay logo',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      viewAll: 'View All',
      close: 'Close',
      whatsappChat: 'Chat on WhatsApp',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      accommodations: 'Hébergements',
      services: 'Services',
      owners: 'Propriétaires',
      partnerships: 'Partenariats',
      about: 'À Propos',
      contact: 'Contact',
      book: 'Réserver',
      imOwner: 'Je suis Propriétaire',
    },
    hero: {
      headline: 'Hébergement local à Sesimbra, avec confort et authenticité',
      subheadline: 'Découvrez des séjours uniques au bord de la mer ou rentabilisez votre bien avec une équipe locale de confiance.',
      bookNow: 'Réserver Maintenant',
      imOwner: 'Je suis Propriétaire',
      trustBadges: {
        local: 'Gestion Locale',
        personalized: 'Expériences Personnalisées',
        personalizedShort: 'Expériences',
        support: 'Support Client',
      },
    },
    dualJourney: {
      heading: 'Comment pouvons-nous vous aider?',
      description: 'Que vous cherchiez l\'hébergement parfait ou souhaitiez rentabiliser votre bien à Sesimbra',
      guestBadge: 'Clients',
      ownerBadge: 'Propriétaires',
      guestBenefits: {
        homes: 'Maisons de vacances à Sesimbra',
        booking: 'Réservation sécurisée et facile',
        support: 'Support local pendant votre séjour',
      },
      ownerBenefits: {
        management: 'Gestion complète de votre location',
        profitability: 'Maximisation de la rentabilité',
        noWorries: 'Sans soucis, sans stress',
      },
      guest: {
        title: 'Vous cherchez un hébergement à Sesimbra?',
        description: 'Trouvez des maisons, appartements et séjours avec vue mer, piscine ou emplacement privilégié.',
        cta: 'Voir les Hébergements',
      },
      owner: {
        title: 'Vous avez un bien à Sesimbra?',
        description: 'DolceStay gère la gestion, les réservations, les clients, le ménage et la rentabilisation de votre bien.',
        cta: 'Demander une Proposition',
      },
    },
    accommodations: {
      title: 'Hébergements en Vedette',
      subtitle: 'Découvrez nos propriétés sélectionnées',
      badge: 'Hébergement Sesimbra',
      featured: 'En Vedette',
      guests: 'personnes',
      bedrooms: 'chambres',
      ctaTitle: 'Réservez en toute confiance',
      bookingNote:
        'Les réservations sont effectuées en toute sécurité via notre plateforme officielle.',
      ctaButton: 'Voir tous les hébergements',
      ctaHint: 'Disponibilité actualisée',
      book: 'Réserver',
      features: {
        seaView: 'Vue Mer',
        pool: 'Piscine',
        garden: 'Jardin',
        center: 'Centre-ville',
        terrace: 'Terrasse',
        modern: 'Appartement Moderne',
        beach: 'Plage',
        wifi: 'Wi-Fi',
        parking: 'Parking',
        aircon: 'Climatisation',
      },
      perNight: '/nuit',
      from: 'À partir de',
      items: [
        { id: 1, subtitle: 'Maison à 5 min de la plage avec jardin et barbecue' },
        { id: 2, subtitle: 'Studio à 50 m de la plage de Sesimbra' },
        { id: 3, subtitle: 'Maison avec piscine et vue mer' },
        { id: 4, subtitle: 'Appartement moderne au centre' },
      ],
    },
    services: {
      title: 'Nos Services',
      subtitle: 'Gestion complète de votre hébergement local',
      badge: 'Gestion d\'Hébergement Local',
      ctaDescription: 'Vous souhaitez en savoir plus sur la façon dont nous pouvons vous aider à rentabiliser votre bien?',
      learnMore: 'En Savoir Plus',
      items: {
        bookingManagement: {
          title: 'Gestion des Réservations',
          description: 'Nous gérons vos réservations sur des plateformes comme Airbnb et Booking.com.',
        },
        checkInOut: {
          title: 'Check-in & Check-out',
          description: 'Notre équipe accueille les clients et les accompagne pour une expérience personnelle.',
        },
        cleaning: {
          title: 'Ménage & Blanchisserie',
          description: 'Nous garantissons que votre bien est toujours impeccable pour les nouveaux clients.',
        },
        pricing: {
          title: 'Optimisation des Prix',
          description: 'Nous ajustons dynamiquement les prix pour maximiser occupation et rentabilité.',
        },
        guestSupport: {
          title: 'Support Client',
          description: 'Support 24/7 pendant tout le séjour pour garantir la meilleure expérience.',
        },
        marketing: {
          title: 'Marketing & Promotion',
          description: 'Nous promouvons votre hébergement sur nos réseaux sociaux et site web.',
        },
        maintenance: {
          title: 'Maintenance & Support Local',
          description: 'Nous gérons les petites réparations et coordonnons les services de maintenance.',
        },
        preparation: {
          title: 'Préparation du Bien',
          description: 'Nous préparons votre bien pour recevoir les clients avec attention aux détails.',
        },
      },
    },
    owners: {
      title: 'Rentabilisez votre bien sans soucis',
      subtitle: 'Nous gérons complètement votre hébergement local pour que vous puissiez gagner plus avec moins d\'effort.',
      badge: 'Rentabiliser Bien Sesimbra',
      whyTitle: 'Pourquoi travailler avec nous?',
      whyDescription: 'DolceStay s\'occupe de la mise en ligne des hébergements locaux sur diverses plateformes de location de courte, moyenne et longue durée, de la gestion des réservations et de la fixation des prix. Les aspects logistiques comme les check-ins, check-outs, l\'accompagnement des clients pendant leur séjour, le ménage, le linge, etc., sont également gérés par nous.',
      offersTitle: 'Ce que nous offrons',
      ctaTitle: 'Prêt à commencer?',
      ctaDescription: 'Contactez-nous et découvrez comment nous pouvons maximiser les revenus de votre bien à Sesimbra.',
      ctaPills: {
        fastSetup: 'Configuration rapide',
        dedicatedTeam: 'Équipe dédiée',
        premiumManagement: 'Gestion premium',
      },
      ctaDisclaimer: 'Sans engagement initial. Réponse en moins de 24h.',
      benefits: {
        fullManagement: 'Gestion complète',
        visibility: 'Plus de visibilité',
        localSupport: 'Support local à Sesimbra',
        guestComm: 'Communication avec les clients',
        cleaningMaint: 'Ménage et maintenance',
        pricingOpt: 'Optimisation des prix',
        bookingMgmt: 'Gestion des réservations',
        personalized: 'Suivi personnalisé',
      },
      steps: {
        title: 'Comment ça marche',
        step1: {
          title: 'Nous évaluons votre bien',
          description: 'Nous analysons le potentiel de votre bien et présentons une proposition personnalisée.',
        },
        step2: {
          title: 'Nous préparons la stratégie',
          description: 'Nous définissons la meilleure stratégie de rentabilisation pour votre hébergement.',
        },
        step3: {
          title: 'Nous gérons tout',
          description: 'Nous gérons les réservations, les clients et toutes les opérations quotidiennes.',
        },
      },
      cta: 'Je Veux Rentabiliser Mon Bien',
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Un processus clair, transparent et conçu pour des résultats constants.',
      stepLabel: 'ÉTAPE',
      steps: {
        step1: {
          title: 'Premier contact',
          description: 'Nous comprenons votre objectif et validons le profil du bien.',
        },
        step2: {
          title: 'Évaluation du bien',
          description: 'Nous analysons le potentiel, le marché et la rentabilité attendue.',
        },
        step3: {
          title: 'Préparation et optimisation',
          description: 'Nous préparons le bien et optimisons l\'annonce, le prix et le positionnement.',
        },
        step4: {
          title: 'Gestion continue',
          description: 'Nous gérons les opérations, réservations, ménage et communication avec les clients.',
        },
        step5: {
          title: 'Rapports et résultats',
          description: 'Nous partageons les indicateurs et ajustons la stratégie pour progresser.',
        },
      },
    },
    trustMetrics: {
      badge: 'CONFIANCE DOLCESTAY',
      title: 'Une marque premium construite sur des résultats constants.',
      subtitle:
        'Indicateurs modifiables pour présentation commerciale. Remplacez ces valeurs par vos chiffres réels sans modifier la structure.',
      metrics: {
        metric1: {
          value: '100%',
          label: 'Transparence opérationnelle',
          counterType: 'percent',
          counterValue: 100,
        },
        metric2: {
          value: '4.9',
          label: 'Satisfaction moyenne des clients',
          counterType: 'decimal',
          counterValue: 4.9,
        },
        metric3: {
          value: '+32%',
          label: 'Potentiel d\'optimisation des revenus',
          counterType: 'percentPlus',
          counterValue: 32,
        },
        metric4: {
          value: '24/7',
          label: 'Support continu pour clients et propriétaires',
          counterType: 'static',
        },
      },
    },
    partnerships: {
      title: 'Partenariats',
      subtitle: 'Les meilleurs plans pour vos vacances',
      description: 'Chez DolceStay, nous cherchons à offrir à nos clients des vacances de rêve, authentiques et personnalisées. À cette fin, nous présentons divers partenariats avec des restaurants, bars et entreprises qui explorent le tourisme à Sesimbra.',
      exclusiveTitle: 'Expériences exclusives pour les clients DolceStay',
      exclusiveDescription: 'En réservant chez nous, vous accédez à des recommandations personnalisées et des réductions spéciales chez nos partenaires locaux.',
      partners: 'partenaires',
      zoomIn: 'Agrandir',
      zoomOut: 'Réduire',
      mapComingSoon: 'Carte interactive bientôt disponible. Contactez-nous pour des recommandations personnalisées.',
      mapLocation: 'Sesimbra, Portugal',
      mapPartnersCount: '21 partenaires DolceStay',
      openInGoogleMaps: 'Ouvrir dans Google Maps',
      mapUnavailableTitle: 'Carte indisponible',
      mapUnavailableDescription:
        'Configurez votre clé API Google Maps pour afficher la carte interactive des partenaires.',
      mapUnavailableRestart:
        'Ajoutez la clé dans .env.local et redémarrez le serveur de développement (npm run dev).',
      mapUnavailableLoadError:
        'Impossible de charger Google Maps. Vérifiez que la clé est valide et que l’API Maps JavaScript est activée.',
      categories: {
        experiences: 'Expériences Touristiques',
        restaurants: 'Restaurants & Bars',
      },
      learnMore: 'En Savoir Plus',
      mapTitle: 'Explorez nos partenaires à Sesimbra',
      typeLabels: {
        restaurant: 'Restaurant',
        bar: 'Bar',
        gelataria: 'Glacier',
      },
    },
    about: {
      hero: {
        badge: 'Gestion locale à Sesimbra',
        title: 'Nous sommes locaux. Nous gérons comme des propriétaires.',
        description:
          'Nous aidons les propriétaires à maximiser leurs revenus tout en créant des expériences mémorables pour ceux qui visitent Sesimbra.',
        ctaPrimary: 'Nous contacter',
        ctaSecondary: 'Découvrir nos services',
        imageAlt: 'Vue de Sesimbra avec plage et côte atlantique',
      },
      stats: {
        stat1: { value: '+15', label: 'Propriétés gérées', counterType: 'plus' as const, counterValue: 15 },
        stat2: { value: '+500', label: 'Clients accueillis', counterType: 'plus' as const, counterValue: 500 },
        stat3: { value: '4.9★', label: 'Note moyenne', counterType: 'decimal' as const, counterValue: 4.9 },
        stat4: { value: '24/7', label: 'Support permanent', counterType: 'static' as const },
      },
      story: {
        title: 'Nés à Sesimbra',
        paragraphs: [
          'DolceStay est né de la volonté d\'élever la gestion d\'hébergement local dans une destination que nous connaissons par cœur.',
          'Nous vivons et travaillons à Sesimbra. Nous connaissons les plages, les propriétaires, les saisons et ce qui rend chaque séjour inoubliable.',
          'Pour nous, chaque bien est un projet : nous gérons l\'opération quotidienne pour que les propriétaires gagnent du temps et les clients vivent Sesimbra avec authenticité.',
        ],
        imageAlt: 'Vue aérienne de Sesimbra avec le château, le village et la baie',
      },
      whyUs: {
        title: 'Pourquoi choisir DolceStay',
        subtitle:
          'Gestion premium avec ancrage local, résultats mesurables et proximité réelle avec propriétaires et clients.',
        items: [
          {
            title: 'Connaissance locale',
            description:
              'Nous connaissons Sesimbra, son offre et ce que les voyageurs recherchent à chaque saison.',
          },
          {
            title: 'Communication rapide',
            description:
              'Réponses rapides aux propriétaires et clients, avec un suivi proche à chaque étape du séjour.',
          },
          {
            title: 'Gestion complète',
            description:
              'De la réservation au ménage, en passant par la maintenance et le check-in — une seule équipe.',
          },
          {
            title: 'Équipe dédiée',
            description:
              'Des professionnels locaux qui traitent chaque bien avec le soin de ceux qui connaissent le territoire.',
          },
          {
            title: 'Stratégies de rentabilité',
            description:
              'Tarification dynamique, positionnement premium et optimisation continue des performances.',
          },
          {
            title: 'Expérience client',
            description:
              'Des détails qui comptent : accueil chaleureux, recommandations locales et séjours mémorables.',
          },
        ],
      },
      mission: {
        missionTitle: 'Mission',
        missionText:
          'Maximiser le potentiel des biens et élever l\'expérience touristique à Sesimbra.',
        valuesTitle: 'Valeurs',
        values: ['Transparence', 'Proximité', 'Excellence', 'Confiance'],
      },
      sesimbra: {
        title: 'Pourquoi nous avons choisi Sesimbra',
        panoramicAlt: 'Panorama de la côte et du village de Sesimbra',
        panoramicCaption: 'Une destination authentique entre mer, collines et village.',
        cards: [
          {
            title: 'Plages uniques',
            description:
              'De la Praia da Califórnia au Ribeiro do Cavalo — sable, falaises et eaux cristallines.',
            imageAlt: 'Plage à Sesimbra',
          },
          {
            title: 'Nature protégée',
            description:
              'Parc naturel de l\'Arrábida, sentiers et paysages qui invitent à explorer lentement.',
            imageAlt: 'Nature dans la région de Sesimbra',
          },
          {
            title: 'Gastronomie et culture',
            description:
              'Fruits de mer frais, vins locaux et une communauté accueillante aux racines profondes.',
            imageAlt: 'Gastronomie et culture à Sesimbra',
          },
        ],
      },
      cta: {
        title: 'Prêt à rentabiliser votre bien?',
        description: 'Découvrez combien vous pourriez gagner avec une gestion professionnelle.',
        button: 'Planifier un appel',
        pills: ['Sans engagement', 'Équipe locale', 'Évaluation personnalisée'],
        disclaimer: 'Réponse sous 24 heures.',
      },
    },
    contact: {
      title: 'Contact',
      subtitle: 'Contactez-nous',
      viewAccommodations: 'Voir les Hébergements Disponibles',
      messageSent: 'Message Envoyé!',
      thankYou: 'Merci pour votre message. Nous vous répondrons sous peu.',
      sendAnother: 'Envoyer un autre message',
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        type: 'Type de contact',
        types: {
          reservation: 'Réservation',
          owner: 'Propriétaire',
          partnership: 'Partenariat',
          other: 'Autre',
        },
        message: 'Message',
        submit: 'Envoyer le Message',
      },
      whatsapp: 'Discuter sur WhatsApp',
      location: 'Sesimbra, Portugal',
    },
    footer: {
      description: 'Gestion d\'hébergement local à Sesimbra. Confort pour les clients, résultats pour les propriétaires.',
      quickLinks: 'Liens Rapides',
      legal: 'Légal',
      addressTitle: 'DolceStay Accommodations',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      legalLinks: {
        complaints: 'Livre de Réclamations',
        terms: 'Termes et Conditions',
        privacy: 'Politique de Confidentialité',
        disputes: 'Litiges de Consommation',
      },
      copyright: 'Tous droits réservés.',
      callCost: 'Coût d\'appel vers le réseau mobile national',
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Témoignages de clients et propriétaires',
      prevLabel: 'Témoignage précédent',
      nextLabel: 'Témoignage suivant',
      indicatorsLabel: 'Indicateurs de témoignages',
      testimonialLabel: 'Témoignage',
      guest: 'Client',
      owner: 'Propriétaire',
      starsLabel: 'sur 5 étoiles',
      items: [
        {
          text: 'L\'hôte répond très rapidement et est très attentionné. L\'endroit est très agréable, idéal pour quelques jours à la plage. L\'appartement n\'a rien de superflu, juste l\'essentiel, tout ce qu\'il faut pour quelques jours de détente.',
          author: 'João Pedro',
          location: 'Almada, Portugal',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Excellente expérience ! L\'équipe DolceStay s\'est occupée de tout, de la préparation du bien à la gestion des réservations. Le revenu de mon appartement a considérablement augmenté.',
          author: 'Maria Santos',
          location: 'Lisbonne, Portugal',
          type: 'owner',
          rating: 5,
        },
        {
          text: 'Emplacement parfait, à quelques minutes de la plage. L\'appartement était impeccable et la communication avec l\'équipe a été excellente tout au long du séjour.',
          author: 'Pierre Dubois',
          location: 'Paris, France',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Je peux enfin rentabiliser mon bien à Sesimbra sans souci. DolceStay est très professionnel et les résultats sont visibles.',
          author: 'António Ferreira',
          location: 'Setúbal, Portugal',
          type: 'owner',
          rating: 5,
        },
      ],
    },
    header: {
      toggleMenu: 'Basculer le menu',
      logoAlt: 'Logo DolceStay',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      viewAll: 'Voir Tout',
      close: 'Fermer',
      whatsappChat: 'Discuter sur WhatsApp',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      accommodations: 'Alojamientos',
      services: 'Servicios',
      owners: 'Propietarios',
      partnerships: 'Colaboraciones',
      about: 'Sobre Nosotros',
      contact: 'Contacto',
      book: 'Reservar',
      imOwner: 'Soy Propietario',
    },
    hero: {
      headline: 'Alojamiento local en Sesimbra, con confort y autenticidad',
      subheadline: 'Descubra estancias únicas junto al mar o rentabilice su inmueble con un equipo local de confianza.',
      bookNow: 'Reservar Ahora',
      imOwner: 'Soy Propietario',
      trustBadges: {
        local: 'Gestión Local',
        personalized: 'Experiencias Personalizadas',
        personalizedShort: 'Experiencias',
        support: 'Apoyo al Huésped',
      },
    },
    dualJourney: {
      heading: '¿Cómo podemos ayudar?',
      description: 'Ya sea para encontrar el alojamiento perfecto o para rentabilizar su inmueble en Sesimbra',
      guestBadge: 'Huéspedes',
      ownerBadge: 'Propietarios',
      guestBenefits: {
        homes: 'Casas de vacaciones en Sesimbra',
        booking: 'Reserva segura y fácil',
        support: 'Apoyo local durante la estancia',
      },
      ownerBenefits: {
        management: 'Gestión completa de su alquiler',
        profitability: 'Maximización de la rentabilidad',
        noWorries: 'Sin preocupaciones, sin estrés',
      },
      guest: {
        title: '¿Busca alojamiento en Sesimbra?',
        description: 'Encuentre casas, apartamentos y estancias con vistas al mar, piscina o ubicación privilegiada.',
        cta: 'Ver Alojamientos',
      },
      owner: {
        title: '¿Tiene un inmueble en Sesimbra?',
        description: 'DolceStay se encarga de la gestión, reservas, huéspedes, limpieza y rentabilización de su inmueble.',
        cta: 'Solicitar Propuesta',
      },
    },
    accommodations: {
      title: 'Alojamientos Destacados',
      subtitle: 'Descubra nuestras propiedades seleccionadas',
      badge: 'Alojamiento Sesimbra',
      featured: 'Destacado',
      guests: 'personas',
      bedrooms: 'habitaciones',
      ctaTitle: 'Reserve con confianza',
      bookingNote:
        'Las reservas se completan de forma segura a través de nuestra plataforma oficial.',
      ctaButton: 'Ver todos los alojamientos',
      ctaHint: 'Disponibilidad actualizada',
      book: 'Reservar',
      features: {
        seaView: 'Vistas al Mar',
        pool: 'Piscina',
        garden: 'Jardín',
        center: 'Centro',
        terrace: 'Terraza',
        modern: 'Apartamento Moderno',
        beach: 'Playa',
        wifi: 'Wi-Fi',
        parking: 'Aparcamiento',
        aircon: 'Aire Acondicionado',
      },
      perNight: '/noche',
      from: 'Desde',
      items: [
        { id: 1, subtitle: 'Casa a 5 min de la playa con jardín y barbacoa' },
        { id: 2, subtitle: 'Estudio a 50 m de la playa de Sesimbra' },
        { id: 3, subtitle: 'Casa con piscina y vistas al mar' },
        { id: 4, subtitle: 'Apartamento moderno en el centro' },
      ],
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Gestión completa de su alojamiento local',
      badge: 'Gestión de Alojamiento Local',
      ctaDescription: '¿Interesado en saber más sobre cómo podemos ayudar a rentabilizar su inmueble?',
      learnMore: 'Saber Más',
      items: {
        bookingManagement: {
          title: 'Gestión de Reservas',
          description: 'Gestionamos sus reservas en plataformas como Airbnb y Booking.com.',
        },
        checkInOut: {
          title: 'Check-in & Check-out',
          description: 'Nuestro equipo recibe a los huéspedes garantizando una experiencia personal.',
        },
        cleaning: {
          title: 'Limpieza & Lavandería',
          description: 'Garantizamos que su inmueble esté siempre impecable para nuevos huéspedes.',
        },
        pricing: {
          title: 'Optimización de Precios',
          description: 'Ajustamos los precios dinámicamente para maximizar ocupación y rentabilidad.',
        },
        guestSupport: {
          title: 'Atención al Huésped',
          description: 'Apoyo 24/7 a los huéspedes durante toda la estancia.',
        },
        marketing: {
          title: 'Marketing & Promoción',
          description: 'Promocionamos su alojamiento en nuestras redes sociales y sitio web.',
        },
        maintenance: {
          title: 'Mantenimiento y Apoyo Local',
          description: 'Nos encargamos de pequeñas reparaciones y coordinamos servicios de mantenimiento.',
        },
        preparation: {
          title: 'Preparación del Inmueble',
          description: 'Preparamos su inmueble para recibir huéspedes con todos los detalles.',
        },
      },
    },
    owners: {
      title: 'Rentabilice su inmueble sin preocupaciones',
      subtitle: 'Nos encargamos de la gestión completa de su alojamiento local para que pueda obtener más rendimiento con menos esfuerzo.',
      badge: 'Rentabilizar Inmueble Sesimbra',
      whyTitle: '¿Por qué trabajar con nosotros?',
      whyDescription: 'DolceStay se encarga de publicar los alojamientos locales en diversas plataformas de alquiler a corto, medio y largo plazo, de la gestión de reservas y la fijación de precios. Los aspectos logísticos como check-ins, check-outs, acompañamiento de huéspedes durante su estancia, limpieza, lavandería, etc., también son gestionados por nosotros.',
      offersTitle: 'Lo que ofrecemos',
      ctaTitle: '¿Listo para empezar?',
      ctaDescription: 'Contáctenos y descubra cómo podemos maximizar el rendimiento de su inmueble en Sesimbra.',
      ctaPills: {
        fastSetup: 'Configuración rápida',
        dedicatedTeam: 'Equipo dedicado',
        premiumManagement: 'Gestión premium',
      },
      ctaDisclaimer: 'Sin compromiso inicial. Respuesta en menos de 24h.',
      benefits: {
        fullManagement: 'Gestión completa',
        visibility: 'Mayor visibilidad',
        localSupport: 'Apoyo local en Sesimbra',
        guestComm: 'Comunicación con huéspedes',
        cleaningMaint: 'Limpieza y mantenimiento',
        pricingOpt: 'Optimización de precios',
        bookingMgmt: 'Gestión de reservas',
        personalized: 'Seguimiento personalizado',
      },
      steps: {
        title: 'Cómo funciona',
        step1: {
          title: 'Evaluamos su inmueble',
          description: 'Analizamos el potencial de su inmueble y presentamos una propuesta personalizada.',
        },
        step2: {
          title: 'Preparamos la estrategia',
          description: 'Definimos la mejor estrategia de rentabilización para su alojamiento.',
        },
        step3: {
          title: 'Gestionamos todo',
          description: 'Nos encargamos de reservas, huéspedes y todas las operaciones del día a día.',
        },
      },
      cta: 'Quiero Rentabilizar Mi Inmueble',
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'Un proceso claro, transparente y pensado para resultados consistentes.',
      stepLabel: 'PASO',
      steps: {
        step1: {
          title: 'Contacto inicial',
          description: 'Entendemos su objetivo y validamos el perfil del inmueble.',
        },
        step2: {
          title: 'Evaluación del inmueble',
          description: 'Analizamos potencial, mercado y rentabilidad esperada.',
        },
        step3: {
          title: 'Preparación y optimización',
          description: 'Preparamos el inmueble y optimizamos anuncio, precio y posicionamiento.',
        },
        step4: {
          title: 'Gestión continua',
          description: 'Ejecutamos operaciones, reservas, limpieza y comunicación con huéspedes.',
        },
        step5: {
          title: 'Informes y resultados',
          description: 'Compartimos indicadores y ajustamos la estrategia para crecer.',
        },
      },
    },
    trustMetrics: {
      badge: 'CONFIANZA DOLCESTAY',
      title: 'Una marca premium construida sobre resultados consistentes.',
      subtitle:
        'Indicadores editables para presentación comercial. Sustituya estos valores por sus cifras reales sin alterar la estructura.',
      metrics: {
        metric1: {
          value: '100%',
          label: 'Transparencia operativa',
          counterType: 'percent',
          counterValue: 100,
        },
        metric2: {
          value: '4.9',
          label: 'Satisfacción media de los huéspedes',
          counterType: 'decimal',
          counterValue: 4.9,
        },
        metric3: {
          value: '+32%',
          label: 'Potencial de optimización de ingresos',
          counterType: 'percentPlus',
          counterValue: 32,
        },
        metric4: {
          value: '24/7',
          label: 'Apoyo continuo para huéspedes y propietarios',
          counterType: 'static',
        },
      },
    },
    partnerships: {
      title: 'Colaboraciones',
      subtitle: 'Los mejores planes para sus vacaciones',
      description: 'En DolceStay buscamos proporcionar a nuestros huéspedes unas vacaciones de ensueño, auténticas y personalizadas. Con este fin, presentamos diversas colaboraciones con restaurantes, bares y empresas que exploran el turismo en Sesimbra.',
      exclusiveTitle: 'Experiencias exclusivas para huéspedes DolceStay',
      exclusiveDescription: 'Al reservar con nosotros, tiene acceso a recomendaciones personalizadas y descuentos especiales en nuestros colaboradores locales.',
      partners: 'colaboradores',
      zoomIn: 'Acercar',
      zoomOut: 'Alejar',
      mapComingSoon: 'Mapa interactivo próximamente. Contáctenos para recomendaciones personalizadas.',
      mapLocation: 'Sesimbra, Portugal',
      mapPartnersCount: '21 colaboradores DolceStay',
      openInGoogleMaps: 'Abrir en Google Maps',
      mapUnavailableTitle: 'Mapa no disponible',
      mapUnavailableDescription:
        'Configure su clave de API de Google Maps para ver el mapa interactivo de colaboradores.',
      mapUnavailableRestart:
        'Añada la clave en .env.local y reinicie el servidor de desarrollo (npm run dev).',
      mapUnavailableLoadError:
        'No se pudo cargar Google Maps. Compruebe que la clave es válida y que la API Maps JavaScript está activada.',
      categories: {
        experiences: 'Experiencias Turísticas',
        restaurants: 'Restaurantes & Bares',
      },
      learnMore: 'Saber Más',
      mapTitle: 'Explore nuestros colaboradores en Sesimbra',
      typeLabels: {
        restaurant: 'Restaurante',
        bar: 'Bar',
        gelataria: 'Heladería',
      },
    },
    about: {
      hero: {
        badge: 'Gestión local en Sesimbra',
        title: 'Somos locales. Gestionamos como propietarios.',
        description:
          'Ayudamos a propietarios a maximizar el rendimiento de sus inmuebles mientras creamos experiencias memorables para quienes visitan Sesimbra.',
        ctaPrimary: 'Hablar con nosotros',
        ctaSecondary: 'Conocer los servicios',
        imageAlt: 'Vista de Sesimbra con playa y costa atlántica',
      },
      stats: {
        stat1: { value: '+15', label: 'Propiedades gestionadas', counterType: 'plus' as const, counterValue: 15 },
        stat2: { value: '+500', label: 'Huéspedes recibidos', counterType: 'plus' as const, counterValue: 500 },
        stat3: { value: '4.9★', label: 'Valoración media', counterType: 'decimal' as const, counterValue: 4.9 },
        stat4: { value: '24/7', label: 'Apoyo permanente', counterType: 'static' as const },
      },
      story: {
        title: 'Nacimos en Sesimbra',
        paragraphs: [
          'DolceStay nació con la voluntad de elevar la gestión de alojamiento local en un destino que conocemos como la palma de la mano.',
          'Vivimos y trabajamos en Sesimbra. Conocemos las playas, los propietarios, los ritmos de temporada y lo que hace inolvidable cada estancia.',
          'Para nosotros, cada inmueble es un proyecto: gestionamos la operación diaria para que los propietarios ganen tiempo y los huéspedes vivan Sesimbra con autenticidad.',
        ],
        imageAlt: 'Vista aérea de Sesimbra con el castillo, el pueblo y la bahía',
      },
      whyUs: {
        title: 'Por qué elegir DolceStay',
        subtitle:
          'Gestión premium con enfoque local, resultados medibles y proximidad real con propietarios y huéspedes.',
        items: [
          {
            title: 'Conocimiento local',
            description:
              'Conocemos Sesimbra, su oferta y lo que buscan los viajeros en cada época del año.',
          },
          {
            title: 'Comunicación rápida',
            description:
              'Respuestas ágiles a propietarios y huéspedes, con seguimiento cercano en cada fase de la estancia.',
          },
          {
            title: 'Gestión completa',
            description:
              'Desde la reserva hasta la limpieza, mantenimiento y check-in — todo en un solo equipo.',
          },
          {
            title: 'Equipo dedicado',
            description:
              'Profesionales locales que cuidan cada inmueble con el detalle de quien conoce el territorio.',
          },
          {
            title: 'Estrategias de rentabilización',
            description:
              'Precios dinámicos, posicionamiento premium y optimización continua del rendimiento.',
          },
          {
            title: 'Experiencia del huésped',
            description:
              'Detalles que marcan la diferencia: acogida, recomendaciones locales y estancias memorables.',
          },
        ],
      },
      mission: {
        missionTitle: 'Misión',
        missionText:
          'Maximizar el potencial de los inmuebles y elevar la experiencia turística en Sesimbra.',
        valuesTitle: 'Valores',
        values: ['Transparencia', 'Proximidad', 'Excelencia', 'Confianza'],
      },
      sesimbra: {
        title: 'Por qué elegimos Sesimbra',
        panoramicAlt: 'Panorámica de la costa y el pueblo de Sesimbra',
        panoramicCaption: 'Un destino auténtico entre mar, sierra y pueblo.',
        cards: [
          {
            title: 'Playas únicas',
            description:
              'De la Praia da Califórnia al Ribeiro do Cavalo — arena, acantilados y aguas cristalinas.',
            imageAlt: 'Playa en Sesimbra',
          },
          {
            title: 'Naturaleza protegida',
            description:
              'Parque Natural de Arrábida, senderos y paisajes que invitan a explorar con calma.',
            imageAlt: 'Naturaleza en la región de Sesimbra',
          },
          {
            title: 'Gastronomía y cultura',
            description:
              'Marisco fresco, vinos locales y una comunidad acogedora con raíces profundas.',
            imageAlt: 'Gastronomía y cultura en Sesimbra',
          },
        ],
      },
      cta: {
        title: '¿Listo para rentabilizar su inmueble?',
        description: 'Descubra cuánto puede facturar con una gestión profesional.',
        button: 'Agendar conversación',
        pills: ['Sin compromiso', 'Equipo local', 'Evaluación personalizada'],
        disclaimer: 'Respuesta en menos de 24 horas.',
      },
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Póngase en contacto con nosotros',
      viewAccommodations: 'Ver Alojamientos Disponibles',
      messageSent: '¡Mensaje Enviado!',
      thankYou: 'Gracias por su mensaje. Le responderemos en breve.',
      sendAnother: 'Enviar otro mensaje',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Email',
        phone: 'Teléfono',
        type: 'Tipo de contacto',
        types: {
          reservation: 'Reserva',
          owner: 'Propietario',
          partnership: 'Colaboración',
          other: 'Otro',
        },
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
      },
      whatsapp: 'Hablar por WhatsApp',
      location: 'Sesimbra, Portugal',
    },
    footer: {
      description: 'Gestión de alojamiento local en Sesimbra. Confort para huéspedes, resultados para propietarios.',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      addressTitle: 'DolceStay Accommodations',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      legalLinks: {
        complaints: 'Libro de Reclamaciones',
        terms: 'Términos y Condiciones',
        privacy: 'Política de Privacidad',
        disputes: 'Litigios de Consumo',
      },
      copyright: 'Todos los derechos reservados.',
      callCost: 'Coste de llamada a la red móvil nacional',
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Testimonios de huéspedes y propietarios',
      prevLabel: 'Testimonio anterior',
      nextLabel: 'Siguiente testimonio',
      indicatorsLabel: 'Indicadores de testimonios',
      testimonialLabel: 'Testimonio',
      guest: 'Huésped',
      owner: 'Propietario',
      starsLabel: 'de 5 estrellas',
      items: [
        {
          text: 'El anfitrión responde muy rápidamente y es muy atento. El lugar es muy agradable, ideal para unos días en la playa. El apartamento no tiene nada innecesario, solo lo básico, todo lo necesario para unos días relajantes.',
          author: 'João Pedro',
          location: 'Almada, Portugal',
          type: 'guest',
          rating: 5,
        },
        {
          text: '¡Excelente experiencia! El equipo de DolceStay se encargó de todo, desde la preparación del inmueble hasta la gestión de reservas. Los ingresos de mi apartamento aumentaron significativamente.',
          author: 'Maria Santos',
          location: 'Lisboa, Portugal',
          type: 'owner',
          rating: 5,
        },
        {
          text: 'Ubicación perfecta, a pocos minutos de la playa. El apartamento estaba impecable y la comunicación con el equipo fue excelente durante toda la estancia.',
          author: 'Pierre Dubois',
          location: 'París, Francia',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Por fin puedo rentabilizar mi inmueble en Sesimbra sin preocupaciones. DolceStay es muy profesional y los resultados son visibles.',
          author: 'António Ferreira',
          location: 'Setúbal, Portugal',
          type: 'owner',
          rating: 5,
        },
      ],
    },
    header: {
      toggleMenu: 'Abrir menú',
      logoAlt: 'Logo DolceStay',
    },
    common: {
      loading: 'Cargando...',
      error: 'Se produjo un error',
      viewAll: 'Ver Todo',
      close: 'Cerrar',
      whatsappChat: 'Chatear en WhatsApp',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      accommodations: 'Unterkünfte',
      services: 'Dienstleistungen',
      owners: 'Eigentümer',
      partnerships: 'Partnerschaften',
      about: 'Über Uns',
      contact: 'Kontakt',
      book: 'Buchen',
      imOwner: 'Ich bin Eigentümer',
    },
    hero: {
      headline: 'Lokale Unterkunft in Sesimbra, mit Komfort und Authentizität',
      subheadline: 'Entdecken Sie einzigartige Aufenthalte am Meer oder monetarisieren Sie Ihre Immobilie mit einem vertrauenswürdigen lokalen Team.',
      bookNow: 'Jetzt Buchen',
      imOwner: 'Ich bin Eigentümer',
      trustBadges: {
        local: 'Lokale Verwaltung',
        personalized: 'Personalisierte Erlebnisse',
        personalizedShort: 'Erlebnisse',
        support: 'Gästebetreuung',
      },
    },
    dualJourney: {
      heading: 'Wie können wir helfen?',
      description: 'Ob Sie die perfekte Unterkunft suchen oder Ihre Immobilie in Sesimbra monetarisieren möchten',
      guestBadge: 'Gäste',
      ownerBadge: 'Eigentümer',
      guestBenefits: {
        homes: 'Ferienhäuser in Sesimbra',
        booking: 'Sichere und einfache Buchung',
        support: 'Lokaler Support während Ihres Aufenthalts',
      },
      ownerBenefits: {
        management: 'Komplette Verwaltung Ihrer Vermietung',
        profitability: 'Rentabilität maximieren',
        noWorries: 'Keine Sorgen, kein Stress',
      },
      guest: {
        title: 'Suchen Sie eine Unterkunft in Sesimbra?',
        description: 'Finden Sie Häuser, Apartments und Aufenthalte mit Meerblick, Pool oder erstklassiger Lage.',
        cta: 'Unterkünfte Ansehen',
      },
      owner: {
        title: 'Besitzen Sie eine Immobilie in Sesimbra?',
        description: 'DolceStay übernimmt Verwaltung, Buchungen, Gäste, Reinigung und Monetarisierung Ihrer Immobilie.',
        cta: 'Angebot Anfordern',
      },
    },
    accommodations: {
      title: 'Ausgewählte Unterkünfte',
      subtitle: 'Entdecken Sie unsere ausgewählten Immobilien',
      badge: 'Unterkunft Sesimbra',
      featured: 'Empfohlen',
      guests: 'Personen',
      bedrooms: 'Zimmer',
      ctaTitle: 'Mit Vertrauen buchen',
      bookingNote:
        'Reservierungen werden sicher über unsere offizielle Plattform abgeschlossen.',
      ctaButton: 'Alle Unterkünfte anzeigen',
      ctaHint: 'Aktualisierte Verfügbarkeit',
      book: 'Buchen',
      features: {
        seaView: 'Meerblick',
        pool: 'Pool',
        garden: 'Garten',
        center: 'Zentrum',
        terrace: 'Terrasse',
        modern: 'Moderne Wohnung',
        beach: 'Strand',
        wifi: 'WLAN',
        parking: 'Parkplatz',
        aircon: 'Klimaanlage',
      },
      perNight: '/Nacht',
      from: 'Ab',
      items: [
        { id: 1, subtitle: 'Haus 5 Min. vom Strand mit Garten und Grill' },
        { id: 2, subtitle: 'Studio 50 m vom Strand von Sesimbra' },
        { id: 3, subtitle: 'Haus mit Pool und Meerblick' },
        { id: 4, subtitle: 'Modernes Apartment im Zentrum' },
      ],
    },
    services: {
      title: 'Unsere Dienstleistungen',
      subtitle: 'Komplette Verwaltung Ihrer lokalen Unterkunft',
      badge: 'Lokale Unterkunftsverwaltung',
      ctaDescription: 'Möchten Sie mehr darüber erfahren, wie wir Ihnen helfen können, Ihre Immobilie zu monetarisieren?',
      learnMore: 'Mehr Erfahren',
      items: {
        bookingManagement: {
          title: 'Buchungsverwaltung',
          description: 'Wir verwalten Ihre Buchungen auf Plattformen wie Airbnb und Booking.com.',
        },
        checkInOut: {
          title: 'Check-in & Check-out',
          description: 'Unser Team begrüßt die Gäste und begleitet sie für ein persönliches Erlebnis.',
        },
        cleaning: {
          title: 'Reinigung & Wäscherei',
          description: 'Wir sorgen dafür, dass Ihre Immobilie immer makellos für neue Gäste ist.',
        },
        pricing: {
          title: 'Preisoptimierung',
          description: 'Wir passen die Preise dynamisch an, um Auslastung und Rentabilität zu maximieren.',
        },
        guestSupport: {
          title: 'Gästebetreuung',
          description: '24/7 Gästeunterstützung während des gesamten Aufenthalts.',
        },
        marketing: {
          title: 'Marketing & Werbung',
          description: 'Wir bewerben Ihre Unterkunft in unseren sozialen Medien und auf unserer Website.',
        },
        maintenance: {
          title: 'Wartung & Lokaler Support',
          description: 'Wir kümmern uns um kleine Reparaturen und koordinieren Wartungsdienste.',
        },
        preparation: {
          title: 'Immobilienvorbereitung',
          description: 'Wir bereiten Ihre Immobilie vor, um Gäste mit Liebe zum Detail zu empfangen.',
        },
      },
    },
    owners: {
      title: 'Monetarisieren Sie Ihre Immobilie sorgenfrei',
      subtitle: 'Wir übernehmen die komplette Verwaltung Ihrer lokalen Unterkunft, damit Sie mit weniger Aufwand mehr verdienen können.',
      badge: 'Immobilie Sesimbra Monetarisieren',
      whyTitle: 'Warum mit uns arbeiten?',
      whyDescription: 'DolceStay übernimmt die Listung lokaler Unterkünfte auf verschiedenen Kurz-, Mittel- und Langzeitvermietungsplattformen, die Buchungsverwaltung und die Preisgestaltung. Logistische Aspekte wie Check-ins, Check-outs, Gästebetreuung während des Aufenthalts, Reinigung, Wäsche usw. werden ebenfalls von uns übernommen.',
      offersTitle: 'Was wir anbieten',
      ctaTitle: 'Bereit anzufangen?',
      ctaDescription: 'Kontaktieren Sie uns und entdecken Sie, wie wir Ihre Immobilieneinnahmen in Sesimbra maximieren können.',
      ctaPills: {
        fastSetup: 'Schnelles Setup',
        dedicatedTeam: 'Dediziertes Team',
        premiumManagement: 'Premium-Verwaltung',
      },
      ctaDisclaimer: 'Keine anfängliche Verpflichtung. Antwort in weniger als 24 Stunden.',
      benefits: {
        fullManagement: 'Komplette Verwaltung',
        visibility: 'Mehr Sichtbarkeit',
        localSupport: 'Lokaler Support in Sesimbra',
        guestComm: 'Gästekommunikation',
        cleaningMaint: 'Reinigung und Wartung',
        pricingOpt: 'Preisoptimierung',
        bookingMgmt: 'Buchungsverwaltung',
        personalized: 'Persönliche Betreuung',
      },
      steps: {
        title: 'So funktioniert es',
        step1: {
          title: 'Wir bewerten Ihre Immobilie',
          description: 'Wir analysieren das Potenzial Ihrer Immobilie und präsentieren einen personalisierten Vorschlag.',
        },
        step2: {
          title: 'Wir bereiten die Strategie vor',
          description: 'Wir definieren die beste Monetarisierungsstrategie für Ihre Unterkunft.',
        },
        step3: {
          title: 'Wir verwalten alles',
          description: 'Wir kümmern uns um Buchungen, Gäste und alle täglichen Operationen.',
        },
      },
      cta: 'Ich möchte meine Immobilie monetarisieren',
    },
    howItWorks: {
      title: 'So funktioniert es',
      subtitle: 'Ein klarer, transparenter Prozess für konstante Ergebnisse.',
      stepLabel: 'SCHRITT',
      steps: {
        step1: {
          title: 'Erstkontakt',
          description: 'Wir verstehen Ihr Ziel und prüfen das Profil Ihrer Immobilie.',
        },
        step2: {
          title: 'Immobilienbewertung',
          description: 'Wir analysieren Potenzial, Markt und erwartete Rentabilität.',
        },
        step3: {
          title: 'Vorbereitung & Optimierung',
          description: 'Wir bereiten die Immobilie vor und optimieren Inserat, Preis und Positionierung.',
        },
        step4: {
          title: 'Laufende Verwaltung',
          description: 'Wir übernehmen Betrieb, Buchungen, Reinigung und Gästekommunikation.',
        },
        step5: {
          title: 'Berichte & Ergebnisse',
          description: 'Wir teilen Kennzahlen und passen die Strategie zum Wachstum an.',
        },
      },
    },
    trustMetrics: {
      badge: 'DOLCESTAY VERTRAUEN',
      title: 'Eine Premium-Marke, gebaut auf konstanten Ergebnissen.',
      subtitle:
        'Bearbeitbare Kennzahlen für kommerzielle Präsentationen. Ersetzen Sie diese Werte durch Ihre echten Zahlen, ohne die Struktur zu ändern.',
      metrics: {
        metric1: {
          value: '100%',
          label: 'Operative Transparenz',
          counterType: 'percent',
          counterValue: 100,
        },
        metric2: {
          value: '4.9',
          label: 'Durchschnittliche Gästezufriedenheit',
          counterType: 'decimal',
          counterValue: 4.9,
        },
        metric3: {
          value: '+32%',
          label: 'Potenzial zur Umsatzoptimierung',
          counterType: 'percentPlus',
          counterValue: 32,
        },
        metric4: {
          value: '24/7',
          label: 'Kontinuierlicher Support für Gäste und Eigentümer',
          counterType: 'static',
        },
      },
    },
    partnerships: {
      title: 'Partnerschaften',
      subtitle: 'Die besten Pläne für Ihren Urlaub',
      description: 'Bei DolceStay möchten wir unseren Gästen Traumurlaube bieten, authentisch und personalisiert. Dazu präsentieren wir verschiedene Partnerschaften mit Restaurants, Bars und Unternehmen, die den Tourismus in Sesimbra erkunden.',
      exclusiveTitle: 'Exklusive Erlebnisse für DolceStay-Gäste',
      exclusiveDescription: 'Durch eine Buchung bei uns erhalten Sie Zugang zu personalisierten Empfehlungen und Sonderrabatten bei unseren lokalen Partnern.',
      partners: 'Partner',
      zoomIn: 'Vergrößern',
      zoomOut: 'Verkleinern',
      mapComingSoon: 'Interaktive Karte demnächst verfügbar. Kontaktieren Sie uns für personalisierte Empfehlungen.',
      mapLocation: 'Sesimbra, Portugal',
      mapPartnersCount: '21 DolceStay-Partner',
      openInGoogleMaps: 'In Google Maps öffnen',
      mapUnavailableTitle: 'Karte nicht verfügbar',
      mapUnavailableDescription:
        'Richten Sie Ihren Google Maps API-Schlüssel ein, um die interaktive Partnerkarte anzuzeigen.',
      mapUnavailableRestart:
        'Schlüssel in .env.local eintragen und den Entwicklungsserver neu starten (npm run dev).',
      mapUnavailableLoadError:
        'Google Maps konnte nicht geladen werden. Prüfen Sie den Schlüssel und ob die Maps JavaScript API aktiviert ist.',
      categories: {
        experiences: 'Touristische Erlebnisse',
        restaurants: 'Restaurants & Bars',
      },
      learnMore: 'Mehr Erfahren',
      mapTitle: 'Entdecken Sie unsere Partner in Sesimbra',
      typeLabels: {
        restaurant: 'Restaurant',
        bar: 'Bar',
        gelataria: 'Eisdiele',
      },
    },
    about: {
      hero: {
        badge: 'Lokale Verwaltung in Sesimbra',
        title: 'Wir sind Einheimische. Wir verwalten wie Eigentümer.',
        description:
          'Wir helfen Eigentümern, ihre Mieteinnahmen zu maximieren und gleichzeitig unvergessliche Erlebnisse für alle zu schaffen, die Sesimbra besuchen.',
        ctaPrimary: 'Kontakt aufnehmen',
        ctaSecondary: 'Unsere Leistungen entdecken',
        imageAlt: 'Sesimbra-Küste mit Strand und Atlantikblick',
      },
      stats: {
        stat1: { value: '+15', label: 'Verwaltete Objekte', counterType: 'plus' as const, counterValue: 15 },
        stat2: { value: '+500', label: 'Gäste beherbergt', counterType: 'plus' as const, counterValue: 500 },
        stat3: { value: '4.9★', label: 'Durchschnittsbewertung', counterType: 'decimal' as const, counterValue: 4.9 },
        stat4: { value: '24/7', label: 'Dauerhafter Support', counterType: 'static' as const },
      },
      story: {
        title: 'Geboren in Sesimbra',
        paragraphs: [
          'DolceStay entstand aus dem Wunsch, die Verwaltung lokaler Unterkünfte in einem Reiseziel zu heben, das wir in- und auswendig kennen.',
          'Wir leben und arbeiten in Sesimbra. Wir kennen die Strände, die Eigentümer, die Saisons und was jeden Aufenthalt unvergesslich macht.',
          'Für uns ist jede Immobilie ein Projekt: Wir übernehmen den Tagesbetrieb, damit Eigentümer Zeit gewinnen und Gäste Sesimbra authentisch erleben.',
        ],
        imageAlt: 'Luftaufnahme von Sesimbra mit Burg, Ort und Bucht',
      },
      whyUs: {
        title: 'Warum DolceStay wählen',
        subtitle:
          'Premium-Verwaltung mit lokalem Fokus, messbaren Ergebnissen und echter Nähe zu Eigentümern und Gästen.',
        items: [
          {
            title: 'Lokales Know-how',
            description:
              'Wir kennen Sesimbra, das Angebot und was Reisende in jeder Jahreszeit suchen.',
          },
          {
            title: 'Schnelle Kommunikation',
            description:
              'Schnelle Antworten an Eigentümer und Gäste, mit enger Begleitung in jeder Phase des Aufenthalts.',
          },
          {
            title: 'Vollständige Verwaltung',
            description:
              'Von der Buchung bis zur Reinigung, Wartung und dem Check-in — alles aus einer Hand.',
          },
          {
            title: 'Engagiertes Team',
            description:
              'Lokale Profis, die jede Immobilie mit der Sorgfalt betreuen, die das Gebiet verdient.',
          },
          {
            title: 'Ertragsstrategien',
            description:
              'Dynamische Preise, Premium-Positionierung und kontinuierliche Leistungsoptimierung.',
          },
          {
            title: 'Gästeerlebnis',
            description:
              'Details, die zählen: herzlicher Empfang, lokale Empfehlungen und unvergessliche Aufenthalte.',
          },
        ],
      },
      mission: {
        missionTitle: 'Mission',
        missionText:
          'Das Potenzial von Immobilien maximieren und das touristische Erlebnis in Sesimbra heben.',
        valuesTitle: 'Werte',
        values: ['Transparenz', 'Nähe', 'Exzellenz', 'Vertrauen'],
      },
      sesimbra: {
        title: 'Warum wir Sesimbra gewählt haben',
        panoramicAlt: 'Panorama der Küste und des Dorfes Sesimbra',
        panoramicCaption: 'Ein authentisches Reiseziel zwischen Meer, Hügeln und Dorfleben.',
        cards: [
          {
            title: 'Einzigartige Strände',
            description:
              'Von der Praia da Califórnia bis zum Ribeiro do Cavalo — Sand, Klippen und kristallklares Wasser.',
            imageAlt: 'Strand in Sesimbra',
          },
          {
            title: 'Geschützte Natur',
            description:
              'Naturpark Arrábida, Wege und Landschaften, die zum langsamen Entdecken einladen.',
            imageAlt: 'Natur in der Region Sesimbra',
          },
          {
            title: 'Kulinarik und Kultur',
            description:
              'Frische Meeresfrüchte, lokale Weine und eine gastfreundliche Gemeinschaft mit tiefen Wurzeln.',
            imageAlt: 'Kulinarik und Kultur in Sesimbra',
          },
        ],
      },
      cta: {
        title: 'Bereit, Ihre Immobilie zu vermieten?',
        description: 'Erfahren Sie, wie viel Sie mit professioneller Verwaltung verdienen können.',
        button: 'Gespräch vereinbaren',
        pills: ['Unverbindlich', 'Lokales Team', 'Persönliche Bewertung'],
        disclaimer: 'Antwort innerhalb von 24 Stunden.',
      },
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Kontaktieren Sie uns',
      viewAccommodations: 'Verfügbare Unterkünfte Ansehen',
      messageSent: 'Nachricht Gesendet!',
      thankYou: 'Danke für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.',
      sendAnother: 'Eine weitere Nachricht senden',
      form: {
        firstName: 'Vorname',
        lastName: 'Nachname',
        email: 'E-Mail',
        phone: 'Telefon',
        type: 'Kontaktart',
        types: {
          reservation: 'Reservierung',
          owner: 'Eigentümer',
          partnership: 'Partnerschaft',
          other: 'Andere',
        },
        message: 'Nachricht',
        submit: 'Nachricht Senden',
      },
      whatsapp: 'WhatsApp Chat',
      location: 'Sesimbra, Portugal',
    },
    footer: {
      description: 'Lokale Unterkunftsverwaltung in Sesimbra. Komfort für Gäste, Ergebnisse für Eigentümer.',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      addressTitle: 'DolceStay Accommodations',
      instagramLabel: 'Instagram',
      facebookLabel: 'Facebook',
      legalLinks: {
        complaints: 'Beschwerdebuch',
        terms: 'Allgemeine Geschäftsbedingungen',
        privacy: 'Datenschutzrichtlinie',
        disputes: 'Verbraucherstreitigkeiten',
      },
      copyright: 'Alle Rechte vorbehalten.',
      callCost: 'Anrufkosten zum nationalen Mobilfunknetz',
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Bewertungen von Gästen und Eigentümern',
      prevLabel: 'Vorherige Bewertung',
      nextLabel: 'Nächste Bewertung',
      indicatorsLabel: 'Bewertungsindikatoren',
      testimonialLabel: 'Bewertung',
      guest: 'Gast',
      owner: 'Eigentümer',
      starsLabel: 'von 5 Sternen',
      items: [
        {
          text: 'Der Gastgeber antwortet sehr schnell und ist sehr aufmerksam. Der Ort ist sehr angenehm, ideal für ein paar Tage am Strand. Die Wohnung hat nichts Überflüssiges, nur das Nötigste, alles was man für ein paar entspannte Tage braucht.',
          author: 'João Pedro',
          location: 'Almada, Portugal',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Ausgezeichnete Erfahrung! Das DolceStay-Team kümmerte sich um alles, von der Vorbereitung der Immobilie bis zur Verwaltung der Buchungen. Das Einkommen meiner Wohnung ist deutlich gestiegen.',
          author: 'Maria Santos',
          location: 'Lissabon, Portugal',
          type: 'owner',
          rating: 5,
        },
        {
          text: 'Perfekte Lage, nur wenige Minuten vom Strand entfernt. Die Wohnung war makellos und die Kommunikation mit dem Team war während des gesamten Aufenthalts ausgezeichnet.',
          author: 'Pierre Dubois',
          location: 'Paris, Frankreich',
          type: 'guest',
          rating: 5,
        },
        {
          text: 'Endlich kann ich meine Immobilie in Sesimbra sorgenfrei monetarisieren. DolceStay ist sehr professionell und die Ergebnisse sind sichtbar.',
          author: 'António Ferreira',
          location: 'Setúbal, Portugal',
          type: 'owner',
          rating: 5,
        },
      ],
    },
    header: {
      toggleMenu: 'Menü umschalten',
      logoAlt: 'DolceStay Logo',
    },
    common: {
      loading: 'Wird geladen...',
      error: 'Ein Fehler ist aufgetreten',
      viewAll: 'Alle Anzeigen',
      close: 'Schließen',
      whatsappChat: 'WhatsApp Chat',
    },
  },
};

export type TranslationKey = keyof typeof translations.pt;
export type Translations = typeof translations.pt;
