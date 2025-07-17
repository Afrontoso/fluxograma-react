import { courses, courseData } from '../data/courses';
import SubjectCard from './SubjectCard';

interface CourseFlowchartProps {
    courseId: string;
}

const CourseFlowchart = ({ courseId }: CourseFlowchartProps) => {
    const course = courses.find(c => c.id === courseId);
    const semesters = courseData[courseId] || {};

    return (
        <div className="p-6 rounded-lg bg-gray-800/50 border border-gray-700">
            <h2 className="text-3xl font-semibold mb-8 text-center text-white">{course?.name}</h2>

            <div className="flex gap-4 overflow-x-auto pb-4">
                {Object.entries(semesters).map(([semesterNumber, subjects]) => (
                    <div key={semesterNumber} className="flex-shrink-0 w-64 bg-gray-900/50 p-4 rounded-lg">
                        <h3 className="text-lg font-bold text-cyan-400 mb-4 text-center border-b border-gray-700 pb-2">{semesterNumber}° Semestre</h3>
                        <div className="space-y-3">
                            {subjects.map(subject => (
                                <SubjectCard key={subject.id} subject={subject} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseFlowchart;