import type { LegalSection } from '@/lib/legal';

export const frTermsSections: LegalSection[] = [
  {
    id: 'booking-conditions',
    title: 'Conditions de réservation',
    paragraphs: [
      'Les réservations sont soumises à disponibilité et à confirmation du paiement.',
      'Pour confirmer une réservation, le client doit effectuer le paiement applicable conformément à ce qui est indiqué pour chaque hébergement.',
      'Les frais de réservation, cautions, frais de ménage ou autres charges sont ceux affichés à tout moment sur la page de chaque hébergement.',
      'Tous les hébergements exigent une caution pour couvrir d\'éventuels dommages au logement et/ou à la copropriété. La caution sera retenue à l\'enregistrement en personne, ou jusqu\'à 48 heures avant le séjour via paiement en ligne pour l\'enregistrement express. Aucun montant empêchant l\'accès à ces fonds ne sera débité aux clients tant que la retenue n\'est pas levée.',
      'En l\'absence de dommages pendant le séjour, la caution sera libérée après le départ, sur la même carte bancaire, dans un délai de 7 jours suivant le départ.',
      'Si le logement n\'est pas dans le même état, le montant de la caution sera retenu jusqu\'au paiement des éléments endommagés.',
      'La réservation peut être annulée si la caution ne peut pas être autorisée ; les clients doivent s\'assurer que leur carte bancaire est valide et dispose de fonds suffisants. Si la caution ne peut pas être retenue, le client sera informé par courriel ou SMS et disposera de 12 heures pour essayer un autre mode de paiement.',
      'Tous les prix incluent la TVA au taux légal en vigueur.',
    ],
  },
  {
    id: 'payment-options',
    title: 'Options de paiement',
    paragraphs: [
      'Les paiements de réservation peuvent être effectués par carte bancaire American Express, Visa ou MasterCard.',
      'Les clients sont également soumis aux règles particulières disponibles pour chaque hébergement.',
    ],
  },
  {
    id: 'pre-check-in',
    title: 'Pré-enregistrement',
    paragraphs: [
      'Après finalisation de la réservation, le titulaire de la réservation recevra un courriel et/ou un SMS de DolceStay avec la confirmation de réservation et des informations importantes sur l\'hébergement et les services complémentaires (tels que transfert ou ménage supplémentaire).',
      'Les clients seront invités à remplir un formulaire d\'hébergement, essentiel à la préparation du séjour.',
      'Le formulaire d\'hébergement demandera, entre autres, l\'heure d\'arrivée, le nombre total de clients — afin que nous puissions fournir la quantité correcte de linge de lit et de serviettes — ainsi que les informations obligatoires pour les services d\'immigration et des frontières.',
      'Les clients doivent indiquer le nombre exact de personnes sur le formulaire d\'hébergement. Le nombre de clients sur la réservation ne peut pas dépasser le nombre présent dans l\'hébergement. En cas de dépassement de la limite, DolceStay se réserve le droit d\'exiger le départ des clients sans indemnisation ni remboursement des sommes versées.',
      'DolceStay ne peut accepter aucune responsabilité en cas de remplissage incorrect ou incomplet du formulaire d\'hébergement.',
      'Toute tentative de modification et/ou de falsification des informations d\'origine invalidera le formulaire d\'hébergement et entraînera l\'annulation de la réservation.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Politique d\'annulation',
    paragraphs: ['Après confirmation de la réservation, les frais suivants s\'appliquent en cas d\'annulation :'],
    listItems: [
      'Le client paie 50 % du montant total de la réservation si l\'annulation intervient jusqu\'à 30 jours avant l\'enregistrement.',
      'Le client paie 100 % du montant total de la réservation si l\'annulation intervient moins de 30 jours avant l\'enregistrement.',
    ],
    paragraphsAfterList: [
      'En cas de surréservation (réservations simultanées pour le même hébergement), le client reconnaît et accepte expressément que DolceStay réaffectera la réservation vers un hébergement de même catégorie (en garantissant une qualité non inférieure à l\'hébergement réservé), sans coût supplémentaire et sans droit à indemnisation de la part de DolceStay.',
    ],
  },
  {
    id: 'stay-conditions',
    title: 'Conditions de séjour',
    paragraphs: [
      'Le titulaire de la réservation doit être âgé d\'au moins 18 ans et doit demeurer dans l\'hébergement réservé pendant toute la durée du séjour. Les clients de moins de 18 ans ne peuvent être hébergés que s\'ils sont accompagnés d\'un adulte titulaire de la réservation.',
      'Le titulaire de la réservation doit fournir une adresse valide, un numéro de téléphone et une adresse électronique.',
      'Les animaux de compagnie (quelle que soit la race, la taille ou l\'âge) ne sont pas autorisés dans les hébergements DolceStay. DolceStay se réserve le droit d\'exiger le départ des clients sans indemnisation ni remboursement si un animal est trouvé sur les lieux.',
      'Il est interdit de fumer à l\'intérieur de l\'hébergement.',
      'Conformément aux règles de l\'accord de Schengen, l\'hébergement des citoyens étrangers doit être déclaré aux autorités d\'immigration et des frontières — toutes les personnes ne détenant pas la nationalité portugaise.',
      'À cette fin, tous les clients étrangers doivent fournir l\'intégralité des informations d\'identification avant la date d\'enregistrement via le formulaire d\'hébergement.',
      'Le client doit signaler à DolceStay tout dommage à l\'hébergement, au contenu, aux équipements ou accessoires pendant le séjour, même s\'il est considéré comme une usure normale et n\'est pas de sa responsabilité. Le défaut de notification peut entraîner une responsabilité.',
    ],
  },
  {
    id: 'additional-services',
    title: 'Services complémentaires',
    paragraphs: [
      'DolceStay propose divers services complémentaires tels que transferts privés, ménage et blanchisserie, lits bébé et billets pour attractions touristiques.',
      'Tous les services complémentaires sont fournis sur demande et sous réserve de confirmation de disponibilité.',
      'DolceStay n\'est pas responsable des services fournis par des prestataires externes.',
    ],
  },
  {
    id: 'check-in-out',
    title: 'Enregistrement et départ',
    paragraphs: [
      'À l\'enregistrement, les pièces d\'identité du titulaire de la réservation et de tous les clients étrangers seront demandées afin de confirmer les informations fournies.',
      'Sauf accord contraire, l\'hébergement sera occupé le jour de l\'enregistrement entre 16 h 00 et 20 h 00.',
      'Pour un enregistrement tardif — à partir de 20 h 00 — un enregistrement express peut être disponible ; les clients doivent confirmer cette possibilité avec DolceStay à l\'avance. L\'enregistrement express dépend du remplissage préalable complet du formulaire d\'hébergement.',
      'Pour les enregistrements tardifs lorsque l\'enregistrement express n\'est pas disponible, des frais fixes de 30 € seront facturés à l\'enregistrement.',
      'Le départ doit avoir lieu avant 11 h 00 et tous les clients doivent quitter les lieux à l\'heure convenue. Veuillez indiquer l\'heure de départ prévue afin qu\'un membre de l\'équipe DolceStay puisse être présent.',
      'Si aucun membre de l\'équipe ne peut être présent au départ, les clients peuvent laisser les clés sur la table principale et fermer la porte. Les clients ne doivent PAS laisser les clés dans la serrure de la porte.',
      'Si un client refuse de quitter les lieux, DolceStay se réserve le droit d\'entrer dans l\'hébergement, de retirer les effets personnels, de changer les serrures et de prendre toute autre mesure nécessaire (le client en supportera les frais).',
      'Toute modification des dates et heures d\'arrivée ou de départ doit être confirmée par DolceStay. En cas de retard sans préavis et confirmation préalables, des frais équivalents au tarif d\'une nuit seront prélevés sur la caution.',
      'À l\'enregistrement, DolceStay ne fournit qu\'UN jeu de clés ; les clients doivent veiller à ne pas les perdre ni les laisser à l\'intérieur de l\'appartement. Toutes les clés doivent être restituées au départ.',
      'Des frais supplémentaires s\'appliquent en cas de perte de clés ou de porte claquée comme suit :',
    ],
    listItems: [
      'Clés perdues (par clé) — 30 €',
      'Visite d\'urgence (9 h 00 – 18 h 00) — 10 €',
      'Visite d\'urgence (18 h 00 – 9 h 00) — 25 €',
    ],
    paragraphsAfterList: [
      'Si les services d\'un serrurier sont nécessaires, le client est responsable du montant total facturé par le prestataire, en fonction de la complexité, des matériaux, du temps et d\'autres variables.',
      'DolceStay n\'est pas responsable des objets laissés dans l\'appartement après le départ. Les objets trouvés peuvent être renvoyés sur demande ; le client est entièrement responsable de tous les frais liés au renvoi.',
    ],
  },
  {
    id: 'cleaning-linen',
    title: 'Ménage, linge et serviettes',
    paragraphs: [
      'L\'hébergement sera nettoyé avant l\'arrivée des clients. Le service de base de DolceStay comprend un jeu de serviettes, de linge de lit et certains produits d\'hygiène personnelle par réservation.',
      'Des services de ménage et produits supplémentaires, y compris le changement de linge de lit et de serviettes, sont disponibles moyennant supplément.',
      'Les clients doivent maintenir l\'hébergement aussi propre et rangé que possible, en le remettant au départ dans les meilleures conditions afin que DolceStay puisse accueillir le client suivant.',
      'Les clients ne doivent pas laisser de déchets à l\'intérieur de l\'hébergement, devant sa porte ou devant la porte de l\'immeuble (le cas échéant) ; les poubelles de rue doivent être utilisées.',
    ],
  },
  {
    id: 'equipment',
    title: 'Équipements, mobilier et éléments de l\'hébergement',
    paragraphs: [
      'Si un appareil ne fonctionne pas, ou si le client ne sait pas utiliser un équipement, il doit contacter l\'hôte DolceStay responsable.',
      'Toute modification de l\'hébergement ou de son contenu est interdite.',
      'Tous les objets présents dans l\'hébergement appartiennent au propriétaire et ne doivent pas être déplacés ni retirés pendant le séjour.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance et demandes spéciales',
    paragraphs: [
      'Tout problème à l\'intérieur de l\'hébergement (p. ex. problèmes électriques, dysfonctionnement d\'équipement, fuites d\'eau) doit être signalé immédiatement à DolceStay par courriel ou téléphone. Selon la nature du problème, la résolution peut prendre jusqu\'à 72 heures ou plus si des services tiers sont nécessaires.',
      'Dans le respect de la vie privée des clients, DolceStay se réserve le droit d\'accéder à l\'hébergement à tout moment lorsque cela est nécessaire pour des inspections, réparations et urgences.',
      'Des lits supplémentaires et lits bébé peuvent être demandés à l\'avance mais sont soumis à disponibilité.',
    ],
  },
  {
    id: 'noise-safety',
    title: 'Bruit, activités illégales, sécurité',
    paragraphs: [
      'La loi prévoit une période de tranquillité nocturne entre 22 h 00 et 8 h 00 ; les clients doivent rester discrets.',
      'Les clients ne doivent pas déranger les voisins, y compris lors de l\'ouverture ou de la fermeture de la porte de l\'hébergement ou de l\'immeuble (le cas échéant).',
      'Les réservations à des fins d\'activités illégales ou immorales ne sont pas acceptées.',
      'Le client nommé sur le courriel de confirmation de réservation est responsable du comportement de l\'ensemble du groupe et s\'engage à éviter toute activité illégale.',
      'Les clients ne sont pas autorisés à porter atteinte à la vie privée du propriétaire ni à publier quoi que ce soit permettant à des tiers d\'identifier l\'adresse du logement ou l\'identité du propriétaire.',
      'Le client est seul responsable de sa propre sécurité pendant son séjour. Le client doit suivre toutes les instructions données par DolceStay à l\'enregistrement.',
      'Si un client constate un élément pouvant présenter un risque pour la santé et la sécurité, il doit en informer DolceStay immédiatement. Au départ, les clients doivent s\'assurer que les appareils à gaz sont éteints, que les fenêtres sont fermées, et que la climatisation, le chauffage central et les lumières sont coupés.',
    ],
  },
  {
    id: 'liability',
    title: 'Responsabilité',
    paragraphs: [
      'Le service de DolceStay est légalement limité à l\'hébergement et à la relation avec les clients pendant le séjour. DolceStay n\'est pas responsable des événements extérieurs à l\'hébergement, tels que le ménage et l\'entretien de l\'immeuble, le bruit extérieur, les travaux, les voisins, ou toute question non directement liée à l\'hébergement lui-même.',
      'Les photographies et descriptions sont produites par DolceStay. De légères différences par rapport aux photos du site peuvent survenir sans compromettre l\'état général ou les équipements.',
      'DolceStay n\'indemnisera pas les clients, ne remboursera pas les frais ni ne transférera les clients vers d\'autres hébergements en raison de l\'apparence ou de l\'environnement. Il incombe au client de s\'assurer que le quartier ou le voisinage lui convient avant de réserver.',
      'DolceStay n\'est pas responsable des dommages, directs ou indirects, pendant le séjour, y compris les blessures corporelles, le vol, les comportements criminels, les pertes liées à un incendie, les fautes ou les carences dans l\'approvisionnement en gaz, électricité, eau, téléphone ou Internet.',
      'Tout vol ou comportement criminel doit être signalé immédiatement à DolceStay et aux autorités policières ou judiciaires compétentes.',
      'DolceStay n\'est pas responsable des retards, accidents, pertes ou modifications d\'horaires ou de tarifs liés aux services de prestataires, aux erreurs ou omissions de tiers, aux litiges entre un client et un tiers, ou au contenu de liens externes autres que la plateforme de réservation.',
      'En cas de manquement aux présentes conditions ou de mauvaise conduite, DolceStay se réserve le droit d\'exiger le départ du client sans indemnisation ni remboursement des sommes versées.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Droit applicable et force majeure',
    paragraphs: [
      'Le présent contrat est conclu entre les clients et DolceStay, dûment autorisée à organiser la location de l\'hébergement. Il autorise le client à occuper l\'hébergement pour la période et aux conditions convenues.',
      'Les clients ne sont pas locataires et ne disposent pas d\'un droit de propriété exclusive. Si l\'hébergement réservé devient indisponible pour des circonstances non imputables à DolceStay (p. ex. fuites d\'eau ou de gaz), DolceStay n\'est pas responsable des désagréments mais prendra des mesures pour transférer le client vers un hébergement similaire.',
      'Si le client n\'accepte pas le changement, le montant intégral (hors frais pour les jours déjà utilisés, le cas échéant) sera remboursé, mais ni le propriétaire ni DolceStay ne sont responsables d\'un montant supplémentaire lié à l\'annulation. DolceStay n\'est pas responsable du vol d\'objets laissés dans l\'hébergement.',
    ],
  },
  {
    id: 'changes-law',
    title: 'Modifications et droit applicable',
    paragraphs: [
      'DolceStay se réserve le droit de mettre à jour les présentes conditions générales à tout moment lorsque cela est nécessaire. Les utilisateurs sont invités à les consulter avant toute réservation en cas de modification.',
      'En acceptant d\'utiliser le service de DolceStay, le client accepte toute modification et toutes les parties s\'y conformeront. Les présentes conditions n\'affectent pas les droits légaux des clients.',
      'Les présentes conditions générales sont régies par le droit portugais. Les tribunaux portugais ont compétence exclusive pour toute action en justice relative à une réservation d\'hébergement avec DolceStay.',
    ],
  },
];
