const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Fluxograma UnB</h1>
        <div>
          {/* Espaço reservado para o seletor de cursos e o botão de login */}
          <span className="text-gray-400 text-sm">Seletor de Cursos</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;