import type { LegalSection } from '@/lib/legal';

export const COOKIE_POLICY_LAST_UPDATED = 'Junho 2026';

export const cookiePolicySections: LegalSection[] = [
  {
    title: 'Introdução',
    paragraphs: [
      'Esta Política de Cookies explica o que são cookies, como a DolceStay os utiliza no website dolcestay.pt e quais são as suas opções de gestão.',
      'Ao continuar a navegar no website, poderá ser solicitado o seu consentimento para a utilização de cookies não essenciais, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) e a legislação portuguesa aplicável.',
    ],
  },
  {
    title: 'O que são cookies?',
    paragraphs: [
      'Cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, tablet ou telemóvel) quando visita um website. Permitem que o site reconheça o seu dispositivo e memorize determinadas preferências ou informações de navegação.',
      'Os cookies podem ser "de sessão" (eliminados quando fecha o browser) ou "persistentes" (permanecem no dispositivo durante um período definido ou até serem eliminados manualmente).',
    ],
  },
  {
    title: 'Que cookies utilizamos?',
    paragraphs: [
      'O website DolceStay utiliza as seguintes categorias de cookies:',
    ],
    listItems: [
      'Cookies estritamente necessários — essenciais para o funcionamento básico do website, incluindo a memorização das suas preferências de consentimento. Estes cookies não requerem consentimento prévio.',
      'Cookies analíticos — permitem analisar o tráfego e o comportamento dos visitantes de forma agregada, para melhorar a experiência de navegação. Utilizamos Google Analytics 4 (GA4) apenas após o seu consentimento explícito.',
      'Cookies de publicidade — permitem medir a eficácia de campanhas publicitárias e personalizar anúncios. Estes cookies só são ativados se der o seu consentimento.',
    ],
  },
  {
    title: 'Google Analytics 4 e Consent Mode',
    paragraphs: [
      'Utilizamos o Google Analytics 4 para compreender como os visitantes interagem com o website. O Google Analytics recolhe informação de forma anonimizada ou pseudonimizada, como páginas visitadas, tempo de permanência e origem do tráfego.',
      'Implementámos o Google Consent Mode v2, o que significa que o Google Analytics não é carregado nem recolhe dados antes de dar o seu consentimento explícito para cookies analíticos.',
      'Pode aceitar, rejeitar ou personalizar as categorias de cookies através do banner apresentado na primeira visita ou a qualquer momento através da opção "Gerir preferências de cookies".',
    ],
  },
  {
    title: 'Como gerir ou retirar o consentimento',
    paragraphs: [
      'Pode alterar as suas preferências de cookies a qualquer momento clicando em "Gerir preferências de cookies" na página de Política de Cookies ou no rodapé do website.',
      'Também pode configurar o seu browser para bloquear ou eliminar cookies. Note que a desativação de cookies estritamente necessários pode afetar o funcionamento de algumas funcionalidades do website.',
      'Para mais informações sobre os seus direitos enquanto titular de dados, consulte a nossa Política de Privacidade.',
    ],
  },
  {
    title: 'Conservação',
    paragraphs: [
      'A sua preferência de consentimento é guardada localmente no seu browser (localStorage) durante um máximo de 12 meses, após o qual o banner de cookies será apresentado novamente para que possa rever a sua escolha.',
      'Os cookies analíticos e de publicidade têm durações variáveis definidas pelos respetivos fornecedores. Consulte a documentação do Google Analytics para informação detalhada sobre prazos de conservação.',
    ],
  },
  {
    title: 'Contactos',
    paragraphs: [
      'Para questões relacionadas com cookies ou proteção de dados, contacte-nos através de info@dolcestay.pt.',
      'Responsável pelo tratamento: DolceStay Accommodations.',
    ],
  },
];
