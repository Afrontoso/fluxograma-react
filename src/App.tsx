import React from 'react';
import Header from './components/Header';
import CourseFlowchart from './components/CourseFlowchart';
function App() {
  const [selectedCourse] = React.useState('eng-software');
  //const [selectedCourse, setSelectedCourse] = React.useState('eng-software');
  
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
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