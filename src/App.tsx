import React from 'react';

// Componente provisório para o cabeçalho
const HeaderPlaceholder = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">Fluxograma de Cursos</h1>
        <div>
          {/* Espaço para o seletor de cursos e login */}
        </div>
      </nav>
    </header>
  );
};

// Componente provisório para o fluxograma
const CourseFlowchartPlaceholder = () => {
  return (
    <div className="p-4 text-center text-gray-400">
      <h2 className="text-2xl font-semibold mb-4">Engenharia de Software</h2>
      <p>O fluxograma do curso aparecerá aqui.</p>
    </div>
  );
};

// Componente principal da aplicação
function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <HeaderPlaceholder />
      
      <main className="container mx-auto mt-8">
        <CourseFlowchartPlaceholder />
      </main>

      <footer className="text-center p-4 mt-12 text-gray-500 text-sm">
        <p>Desenvolvido para a comunidade acadêmica.</p>
      </footer>
    </div>
  );
}

export default App;
