// Futuramente, este ficheiro irá conter os dados de todos os cursos.

export interface Course {
  id: string;
  name: string;
}

export const courses: Course[] = [
  { id: 'eng-software', name: 'Engenharia de Software' },
  { id: 'eng-mecatronica', name: 'Engenharia Mecatrônica' },
];

// Aqui vamos adicionar os dados detalhados de cada curso mais tarde
export const courseData = {
  'eng-software': {
    // ... dados do fluxograma de engenharia de software
  },
  'eng-mecatronica': {
    // ... dados do fluxograma de engenharia mecatrônica
  }
};