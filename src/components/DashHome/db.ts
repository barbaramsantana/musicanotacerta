import type { IFeature } from "./interface";

export const featuresData: IFeature[] = [
  {
    icon: 'mdi-music-box-multiple',
    title: 'Biblioteca Completa',
    description: 'Acesso a uma vasta coleção de músicas católicas selecionadas para suas celebrações',
    color: 'primary',
    redirect: '/todas'
  },
  {
    icon: 'mdi-church',
    title: 'Para Missas',
    description: 'Músicas específicas para cada momento da Missa: entrada, ofertório, comunhão e saída',
    color: 'primary',
    redirect: '/momento'
  },
  {
    icon: 'mdi-file-document',
    title: 'Arquivo Pessoal',
    description: 'Crie seu arquivo .html e import para utilizar as funcionalidades de leitura de arquivos',
    color: 'primary',
    redirect: '/arquivo'
  },
  {
    icon: 'mdi-instagram',
    title: 'Conheça nosso ministério',
    description: 'Acesse para conhecer nosso ministério e acompanhar nossas atividades.',
    color: 'primary',
    redirect: 'https://www.instagram.com/coralservosdemaria/',
    blank: true
  }
];