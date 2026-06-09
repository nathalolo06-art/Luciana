export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export const TARGET_DATE = "2026-08-15T17:00:00"; // Target: 15 de Agosto

export const INVITATION_MESSAGE = {
  quote: "«En lo profundo del bosque más hermoso, donde la magia cobra vida y la luz de las estrellas guía el camino, celebro el comienzo de mi historia más mágica... ¡Mis quince años!»",
  body: "Hoy doy gracias por la vida, por el amor de mi familia y por la amistad de cada uno de ustedes. Celebro mis quince años cruzando el umbral de una nueva etapa cargada de ilusiones, sueños y esperanzas. Para mí, la mayor felicidad será contar con tu valiosa presencia y compartir juntos esta noche mágica, única e inolvidable.",
  signature: "Luciana Gómez"
};

export const PARTY_SCHEDULE: ScheduleItem[] = [
  {
    time: "05:00 PM",
    title: "Recepción de Invitados",
    description: "Iniciamos la velada con una cálida bienvenida y cóctel de bienvenida."
  },
  {
    time: "05:45 PM",
    title: "Entrada y Brindis",
    description: "La gran gala comienza: vals tradicional, palabras de honor y brindis especial."
  },
  {
    time: "06:30 PM",
    title: "Cena de Gala",
    description: "Un banquete de alta cocina diseñado para deleitar a nuestros seres queridos."
  },
  {
    time: "07:30 PM",
    title: "Apertura de Pistas y Sorpresas",
    description: "¡Comienza el baile, el show central y una noche llena de magia y diversión!"
  }
];
