import React from 'react';
import { UserCircle2 } from 'lucide-react'; // Placeholder icon

const StudentCard = ({ student }) => {
  if (!student) {
    return null; // Or some placeholder for an empty student prop
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full md:w-72 transform transition-all hover:scale-105">
      <div className="flex items-center mb-4">
        <UserCircle2 size={48} className="text-secondary mr-4" />
        <div>
          <h3 className="text-lg font-bold font-amiri text-primary">{student.name}</h3>
          <p className="text-sm text-gray-600 font-cairo">المستوى: {student.level}</p>
        </div>
      </div>
      <div className="space-y-2 font-cairo text-sm">
        <p>الأخطاء: <span className="font-semibold text-errors">{student.errors}</span></p>
        <p>التقدم: <span className="font-semibold text-success">{student.progress}</span></p>
        <p>آخر تلاوة: <span className="font-semibold text-accent">{student.lastRecitationStatus}</span></p>
      </div>
    </div>
  );
};

export default StudentCard;
