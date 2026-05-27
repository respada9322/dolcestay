import type { LegalSection } from '@/lib/legal';
import { getLegalSectionId } from '@/lib/legal';

export type TermsSection = LegalSection;

export const TERMS_LAST_UPDATED = 'Maio 2026';

export const getTermsSectionId = getLegalSectionId;

export const termsAndConditionsSections: TermsSection[] = [
  {
    title: 'Condições de reserva',
    paragraphs: [
      'As reservas efetuadas estão sujeitas a disponibilidade e confirmação de pagamento.',
      'Para confirmar a reserva, o hóspede deverá efetuar o respetivo pagamento, de acordo com o previsto para cada alojamento.',
      'Os valores das taxas de reserva, caução, taxa de limpeza ou outros, são os anunciados em cada momento na página de cada alojamento.',
      'Em todos os alojamentos é exigida uma caução para cobrir eventuais danos causados na propriedade e/ou condomínio. A retenção do valor da caução será efetuada no momento do check-in, quando este for presencial, ou até 48 horas antes do início da reserva, via online, quando for efetuado um check-in expresso. Não será cobrado qualquer valor aos hóspedes, constituído por uma retenção que não lhes permitirá aceder a esses fundos até que a retenção seja cancelada.',
      'Caso não se verifiquem danos no imóvel durante a estadia, a caução será cancelada após o check-out com o mesmo cartão de crédito, o que ocorrerá até 7 dias após o check-out.',
      'Se a propriedade não estiver nas mesmas condições, o montante do depósito será retido até ao pagamento dos elementos danificados.',
      'A reserva ficará sujeita a anulação se não for possível efetuar uma autorização de retenção do valor da caução, pelo que é importante que o hóspede se certifique de que o seu cartão de crédito é válido e tem fundos suficientes. Se não for possível reter o depósito, o cliente será notificado por correio eletrónico ou SMS e terá 12 horas para tentar utilizar outro método de pagamento.',
      'Todos os preços incluem IVA à taxa legal em vigor.',
    ],
  },
  {
    title: 'Opções de pagamento',
    paragraphs: [
      'O pagamento das reservas pode ser efectuado através de cartão de crédito American Express, Visa ou MasterCard.',
      'Os hóspedes também estão sujeitos às regras especiais disponíveis em cada alojamento.',
    ],
  },
  {
    title: 'Pré-check-in',
    paragraphs: [
      'Após a conclusão da reserva, o titular da reserva receberá um e-mail e/ou um SMS da DolceStay com a confirmação da reserva e com explicações importantes sobre o alojamento e informações sobre serviços adicionais (como o serviço de transfer ou o serviço de limpeza extra).',
      'Será pedido aos hóspedes que preencham um Boletim de Alojamento que é da maior importância para a preparação da estadia.',
      'O Boletim de Alojamento solicitará, nomeadamente, a hora de chegada, o número total de pessoas alojadas — para que possamos fornecer a quantidade correcta de roupa de cama e toalhas de banho — bem como informações obrigatórias relativas aos serviços estrangeiros e fronteiras.',
      'Os hóspedes devem indicar o número exato de pessoas no Boletim de Alojamento. O número de hóspedes indicado na reserva não pode exceder o número de hóspedes presentes no alojamento. Se o número de hóspedes ultrapassar o limite, DolceStay reserva-se o direito de exigir que os hóspedes abandonem o alojamento sem qualquer indemnização ou reembolso das taxas pagas.',
      'A DolceStay não pode assumir qualquer responsabilidade pelo preenchimento incorreto ou não preenchimento do Boletim de Alojamento.',
      'Qualquer tentativa de alterar e/ou violar as informações originais invalidará o Boletim de Alojamento e será objeto de anulação da reserva.',
    ],
  },
  {
    title: 'Política de cancelamento',
    paragraphs: [
      'Após a confirmação da reserva, aplicar-se-ão as seguintes taxas em caso de cancelamento:',
    ],
    listItems: [
      'O hóspede pagará 50% do valor total da reserva, em caso de cancelamento até 30 dias antes do check-in.',
      'O hóspede pagará 100% do valor total da reserva, em caso de cancelamento com menos de 30 dias antes da data de check-in.',
    ],
    paragraphsAfterList: [
      'Se ocorrer uma situação de overbooking (ou seja, reservas simultâneas no mesmo alojamento) no alojamento reservado pelo Cliente, o Cliente reconhece e aceita expressamente que a DolceStay reatribua a reserva num alojamento da mesma categoria (em qualquer caso, assegurando que a qualidade do Alojamento fornecido não é inferior ao alojamento reservado pelo Cliente), sem custos adicionais para o Cliente e sem que, por esse motivo, tenha direito a qualquer indemnização por parte da DolceStay.',
    ],
  },
  {
    title: 'Condições de permanência',
    paragraphs: [
      'O titular da reserva deve ter pelo menos 18 anos de idade e deve permanecer no alojamento reservado durante toda a estadia. Os hóspedes com menos de 18 anos só podem ser acomodados se acompanhados por um adulto que seja o titular da reserva.',
      'O titular da reserva deve fornecer um endereço válido, um contacto telefónico e um endereço de correio eletrónico.',
      'Não são permitidos animais de estimação (de qualquer raça, tamanho ou idade) nos alojamentos DolceStay. DolceStay reserva-se o direito de exigir que os hóspedes abandonem o alojamento sem qualquer indemnização ou reembolso das taxas pagas se um animal for encontrado no seu interior.',
      'Não é permitido fumar no interior do alojamento.',
      'Nos termos da alínea a) do n.º 1 do artigo 45.º da Convenção para a Aplicação do Acordo de Schengen, o alojamento de cidadãos estrangeiros deve ser comunicado aos serviços de estrangeiros e fronteiras, assim se entendendo todos aqueles que não tenham nacionalidade portuguesa.',
      'Para efeitos do disposto no número anterior, todos os hóspedes de nacionalidade estrangeira devem fornecer toda a informação relativa à sua identificação, até ao prazo máximo da data de check-in, através do Boletim de Alojamento.',
      'O hóspede deve comunicar à DolceStay quaisquer danos no alojamento, conteúdos, equipamentos ou acessórios que ocorram durante a sua estadia, mesmo que o hóspede considere que os danos são de desgaste normal e não são da sua responsabilidade. Se o hóspede não avisar a DolceStay de tais danos, pode ser considerado responsável pelos mesmos.',
    ],
  },
  {
    title: 'Serviços adicionais',
    paragraphs: [
      'A DolceStay oferece vários serviços adicionais aos hóspedes, tais como transferências privadas, serviços de limpeza e lavandaria, berços, bilhetes para várias atracções turísticas.',
      'Todos os serviços adicionais são efectuados mediante pedido e estão sujeitos a confirmação de disponibilidade.',
      'A DolceStay não se responsabiliza por quaisquer serviços prestados por fornecedores externos.',
    ],
  },
  {
    title: 'Check-in e Check-out',
    paragraphs: [
      'No ato do check-in, serão solicitados os documentos de identificação do responsável pela reserva, bem como de todos os hóspedes estrangeiros, para efeitos de confirmação das informações prestadas.',
      'Salvo acordo em contrário, o alojamento será ocupado na data do check-in entre as 16:00 e as 20:00 horas.',
      'Em caso de check-in tardio — a partir das 20:00 — poderá ser prestado serviço de check-in expresso, devendo o hóspede confirmar previamente esta possibilidade junto da DolceStay. O serviço de check-in expresso depende do preenchimento prévio e integral do Boletim de Alojamento por parte dos hóspedes.',
      'Para check-ins tardios, e quando não for possível disponibilizar o serviço de check-in expresso, será cobrada uma taxa fixa de 30€, que deverá ser paga no ato do check-in.',
      'O check-out é efetuado até às 11:00 horas e todos os hóspedes devem deixar o alojamento até à hora marcada. Solicita-se aos hóspedes que informem a hora de check-out pretendida para que um membro da equipa DolceStay possa estar presente.',
      'Se um membro da equipa DOLCESTAY não puder estar presente à hora do check-out, o hóspede pode deixar as chaves na mesa principal do alojamento e fechar a porta. O hóspede NÃO deve deixar as chaves na fechadura da porta.',
      'Se o hóspede se recusar a sair, a DolceStay reserva-se o direito de entrar no alojamento, retirar os seus objectos, mudar as fechaduras e tomar outras medidas necessárias. (O hóspede será responsável pelos custos de tais acções).',
      'Qualquer alteração das datas e das horas de partida e de entrada deve ser confirmada pela DOLCESTAY. Em caso de atraso, sem aviso prévio e sem confirmação da DolceStay, será cobrada uma taxa correspondente à tarifa de uma noite sobre o montante da caução.',
      'No momento do check-in, DolceStay fornece apenas UM conjunto de chaves, e os hóspedes devem ter o cuidado de não as perder ou deixar no interior do apartamento. Os hóspedes devem devolver todas as chaves aquando do check-out.',
      'Serão cobradas taxas adicionais por perda de chaves ou bloqueios. As taxas são cobradas da seguinte forma:',
    ],
    listItems: [
      'Chaves perdidas (preço por chave) — 30 euros',
      'Visita de emergência (entre as 9h00 e as 18h00) — 10 euros',
      'Visita de emergência (entre as 18h00 e as 9h00) — 25 euros',
    ],
    paragraphsAfterList: [
      'Se for necessário contratar um serviço de serralharia, o hóspede será responsável pelo valor total cobrado pelo prestador de serviços.',
      'O honorário do prestador de serviços baseia-se na complexidade, nos materiais, no tempo despendido e noutras variáveis.',
      'A DolceStay não se responsabiliza por qualquer objeto deixado no interior do apartamento após a partida do hóspede. Os objectos encontrados no apartamento podem ser devolvidos a pedido. O hóspede é totalmente responsável por todas as despesas relacionadas com o processo de devolução dos seus objetos.',
    ],
  },
  {
    title: 'Limpeza, lençóis e toalhas',
    paragraphs: [
      'O alojamento será limpo antes da chegada dos hóspedes. O serviço básico da DolceStay inclui um conjunto de toalhas, roupa de cama e alguns produtos de higiene pessoal para cada reserva.',
      'Serviços e produtos de limpeza adicionais, incluindo mudança de roupa de cama e toalhas, estão disponíveis por uma taxa adicional.',
      'Os hóspedes devem manter o alojamento o mais organizado e limpo possível, entregando-o no momento do check-out nas melhores condições de limpeza para que a DolceStay possa receber o próximo hóspede.',
      'Os hóspedes não devem deixar o lixo no interior do alojamento, junto à porta do mesmo ou no exterior da porta do edifício (quando aplicável), devendo utilizar os caixotes do lixo existentes na rua destinados a esse fim.',
    ],
  },
  {
    title: 'Equipamento, mobiliário e artigos de alojamento',
    paragraphs: [
      'Se um aparelho não funcionar, ou se o hóspede não souber como utilizar qualquer equipamento do alojamento, deve contactar o anfitrião responsável pela DolceStay.',
      'Não são permitidas alterações no alojamento ou no seu conteúdo.',
      'Todos os objetos que se encontram no alojamento pertencem ao proprietário e não devem ser deslocados ou retirados da propriedade durante a estadia.',
    ],
  },
  {
    title: 'Manutenção e pedidos especiais',
    paragraphs: [
      'Todo e qualquer problema no interior do alojamento (por exemplo, problemas eléctricos, mau funcionamento de equipamentos, fugas de água) deve ser imediatamente comunicado à DolceStay por e-mail ou telefone. Dependendo do problema, a resolução pode demorar até 72 horas ou mais se depender de serviços de terceiros.',
      'Respeitando a privacidade dos hóspedes, DolceStay reserva-se o direito de aceder ao alojamento a qualquer momento, se necessário, para inspecções, reparações e emergências.',
      'As camas extra e os berços podem ser solicitados com antecedência, mas estão limitados à disponibilidade no momento.',
    ],
  },
  {
    title: 'Ruído, atividade ilegal, segurança',
    paragraphs: [
      'De acordo com a lei, o período de descanso noturno é entre as 22h00 e as 08h00, pelo que os hóspedes devem permanecer em silêncio.',
      'Os hóspedes não devem incomodar os vizinhos, nomeadamente ao abrir ou fechar a porta do alojamento ou a porta do edifício onde este se integra (quando aplicável).',
      'Não são aceites reservas para actividades ilegais ou imorais.',
      'O hóspede cujo nome consta no e-mail de confirmação da reserva será responsável pelo comportamento de todo o grupo e compromete-se a evitar qualquer atividade ilegal.',
      'Os hóspedes não estão autorizados a invadir a privacidade do proprietário ou a publicar algo que possa permitir a terceiros identificar o endereço da propriedade ou a identidade do proprietário (mesmo que essa informação já seja do domínio público).',
      'O hóspede é o único responsável pela sua própria segurança durante a sua estadia no DolceStay. O hóspede deve ouvir todas as instruções ou explicações fornecidas pela DolceStay aquando do check-in.',
      'Se, durante a sua estadia, um hóspede se aperceber de algo que considere constituir um risco para a sua saúde e segurança, deve informar imediatamente DolceStay. Ao abandonar o alojamento, o hóspede deve certificar-se de que deixa os aparelhos a gás desligados, as janelas fechadas, o ar condicionado, o aquecimento central e as luzes apagados.',
    ],
  },
  {
    title: 'Responsabilidade',
    paragraphs: [
      'O serviço DolceStay limita-se legalmente ao alojamento e à relação com os hóspedes durante a estadia. DolceStay não será responsável por qualquer acontecimento exterior aos limites do alojamento, como a limpeza e a manutenção do edifício, os ruídos exteriores, as construções, os vizinhos, ou qualquer outro assunto que não esteja diretamente relacionado com o próprio alojamento.',
      'As fotografias e as descrições dos alojamentos são produzidas pela DolceStay. Podem ocorrer pequenas alterações nos alojamentos em relação às fotos do site, sem comprometer o seu estado geral ou as suas comodidades.',
      'DolceStay não indemnizará os hóspedes, não reembolsará as taxas, nem transferirá os hóspedes para outros alojamentos em função do seu aspeto ou do seu ambiente. É da responsabilidade do hóspede assegurar-se, antes de efetuar a reserva, de que a zona ou o bairro em que escolhe ficar é do seu agrado.',
      'A DolceStay não se responsabiliza por quaisquer danos causados, direta ou indiretamente, que possam ocorrer durante a estadia do hóspede no alojamento, tais como danos pessoais, roubo, furto ou comportamento criminoso, perdas devidas a incêndio ou má conduta, etc. O mesmo se aplica em relação a quaisquer deficiências no fornecimento de gás, eletricidade, água, telefone ou Internet.',
      'Todos os roubos, furtos ou qualquer comportamento criminoso devem ser imediatamente comunicados pelos hóspedes à DolceStay, bem como às autoridades policiais ou judiciais competentes.',
      'A DolceStay não se responsabiliza por eventuais atrasos, acidentes, perdas ou alterações de horários ou tarifas que estejam relacionados com os serviços dos nossos fornecedores. A DolceStay não é responsável por erros e/ou omissões, falsas declarações de terceiros, litígios entre um hóspede e um terceiro, ou pelo conteúdo de ligações externas diferentes daquela em que a reserva foi efetuada.',
      'Em caso de incumprimento das presentes condições ou de má conduta por parte do hóspede, DolceStay reserva-se o direito de o obrigar a abandonar o alojamento sem qualquer indemnização ou reembolso das taxas pagas.',
    ],
  },
  {
    title: 'Legislação e acontecimentos fortuitos',
    paragraphs: [
      'Este contrato é celebrado entre os hóspedes e a DolceStay, que está devidamente autorizada a organizar o aluguer do alojamento. Este contrato autoriza o hóspede a ocupar o alojamento durante o período e nas condições acordadas.',
      'Os hóspedes não são inquilinos do alojamento e não detêm a propriedade exclusiva do alojamento. No caso raro de um alojamento reservado ficar indisponível devido a danos causados por qualquer circunstância não imputável à DolceStay, tais como fugas de água ou de gás, a DolceStay não será responsável pelos inconvenientes causados, no entanto, tomará todas as medidas necessárias para transferir o hóspede para um alojamento com características semelhantes.',
      'Se o hóspede não aceitar a mudança, o montante total (excluindo os custos relativos aos dias em que o apartamento foi utilizado pelo hóspede, se for caso disso) será reembolsado, mas nem o proprietário nem a DolceStay serão responsáveis perante o hóspede por qualquer montante suplementar relacionado com a anulação da reserva. DolceStay não se responsabiliza por eventuais furtos de objetos deixados no alojamento.',
    ],
  },
  {
    title: 'Alterações e legislação aplicável',
    paragraphs: [
      'DolceStay reserva-se o direito de atualizar os seus termos e condições a qualquer momento, se necessário. É da responsabilidade das partes que utilizam o serviço DolceStay rever estes termos e condições em caso de alteração antes de efetuar uma reserva.',
      'Ao concordar em utilizar o serviço DolceStay, entende-se que o hóspede aceita quaisquer alterações e que todas as partes respeitarão essas alterações. As presentes condições não afectam os direitos dos hóspedes.',
      'Os presentes termos e condições estão sujeitos à lei portuguesa. Os Tribunais Portugueses têm jurisdição exclusiva em caso de ação legal relacionada com qualquer reserva de alojamento com DolceStay.',
    ],
  },
];
