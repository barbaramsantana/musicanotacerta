import musicas from '../dataBase/musicas.json';

interface Musica {
    id: number;
    nome: string;
    tom: string;
    momento: string[];
    letra: string[];
}

export const getMusicaById = (id: number) => {
    return (musicas as Musica[]).find((m: Musica) => m.id == id) || null;
}