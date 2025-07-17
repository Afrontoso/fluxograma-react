import React from 'react';
import Header from './components/Header';

// --- ESTRUTURA DE DADOS (Provisória) ---
const courses = [
  { id: 'eng-software', name: 'Engenharia de Software' },
  { id: 'eng-mecatronica', name: 'Engenharia Mecatrônica' },
  // Futuramente, outros cursos serão adicionados aqui
];

// --- COMPONENTES (Provisórios) ---
// Mais tarde, vamos criar este componente no seu próprio ficheiro
const CourseFlowchart = ({ courseId }: { courseId: string }) => {
  const course = courses.find(c => c.id === courseId);
  return (
    <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
      <h2 className="text-3xl font-semibold mb-6 text-center text-white">{course?.name}</h2>
      <div className="text-center text-gray-400 min-h-[50vh] flex items-center justify-center">
        <p>O fluxograma interativo do curso aparecerá aqui.</p>
      </div>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
function App() {
  // No futuro, este estado será usado para mudar de curso.
  // Por agora, vamos deixar o curso de Eng. de Software fixo.
  const [selectedCourse, setSelectedCourse] = React.useState('eng-software');

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* 2. Usa o componente Header importado */}
      <Header /> 
      
      <main className="container mx-auto mt-8 px-4">
        <CourseFlowchart courseId={selectedCourse} />
      </main>

      <footer className="text-center p-6 mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para a comunidade acadêmica da UnB.</p>
      </footer>
    </div>
  );
}

export default App;