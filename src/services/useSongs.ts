export interface ISong {
  nome: string;
  tom: string;
  link: string;
  momento: string[];
  lyrics?: string;
}

export const MOMENTO = {
  ENTRADA: {
    nome: "Entrada",
    slug: "EN",
  },
  INVOCACAO_SANTISSIMA_TRINDADE: {
    nome: "Invocação à Santíssima Trindade",
    slug: "IST",
  },
  ATO_PENITENCIAL: {
    nome: "Ato Penitencial",
    slug: "AP",
  },
  ASPERSAO: {
    nome: "Aspersão",
    slug: "AS",
  },
  GLORIA: {
    nome: "Glória",
    slug: "G",
  },
  SALMO: {
    nome: "Salmo",
    slug: "SL",
  },
  ACLAMACAO: {
    nome: "Aclamação",
    slug: "AC",
  },
  OFERTORIO: {
    nome: "Ofertório",
    slug: "O",
  },
  SANTO: {
    nome: "Santo",
    slug: "SA",
  },
  PAZ: {
    nome: "Paz",
    slug: "PZ",
  },
  CORDEIRO: {
    nome: "Cordeiro",
    slug: "CR",
  },
  COMUNHAO: {
    nome: "Comunhão",
    slug: "CO",
  },
  POS_COMUNHAO: {
    nome: "Pós-Comunhão",
    slug: "PC",
  },
  FINAL: {
    nome: "Final",
    slug: "F",
  },
  ADORACAO: {
    nome: "Adoração",
    slug: "AD",
  },
  LOUVOR: {
    nome: "Louvor",
    slug: "L",
  },
  MARIANO: {
    nome: "Mariano",
    slug: "M",
  },
  FAMILIA: {
    nome: "Família",
    slug: "FAM",
  },
  ESPIRITO_SANTO: {
    nome: "Espírito Santo",
    slug: "ES",
  },
  EXTRA: {
    nome: "Extra",
    slug: "EX",
  },
  DIZIMO: {
    nome: "Dízimo",
    slug: "D",
  },
  LOUVOR_NSA: {
    nome: "Louvor - Nossa Senhora Aparecida",
    slug: "LNSA",
  },
  ENTRADA_LADAINHA_NSA: {
    nome: "Entrada - Ladainha Nossa Senhora Aparecida",
    slug: "ELNSA",
  },
  LADAINHA_NSA: {
    nome: "Ladainha - Nossa Senhora Aparecida",
    slug: "LNSA",
  },
  FINAL_LADAINHA_NSA: {
    nome: "Final - Ladainha Nossa Senhora Aparecida",
    slug: "FLNSA",
  },
  INVOCACAO_NSA: {
    nome: "Invocação - Nossa Senhora Aparecida",
    slug: "INSA",
  },
  ENTRADA_NSA: {
    nome: "Entrada - Nossa Senhora Aparecida",
    slug: "ENSA",
  },
  ENTRADA_IMAGEM_NSA: {
    nome: "Entrada - Imagem Nossa Senhora Aparecida",
    slug: "EINSA",
  },
  
  INVOCAOCAO_SANTISSIMA_TRINDADE_NSA: {
    nome: "Invocação à Santíssima Trindade - Nossa Senhora Aparecida",
    slug: "ISTNSA",
  },
  
  ATO_NSA: {
    nome: "Ato Penitencial - Nossa Senhora Aparecida",
    slug: "ANSA",
  },
  
  GLORIA_NSA: {
    nome: "Glória - Nossa Senhora Aparecida",
    slug: "GNSA",
  },
  
  SALMO_NSA: {
    nome: "Salmo - Nossa Senhora Aparecida",
    slug: "SLNSA",
  },
  
  ACLAMACAO_NSA: {
    nome: "Aclamação - Nossa Senhora Aparecida",
    slug: "ACNSA",
  },
  INVOCACAO_ESPIRITO_SANTO_NSA: {
    nome: "Invocação ao Espírito Santo - Nossa Senhora Aparecida",
    slug: "IESNSA",
  },
  OFERTORIO_NSA: {
    nome: "Ofertório - Nossa Senhora Aparecida",
    slug: "ONSA",
  },
   SANTO_NSA: {
    nome: "Santo - Nossa Senhora Aparecida",
    slug: "SONSA",
  },
   COMUNHAO_NSA: {
    nome: "Comunhão - Nossa Senhora Aparecida",
    slug: "CONSA",
  },
  POS_NSA: {
    nome: "Pós - Nossa Senhora Aparecida",
    slug: "PNSA",
  },
  CONSAGRACAO_NSA: {
    nome: "Consagração - Nossa Senhora Aparecida",
    slug: "CNSA",
  },
  COROACAO_NSA: {
    nome: "Coroação - Nossa Senhora Aparecida",
    slug: "CORNSA",
  },
  EXTRA_NSA: {
    nome: "Extra - Nossa Senhora Aparecida",
    slug: "EXNSA",
  },
  FINAL_NSA: {
    nome: "Final - Nossa Senhora Aparecida",
    slug: "FNSA",
  },
};

export const getSongs = async (): Promise<ISong[]> => {
  const songs: ISong[] = [
    {
      nome: "Tu és o Rei dos Reis",
      tom: "C",
      link: "https://www.cifraclub.com.br/frei-fabreti/tu-es-rei-dos-reis/#instrument=keyboard&key=3",
      momento: [MOMENTO.ENTRADA.slug],
      lyrics: ""
    },
    {
      nome: "Eu Confesso",
      tom: "Am",
      link: "https://www.cifraclub.com.br/catolicas/eu-confesso/simplificada.html#instrument=keyboard",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "Vem, Vem, Vem, Espírito Santo",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/vem-vem-vem-espirito-santo/#instrument=keyboard&key=5",
      momento: [MOMENTO.ESPIRITO_SANTO.slug],
    },
    {
      nome: "Pão e Vinho",
      tom: "G",
      link: "https://www.cifraclub.com.br/ministerio-amor-e-adoracao/pao-e-vinho/#instrument=keyboard&key=10",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Santo",
      tom: "C",
      link: "https://www.cifraclub.com.br/ministerio-amor-e-adoracao/santo/#instrument=keyboard",
      momento: [MOMENTO.SANTO.slug],
    },
    {
      nome: "Como És Lindo",
      tom: "D",
      link: "https://www.cifraclub.com.br/vida-reluz/como-es-lindo/simplificada.html#instrument=keyboard",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "O Senhor é Rei",
      tom: "Em",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/o-senhor-e-rei/#instrument=keyboard",
      momento: [MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Mãezinha do Céu",
      tom: "D",
      link: "https://www.cifraclub.com.br/joanna/maezinha-do-ceu/#instrument=keyboard",
      momento: [MOMENTO.MARIANO.slug],
    },
    {
      nome: "Amar Como Jesus Amou",
      tom: "D#",
      link: "https://www.cifraclub.com.br/padre-zezinho/amar-como-jesus-amou/#instrument=keyboard",
      momento: [MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Um Coração Para Amar",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-zezinho/um-coracao-para-amar/#instrument=keyboard",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Oferta de Amor",
      tom: "D",
      link: "https://www.cifraclub.com.br/ministerio-koinonya-de-louvor/oferta-de-amor/simplificada.html#instrument=keyboard&key=5",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Diante do Rei",
      tom: "G",
      link: "https://www.cifraclub.com.br/vida-reluz/diante-do-rei/simplificada.html#instrument=keyboard&key=10",
      momento: [MOMENTO.ADORACAO.slug],
    },
    {
      nome: "Banhados Em Cristo",
      tom: "C",
      link: "https://www.cifraclub.com.br/cnbb/banhados-em-cristo/#instrument=keyboard",
      momento: [MOMENTO.ASPERSAO.slug],
    },
    {
      nome: "Perdão Senhor",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/perdao-senhor/#instrument=keyboard&key=10",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "A Nós Descei, Divina Luz",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/a-nos-descei-divina-luz/#instrument=keyboard&tabs=false&key=3",
      momento: [MOMENTO.ESPIRITO_SANTO.slug, MOMENTO.EXTRA.slug],
    },
    {
      nome: "Deixa a Luz do Céu Entrar",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/deixa-luz-do-ceu-entrar/#instrument=keyboard&key=5",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Sobe a Jerusalém",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/sobe-jerusalem/#instrument=keyboard",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Santo, Senhor, Deus do Universo",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/santo-senhor-deus-do-universo/#instrument=keyboard&key=10",
      momento: [MOMENTO.SANTO.slug],
    },
    {
      nome: "Quem É Essa Que Avança Como Aurora",
      tom: "D",
      link: "https://www.cifraclub.com.br/ministerio-kyrios/quem-essa-que-avanca-/#instrument=keyboard",
      momento: [
        MOMENTO.ENTRADA.slug,
        MOMENTO.FINAL.slug,
        MOMENTO.LOUVOR.slug,
        MOMENTO.MARIANO.slug,
      ],
    },
    {
      nome: "Eu Sou Dizimista",
      tom: "D",
      link: "https://www.cifraclub.com.br/grupo-palestrina-de-curitiba/sou-dizimista-entrada/#tabs=false&instrument=keyboard&key=5",
      momento: [MOMENTO.DIZIMO.slug],
    },
    {
      nome: "Dia de Festa",
      tom: "C",
      link: "https://www.cifraclub.com.br/eliana-ribeiro/dia-de-festa/#instrument=keyboard&key=3",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Glória a Deus Nas Alturas",
      tom: "G",
      link: "https://www.cifraclub.com.br/eliana-ribeiro/gloria-deus-nas-alturas/#instrument=keyboard",
      momento: [MOMENTO.GLORIA.slug],
    },
    {
      nome: "Aleluia, a Minha alma Abrirei",
      tom: "A",
      link: "https://www.cifraclub.com.br/catolicas/aleluia-a-minhalma-abrirei/#instrument=keyboard&key=0",
      momento: [MOMENTO.ACLAMACAO.slug],
    },
    {
      nome: "A Barca",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/a-barca/#instrument=keyboard",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Senhora e Rainha",
      tom: "A",
      link: "https://www.cifraclub.com.br/padre-zezinho/senhora-e-rainha/#instrument=keyboard&key=0",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Quem É Este Povo",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/quem-e-este-povo/#instrument=guitar&key=5",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Anjos de Deus",
      tom: "B",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/anjos-de-deus/#instrument=keyboard&key=2",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Só Porque Você Veio",
      tom: "A",
      link: "https://www.cifraclub.com.br/padre-reginaldo-manzotti/so-porque-voce-veio/#instrument=keyboard&key=0",
      momento: [MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Maria o Magnificat Cantou",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/maria-o-magnificat-cantou/#instrument=guitar",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Em Nome do Pai",
      tom: "A",
      link: "https://www.cifraclub.com.br/em-nome-do-pai/em-nome-do-pai/#instrument=keyboard&key=0",
      momento: [MOMENTO.INVOCACAO_SANTISSIMA_TRINDADE.slug],
    },
    {
      nome: "Uma Entre Todas Foi a Escolhida",
      tom: "G",
      link: "https://www.cifraclub.com.br/ministerio-gratia-plena/uma-entre-todas-foi-a-escolhida/#instrument=guitar",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "À Senhora Aparecida",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-zezinho/-senhora-aparecida/#instrument=keyboard",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Sou Romeiro de Aparecida",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/sou-romeiro-de-aparecida/#instrument=guitar",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Lá No Altar de Aparecida",
      tom: "C",
      link: "https://www.cifraclub.com.br/padre-zezinho/la-no-altar-de-aparecida/#instrument=keyboard&key=3",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Glória, Anjos No Céu",
      tom: "A",
      link: "https://www.cifraclub.com.br/igreja-catolica-nossa-senhora-da-salete/gloria-anjos-no-ceu/#instrument=keyboard&key=0",
      momento: [MOMENTO.GLORIA.slug],
    },
    {
      nome: "O Senhor Fez Em Mim Maravilhas",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/o-senhor-fez-em-mim-maravilhas-magnificat/#instrument=guitar&key=3",
      momento: [MOMENTO.SALMO.slug, MOMENTO.MARIANO.slug],
    },
    {
      nome: "Servo Por Amor",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/servo-por-amor/#instrument=keyboard&key=3",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Cordeiro de Deus",
      tom: "G",
      link: "https://www.cifraclub.com.br/ministerio-amor-e-adoracao/cordeiro-de-deus/#instrument=keyboard",
      momento: [MOMENTO.CORDEIRO.slug],
    },
    {
      nome: "Maria de Deus, Nossa Senhora da Paz",
      tom: "C",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/maria-de-deus-nossa-senhora-da-paz/#instrument=keyboard&key=3",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Mãe do Céu Morena",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-zezinho/mae-do-ceu-morena/#instrument=keyboard&key=10",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Dai-nos a Benção",
      tom: "D",
      link: "https://www.cifraclub.com.br/carmen-silva/dai-nos-a-bencao/#instrument=keyboard&key=5",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.EXTRA.slug],
    },
    {
      nome: "Viva a Mãe de Deus e Nossa",
      tom: "Am",
      link: "https://www.cifraclub.com.br/catolicas/viva-mae-de-deus-nossa/simplificada.html#instrument=keyboard&key=0",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Nossa Senhora do Brasil",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/nossa-senhora-do-brasil/#instrument=keyboard",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Nossa Senhora do Brasil (part. Padre Marcelo Rossi)",
      tom: "D",
      link: "https://www.cifraclub.com.br/bruno-e-marrone/nossa-senhora-do-brasil/#instrument=keyboard",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Basta Querer ",
      tom: "C",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/basta-querer/#instrument=keyboard&key=3",
      momento: [MOMENTO.POS_COMUNHAO.slug, MOMENTO.ADORACAO.slug],
    },
    {
      nome: "Nas Terras do Oriente",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/nas-terras-do-oriente/#instrument=keyboard&key=5",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Kyrie Eleison",
      tom: "Am",
      link: "https://www.cifraclub.com.br/jmj-rio-2013/kyrie-eleison/#instrument=keyboard&key=0",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "Da Cepa Brotou a Rama",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/da-cepa-brotou-rama/#instrument=keyboard&key=5",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Utopia",
      tom: "F",
      link: "https://www.cifraclub.com.br/padre-zezinho/utopia/#instrument=keyboard",
      momento: [MOMENTO.POS_COMUNHAO.slug, MOMENTO.FAMILIA.slug],
    },
    {
      nome: "Oração Pela Família",
      tom: "D",
      link: "https://www.cifraclub.com.br/padre-zezinho/oracao-pela-familia/#instrument=keyboard&key=5",
      momento: [MOMENTO.FAMILIA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Chuva de Graça",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/chuva-de-graca/#instrument=keyboard&key=5",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Derrama o Teu Amor Aqui",
      tom: "D",
      link: "https://www.cifraclub.com.br/celina-borges/derrama-teu-amor-aqui/#instrument=keyboard&key=5",
      momento: [MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "O Meu Lugar É o Céu",
      tom: "E",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/o-meu-lugar-e-o-ceu/#instrument=keyboard",
      momento: [MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "A Alegria Está No Coração",
      tom: "D",
      link: "https://www.cifraclub.com.br/corinhos-evangelicos/a-alegria-esta-no-coracao/#instrument=keyboard&key=5",
      momento: [MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Maria Nas Bodas de Caná",
      tom: "Dm",
      link: "https://www.cifraclub.com.br/catolicas/maria-nas-bodas-de-cana/#instrument=keyboard&key=5",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Regaço Acolhedor",
      tom: "A",
      link: "https://www.cifraclub.com.br/kelly-patricia/regaco-acolhedor/simplificada.html#instrument=keyboard&key=0",
      momento: [MOMENTO.POS_COMUNHAO.slug, MOMENTO.MARIANO.slug],
    },
    {
      nome: "A Primeira Que Comungou",
      tom: "G",
      link: "https://www.cifraclub.com.br/toca-de-assis/a-primeira-que-comungou/#instrument=keyboard&key=10",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Nossa Senhora Aparecida",
      tom: "E",
      link: "https://www.cifraclub.com.br/gino-e-geno/nossa-senhora-aparecida/#instrument=guitar",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Cântico de Adoração",
      tom: "F",
      link: "https://www.cifraclub.com.br/eliana-ribeiro/cantico-de-adoracao/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Yeshua",
      tom: "Em",
      link: "https://www.cifraclub.com.br/casa-worship/yeshua/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Quero Conhecer Jesus",
      tom: "G",
      link: "https://www.cifraclub.com.br/alessandro-vilas-boas/quero-conhecer-jesus-o-meu-amado--o-mais-belo/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Podes Reinar",
      tom: "D",
      link: "https://www.cifraclub.com.br/agnus-dei/podes-reinar/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Renova-me",
      tom: "D",
      link: "https://www.cifraclub.com.br/harpa-crista/renova-me-senhor-jesus/simpificada.html#instrument=keyboard&key=5",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Eu Te Levantarei",
      tom: "F",
      link: "https://www.cifraclub.com.br/frei-gilson/eu-te-levantarei/simplificada.html#instrument=keyboard&key=8",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Eu Seguirei",
      tom: "E",
      link: "https://www.cifraclub.com.br/frei-gilson/eu-seguirei/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Livre Acesso",
      tom: "Em",
      link: "https://www.cifraclub.com.br/eliana-ribeiro/livre-acesso/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Queima de Novo",
      tom: "Eb",
      link: "https://www.cifraclub.com.br/comunidade-catolica-colo-de-deus/queima-de-novo/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Senhor, Quem Entrará?",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/senhor-quem-entrara/#instrument=keyboard&key=3",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Pelos Prados e Campinas",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/pelos-prados-e-campinas/#instrument=keyboard&key=10",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Conheço Um Coração",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/conheco-um-coracao/#instrument=keyboard",
      momento: [
        MOMENTO.COMUNHAO.slug,
        MOMENTO.POS_COMUNHAO.slug,
        MOMENTO.ENTRADA.slug,
        MOMENTO.ESPIRITO_SANTO.slug,
      ],
    },
    {
      nome: "Oração de São Francisco",
      tom: "F#m",
      link: "https://www.cifraclub.com.br/fagner/oracao-de-sao-francisco/#instrument=keyboard&key=9",
      momento: [MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Senhor, Vem Salvar Teu Povo",
      tom: "Gm",
      link: "https://www.cifraclub.com.br/catolicas/senhor-vem-salvar-teu-povo/#instrument=keyboard&key=10",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Uma Vela Se Acende",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/uma-vela-se-acende/#instrument=keyboard",
      momento: [MOMENTO.EXTRA.slug],
    },
    {
      nome: "A Nossa Oferta Apresentamos",
      tom: "D",
      link: "https://www.cifraclub.com.br/catolicas/a-nossa-oferta-apresentamos-no-altar/simplificada.html#instrument=keyboard&key=5",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Povo de Deus Foi Assim",
      tom: "F",
      link: "https://www.cifraclub.com.br/catolicas/povo-de-deus-foi-assim/#instrument=keyboard&key=8",
      momento: [MOMENTO.COMUNHAO.slug, MOMENTO.MARIANO.slug],
    },
    {
      nome: "Vigia Esperando A Aurora",
      tom: "A",
      link: "https://www.cifraclub.com.br/padre-jonas/vigia-esperando-aurora/#instrument=keyboard&key=0",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Dai-nos a Bênção Ó Mãe Querida",
      tom: "D",
      link: "https://www.cifraclub.com.br/ministerio-gratia-plena/dai-nos-a-bencao-o-mae-querida/#instrument=keyboard",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.EXTRA.slug],
    },
    {
      nome: "Vamos Celebrar",
      tom: "E",
      link: "https://www.cifraclub.com.br/ministerio-amor-e-adoracao/vamos-celebrar/simplificada.html#instrument=keyboard",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Tão Sublime Sacramento",
      tom: "E",
      link: "https://www.cifraclub.com.br/catolicas/tao-sublime-sacramento/simplificada.html#instrument=keyboard",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Ato Penitencial",
      tom: "C",
      link: "https://www.cifraclub.com.br/padre-zezinho/ato-penitencial/#instrument=guitar",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "Em Tua Presença",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/em-tua-presenca/#instrument=guitar&key=10",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Desperta",
      tom: "E",
      link: "https://www.cifraclub.com.br/comunidade-catolica-colo-de-deus/desperta/#instrument=guitar",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Prova de Amor",
      tom: "Dm",
      link: "https://www.cifraclub.com.br/catolicas/prova-de-amor/#instrument=guitar&key=8",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Antes da Morte e Ressurreição",
      tom: "Em",
      link: "https://www.cifraclub.com.br/catolicas/antes-da-morte-ressurreicao/#instrument=keyboard",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "A Mesa Santa",
      tom: "A",
      link: "https://www.cifraclub.com.br/catolicas/a-mesa-santa-que-preparamos-845/#instrument=keyboard&key=0",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Toda Biblia É Comunicação",
      tom: "B",
      link: "https://www.cifraclub.com.br/padre-zezinho/toda-biblia-comunicacao/#instrument=keyboard&key=2",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Sacramento da Comunhão",
      tom: "G",
      link: "https://www.cifraclub.com.br/catolicas/sacramento-da-comunhao/#instrument=keyboard",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Magnificat, Magnificat",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/magnificat-magnificat/#instrument=guitar",
      momento: [MOMENTO.MARIANO.slug, MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "Reunidos Aqui",
      tom: "G",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/reunidos-aqui/#instrument=guitar",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Enviai",
      tom: "E",
      link: "https://www.cifraclub.com.br/eliana-ribeiro/enviai/completa.html#instrument=keyboard",
      momento: [MOMENTO.ESPIRITO_SANTO.slug, MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Senhor, Que Viestes Salvar",
      tom: "Am",
      link: "https://www.cifraclub.com.br/jmj-rio-2013/senhor-que-viestes-salvar/#instrument=keyboard&key=0",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "Cantar a Beleza da Vida",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/cantar-beleza-da-vida/#instrument=keyboard&key=3",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Vinde, Espírito Santo",
      tom: "C",
      link: "https://www.cifraclub.com.br/vida-reluz/vinde-espirito-santo-7448/#instrument=keyboard",
      momento: [MOMENTO.ESPIRITO_SANTO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Eu Navegarei",
      tom: "Am",
      link: "https://www.cifraclub.com.br/catolicas/eu-navegarei/#instrument=keyboard&key=0",
      momento: [MOMENTO.POS_COMUNHAO.slug, MOMENTO.ADORACAO.slug],
    },
    {
      nome: "Cristo Ressuscitou",
      tom: "Em",
      link: "https://www.cifraclub.com.br/catolicas/cristo-ressuscitou/#instrument=keyboard&key=7",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Perdoa-me",
      tom: "G",
      link: "https://www.cifraclub.com.br/comunidade-catolica-shalom/perdoa-me/simplificada.html#instrument=keyboard&key=10",
      momento: [MOMENTO.ATO_PENITENCIAL.slug],
    },
    {
      nome: "Eu Creio Num Mundo Novo",
      tom: "E",
      link: "https://www.cifraclub.com.br/catolicas/eu-creio-num-mundo-novo/#instrument=keyboard",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Ressucitou, Novo Dia",
      tom: "F",
      link: "https://www.cifraclub.com.br/catolicas/ressucitou-novo-dia/#instrument=keyboard",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug],
    },
    {
      nome: "És Água Viva",
      tom: "F",
      link: "https://www.cifraclub.com.br/padre-zezinho/es-agua-viva/#instrument=keyboard&key=8",
      momento: [MOMENTO.ASPERSAO.slug],
    },
    {
      nome: "Bendito Sejas, Ó Rei da Glória",
      tom: "Bm",
      link: "https://www.cifraclub.com.br/catolicas/bendito-sejas-o-rei-da-gloria/#instrument=keyboard&key=2",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Porque Ele Vive",
      tom: "G",
      link: "https://www.cifraclub.com.br/harpa-crista/porque-ele-vive/simplificada.html#instrument=keyboard&key=10",
      momento: [MOMENTO.ENTRADA.slug, MOMENTO.FINAL.slug, MOMENTO.LOUVOR.slug],
    },
    {
      nome: "Terço da Misericórdia",
      tom: "G",
      link: "https://www.cifraclub.com.br/kelly-patricia/terco-da-misericordia/simplificada.html#instrument=keyboard&key=10",
      momento: [MOMENTO.EXTRA.slug],
    },
    {
      nome: "Hoje Livre Sou",
      tom: "C",
      link: "https://www.cifraclub.com.br/ministerio-adoracao-vida/hoje-livre-sou/#instrument=keyboard&key=3",
      momento: [MOMENTO.ADORACAO.slug, MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Senhor, Eis Aqui o Teu Povo",
      tom: "Bm",
      link: "https://www.cifraclub.com.br/cnbb/senhor-eis-aqui-teu-povo/#instrument=guitar&key=2",
      momento: [MOMENTO.ENTRADA.slug],
    },
    {
      nome: "Louvor e Glória a Ti, Senhor",
      tom: "G",
      link: "https://www.cifraclub.com.br/cnbb/louvor-e-gloria-a-ti-senhor/#instrument=guitar",
      momento: [MOMENTO.ACLAMACAO.slug],
    },
    {
      nome: "Sê Bendito Senhor Para Sempre",
      tom: "Gm",
      link: "https://www.cifraclub.com.br/cnbb/se-bendito-senhor-para-sempre/#instrument=keyboard&key=10",
      momento: [MOMENTO.OFERTORIO.slug],
    },
    {
      nome: "Eu Vim Para Que Todos Tenham Vida",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/eu-vim-para-que-todos-tenham-vida/#instrument=guitar&key=3",
      momento: [MOMENTO.COMUNHAO.slug],
    },
    {
      nome: "Tudo É do Pai",
      tom: "C",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/tudo-do-pai/#instrument=guitar&key=3",
      momento: [MOMENTO.POS_COMUNHAO.slug],
    },
    {
      nome: "Perdão Meu Jesus",
      tom: "D",
      link: "https://www.cifraclub.com.br/ministerio-caeli/perdao-meu-jesus/#instrument=guitar",
      momento: [MOMENTO.FINAL.slug],
    },
    {
      nome: "Abraço de Pai",
      tom: "C",
      link: "https://www.cifraclub.com.br/catolicas/abraco-de-pai/#instrument=keyboard&key=3",
      momento: [MOMENTO.POS_COMUNHAO.slug, MOMENTO.ADORACAO.slug],
    },
    {
      nome: "Vem Espírito",
      tom: "D",
      link: "https://www.cifraclub.com.br/padre-marcelo-rossi/vem-espirito/#instrument=keyboard",
      momento: [MOMENTO.ESPIRITO_SANTO.slug, MOMENTO.ADORACAO.slug],
    },
    {
      nome: "Este Pranto Em Minhas Mãos",
      tom: "D",
      link: "https://www.cifraclub.com.br/eugenio-jorge/este-pranto-em-minhas-maos/#instrument=keyboard",
      momento: [MOMENTO.OFERTORIO.slug],
    },

  {
    nome: "Só em aparecida nos temos",
    tom: "A",
    link: "",
    momento: [MOMENTO.LOUVOR_NSA.slug],
    lyrics: `
  A      E            A               
Só em Aparecida nós temos 
      D        E         A
uma festa bonita assim. 
      D          E            A   F#m
É o começo de lá do céeeeeu, 
      Bm             E             A
onde a festa não tem mais fim. 

  A             E                  A               
1. Virgem Santa do céu rainha, 
      D              E                   A
nosso amor, nossa Mãe querida. 
      D                     E            A   F#m
Sempre vossos queremos ser, 
      Bm             E             A
sois o encanto de nossa vida. 

A             E                  A               
Só em Aparecida nós temos 
      D        E         A
uma festa bonita assim. 
      D          E            A   F#m
É o começo de lá do céeeeeu, 
      Bm             E             A
onde a festa não tem mais fim. 

    A             E           A               
2. Na cidade abençoada 
      D                E     A
de Sergipe, filha feliz.
      D                  E      A   F#m
Este povo com amor celebra
        Bm   E          A
nossa Santa imperatriz. 

A             E                  A               
Só em Aparecida nós temos 
      D        E         A
uma festa bonita assim. 
      D          E            A   F#m
É o começo de lá do céeeeeu, 
      Bm             E             A
onde a festa não tem mais fim. 
    A             E           A               
3. Maniçoba, terra querida, 
      D                E     A
grande graça o povo te diz: 
      D                  E      A   F#m
Ser chamada de Aparecida, 
        Bm   E          A
mãe da graça pelo seu sim.

A             E                  A               
Só em Aparecida nós temos 
      D        E         A
uma festa bonita assim. 
      D          E            A   F#m
É o começo de lá do céeeeeu, 
      Bm             E             A
onde a festa não tem mais fim. 

    A             E           A
4. Virgem Mãe Aparecida, 
      D                E     A
nós viemos te pedir. 
      D                  E      A   F#m
Derramai bênçãos do céu 
        Bm   E          A
e o teu povo fica feliz.

A             E                  A               
Só em Aparecida nós temos 
      D        E         A
uma festa bonita assim. 
      D          E            A   F#m
É o começo de lá do céeeeeu, 
      Bm             E             A
onde a festa não tem mais fim

    `
  },
  {
    nome: "Senhora e Rainha",
    tom: "A",
    link: "https://www.cifraclub.com.br/padre-zezinho/senhora-e-rainha/#tabs=false&instrument=keyboard&key=0",
    momento: [MOMENTO.LOUVOR_NSA.slug],
    lyrics: `
       A                                                
O povo te chama de Nossa Senhora por causa de Nosso 
    E7
Senhor
   D                                                   
O povo te chama de mãe e rainha porque Jesus Cristo é o
  A      E
 Rei do Céu
   A                                 A7                
E por não te ver como desejaria, te vê com os olhos da 
 D
fé
                           A                 F#m       
Por isso ele coroa a tua imagem, Maria, por seres a mãe
       E7
 de Jesus
       A              E7         A  A7
Por seres a mãe de Jesus de Nazaré

          D                                  A     
Como é bonita uma religião que se lembra da mãe de 
      F#m
Jesus
        Bm     E7            A7
Mais bonito é saber quem tu és
        D                                         
Não és deusa, não és mais que Deus, mas depois de 
   A            F#m
Jesus, o Senhor
      Bm        E7        A
Neste mundo ninguém foi maior

A                                               
Aquele que lê a Palavra Divina por causa de Nosso 
      E7
Senhor
    D
Já sabe que o Livro de Deus nos ensina que só Jesus 
Cristo é o
 A         E
 Intercessor
   A                                    A7          
Porém, se podemos orar pelos outros, a mãe de Jesus 
      D
pode mais
                         A                 F#m         
Por isso te pedimos em prece, ó Maria, que leves o povo
        E7
 a Jesus
     A             E7             A   A7
Porque de levar a Jesus entendes mais
    `
  },
  {
    nome: "Só por que você veio",
    tom: "A",
    link: "https://www.cifraclub.com.br/padre-reginaldo-manzotti/so-porque-voce-veio/#tabs=false&instrument=keyboard&key=0",
    momento: [MOMENTO.LOUVOR_NSA.slug],
    lyrics: `
  A             F#m7             D9    E9      A  E7
Só porque você veio é festa no céu é festa aqui
 A             F#m7             D9    E9      A  A7
Só porque você veio é festa no céu é festa aqui
 D9   E9         C#m7     F#m7      Bm         E7        A    A7
Com um aperto de mão, um abraço apertado, um sorriso bem largo
 D9   E9       C#m7      F#m7 Bm        E7         A
Vamos louvar a Deus que está aqui, que está ao seu lado
    `
  },
  {
    nome: "Anjos de Deus",
    tom: "A",
    link: "https://www.cifraclub.com.br/padre-marcelo-rossi/anjos-de-deus/#tabs=false&instrument=keyboard&key=0",
    momento: [MOMENTO.LOUVOR_NSA.slug],
    lyrics: `
     A                                  E
Se acontecer um barulho perto de você
                             D
É um anjo chegando para receber
                           F#m E
Suas orações e leva-las a De___us
   A                                E
Então abra o coração e comece a louvar

Sinta o gosto do céu 
                     D
Que se derrama no altar

Que um anjo já vem 
                  F#m E
Com a benção nas mã___os

[Refrão]

 A                        E
Tem anjos voando neste lugar
                                D
No meio do povo e em cima do altar

Subindo e descendo 
                 A  E
Em todas as direçõ__es
     A                    
Não sei se a igreja subiu 
                E
Ou se o céu desceu
                                   D
Só sei que está cheio de anjos de Deus
                  E           A  E
Porque o próprio Deus está aqui

 A                        E
Tem anjos voando neste lugar
                                D
No meio do povo e em cima do altar

Subindo e descendo 
                 A  E
Em todas as direçõ__es
     A                    
Não sei se a igreja subiu 
                E
Ou se o céu desceu
                                   D
Só sei que está cheio de anjos de Deus
                  E           A  E
Porque o próprio Deus está aqui

[Segunda Parte]

  A                      
Quando os anjos passeiam 
              E
A igreja se alegra

Ela canta, ela chora
              D
Ela ri e congrega
                             F#m E
Abala o inferno e dissipa o mal
 A                                 E
Sinta o vento das asas dos anjos agora
                           D
Confia irmão pois é a tua hora
                              F#m E
A benção chegou e você vai levar

[Refrão]

 A                        E
Tem anjos voando neste lugar
                                D
No meio do povo e em cima do altar

Subindo e descendo 
                 A  E
Em todas as direçõ__es
     A                    
Não sei se a igreja subiu 
                E
Ou se o céu desceu
                                   D
Só sei que está cheio de anjos de Deus
                  E           A  
Porque o próprio Deus está aqui

[Primeira Parte]

 A                                  E
Se acontecer um barulho perto de você
                             D
É um anjo chegando para receber
                           F#m E
Suas orações e leva-las a De___us
   A                                E
Então abra o coração e comece a louvar

Sinta o gosto do céu 
                     D
Que se derrama no altar

Que um anjo já vem 
                  F#m E
Com a benção nas mã___os

[Refrão]

 A                        E
Tem anjos voando neste lugar
                                D
No meio do povo e em cima do altar

Subindo e descendo 
                 A  E
Em todas as direçõ__es
     A                    
Não sei se a igreja subiu 
                E
Ou se o céu desceu
                                   D
Só sei que está cheio de anjos de Deus
                  E           A  E
Porque o próprio Deus está aqui

[Segunda Parte]

  A                      
Quando os anjos passeiam 
              E
A igreja se alegra

Ela canta, ela chora
              D
Ela ri e congrega
                             F#m E
Abala o inferno e dissipa o mal
 A                                 E
Sinta o vento das asas dos anjos agora
                           D
Confia irmão pois é a tua hora
                              F#m E
A benção chegou e você vai levar

[Refrão]

 A                        E
Tem anjos voando neste lugar
                                D
No meio do povo e em cima do altar

Subindo e descendo 
                 A  E
Em todas as direçõ__es
     A                    
Não sei se a igreja subiu 
                E
Ou se o céu desceu
                                   D
Só sei que está cheio de anjos de Deus
                  E           A  
Porque o próprio Deus está aqui
    `
  },
  {
    nome: "Quem é este povo?",
    tom: "D",
    link: "https://www.cifraclub.com.br/catolicas/quem-e-este-povo/#tabs=false&instrument=keyboard&key=5",
    momento: [MOMENTO.LOUVOR_NSA.slug],
    lyrics: `
                    D               Em
1. Quem é esse povo? Que povo é esse?
          A7                    D
Esse é o povo que vai morar no céu.
             D               Em
Quem é esse povo? Que povo é esse?
          A7                    D     D7
Esse é o povo que vai morar no céu.

       G          A          D          Bm         Em  
Vai morar, vai morar, vai morar, vai morar, vai morar, 
       A7        D  D7
vai morar lá no céu.
       G          A          D          Bm         Em  
Vai morar, vai morar, vai morar, vai morar, vai morar, 
       A7        D
vai morar lá no céu.

              D             Em
2. Como é gostoso sentir o gozo,
          A7                    D
Com esse povo que vai morar no céu.
           D             Em
Como é gostoso sentir o gozo,
          A7                    D    D7
Com esse povo que vai morar no céu.
    `
  },
  {
    nome: "Maria o magnificat cantou",
    tom: "",
    link: "",
    momento: [MOMENTO.ENTRADA_LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Em nome do pai",
    tom: "",
    link: "",
    momento: [MOMENTO.INVOCACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "1 A nos descei divina luz",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "2 ladainha",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "3 pai nosso",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "4 ave maria",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "5 gloria ao pai",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "6 senhor tende piedade de nos",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "6 maria ouvi nossa voz",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "6 maria ouvi nossa voz",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "7 cordeiro de deus",
    tom: "",
    link: "",
    momento: [MOMENTO.LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Medley",
    tom: "",
    link: "",
    momento: [MOMENTO.FINAL_LADAINHA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Á senhor aparecida",
    tom: "",
    link: "",
    momento: [MOMENTO.ENTRADA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "1 Desde pequenininho",
    tom: "",
    link: "",
    momento: [MOMENTO.ENTRADA_IMAGEM_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "2 La no altar de aparecida",
    tom: "",
    link: "",
    momento: [MOMENTO.ENTRADA_IMAGEM_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Em nome do pai",
    tom: "",
    link: "",
    momento: [MOMENTO.INVOCAOCAO_SANTISSIMA_TRINDADE_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Eu confesso",
    tom: "",
    link: "",
    momento: [MOMENTO.ATO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Gloria anjos do céu",
    tom: "",
    link: "",
    momento: [MOMENTO.GLORIA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "GLoria a Deus nas alturas",
    tom: "",
    link: "",
    momento: [MOMENTO.GLORIA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "SALMO TARDE",
    tom: "",
    link: "",
    momento: [MOMENTO.SALMO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "SALMO NOITE",
    tom: "",
    link: "",
    momento: [MOMENTO.SALMO_NSA.slug],
    lyrics: `

    `
  },
   {
    nome: "SALMO dia 12",
    tom: "",
    link: "",
    momento: [MOMENTO.SALMO_NSA.slug],
    lyrics: `

    `
  },
   {
    nome: "Aleluia minha alma abrirei",
    tom: "",
    link: "",
    momento: [MOMENTO.ACLAMACAO_NSA.slug],
    lyrics: `

    `
  },
   {
    nome: "Acla maior",
    tom: "",
    link: "",
    momento: [MOMENTO.ACLAMACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Vem espirito... sozinho eu não posso mais",
    tom: "",
    link: "",
    momento: [MOMENTO.INVOCACAO_ESPIRITO_SANTO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Servo por amor",
    tom: "",
    link: "",
    momento: [MOMENTO.OFERTORIO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Santo - ministério amor e adoração",
    tom: "",
    link: "",
    momento: [MOMENTO.SANTO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Maria de Deus senhora da paz",
    tom: "",
    link: "",
    momento: [MOMENTO.COMUNHAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Ave maria sertaneja",
    tom: "",
    link: "",
    momento: [MOMENTO.POS_NSA.slug],
    lyrics: `

    `
  },
   {
    nome: "Romaria",
    tom: "",
    link: "",
    momento: [MOMENTO.POS_NSA.slug],
    lyrics: `

    `
  },
   {
    nome: "Perfeito é quem te criou",
    tom: "",
    link: "",
    momento: [MOMENTO.COROACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Perfeito é quem te criou",
    tom: "",
    link: "",
    momento: [MOMENTO.CONSAGRACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Consagração à nossa senhora",
    tom: "",
    link: "",
    momento: [MOMENTO.CONSAGRACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Dai-nos a benção",
    tom: "",
    link: "",
    momento: [MOMENTO.CONSAGRACAO_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Parabéns pra você",
    tom: "",
    link: "",
    momento: [MOMENTO.EXTRA_NSA.slug],
    lyrics: `

    `
  },
  {
    nome: "Medley",
    tom: "",
    link: "",
    momento: [MOMENTO.FINAL_NSA.slug],
    lyrics: `

    `
  },
  ];
  return new Promise((resolve) => {
    resolve(songs);
  });
};
