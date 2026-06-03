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
    ownersPage: {
      hero: {
        badge: 'Gestão de Alojamento Local',
        title: 'Rentabilize o seu imóvel em Sesimbra sem preocupações',
        subtitle:
          'Tratamos da gestão completa do seu alojamento local — reservas, hóspedes, limpeza, manutenção, preços e acompanhamento — para que obtenha mais rendimento com menos esforço.',
        ctaPrimary: 'Quero Rentabilizar o Meu Imóvel',
        ctaSecondary: 'Falar com a Equipa',
        imageAlt: 'Alojamento premium em Sesimbra com vista para a costa',
        floatingCard: {
          title: 'DolceStay',
          items: ['Gestão completa', 'Apoio local', 'Resposta em menos de 24h'],
        },
      },
      trustMetrics: {
        badge: 'CONFIANÇA DOLCESTAY',
        title: 'Resultados que falam por si',
        subtitle: 'Indicadores que refletem o nosso compromisso com proprietários em Sesimbra.',
        labels: {
          metric1: 'Transparência operacional',
          metric2: 'Satisfação média dos hóspedes',
          metric3: 'Apoio contínuo',
          metric4: 'Potencial de otimização de receita',
        },
      },
      whyUs: {
        title: 'Porquê trabalhar connosco?',
        description:
          'Gerimos o seu alojamento local como se fosse nosso. Combinamos tecnologia, experiência e conhecimento local para maximizar o rendimento e garantir uma experiência excelente aos hóspedes.',
        points: [
          'Conhecimento local de Sesimbra',
          'Gestão profissional',
          'Comunicação rápida',
          'Estratégia de preço',
          'Experiência do hóspede',
          'Relatórios claros',
        ],
      },
      services: {
        badge: 'Serviços incluídos',
        title: 'O que tratamos por si',
        subtitle: 'Uma gestão completa para que o seu imóvel funcione como um negócio premium.',
        items: {
          listing: {
            title: 'Criação e otimização de anúncios',
            description: 'Anúncios profissionais, fotos e posicionamento em múltiplas plataformas.',
          },
          booking: {
            title: 'Gestão de reservas',
            description: 'Calendário, confirmações e coordenação de todas as reservas.',
          },
          communication: {
            title: 'Comunicação com hóspedes',
            description: 'Respostas rápidas antes, durante e após cada estadia.',
          },
          checkIn: {
            title: 'Check-in e check-out',
            description: 'Receção personalizada e processos fluidos para cada hóspede.',
          },
          cleaning: {
            title: 'Limpeza e lavandaria',
            description: 'Preparação impecável do imóvel entre cada estadia.',
          },
          maintenance: {
            title: 'Manutenção e apoio operacional',
            description: 'Pequenas reparações e coordenação de serviços locais.',
          },
          pricing: {
            title: 'Otimização de preços',
            description: 'Preços dinâmicos ajustados à procura e à época.',
          },
          reports: {
            title: 'Relatórios e acompanhamento',
            description: 'Indicadores claros sobre desempenho e rendimento.',
          },
        },
      },
      benefits: {
        title: 'Mais rendimento, menos preocupações',
        subtitle: 'Benefícios concretos para proprietários que querem resultados sem o stress do dia-a-dia.',
        items: [
          'Poupa tempo',
          'Reduz preocupações operacionais',
          'Melhora a experiência dos hóspedes',
          'Aumenta a visibilidade do imóvel',
          'Otimiza preços conforme procura e época',
          'Acompanha resultados com transparência',
        ],
      },
      faq: {
        title: 'Perguntas frequentes',
        subtitle: 'Respostas claras às dúvidas mais comuns de proprietários.',
        items: [
          {
            question: 'Tenho de ter licença de Alojamento Local?',
            answer:
              'Sim, o imóvel deve cumprir os requisitos legais para alojamento local. Ajudamos a perceber o que é necessário e orientamos no processo, em colaboração com os serviços competentes.',
          },
          {
            question: 'A DolceStay trata da limpeza?',
            answer:
              'Sim. Coordenamos limpeza e lavandaria profissional entre cada estadia, garantindo que o imóvel está sempre pronto para receber hóspedes.',
          },
          {
            question: 'Quem comunica com os hóspedes?',
            answer:
              'A nossa equipa trata de toda a comunicação — desde a reserva até ao check-out — mantendo-o informado quando necessário.',
          },
          {
            question: 'Como são definidos os preços?',
            answer:
              'Utilizamos estratégias de preço dinâmico baseadas na procura, época, concorrência e perfil do imóvel, com ajustes regulares para maximizar o rendimento.',
          },
          {
            question: 'Recebo relatórios?',
            answer:
              'Sim. Partilhamos relatórios periódicos com indicadores de ocupação, receita e desempenho, com total transparência.',
          },
          {
            question: 'Posso usar o imóvel quando quiser?',
            answer:
              'Sim. Pode bloquear datas no calendário para uso pessoal. Coordenamos connosco com antecedência para não afetar reservas existentes.',
          },
          {
            question: 'Como começo?',
            answer:
              'Preencha o formulário abaixo ou contacte-nos. Avaliamos o imóvel, apresentamos uma proposta personalizada e, se fizer sentido para ambos, avançamos com a preparação.',
          },
        ],
      },
      form: {
        title: 'Quer saber quanto pode render o seu imóvel?',
        subtitle: 'Preencha o formulário e receba uma avaliação gratuita da nossa equipa.',
        fields: {
          name: 'Nome',
          email: 'Email',
          phone: 'Telefone',
          location: 'Localização do imóvel',
          propertyType: 'Tipo de imóvel',
          bedrooms: 'Nº de quartos',
          message: 'Mensagem',
        },
        propertyTypes: {
          apartment: 'Apartamento',
          house: 'Moradia',
          villa: 'Moradia/Villa',
          other: 'Outro',
        },
        submit: 'Pedir Avaliação Gratuita',
        submitting: 'A enviar...',
        successTitle: 'Pedido enviado!',
        successMessage: 'Entraremos em contacto consigo em menos de 24 horas.',
      },
      finalCta: {
        title: 'Pronto para rentabilizar o seu imóvel?',
        description:
          'Fale connosco e descubra como podemos ajudar a transformar o seu alojamento numa fonte de rendimento consistente.',
        button: 'Agendar Conversa',
        pills: ['Sem compromisso', 'Resposta em 24h', 'Equipa local'],
        disclaimer: 'Avaliação gratuita e personalizada para o seu imóvel.',
      },
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
      mapPartnersCount: '20 parceiros DolceStay',
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
        description: 'Descubra quanto pode ganhar com uma gestão profissional.',
        button: 'Agendar Conversa',
        pills: ['Sem compromisso', 'Equipa local', 'Avaliação personalizada'],
        disclaimer: 'Resposta em menos de 24 horas.',
      },
    },
    contact: {
      title: 'Contactos',
      subtitle: 'Vamos conversar',
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
        cookies: 'Política de Cookies',
        disputes: 'Litígios de Consumo',
      },
      copyright: 'Todos os direitos reservados.',
      callCost: 'Custo de Chamada para a Rede Móvel Nacional',
    },
    cookieConsent: {
      title: 'Respeitamos a sua privacidade',
      description:
        'Utilizamos cookies para melhorar a experiência de navegação e analisar o tráfego do website.',
      accept: 'Aceitar',
      reject: 'Rejeitar',
      customize: 'Personalizar',
      customizeTitle: 'Preferências de cookies',
      customizeDescription:
        'Escolha que categorias de cookies autoriza. Os cookies necessários estão sempre ativos.',
      necessaryTitle: 'Cookies necessários',
      necessaryDescription:
        'Essenciais para o funcionamento do website e para guardar as suas preferências de consentimento.',
      alwaysActive: 'Sempre ativo',
      analyticsTitle: 'Cookies analíticos',
      analyticsDescription:
        'Permitem analisar o tráfego e melhorar o website (Google Analytics 4).',
      advertisingTitle: 'Cookies de publicidade',
      advertisingDescription: 'Utilizados para medir campanhas e personalizar anúncios.',
      savePreferences: 'Guardar preferências',
      managePreferences: 'Gerir preferências de cookies',
      back: 'Voltar',
      close: 'Fechar',
    },
    legal: {
      badge: 'Legal',
      backToHome: 'Voltar ao início',
      home: 'Início',
      navAriaLabel: 'Navegação da página legal',
      lastUpdated: 'Última atualização:',
      onThisPage: 'Nesta página',
      indexAriaLabel: 'Índice da página',
      readingProgress: 'Progresso de leitura',
      backToTop: 'Voltar ao topo',
      pages: {
        privacy: {
          title: 'Política de Privacidade',
          description:
            'Como a DolceStay recolhe, trata e protege os seus dados pessoais, em conformidade com o RGPD.',
          metadataNote: 'Proteção de dados pessoais (RGPD)',
          lastUpdated: 'Maio 2026',
        },
        terms: {
          title: 'Termos e Condições',
          description:
            'Condições gerais aplicáveis às reservas e estadias nos alojamentos geridos pela DolceStay.',
          metadataNote: 'Política aplicável a reservas e estadias',
          lastUpdated: 'Maio 2026',
        },
        cookies: {
          title: 'Política de Cookies',
          description:
            'Informação sobre os cookies utilizados no website DolceStay e como pode gerir as suas preferências.',
          metadataNote: 'Cookies e consentimento (RGPD)',
          lastUpdated: 'Junho 2026',
        },
        consumerDisputes: {
          title: 'Litígios de Consumo',
          description:
            'Informação sobre entidades de resolução alternativa de litígios de consumo em caso de disputa.',
          metadataNote: 'Resolução alternativa de litígios',
          lastUpdated: 'Maio 2026',
        },
      },
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
      reviewCta: {
        title: 'Gostou da sua estadia ou da nossa gestão?',
        socialProof: '4.9/5 média de avaliação',
        socialProofAria: '4.9 em 5 estrelas, média de avaliação',
        description:
          'A sua opinião ajuda-nos a melhorar continuamente e ajuda outros hóspedes e proprietários a confiar na DolceStay.',
        button: 'Avaliar a DolceStay',
        microcopy: 'Leva menos de 1 minuto.',
      },
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
      submitting: 'A enviar...',
      formSuccess:
        'A sua mensagem foi enviada com sucesso. Entraremos em contacto em breve.',
      formError:
        'Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente.',
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
    ownersPage: {
      hero: {
        badge: 'Local Accommodation Management',
        title: 'Monetize your property in Sesimbra without worries',
        subtitle:
          'We handle complete management of your short-term rental — bookings, guests, cleaning, maintenance, pricing and reporting — so you earn more with less effort.',
        ctaPrimary: 'I Want to Monetize My Property',
        ctaSecondary: 'Talk to Our Team',
        imageAlt: 'Premium accommodation in Sesimbra with coastal views',
        floatingCard: {
          title: 'DolceStay',
          items: ['Full management', 'Local support', 'Response within 24h'],
        },
      },
      trustMetrics: {
        badge: 'DOLCESTAY TRUST',
        title: 'Results that speak for themselves',
        subtitle: 'Metrics that reflect our commitment to property owners in Sesimbra.',
        labels: {
          metric1: 'Operational transparency',
          metric2: 'Average guest satisfaction',
          metric3: 'Continuous support',
          metric4: 'Revenue optimization potential',
        },
      },
      whyUs: {
        title: 'Why work with us?',
        description:
          'We manage your rental as if it were our own. We combine technology, experience and local knowledge to maximize income and deliver an excellent guest experience.',
        points: [
          'Local knowledge of Sesimbra',
          'Professional management',
          'Fast communication',
          'Pricing strategy',
          'Guest experience',
          'Clear reporting',
        ],
      },
      services: {
        badge: 'Included services',
        title: 'What we handle for you',
        subtitle: 'Complete management so your property runs like a premium business.',
        items: {
          listing: { title: 'Listing creation & optimization', description: 'Professional listings, photos and positioning across multiple platforms.' },
          booking: { title: 'Booking management', description: 'Calendar, confirmations and coordination of all reservations.' },
          communication: { title: 'Guest communication', description: 'Fast responses before, during and after every stay.' },
          checkIn: { title: 'Check-in & check-out', description: 'Personal welcome and smooth processes for every guest.' },
          cleaning: { title: 'Cleaning & laundry', description: 'Impeccable property preparation between each stay.' },
          maintenance: { title: 'Maintenance & operational support', description: 'Minor repairs and coordination of local services.' },
          pricing: { title: 'Price optimization', description: 'Dynamic pricing adjusted to demand and season.' },
          reports: { title: 'Reports & follow-up', description: 'Clear indicators on performance and revenue.' },
        },
      },
      benefits: {
        title: 'More income, fewer worries',
        subtitle: 'Concrete benefits for owners who want results without daily stress.',
        items: [
          'Save time',
          'Reduce operational worries',
          'Improve guest experience',
          'Increase property visibility',
          'Optimize prices based on demand and season',
          'Track results with transparency',
        ],
      },
      faq: {
        title: 'Frequently asked questions',
        subtitle: 'Clear answers to the most common owner questions.',
        items: [
          { question: 'Do I need a local accommodation license?', answer: 'Yes, the property must meet legal requirements. We help you understand what is needed and guide you through the process.' },
          { question: 'Does DolceStay handle cleaning?', answer: 'Yes. We coordinate professional cleaning and laundry between each stay.' },
          { question: 'Who communicates with guests?', answer: 'Our team handles all communication — from booking to check-out — keeping you informed when needed.' },
          { question: 'How are prices set?', answer: 'We use dynamic pricing based on demand, season, competition and property profile, with regular adjustments to maximize revenue.' },
          { question: 'Do I receive reports?', answer: 'Yes. We share periodic reports with occupancy, revenue and performance indicators, with full transparency.' },
          { question: 'Can I use the property whenever I want?', answer: 'Yes. You can block dates for personal use. We coordinate in advance to avoid affecting existing bookings.' },
          { question: 'How do I get started?', answer: 'Fill in the form below or contact us. We assess the property, present a personalized proposal and proceed if it makes sense for both parties.' },
        ],
      },
      form: {
        title: 'Want to know how much your property could earn?',
        subtitle: 'Fill in the form and receive a free assessment from our team.',
        fields: { name: 'Name', email: 'Email', phone: 'Phone', location: 'Property location', propertyType: 'Property type', bedrooms: 'Number of bedrooms', message: 'Message' },
        propertyTypes: { apartment: 'Apartment', house: 'House', villa: 'Villa', other: 'Other' },
        submit: 'Request Free Assessment',
        submitting: 'Sending...',
        successTitle: 'Request sent!',
        successMessage: 'We will contact you within 24 hours.',
      },
      finalCta: {
        title: 'Ready to monetize your property?',
        description: 'Talk to us and discover how we can help turn your rental into a consistent source of income.',
        button: 'Schedule a Call',
        pills: ['No commitment', 'Response within 24h', 'Local team'],
        disclaimer: 'Free, personalized assessment for your property.',
      },
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
      mapPartnersCount: '20 DolceStay partners',
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
        cookies: 'Cookie Policy',
        disputes: 'Consumer Disputes',
      },
      copyright: 'All rights reserved.',
      callCost: 'Call cost to National Mobile Network',
    },
    cookieConsent: {
      title: 'We respect your privacy',
      description:
        'We use cookies to improve your browsing experience and analyse website traffic.',
      accept: 'Accept',
      reject: 'Reject',
      customize: 'Customize',
      customizeTitle: 'Cookie preferences',
      customizeDescription:
        'Choose which cookie categories you allow. Necessary cookies are always active.',
      necessaryTitle: 'Necessary cookies',
      necessaryDescription:
        'Essential for the website to function and to store your consent preferences.',
      alwaysActive: 'Always active',
      analyticsTitle: 'Analytics cookies',
      analyticsDescription:
        'Allow us to analyse traffic and improve the website (Google Analytics 4).',
      advertisingTitle: 'Advertising cookies',
      advertisingDescription: 'Used to measure campaigns and personalise ads.',
      savePreferences: 'Save preferences',
      managePreferences: 'Manage cookie preferences',
      back: 'Back',
      close: 'Close',
    },
    legal: {
      badge: 'Legal',
      backToHome: 'Back to home',
      home: 'Home',
      navAriaLabel: 'Legal page navigation',
      lastUpdated: 'Last updated:',
      onThisPage: 'On this page',
      indexAriaLabel: 'Page index',
      readingProgress: 'Reading progress',
      backToTop: 'Back to top',
      pages: {
        privacy: {
          title: 'Privacy Policy',
          description:
            'How DolceStay collects, processes and protects your personal data in accordance with the GDPR.',
          metadataNote: 'Personal data protection (GDPR)',
          lastUpdated: 'May 2026',
        },
        terms: {
          title: 'Terms and Conditions',
          description:
            'General conditions applicable to bookings and stays at accommodations managed by DolceStay.',
          metadataNote: 'Policy applicable to bookings and stays',
          lastUpdated: 'May 2026',
        },
        cookies: {
          title: 'Cookie Policy',
          description:
            'Information about cookies used on the DolceStay website and how you can manage your preferences.',
          metadataNote: 'Cookies and consent (GDPR)',
          lastUpdated: 'June 2026',
        },
        consumerDisputes: {
          title: 'Consumer Disputes',
          description:
            'Information on alternative consumer dispute resolution entities in case of a dispute.',
          metadataNote: 'Alternative dispute resolution',
          lastUpdated: 'May 2026',
        },
      },
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
      reviewCta: {
        title: 'Enjoyed your stay or our management?',
        socialProof: '4.9/5 average rating',
        socialProofAria: '4.9 out of 5 stars, average rating',
        description:
          'Your feedback helps us keep improving and helps other guests and owners trust DolceStay.',
        button: 'Rate DolceStay',
        microcopy: 'Takes less than 1 minute.',
      },
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
      submitting: 'Sending...',
      formSuccess:
        'Your message was sent successfully. We will get back to you shortly.',
      formError:
        'We could not send your message. Please try again or contact us directly.',
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
    ownersPage: {
      hero: {
        badge: 'Gestion d\'Hébergement Local',
        title: 'Rentabilisez votre bien à Sesimbra sans souci',
        subtitle:
          'Nous gérons l\'intégralité de votre location saisonnière — réservations, clients, ménage, maintenance, tarifs et suivi — pour plus de revenus avec moins d\'effort.',
        ctaPrimary: 'Je Veux Rentabiliser Mon Bien',
        ctaSecondary: 'Parler à l\'Équipe',
        imageAlt: 'Hébergement premium à Sesimbra avec vue sur la côte',
        floatingCard: {
          title: 'DolceStay',
          items: ['Gestion complète', 'Support local', 'Réponse sous 24h'],
        },
      },
      trustMetrics: {
        badge: 'CONFIANCE DOLCESTAY',
        title: 'Des résultats qui parlent d\'eux-mêmes',
        subtitle: 'Indicateurs qui reflètent notre engagement envers les propriétaires à Sesimbra.',
        labels: {
          metric1: 'Transparence opérationnelle',
          metric2: 'Satisfaction moyenne des clients',
          metric3: 'Support continu',
          metric4: 'Potentiel d\'optimisation des revenus',
        },
      },
      whyUs: {
        title: 'Pourquoi travailler avec nous ?',
        description:
          'Nous gérons votre location comme si c\'était la nôtre. Nous combinons technologie, expérience et connaissance locale pour maximiser les revenus et garantir une excellente expérience client.',
        points: [
          'Connaissance locale de Sesimbra',
          'Gestion professionnelle',
          'Communication rapide',
          'Stratégie tarifaire',
          'Expérience client',
          'Rapports clairs',
        ],
      },
      services: {
        badge: 'Services inclus',
        title: 'Ce que nous gérons pour vous',
        subtitle: 'Une gestion complète pour que votre bien fonctionne comme une activité premium.',
        items: {
          listing: { title: 'Création et optimisation d\'annonces', description: 'Annonces professionnelles, photos et positionnement sur plusieurs plateformes.' },
          booking: { title: 'Gestion des réservations', description: 'Calendrier, confirmations et coordination de toutes les réservations.' },
          communication: { title: 'Communication avec les clients', description: 'Réponses rapides avant, pendant et après chaque séjour.' },
          checkIn: { title: 'Check-in et check-out', description: 'Accueil personnalisé et processus fluides pour chaque client.' },
          cleaning: { title: 'Ménage et blanchisserie', description: 'Préparation impeccable du bien entre chaque séjour.' },
          maintenance: { title: 'Maintenance et support opérationnel', description: 'Petites réparations et coordination des services locaux.' },
          pricing: { title: 'Optimisation des prix', description: 'Tarifs dynamiques ajustés à la demande et à la saison.' },
          reports: { title: 'Rapports et suivi', description: 'Indicateurs clairs sur les performances et les revenus.' },
        },
      },
      benefits: {
        title: 'Plus de revenus, moins de soucis',
        subtitle: 'Des avantages concrets pour les propriétaires qui veulent des résultats sans le stress quotidien.',
        items: [
          'Gain de temps',
          'Réduction des soucis opérationnels',
          'Meilleure expérience client',
          'Plus de visibilité pour le bien',
          'Optimisation des prix selon la demande et la saison',
          'Suivi des résultats en toute transparence',
        ],
      },
      faq: {
        title: 'Questions fréquentes',
        subtitle: 'Réponses claires aux questions les plus courantes des propriétaires.',
        items: [
          { question: 'Dois-je avoir une licence d\'hébergement local ?', answer: 'Oui, le bien doit respecter les exigences légales. Nous vous aidons à comprendre ce qui est nécessaire et vous orientons dans le processus.' },
          { question: 'DolceStay s\'occupe-t-il du ménage ?', answer: 'Oui. Nous coordonnons le ménage et la blanchisserie professionnels entre chaque séjour.' },
          { question: 'Qui communique avec les clients ?', answer: 'Notre équipe gère toute la communication — de la réservation au check-out — en vous tenant informé si nécessaire.' },
          { question: 'Comment les prix sont-ils définis ?', answer: 'Nous utilisons une tarification dynamique basée sur la demande, la saison, la concurrence et le profil du bien.' },
          { question: 'Est-ce que je reçois des rapports ?', answer: 'Oui. Nous partageons des rapports périodiques avec occupation, revenus et performance, en toute transparence.' },
          { question: 'Puis-je utiliser le bien quand je veux ?', answer: 'Oui. Vous pouvez bloquer des dates pour usage personnel. Nous coordonnons à l\'avance pour ne pas affecter les réservations existantes.' },
          { question: 'Comment commencer ?', answer: 'Remplissez le formulaire ci-dessous ou contactez-nous. Nous évaluons le bien, présentons une proposition personnalisée et avançons si cela convient aux deux parties.' },
        ],
      },
      form: {
        title: 'Vous voulez savoir combien votre bien peut rapporter ?',
        subtitle: 'Remplissez le formulaire et recevez une évaluation gratuite de notre équipe.',
        fields: { name: 'Nom', email: 'Email', phone: 'Téléphone', location: 'Localisation du bien', propertyType: 'Type de bien', bedrooms: 'Nombre de chambres', message: 'Message' },
        propertyTypes: { apartment: 'Appartement', house: 'Maison', villa: 'Villa', other: 'Autre' },
        submit: 'Demander une Évaluation Gratuite',
        submitting: 'Envoi en cours...',
        successTitle: 'Demande envoyée !',
        successMessage: 'Nous vous contacterons dans les 24 heures.',
      },
      finalCta: {
        title: 'Prêt à rentabiliser votre bien ?',
        description: 'Parlez-nous et découvrez comment transformer votre location en source de revenus constante.',
        button: 'Planifier un Appel',
        pills: ['Sans engagement', 'Réponse sous 24h', 'Équipe locale'],
        disclaimer: 'Évaluation gratuite et personnalisée pour votre bien.',
      },
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
      mapPartnersCount: '20 partenaires DolceStay',
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
        cookies: 'Politique de Cookies',
        disputes: 'Litiges de Consommation',
      },
      copyright: 'Tous droits réservés.',
      callCost: 'Coût d\'appel vers le réseau mobile national',
    },
    cookieConsent: {
      title: 'Nous respectons votre vie privée',
      description:
        'Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site.',
      accept: 'Accepter',
      reject: 'Refuser',
      customize: 'Personnaliser',
      customizeTitle: 'Préférences de cookies',
      customizeDescription:
        'Choisissez les catégories de cookies que vous autorisez. Les cookies nécessaires sont toujours actifs.',
      necessaryTitle: 'Cookies nécessaires',
      necessaryDescription:
        'Essentiels au fonctionnement du site et à la mémorisation de vos préférences de consentement.',
      alwaysActive: 'Toujours actif',
      analyticsTitle: 'Cookies analytiques',
      analyticsDescription:
        'Permettent d\'analyser le trafic et d\'améliorer le site (Google Analytics 4).',
      advertisingTitle: 'Cookies publicitaires',
      advertisingDescription: 'Utilisés pour mesurer les campagnes et personnaliser les annonces.',
      savePreferences: 'Enregistrer les préférences',
      managePreferences: 'Gérer les préférences de cookies',
      back: 'Retour',
      close: 'Fermer',
    },
    legal: {
      badge: 'Légal',
      backToHome: "Retour à l'accueil",
      home: 'Accueil',
      navAriaLabel: 'Navigation de la page légale',
      lastUpdated: 'Dernière mise à jour :',
      onThisPage: 'Sur cette page',
      indexAriaLabel: 'Index de la page',
      readingProgress: 'Progression de lecture',
      backToTop: 'Retour en haut',
      pages: {
        privacy: {
          title: 'Politique de Confidentialité',
          description:
            'Comment DolceStay collecte, traite et protège vos données personnelles conformément au RGPD.',
          metadataNote: 'Protection des données personnelles (RGPD)',
          lastUpdated: 'Mai 2026',
        },
        terms: {
          title: 'Termes et Conditions',
          description:
            'Conditions générales applicables aux réservations et séjours dans les hébergements gérés par DolceStay.',
          metadataNote: 'Politique applicable aux réservations et séjours',
          lastUpdated: 'Mai 2026',
        },
        cookies: {
          title: 'Politique de Cookies',
          description:
            'Informations sur les cookies utilisés sur le site DolceStay et comment gérer vos préférences.',
          metadataNote: 'Cookies et consentement (RGPD)',
          lastUpdated: 'Juin 2026',
        },
        consumerDisputes: {
          title: 'Litiges de Consommation',
          description:
            "Informations sur les entités de résolution alternative des litiges de consommation en cas de litige.",
          metadataNote: 'Résolution alternative des litiges',
          lastUpdated: 'Mai 2026',
        },
      },
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
      reviewCta: {
        title: 'Vous avez apprécié votre séjour ou notre gestion ?',
        socialProof: '4,9/5 note moyenne',
        socialProofAria: '4,9 sur 5 étoiles, note moyenne',
        description:
          'Votre avis nous aide à nous améliorer continuellement et aide d\'autres clients et propriétaires à faire confiance à DolceStay.',
        button: 'Évaluer DolceStay',
        microcopy: 'Moins d\'une minute.',
      },
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
      submitting: 'Envoi en cours...',
      formSuccess:
        'Votre message a été envoyé avec succès. Nous vous contacterons sous peu.',
      formError:
        'Impossible d\'envoyer votre message. Réessayez ou contactez-nous directement.',
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
    ownersPage: {
      hero: {
        badge: 'Gestión de Alojamiento Local',
        title: 'Rentabilice su inmueble en Sesimbra sin preocupaciones',
        subtitle:
          'Gestionamos su alojamiento local por completo — reservas, huéspedes, limpieza, mantenimiento, precios y seguimiento — para que obtenga más ingresos con menos esfuerzo.',
        ctaPrimary: 'Quiero Rentabilizar Mi Inmueble',
        ctaSecondary: 'Hablar con el Equipo',
        imageAlt: 'Alojamiento premium en Sesimbra con vistas a la costa',
        floatingCard: {
          title: 'DolceStay',
          items: ['Gestión completa', 'Apoyo local', 'Respuesta en menos de 24h'],
        },
      },
      trustMetrics: {
        badge: 'CONFIANZA DOLCESTAY',
        title: 'Resultados que hablan por sí solos',
        subtitle: 'Indicadores que reflejan nuestro compromiso con los propietarios en Sesimbra.',
        labels: {
          metric1: 'Transparencia operativa',
          metric2: 'Satisfacción media de los huéspedes',
          metric3: 'Apoyo continuo',
          metric4: 'Potencial de optimización de ingresos',
        },
      },
      whyUs: {
        title: '¿Por qué trabajar con nosotros?',
        description:
          'Gestionamos su alojamiento como si fuera nuestro. Combinamos tecnología, experiencia y conocimiento local para maximizar los ingresos y garantizar una excelente experiencia al huésped.',
        points: [
          'Conocimiento local de Sesimbra',
          'Gestión profesional',
          'Comunicación rápida',
          'Estrategia de precios',
          'Experiencia del huésped',
          'Informes claros',
        ],
      },
      services: {
        badge: 'Servicios incluidos',
        title: 'Lo que gestionamos por usted',
        subtitle: 'Gestión completa para que su inmueble funcione como un negocio premium.',
        items: {
          listing: { title: 'Creación y optimización de anuncios', description: 'Anuncios profesionales, fotos y posicionamiento en múltiples plataformas.' },
          booking: { title: 'Gestión de reservas', description: 'Calendario, confirmaciones y coordinación de todas las reservas.' },
          communication: { title: 'Comunicación con huéspedes', description: 'Respuestas rápidas antes, durante y después de cada estancia.' },
          checkIn: { title: 'Check-in y check-out', description: 'Recepción personalizada y procesos fluidos para cada huésped.' },
          cleaning: { title: 'Limpieza y lavandería', description: 'Preparación impecable del inmueble entre cada estancia.' },
          maintenance: { title: 'Mantenimiento y apoyo operativo', description: 'Pequeñas reparaciones y coordinación de servicios locales.' },
          pricing: { title: 'Optimización de precios', description: 'Precios dinámicos ajustados a la demanda y la temporada.' },
          reports: { title: 'Informes y seguimiento', description: 'Indicadores claros sobre rendimiento e ingresos.' },
        },
      },
      benefits: {
        title: 'Más ingresos, menos preocupaciones',
        subtitle: 'Beneficios concretos para propietarios que quieren resultados sin el estrés del día a día.',
        items: [
          'Ahorra tiempo',
          'Reduce preocupaciones operativas',
          'Mejora la experiencia de los huéspedes',
          'Aumenta la visibilidad del inmueble',
          'Optimiza precios según demanda y temporada',
          'Sigue los resultados con transparencia',
        ],
      },
      faq: {
        title: 'Preguntas frecuentes',
        subtitle: 'Respuestas claras a las dudas más comunes de los propietarios.',
        items: [
          { question: '¿Necesito licencia de alojamiento local?', answer: 'Sí, el inmueble debe cumplir los requisitos legales. Le ayudamos a entender qué es necesario y le orientamos en el proceso.' },
          { question: '¿DolceStay se encarga de la limpieza?', answer: 'Sí. Coordinamos limpieza y lavandería profesional entre cada estancia.' },
          { question: '¿Quién se comunica con los huéspedes?', answer: 'Nuestro equipo gestiona toda la comunicación — desde la reserva hasta el check-out — manteniéndole informado cuando sea necesario.' },
          { question: '¿Cómo se definen los precios?', answer: 'Utilizamos precios dinámicos basados en demanda, temporada, competencia y perfil del inmueble.' },
          { question: '¿Recibo informes?', answer: 'Sí. Compartimos informes periódicos con ocupación, ingresos y rendimiento, con total transparencia.' },
          { question: '¿Puedo usar el inmueble cuando quiera?', answer: 'Sí. Puede bloquear fechas para uso personal. Coordinamos con antelación para no afectar reservas existentes.' },
          { question: '¿Cómo empiezo?', answer: 'Complete el formulario abajo o contáctenos. Evaluamos el inmueble, presentamos una propuesta personalizada y avanzamos si tiene sentido para ambas partes.' },
        ],
      },
      form: {
        title: '¿Quiere saber cuánto puede rendir su inmueble?',
        subtitle: 'Complete el formulario y reciba una evaluación gratuita de nuestro equipo.',
        fields: { name: 'Nombre', email: 'Email', phone: 'Teléfono', location: 'Ubicación del inmueble', propertyType: 'Tipo de inmueble', bedrooms: 'Nº de habitaciones', message: 'Mensaje' },
        propertyTypes: { apartment: 'Apartamento', house: 'Casa', villa: 'Villa', other: 'Otro' },
        submit: 'Solicitar Evaluación Gratuita',
        submitting: 'Enviando...',
        successTitle: '¡Solicitud enviada!',
        successMessage: 'Nos pondremos en contacto en menos de 24 horas.',
      },
      finalCta: {
        title: '¿Listo para rentabilizar su inmueble?',
        description: 'Hable con nosotros y descubra cómo transformar su alojamiento en una fuente de ingresos constante.',
        button: 'Agendar Conversación',
        pills: ['Sin compromiso', 'Respuesta en 24h', 'Equipo local'],
        disclaimer: 'Evaluación gratuita y personalizada para su inmueble.',
      },
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
      mapPartnersCount: '20 colaboradores DolceStay',
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
        cookies: 'Política de Cookies',
        disputes: 'Litigios de Consumo',
      },
      copyright: 'Todos los derechos reservados.',
      callCost: 'Coste de llamada a la red móvil nacional',
    },
    cookieConsent: {
      title: 'Respetamos su privacidad',
      description:
        'Utilizamos cookies para mejorar la experiencia de navegación y analizar el tráfico del sitio web.',
      accept: 'Aceptar',
      reject: 'Rechazar',
      customize: 'Personalizar',
      customizeTitle: 'Preferencias de cookies',
      customizeDescription:
        'Elija qué categorías de cookies autoriza. Las cookies necesarias están siempre activas.',
      necessaryTitle: 'Cookies necesarias',
      necessaryDescription:
        'Esenciales para el funcionamiento del sitio web y para guardar sus preferencias de consentimiento.',
      alwaysActive: 'Siempre activo',
      analyticsTitle: 'Cookies analíticas',
      analyticsDescription:
        'Permiten analizar el tráfico y mejorar el sitio web (Google Analytics 4).',
      advertisingTitle: 'Cookies publicitarias',
      advertisingDescription: 'Utilizadas para medir campañas y personalizar anuncios.',
      savePreferences: 'Guardar preferencias',
      managePreferences: 'Gestionar preferencias de cookies',
      back: 'Volver',
      close: 'Cerrar',
    },
    legal: {
      badge: 'Legal',
      backToHome: 'Volver al inicio',
      home: 'Inicio',
      navAriaLabel: 'Navegación de la página legal',
      lastUpdated: 'Última actualización:',
      onThisPage: 'En esta página',
      indexAriaLabel: 'Índice de la página',
      readingProgress: 'Progreso de lectura',
      backToTop: 'Volver arriba',
      pages: {
        privacy: {
          title: 'Política de Privacidad',
          description:
            'Cómo DolceStay recopila, trata y protege sus datos personales de conformidad con el RGPD.',
          metadataNote: 'Protección de datos personales (RGPD)',
          lastUpdated: 'Mayo 2026',
        },
        terms: {
          title: 'Términos y Condiciones',
          description:
            'Condiciones generales aplicables a las reservas y estancias en los alojamientos gestionados por DolceStay.',
          metadataNote: 'Política aplicable a reservas y estancias',
          lastUpdated: 'Mayo 2026',
        },
        cookies: {
          title: 'Política de Cookies',
          description:
            'Información sobre las cookies utilizadas en el sitio web DolceStay y cómo gestionar sus preferencias.',
          metadataNote: 'Cookies y consentimiento (RGPD)',
          lastUpdated: 'Junio 2026',
        },
        consumerDisputes: {
          title: 'Litigios de Consumo',
          description:
            'Información sobre entidades de resolución alternativa de litigios de consumo en caso de disputa.',
          metadataNote: 'Resolución alternativa de litigios',
          lastUpdated: 'Mayo 2026',
        },
      },
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
      reviewCta: {
        title: '¿Le gustó su estancia o nuestra gestión?',
        socialProof: '4,9/5 valoración media',
        socialProofAria: '4,9 de 5 estrellas, valoración media',
        description:
          'Su opinión nos ayuda a mejorar continuamente y ayuda a otros huéspedes y propietarios a confiar en DolceStay.',
        button: 'Valorar DolceStay',
        microcopy: 'Menos de 1 minuto.',
      },
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
      submitting: 'Enviando...',
      formSuccess:
        'Su mensaje se envió correctamente. Nos pondremos en contacto en breve.',
      formError:
        'No fue posible enviar el mensaje. Inténtelo de nuevo o contáctenos directamente.',
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
    ownersPage: {
      hero: {
        badge: 'Lokale Unterkunftsverwaltung',
        title: 'Monetarisieren Sie Ihre Immobilie in Sesimbra ohne Sorgen',
        subtitle:
          'Wir übernehmen die komplette Verwaltung Ihrer Ferienunterkunft — Buchungen, Gäste, Reinigung, Wartung, Preise und Reporting — für mehr Einkommen mit weniger Aufwand.',
        ctaPrimary: 'Ich möchte meine Immobilie monetarisieren',
        ctaSecondary: 'Mit dem Team sprechen',
        imageAlt: 'Premium-Unterkunft in Sesimbra mit Küstenblick',
        floatingCard: {
          title: 'DolceStay',
          items: ['Komplette Verwaltung', 'Lokaler Support', 'Antwort innerhalb von 24h'],
        },
      },
      trustMetrics: {
        badge: 'DOLCESTAY VERTRAUEN',
        title: 'Ergebnisse, die für sich sprechen',
        subtitle: 'Kennzahlen, die unser Engagement für Eigentümer in Sesimbra widerspiegeln.',
        labels: {
          metric1: 'Operative Transparenz',
          metric2: 'Durchschnittliche Gästezufriedenheit',
          metric3: 'Kontinuierlicher Support',
          metric4: 'Potenzial zur Umsatzoptimierung',
        },
      },
      whyUs: {
        title: 'Warum mit uns arbeiten?',
        description:
          'Wir verwalten Ihre Unterkunft, als wäre sie unsere eigene. Wir kombinieren Technologie, Erfahrung und lokales Wissen, um Einkommen zu maximieren und ein hervorragendes Gästeerlebnis zu gewährleisten.',
        points: [
          'Lokales Wissen über Sesimbra',
          'Professionelle Verwaltung',
          'Schnelle Kommunikation',
          'Preisstrategie',
          'Gästeerlebnis',
          'Klare Berichte',
        ],
      },
      services: {
        badge: 'Enthaltene Leistungen',
        title: 'Was wir für Sie übernehmen',
        subtitle: 'Komplette Verwaltung, damit Ihre Immobilie wie ein Premium-Geschäft läuft.',
        items: {
          listing: { title: 'Erstellung & Optimierung von Inseraten', description: 'Professionelle Inserate, Fotos und Positionierung auf mehreren Plattformen.' },
          booking: { title: 'Buchungsverwaltung', description: 'Kalender, Bestätigungen und Koordination aller Reservierungen.' },
          communication: { title: 'Gästekommunikation', description: 'Schnelle Antworten vor, während und nach jedem Aufenthalt.' },
          checkIn: { title: 'Check-in & Check-out', description: 'Persönlicher Empfang und reibungslose Abläufe für jeden Gast.' },
          cleaning: { title: 'Reinigung & Wäsche', description: 'Makellose Vorbereitung der Immobilie zwischen jedem Aufenthalt.' },
          maintenance: { title: 'Wartung & operativer Support', description: 'Kleinere Reparaturen und Koordination lokaler Dienstleister.' },
          pricing: { title: 'Preisoptimierung', description: 'Dynamische Preise angepasst an Nachfrage und Saison.' },
          reports: { title: 'Berichte & Nachverfolgung', description: 'Klare Indikatoren zu Leistung und Einnahmen.' },
        },
      },
      benefits: {
        title: 'Mehr Einkommen, weniger Sorgen',
        subtitle: 'Konkrete Vorteile für Eigentümer, die Ergebnisse ohne täglichen Stress wollen.',
        items: [
          'Zeit sparen',
          'Operative Sorgen reduzieren',
          'Gästeerlebnis verbessern',
          'Sichtbarkeit der Immobilie erhöhen',
          'Preise nach Nachfrage und Saison optimieren',
          'Ergebnisse transparent verfolgen',
        ],
      },
      faq: {
        title: 'Häufig gestellte Fragen',
        subtitle: 'Klare Antworten auf die häufigsten Fragen von Eigentümern.',
        items: [
          { question: 'Brauche ich eine lokale Unterkunftslizenz?', answer: 'Ja, die Immobilie muss die gesetzlichen Anforderungen erfüllen. Wir helfen Ihnen zu verstehen, was nötig ist, und begleiten Sie im Prozess.' },
          { question: 'Kümmert sich DolceStay um die Reinigung?', answer: 'Ja. Wir koordinieren professionelle Reinigung und Wäsche zwischen jedem Aufenthalt.' },
          { question: 'Wer kommuniziert mit den Gästen?', answer: 'Unser Team übernimmt die gesamte Kommunikation — von der Buchung bis zum Check-out — und informiert Sie bei Bedarf.' },
          { question: 'Wie werden Preise festgelegt?', answer: 'Wir nutzen dynamische Preise basierend auf Nachfrage, Saison, Wettbewerb und Immobilienprofil.' },
          { question: 'Erhalte ich Berichte?', answer: 'Ja. Wir teilen regelmäßige Berichte mit Belegung, Einnahmen und Leistung — vollständig transparent.' },
          { question: 'Kann ich die Immobilie jederzeit nutzen?', answer: 'Ja. Sie können Daten für den Eigenbedarf blockieren. Wir koordinieren im Voraus, um bestehende Buchungen nicht zu beeinträchtigen.' },
          { question: 'Wie fange ich an?', answer: 'Füllen Sie das Formular unten aus oder kontaktieren Sie uns. Wir bewerten die Immobilie, präsentieren ein personalisiertes Angebot und starten, wenn es für beide Seiten passt.' },
        ],
      },
      form: {
        title: 'Möchten Sie wissen, wie viel Ihre Immobilie einbringen kann?',
        subtitle: 'Füllen Sie das Formular aus und erhalten Sie eine kostenlose Bewertung von unserem Team.',
        fields: { name: 'Name', email: 'E-Mail', phone: 'Telefon', location: 'Standort der Immobilie', propertyType: 'Immobilientyp', bedrooms: 'Anzahl Schlafzimmer', message: 'Nachricht' },
        propertyTypes: { apartment: 'Wohnung', house: 'Haus', villa: 'Villa', other: 'Sonstiges' },
        submit: 'Kostenlose Bewertung Anfordern',
        submitting: 'Wird gesendet...',
        successTitle: 'Anfrage gesendet!',
        successMessage: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      },
      finalCta: {
        title: 'Bereit, Ihre Immobilie zu monetarisieren?',
        description: 'Sprechen Sie mit uns und erfahren Sie, wie wir Ihre Unterkunft in eine konstante Einnahmequelle verwandeln können.',
        button: 'Gespräch Vereinbaren',
        pills: ['Unverbindlich', 'Antwort in 24h', 'Lokales Team'],
        disclaimer: 'Kostenlose, personalisierte Bewertung für Ihre Immobilie.',
      },
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
      mapPartnersCount: '20 DolceStay-Partner',
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
        cookies: 'Cookie-Richtlinie',
        disputes: 'Verbraucherstreitigkeiten',
      },
      copyright: 'Alle Rechte vorbehalten.',
      callCost: 'Anrufkosten zum nationalen Mobilfunknetz',
    },
    cookieConsent: {
      title: 'Wir respektieren Ihre Privatsphäre',
      description:
        'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern und den Website-Traffic zu analysieren.',
      accept: 'Akzeptieren',
      reject: 'Ablehnen',
      customize: 'Anpassen',
      customizeTitle: 'Cookie-Einstellungen',
      customizeDescription:
        'Wählen Sie, welche Cookie-Kategorien Sie zulassen. Notwendige Cookies sind immer aktiv.',
      necessaryTitle: 'Notwendige Cookies',
      necessaryDescription:
        'Erforderlich für die Funktion der Website und zur Speicherung Ihrer Einwilligungspräferenzen.',
      alwaysActive: 'Immer aktiv',
      analyticsTitle: 'Analyse-Cookies',
      analyticsDescription:
        'Ermöglichen die Analyse des Traffics und die Verbesserung der Website (Google Analytics 4).',
      advertisingTitle: 'Werbe-Cookies',
      advertisingDescription: 'Werden zur Messung von Kampagnen und zur Personalisierung von Anzeigen verwendet.',
      savePreferences: 'Einstellungen speichern',
      managePreferences: 'Cookie-Einstellungen verwalten',
      back: 'Zurück',
      close: 'Schließen',
    },
    legal: {
      badge: 'Rechtliches',
      backToHome: 'Zurück zur Startseite',
      home: 'Startseite',
      navAriaLabel: 'Navigation der Rechtsseite',
      lastUpdated: 'Zuletzt aktualisiert:',
      onThisPage: 'Auf dieser Seite',
      indexAriaLabel: 'Seitenindex',
      readingProgress: 'Lesefortschritt',
      backToTop: 'Nach oben',
      pages: {
        privacy: {
          title: 'Datenschutzrichtlinie',
          description:
            'Wie DolceStay Ihre personenbezogenen Daten gemäß der DSGVO erhebt, verarbeitet und schützt.',
          metadataNote: 'Schutz personenbezogener Daten (DSGVO)',
          lastUpdated: 'Mai 2026',
        },
        terms: {
          title: 'Allgemeine Geschäftsbedingungen',
          description:
            'Allgemeine Bedingungen für Buchungen und Aufenthalte in von DolceStay verwalteten Unterkünften.',
          metadataNote: 'Richtlinie für Buchungen und Aufenthalte',
          lastUpdated: 'Mai 2026',
        },
        cookies: {
          title: 'Cookie-Richtlinie',
          description:
            'Informationen zu Cookies auf der DolceStay-Website und zur Verwaltung Ihrer Einstellungen.',
          metadataNote: 'Cookies und Einwilligung (DSGVO)',
          lastUpdated: 'Juni 2026',
        },
        consumerDisputes: {
          title: 'Verbraucherstreitigkeiten',
          description:
            'Informationen zu außergerichtlichen Verbraucherschlichtungsstellen bei Streitigkeiten.',
          metadataNote: 'Alternative Streitbeilegung',
          lastUpdated: 'Mai 2026',
        },
      },
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
      reviewCta: {
        title: 'Hat Ihnen Ihr Aufenthalt oder unsere Verwaltung gefallen?',
        socialProof: '4,9/5 durchschnittliche Bewertung',
        socialProofAria: '4,9 von 5 Sternen, durchschnittliche Bewertung',
        description:
          'Ihre Meinung hilft uns, uns kontinuierlich zu verbessern, und hilft anderen Gästen und Eigentümern, DolceStay zu vertrauen.',
        button: 'DolceStay bewerten',
        microcopy: 'Dauert weniger als 1 Minute.',
      },
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
      submitting: 'Wird gesendet...',
      formSuccess:
        'Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.',
      formError:
        'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.',
      error: 'Ein Fehler ist aufgetreten',
      viewAll: 'Alle Anzeigen',
      close: 'Schließen',
      whatsappChat: 'WhatsApp Chat',
    },
  },
};

export type TranslationKey = keyof typeof translations.pt;
export type Translations = typeof translations.pt;
