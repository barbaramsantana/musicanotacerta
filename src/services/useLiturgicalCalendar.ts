/**
 * Serviço para calcular o Calendário Litúrgico Católico
 * Calcula os tempos litúrgicos e as festas mais importantes
 */

interface LiturgicalPeriod {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  color: string;
  icon: string;
  symbolism: string;
}

interface MinistryDate {
  date: Date;
  title: string;
  description?: string;
  color?: string;
  link?: string;
  arquivo?: string;
}

interface LiturgicalInfo {
  currentPeriod: LiturgicalPeriod;
  upcomingPeriods: LiturgicalPeriod[];
  dayOfYear: number;
  yearProgress: number;
}

// Datas do ministério de música - dados persistidos em localStorage
const MINISTRY_DATES_KEY = 'ministryDates';

export function getMinistryDates(): MinistryDate[] {
  const stored = localStorage.getItem(MINISTRY_DATES_KEY);
  if (stored) {
    try {
      const dates = JSON.parse(stored);
      return dates.map((d: any) => ({
        ...d,
        date: new Date(d.date)
      }));
    } catch {
      return getDefaultMinistryDates();
    }
  }
  return getDefaultMinistryDates();
}

export function getDefaultMinistryDates(): MinistryDate[] {
  return [
    {
      date: new Date(2026, 2, 14),
      title: 'Escala de Ministério',
      description: 'Lages',
      color: '#FF6B9D',
      link: 'https://docs.google.com/document/d/1AF0qlMxd7OZTg-qpAPsNYTtW-f3RM7wz/edit?usp=sharing&ouid=116940039726088334116&rtpof=true&sd=true',
      arquivo: 'larges.html',
    },
    {
      date: new Date(2026, 2, 22),
      title: 'Escala de Ministério',
      description: 'Dominical 9h',
      color: '#FF6B9D'
    }
  ];
}

export function addMinistryDate(date: Date, title: string, description?: string): void {
  const dates = getMinistryDates();
  dates.push({
    date,
    title,
    description,
    color: '#FF6B9D'
  });
  localStorage.setItem(MINISTRY_DATES_KEY, JSON.stringify(dates));
}

export function removeMinistryDate(date: Date): void {
  const dates = getMinistryDates().filter(d => !isSameDay(d.date, date));
  localStorage.setItem(MINISTRY_DATES_KEY, JSON.stringify(dates));
}

function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate();
}

export function calculateEaster(year: number): Date {
  // Algoritmo de Computus para calcular a data da Páscoa
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

export function getLiturgicalCalendar(date: Date = new Date()): LiturgicalInfo {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const startOfYear = new Date(year, 0, 1);
  const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const endOfYear = new Date(year, 11, 31);
  const yearProgress = Math.round((dayOfYear / 365) * 100);

  // Calcular a data da Páscoa para o ano atual
  const easter = calculateEaster(year);
  const easterMonth = easter.getMonth();
  const easterDay = easter.getDate();

  // Definir os períodos litúrgicos
  let currentPeriod: LiturgicalPeriod;
  let upcomingPeriods: LiturgicalPeriod[] = [];

  // Tempo do Advento (4 domingos antes do Natal - aproximadamente 22 de novembro a 25 de dezembro)
  const adventStart = new Date(year, 10, 27); // Aproximadamente 4 semanas antes
  const adventEnd = new Date(year, 11, 24);

  // Tempo de Natal (25 de dezembro a 5 de janeiro)
  const christmasStart = new Date(year, 11, 25);
  const christmasEnd = new Date(year + 1, 0, 5);

  // Tempo da Epifania (6 de janeiro até terça-feira antes da Quaresma)
  const epiphanyStart = new Date(year, 0, 6);
  const epiphanyEnd = new Date(easter.getTime() - 47 * 24 * 60 * 60 * 1000); // 47 dias antes da Páscoa

  // Quaresma (46 dias antes da Páscoa, começando na Quarta-feira de Cinzas)
  const lentStart = new Date(easter.getTime() - 46 * 24 * 60 * 60 * 1000);
  const lentEnd = new Date(easter.getTime() - 1 * 24 * 60 * 60 * 1000);

  // Pascoa (domingo de Páscoa e Oitava da Páscoa - 8 dias)
  const easterStart = easter;
  const easterOctaveEnd = new Date(easter.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Tempo Pascoal (desde Páscoa até Pentecostes - 50 dias)
  const easterSeasonEnd = new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000); // Pentecostes

  // Tempo Comum (resto do ano)

  const periods: LiturgicalPeriod[] = [
    {
      name: 'Advento',
      description: 'Tempo de preparação espiritual para o Natal. Período de esperança e renovação.',
      startDate: adventStart,
      endDate: adventEnd,
      color: '#8B008B',
      icon: 'mdi-candle',
      symbolism: 'Preparação e esperança'
    },
    {
      name: 'Natal',
      description: 'Celebração do nascimento de Jesus Cristo. Tempo de alegria e encarnação do Verbo divino.',
      startDate: christmasStart,
      endDate: new Date(year, 11, 31),
      color: '#C41E3A',
      icon: 'mdi-star',
      symbolism: 'Incarnação e alegria'
    },
    {
      name: 'Tempo Comum (Inverno)',
      description: 'Período do calendário litúrgico entre Natal e Quaresma. Reflete sobre a vida de Jesus.',
      startDate: new Date(year + 1, 0, 1),
      endDate: new Date(year + 1, 0, 5),
      color: '#228B22',
      icon: 'mdi-leaf',
      symbolism: 'Vida de Jesus Cristo'
    },
    {
      name: 'Epifania',
      description: 'Manifestação de Jesus aos magos do Oriente. Celebra a revelação de Jesus a todas as nações.',
      startDate: epiphanyStart,
      endDate: epiphanyEnd,
      color: '#FFD700',
      icon: 'mdi-brightness-7',
      symbolism: 'Manifestação e Luz'
    },
    {
      name: 'Quaresma',
      description: 'Período de 40 dias de penitência e preparação para a Páscoa. Tempo de conversão e oração.',
      startDate: lentStart,
      endDate: lentEnd,
      color: '#8B4513',
      icon: 'mdi-cross',
      symbolism: 'Penitência e conversão'
    },
    {
      name: 'Páscoa',
      description: 'Pico do ano litúrgico. Celebração da Ressurreição de Jesus Cristo e esperança da salvação.',
      startDate: easterStart,
      endDate: easterOctaveEnd,
      color: '#32CD32',
      icon: 'mdi-flower-tulip',
      symbolism: 'Ressurreição e Vida'
    },
    {
      name: 'Tempo Pascoal',
      description: 'Cinquenta dias de alegria pascal, culminando em Pentecostes, quando o Espírito Santo é enviado.',
      startDate: new Date(easterOctaveEnd.getTime() + 1 * 24 * 60 * 60 * 1000),
      endDate: easterSeasonEnd,
      color: '#FF4500',
      icon: 'mdi-fire',
      symbolism: 'Espírito Santo e Comunidade'
    },
    {
      name: 'Tempo Comum (Verão)',
      description: 'Período após Pentecostes. Reflete sobre a vida ordinária e as virtudes cristãs.',
      startDate: new Date(easterSeasonEnd.getTime() + 1 * 24 * 60 * 60 * 1000),
      endDate: adventStart,
      color: '#228B22',
      icon: 'mdi-leaf',
      symbolism: 'Vida de Jesus Cristo'
    }
  ];

  // Determinar o período atual
  currentPeriod = periods[7]; // Padrão: Tempo Comum

  for (const period of periods) {
    if (date >= period.startDate && date <= period.endDate) {
      currentPeriod = period;
      break;
    }
  }

  // Próximos períodos
  upcomingPeriods = periods.filter(p => p.startDate > date).slice(0, 3);

  // Se não houver próximos períodos, começar do início do próximo ano
  if (upcomingPeriods.length === 0) {
    const nextYearPeriods = getLiturgicalCalendar(new Date(year + 1, 0, 1));
    upcomingPeriods = nextYearPeriods.upcomingPeriods;
  }

  return {
    currentPeriod,
    upcomingPeriods,
    dayOfYear,
    yearProgress
  };
}

export function getImportantDates(year: number): Array<{ date: Date; name: string; importance: 'major' | 'minor' }> {
  const easter = calculateEaster(year);
  const easterMonth = easter.getMonth();
  const easterDay = easter.getDate();

  const dates = [
    // Festas de Guarda (maiores)
    { date: new Date(year, 0, 1), name: 'Circuncisão do Senhor', importance: 'major' as const },
    { date: new Date(year, 0, 6), name: 'Epifania do Senhor', importance: 'major' as const },
    { date: new Date(year, 3, 25), name: 'Anunciação do Senhor', importance: 'major' as const },
    { date: new Date(easter.getTime() - 2 * 24 * 60 * 60 * 1000), name: 'Sexta-feira Santa', importance: 'major' as const },
    { date: easter, name: 'Páscoa', importance: 'major' as const },
    { date: new Date(easter.getTime() + 39 * 24 * 60 * 60 * 1000), name: 'Ascensão do Senhor', importance: 'major' as const },
    { date: new Date(easter.getTime() + 49 * 24 * 60 * 60 * 1000), name: 'Pentecostes', importance: 'major' as const },
    { date: new Date(easter.getTime() + 60 * 24 * 60 * 60 * 1000), name: 'Santíssima Trindade', importance: 'major' as const },
    { date: new Date(year, 5, 29), name: 'São Pedro e São Paulo', importance: 'major' as const },
    { date: new Date(year, 7, 15), name: 'Assunção de Maria', importance: 'major' as const },
    { date: new Date(year, 10, 1), name: 'Festa de Todos os Santos', importance: 'major' as const },
    { date: new Date(year, 11, 8), name: 'Imaculada Conceição', importance: 'major' as const },
    { date: new Date(year, 11, 25), name: 'Natal do Senhor', importance: 'major' as const },

    // Festas de Santos (menores)
    { date: new Date(year, 0, 25), name: 'Conversão de São Paulo', importance: 'minor' as const },
    { date: new Date(year, 1, 2), name: 'Apresentação do Senhor', importance: 'minor' as const },
    { date: new Date(year, 2, 19), name: 'São José', importance: 'minor' as const },
    { date: new Date(year, 4, 1), name: 'São Filipe e São Tiago', importance: 'minor' as const },
    { date: new Date(year, 5, 24), name: 'Nascimento de São João Batista', importance: 'minor' as const },
    { date: new Date(year, 7, 1), name: 'Santo Afonso', importance: 'minor' as const },
    { date: new Date(year, 8, 29), name: 'São Miguel Arcanjo', importance: 'minor' as const },
    { date: new Date(year, 9, 2), name: 'Santo Anjo da Guarda', importance: 'minor' as const },
    { date: new Date(year, 10, 2), name: 'Finados', importance: 'minor' as const },
  ];

  return dates.sort((a, b) => a.date.getTime() - b.date.getTime());
}
