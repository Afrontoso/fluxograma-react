import { courses } from '../data/courses'; // Importa os dados dos cursos

interface CourseFlowchartProps {
  courseId: string;
}

const CourseFlowchart = ({ courseId }: CourseFlowchartProps) => {
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

export default CourseFlowchart;