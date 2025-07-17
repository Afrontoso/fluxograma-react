// Define as estruturas de dados para o nosso curso
export interface Subject {
  id: string;
  nome: string;
  codigo: string;
  creditos: number;
  natureza: 'OBRIGATORIO' | 'OPTATIVA' | 'EXTENSAO';
  prerequisitos: string[];
}

export interface Course {
  id: string;
  name: string;
}

export const courses: Course[] = [
  { id: 'eng-software', name: 'Engenharia de Software' },
  { id: 'eng-mecatronica', name: 'Engenharia Mecatrônica' },
];

// Dados detalhados do curso de Engenharia de Software
export const courseData: Record<string, Record<string, Subject[]>> = {
  'eng-software': {
    "1": [
        { id: "CIC0004", nome: "Algoritmos e Programação de Computadores", codigo: "CIC0004", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0163", nome: "Introdução à Engenharia", codigo: "FGA0163", creditos: 2, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0168", nome: "Desenho Industrial Assistido por Computador", codigo: "FGA0168", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0302", nome: "Engenharia e Ambiente", codigo: "FGA0302", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "MAT0025", nome: "Cálculo 1", codigo: "MAT0025", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: [] }
    ],
    "2": [
        { id: "FGA0157", nome: "Probabilidade e Estatística Aplicado a Engenharia", codigo: "FGA0157", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "IFD0171", nome: "Física 1", codigo: "IFD0171", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "IFD0173", nome: "Física 1 Experimental", codigo: "IFD0173", creditos: 2, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "MAT0026", nome: "Cálculo 2", codigo: "MAT0026", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: ["MAT0025"] },
        { id: "MAT0031", nome: "Introdução a Álgebra Linear", codigo: "MAT0031", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] }
    ],
    "3": [
        { id: "FGA0071", nome: "Prática de Eletrônica Digital 1", codigo: "FGA0071", creditos: 2, natureza: "OBRIGATORIO", prerequisitos: ["MAT0031", "FGA0073"] },
        { id: "FGA0073", nome: "Teoria de Eletrônica Digital 1", codigo: "FGA0073", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["MAT0031", "FGA0071"] },
        { id: "FGA0085", nome: "Matemática Discreta 1", codigo: "FGA0085", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0133", nome: "Engenharia Econômica", codigo: "FGA0133", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0158", nome: "Orientação a Objetos", codigo: "FGA0158", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["CIC0004"] },
        { id: "FGA0160", nome: "Métodos Numéricos para Engenharia", codigo: "FGA0160", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["MAT0026"] },
        { id: "FGA0164", nome: "Humanidades e Cidadania", codigo: "FGA0164", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] }
    ],
    "4": [
        { id: "FGA0108", nome: "Matemática Discreta 2", codigo: "FGA0108", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0085"] },
        { id: "FGA0142", nome: "Fundamentos de Arquitetura de Computadores", codigo: "FGA0142", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0071", "FGA0073"] },
        { id: "FGA0146", nome: "Estruturas de Dados 1", codigo: "FGA0146", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["CIC0004"] },
        { id: "FGA0303", nome: "Projeto Integrador de Engenharia 1", codigo: "FGA0303", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0307", nome: "Gestão da Produção e Qualidade", codigo: "FGA0307", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0133"] },
        { id: "FGA0312", nome: "Métodos de Desenvolvimento de Software", codigo: "FGA0312", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0158"] }
    ],
    "5": [
        { id: "FGA0003", nome: "Compiladores 1", codigo: "FGA0003", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0146"] },
        { id: "FGA0030", nome: "Estruturas de Dados 2", codigo: "FGA0030", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0146"] },
        { id: "FGA0137", nome: "Sistemas de Banco de Dados 1", codigo: "FGA0137", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0108"] },
        { id: "FGA0170", nome: "Fundamentos de Sistemas Operacionais", codigo: "FGA0170", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0142"] },
        { id: "FGA0173", nome: "Interação Humano Computador", codigo: "FGA0173", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0158"] },
        { id: "FGA0313", nome: "Requisitos de Software", codigo: "FGA0313", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0312"] }
    ],
    "6": [
        { id: "FGA0060", nome: "Sistemas de Banco de Dados 2", codigo: "FGA0060", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0137"] },
        { id: "FGA0124", nome: "Projeto de Algoritmos", codigo: "FGA0124", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0146"] },
        { id: "FGA0208", nome: "Arquitetura e Desenho de Software", codigo: "FGA0208", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0313"] },
        { id: "FGA0211", nome: "Fundamentos de Redes de Computadores", codigo: "FGA0211", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0170"] },
        { id: "FGA0314", nome: "Testes de Software", codigo: "FGA0314", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0158"] },
        { id: "FGA0315", nome: "Qualidade de Software 1", codigo: "FGA0315", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] }
    ],
    "7": [
        { id: "FGA0109", nome: "Fundamentos de Sistemas Embarcados", codigo: "FGA0109", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0170"] },
        { id: "FGA0210", nome: "Paradigmas de Programação", codigo: "FGA0210", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0158", "FGA0003"] },
        { id: "FGA0242", nome: "Técnicas de Programação em Plataformas Emergentes", codigo: "FGA0242", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0208", "FGA0314"] },
        { id: "FGA0244", nome: "Programação para Sistemas Paralelos e Distribuídos", codigo: "FGA0244", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0211", "FGA0030"] }
    ],
    "8": [
        { id: "FGA0288", nome: "Estágio Supervisionado", codigo: "FGA0288", creditos: 14, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0316", nome: "Engenharia de Produto de Software", codigo: "FGA0316", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0242"] },
        { id: "FGA0317", nome: "Gerência de Configuração e Evolução de Software", codigo: "FGA0317", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: ["FGA0314"] }
    ],
    "9": [
        { id: "FGA0287", nome: "Trabalho de Conclusão de Curso 1", codigo: "FGA0287", creditos: 4, natureza: "OBRIGATORIO", prerequisitos: [] },
        { id: "FGA0304", nome: "Projeto Integrador de Engenharia 2", codigo: "FGA0304", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: ["FGA0303"] }
    ],
    "10": [
        { id: "FGA0290", nome: "Trabalho de Conclusão de Curso 2", codigo: "FGA0290", creditos: 6, natureza: "OBRIGATORIO", prerequisitos: ["FGA0287"] },
        { id: "FGA0318", nome: "Atividade de Extensão Engenharia de Software", codigo: "FGA0318", creditos: 3, natureza: "OBRIGATORIO", prerequisitos: [] }
    ]
  },
  'eng-mecatronica': {
    // ... dados do fluxograma de engenharia mecatrônica
  }
};