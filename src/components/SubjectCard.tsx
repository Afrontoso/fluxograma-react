import type { Subject } from '../data/courses';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  const natureClass = {
    OBRIGATORIO: 'border-l-cyan-400',
    OPTATIVA: 'border-l-purple-400',
    EXTENSAO: 'border-l-amber-400',
  };
  
  return (
    <div className={`bg-gray-800 p-3 rounded-md shadow-md border-l-4 ${natureClass[subject.natureza]} hover:bg-gray-700 transition-colors duration-200 cursor-pointer`}>
      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
        <span>{subject.codigo}</span>
        <span>{subject.creditos} CR</span>
      </div>
      <h4 className="font-semibold text-sm text-gray-100">{subject.nome}</h4>
    </div>
  );
};

export default SubjectCard;