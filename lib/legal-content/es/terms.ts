import type { LegalSection } from '@/lib/legal';

export const esTermsSections: LegalSection[] = [
  {
    id: 'booking-conditions',
    title: 'Condiciones de reserva',
    paragraphs: [
      'Las reservas están sujetas a disponibilidad y confirmación del pago.',
      'Para confirmar una reserva, el huésped debe realizar el pago aplicable de conformidad con lo indicado para cada alojamiento.',
      'Las tasas de reserva, depósitos de garantía, tasas de limpieza u otros cargos son los publicados en cada momento en la página de cada alojamiento.',
      'Todos los alojamientos requieren un depósito de garantía para cubrir posibles daños en la propiedad y/o en la comunidad de propietarios. El depósito se retendrá en el check-in cuando sea presencial, o hasta 48 horas antes de la estancia mediante pago en línea para el check-in exprés. No se cargará a los huéspedes ningún importe que impida el acceso a esos fondos hasta que se libere la retención.',
      'Si no se producen daños durante la estancia, el depósito se liberará tras el check-out en la misma tarjeta de crédito, en un plazo de 7 días desde el check-out.',
      'Si la propiedad no se encuentra en las mismas condiciones, se retendrá el importe del depósito hasta el pago de los elementos dañados.',
      'La reserva puede cancelarse si no se puede autorizar el depósito de garantía; los huéspedes deben asegurarse de que su tarjeta de crédito es válida y dispone de fondos suficientes. Si no se puede retener el depósito, se notificará al cliente por correo electrónico o SMS y dispondrá de 12 horas para probar otro método de pago.',
      'Todos los precios incluyen el IVA al tipo legal aplicable.',
    ],
  },
  {
    id: 'payment-options',
    title: 'Opciones de pago',
    paragraphs: [
      'Los pagos de reserva pueden realizarse con tarjeta de crédito American Express, Visa o MasterCard.',
      'Los huéspedes están también sujetos a normas especiales disponibles para cada alojamiento.',
    ],
  },
  {
    id: 'pre-check-in',
    title: 'Pre-check-in',
    paragraphs: [
      'Tras completar la reserva, el titular de la misma recibirá un correo electrónico y/o SMS de DolceStay con la confirmación de la reserva e información importante sobre el alojamiento y servicios adicionales (como traslado o limpieza extra).',
      'Se solicitará a los huéspedes que completen un Formulario de Alojamiento, esencial para preparar la estancia.',
      'El Formulario de Alojamiento solicitará, entre otros datos, la hora de llegada, el número total de huéspedes — para que podamos proporcionar la cantidad correcta de ropa de cama y toallas —, así como la información obligatoria para los servicios de inmigración y fronteras.',
      'Los huéspedes deben indicar el número exacto de personas en el Formulario de Alojamiento. El número de huéspedes de la reserva no puede superar el número de personas presentes en el alojamiento. Si se supera el límite, DolceStay se reserva el derecho de exigir a los huéspedes que abandonen el alojamiento sin compensación ni reembolso de las tasas abonadas.',
      'DolceStay no puede asumir responsabilidad alguna por la cumplimentación incorrecta o incompleta del Formulario de Alojamiento.',
      'Cualquier intento de alterar y/o falsificar la información original invalidará el Formulario de Alojamiento y dará lugar a la cancelación de la reserva.',
    ],
  },
  {
    id: 'cancellation',
    title: 'Política de cancelación',
    paragraphs: ['Tras la confirmación de la reserva, se aplican las siguientes tasas en caso de cancelación:'],
    listItems: [
      'El huésped abona el 50 % del importe total de la reserva si la cancelación se produce hasta 30 días antes del check-in.',
      'El huésped abona el 100 % del importe total de la reserva si la cancelación se produce con menos de 30 días de antelación al check-in.',
    ],
    paragraphsAfterList: [
      'En caso de sobreventa (reservas simultáneas del mismo alojamiento), el cliente reconoce y acepta expresamente que DolceStay reasignará la reserva a un alojamiento de la misma categoría (garantizando que la calidad no sea inferior a la del alojamiento reservado), sin coste adicional y sin derecho a indemnización por parte de DolceStay.',
    ],
  },
  {
    id: 'stay-conditions',
    title: 'Condiciones de estancia',
    paragraphs: [
      'El titular de la reserva debe tener al menos 18 años y permanecer en el alojamiento reservado durante toda la estancia. Los huéspedes menores de 18 años solo podrán alojarse si van acompañados de un adulto que sea el titular de la reserva.',
      'El titular de la reserva debe facilitar una dirección válida, teléfono de contacto y dirección de correo electrónico.',
      'No se permiten mascotas (de cualquier raza, tamaño o edad) en los alojamientos de DolceStay. DolceStay se reserva el derecho de exigir a los huéspedes que abandonen el alojamiento sin compensación ni reembolso si se detecta un animal en las instalaciones.',
      'No está permitido fumar en el interior del alojamiento.',
      'De conformidad con las normas del Acuerdo de Schengen, el alojamiento de ciudadanos extranjeros debe comunicarse a los servicios de inmigración y fronteras — todos aquellos que no tengan nacionalidad portuguesa.',
      'A tal efecto, todos los huéspedes extranjeros deben facilitar la información de identificación completa antes de la fecha de check-in mediante el Formulario de Alojamiento.',
      'El huésped debe comunicar a DolceStay cualquier daño en el alojamiento, contenido, equipamiento o accesorios durante la estancia, aunque se considere desgaste normal y no sea de su responsabilidad. La omisión de dicha comunicación puede dar lugar a responsabilidad.',
    ],
  },
  {
    id: 'additional-services',
    title: 'Servicios adicionales',
    paragraphs: [
      'DolceStay ofrece diversos servicios adicionales como traslados privados, limpieza y lavandería, cunas y entradas para atracciones turísticas.',
      'Todos los servicios adicionales se prestan bajo petición y están sujetos a confirmación de disponibilidad.',
      'DolceStay no es responsable de los servicios prestados por proveedores externos.',
    ],
  },
  {
    id: 'check-in-out',
    title: 'Check-in y check-out',
    paragraphs: [
      'En el check-in se solicitarán los documentos de identificación del titular de la reserva y de todos los huéspedes extranjeros para confirmar la información facilitada.',
      'Salvo acuerdo en contrario, el alojamiento se ocupará el día del check-in entre las 16:00 y las 20:00 horas.',
      'Para check-in tardío — a partir de las 20:00 — puede estar disponible el check-in exprés; los huéspedes deben confirmar esta posibilidad con DolceStay con antelación. El check-in exprés depende de la cumplimentación previa completa del Formulario de Alojamiento.',
      'Para check-ins tardíos cuando el check-in exprés no esté disponible, se cobrará una tarifa fija de 30 € en el check-in.',
      'El check-out es a las 11:00 horas y todos los huéspedes deben abandonar el alojamiento a la hora acordada. Indique la hora prevista de check-out para que un miembro del equipo de DolceStay pueda estar presente.',
      'Si ningún miembro del equipo puede estar presente en el check-out, los huéspedes pueden dejar las llaves en la mesa principal y cerrar la puerta. Los huéspedes NO deben dejar las llaves en la cerradura de la puerta.',
      'Si un huésped se niega a abandonar el alojamiento, DolceStay se reserva el derecho de acceder al mismo, retirar pertenencias, cambiar cerraduras y adoptar otras medidas necesarias (el huésped será responsable de los costes).',
      'Cualquier cambio en las fechas y horas de llegada o salida debe ser confirmado por DolceStay. En caso de retraso sin aviso previo y confirmación, se cargará contra el depósito una tarifa equivalente a una noche.',
      'En el check-in, DolceStay facilita únicamente UN juego de llaves; los huéspedes deben tener cuidado de no perderlas ni dejarlas dentro del apartamento. Todas las llaves deben devolverse en el check-out.',
      'Se aplican tasas adicionales por llaves perdidas o por quedar fuera del alojamiento de la siguiente forma:',
    ],
    listItems: [
      'Llaves perdidas (por llave) — 30 €',
      'Visita de emergencia (9:00 – 18:00) — 10 €',
      'Visita de emergencia (18:00 – 9:00) — 25 €',
    ],
    paragraphsAfterList: [
      'Si se requieren servicios de cerrajería, el huésped es responsable del importe íntegro cobrado por el proveedor del servicio, en función de la complejidad, materiales, tiempo y otras variables.',
      'DolceStay no es responsable de ningún objeto dejado en el apartamento tras la salida. Los objetos encontrados pueden devolverse a petición; el huésped es plenamente responsable de todos los costes relacionados con la devolución.',
    ],
  },
  {
    id: 'cleaning-linen',
    title: 'Limpieza, ropa de cama y toallas',
    paragraphs: [
      'El alojamiento será limpiado antes de la llegada de los huéspedes. El servicio básico de DolceStay incluye un juego de toallas, ropa de cama y algunos productos de higiene personal por reserva.',
      'Servicios de limpieza y productos adicionales, incluido el cambio de ropa de cama y toallas, están disponibles con un suplemento.',
      'Los huéspedes deben mantener el alojamiento lo más ordenado y limpio posible, entregándolo en el check-out en las mejores condiciones para que DolceStay pueda recibir al siguiente huésped.',
      'Los huéspedes no deben dejar basura en el interior del alojamiento, junto a su puerta ni fuera de la puerta del edificio (cuando proceda); deben utilizarse los contenedores de la calle.',
    ],
  },
  {
    id: 'equipment',
    title: 'Equipamiento, mobiliario y elementos del alojamiento',
    paragraphs: [
      'Si un electrodoméstico no funciona, o si el huésped no sabe utilizar algún equipamiento, debe contactar con el anfitrión de DolceStay responsable.',
      'No está permitido realizar alteraciones en el alojamiento ni en su contenido.',
      'Todos los objetos del alojamiento pertenecen al propietario y no deben moverse ni retirarse durante la estancia.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Mantenimiento y solicitudes especiales',
    paragraphs: [
      'Cualquier problema en el interior del alojamiento (p. ej. problemas eléctricos, mal funcionamiento de equipos, fugas de agua) debe comunicarse a DolceStay de inmediato por correo electrónico o teléfono. Según el problema, la resolución puede tardar hasta 72 horas o más si se requieren servicios de terceros.',
      'Respetando la privacidad del huésped, DolceStay se reserva el derecho de acceder al alojamiento en cualquier momento cuando sea necesario para inspecciones, reparaciones y emergencias.',
      'Se pueden solicitar camas supletorias y cunas con antelación, pero están sujetas a disponibilidad.',
    ],
  },
  {
    id: 'noise-safety',
    title: 'Ruido, actividades ilegales, seguridad',
    paragraphs: [
      'Por ley, el período de silencio nocturno es entre las 22:00 y las 8:00 horas; los huéspedes deben permanecer en silencio.',
      'Los huéspedes no deben molestar a los vecinos, incluido al abrir o cerrar la puerta del alojamiento o del edificio (cuando proceda).',
      'No se aceptan reservas para actividades ilegales o inmorales.',
      'El huésped indicado en el correo electrónico de confirmación de la reserva es responsable del comportamiento de todo el grupo y se compromete a evitar cualquier actividad ilegal.',
      'Los huéspedes no están autorizados a invadir la privacidad del propietario ni a publicar nada que permita a terceros identificar la dirección de la propiedad o la identidad del propietario.',
      'El huésped es el único responsable de su propia seguridad durante la estancia. Debe seguir todas las instrucciones facilitadas por DolceStay en el check-in.',
      'Si un huésped observa algo que pueda suponer un riesgo para la salud y la seguridad, debe informar a DolceStay de inmediato. Al salir, los huéspedes deben asegurarse de que los aparatos de gas están apagados, las ventanas cerradas, el aire acondicionado, la calefacción central y las luces apagadas.',
    ],
  },
  {
    id: 'liability',
    title: 'Responsabilidad',
    paragraphs: [
      'El servicio de DolceStay se limita legalmente al alojamiento y a la relación con los huéspedes durante la estancia. DolceStay no es responsable de hechos ajenos al alojamiento, como limpieza y mantenimiento del edificio, ruido exterior, obras, vecinos, o cualquier cuestión no directamente relacionada con el alojamiento en sí.',
      'Las fotografías y descripciones son elaboradas por DolceStay. Pueden producirse cambios menores respecto a las fotos del sitio web sin comprometer la condición general ni las comodidades.',
      'DolceStay no indemnizará a los huéspedes, reembolsará tasas ni trasladará a otros alojamientos por motivos de aspecto o entorno. Es responsabilidad del huésped asegurarse de que la zona o el barrio son de su agrado antes de reservar.',
      'DolceStay no es responsable de daños, directos o indirectos, durante la estancia, incluidas lesiones personales, robo, conducta delictiva, pérdidas relacionadas con incendios, mala conducta, o deficiencias en el suministro de gas, electricidad, agua, teléfono o Internet.',
      'El robo o la conducta delictiva deben comunicarse de inmediato a DolceStay y a las autoridades policiales o judiciales competentes.',
      'DolceStay no es responsable de retrasos, accidentes, pérdidas o cambios de horarios o tarifas relacionados con servicios de proveedores, errores u omisiones de terceros, disputas entre un huésped y un tercero, ni del contenido de enlaces externos distintos de la plataforma de reservas.',
      'En caso de incumplimiento de estas condiciones o de mala conducta, DolceStay se reserva el derecho de exigir al huésped que abandone el alojamiento sin compensación ni reembolso de las tasas abonadas.',
    ],
  },
  {
    id: 'force-majeure',
    title: 'Legislación aplicable y fuerza mayor',
    paragraphs: [
      'Este contrato es entre los huéspedes y DolceStay, debidamente autorizada para gestionar el alquiler del alojamiento. Autoriza al huésped a ocupar el alojamiento durante el período y en las condiciones acordadas.',
      'Los huéspedes no son arrendatarios y no tienen propiedad exclusiva. Si el alojamiento reservado deja de estar disponible por circunstancias no imputables a DolceStay (p. ej. fugas de agua o gas), DolceStay no es responsable de las molestias, pero adoptará medidas para trasladar al huésped a un alojamiento similar.',
      'Si el huésped no acepta el cambio, se reembolsará el importe íntegro (excluidos los costes de los días ya utilizados, si procede), pero ni el propietario ni DolceStay son responsables de ningún importe adicional relacionado con la cancelación. DolceStay no es responsable del robo de objetos dejados en el alojamiento.',
    ],
  },
  {
    id: 'changes-law',
    title: 'Modificaciones y ley aplicable',
    paragraphs: [
      'DolceStay se reserva el derecho de actualizar estos términos y condiciones en cualquier momento cuando sea necesario. Los usuarios deben revisarlos antes de realizar una reserva si han sido modificados.',
      'Al aceptar utilizar el servicio de DolceStay, el huésped acepta cualquier modificación y todas las partes las respetarán. Estas condiciones no afectan a los derechos legales de los huéspedes.',
      'Estos términos y condiciones se rigen por la legislación portuguesa. Los tribunales portugueses tienen jurisdicción exclusiva para cualquier acción legal relacionada con una reserva de alojamiento con DolceStay.',
    ],
  },
];
