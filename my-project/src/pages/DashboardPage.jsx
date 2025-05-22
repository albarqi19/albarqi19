import React, { useState, useEffect } from 'react';
import StudentCard from '../components/StudentCard'; // Adjusted path
import { getStudents } from '../utils/localStorageManager'; // Adjusted path

const DashboardPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(getStudents());
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold font-amiri text-primary mb-6 text-center">قائمة الطلاب</h2>
      {students.length === 0 ? (
        <p className="text-center text-gray-500 font-cairo text-lg">
          لا يوجد طلاب حالياً. قم بإضافة طلاب جدد من صفحة "إضافة طالب".
        </p>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {students.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
