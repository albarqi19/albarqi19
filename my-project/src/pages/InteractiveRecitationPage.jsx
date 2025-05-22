import React, { useState, useEffect } from 'react';
import QuranTextDisplay from '../components/QuranTextDisplay'; // Adjusted path
import { Play, Pause, RotateCcw, Save, XCircle, ChevronDown } from 'lucide-react';
import { getStudents } from '../utils/localStorageManager'; // Import getStudents

// Mock Error Modal (can be moved to its own component later)
const ErrorModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleErrorTypeClick = (type) => {
    console.log(`${type} selected`);
    onClose(); // Close modal after selection for now
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md font-cairo">
        <h3 className="text-xl font-bold font-amiri text-primary mb-4 text-center">تسجيل خطأ جديد</h3>
        <div className="space-y-3">
          <button
            onClick={() => handleErrorTypeClick('Memorization Error')}
            className="w-full py-2 px-4 rounded-md text-white bg-errors hover:bg-errors/80 transition-colors duration-200 ease-in-out"
          >
            خطأ تسميع (حفظ)
          </button>
          <button
            onClick={() => handleErrorTypeClick('Recitation Error')}
            className="w-full py-2 px-4 rounded-md text-white bg-accent hover:bg-accent/80 transition-colors duration-200 ease-in-out"
          >
            خطأ تلاوة (نطق)
          </button>
          <button
            onClick={() => handleErrorTypeClick('Tajweed Error')}
            className="w-full py-2 px-4 rounded-md text-white bg-secondary hover:bg-secondary/80 transition-colors duration-200 ease-in-out"
          >
            خطأ تجويد
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 px-4 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 ease-in-out"
        >
          إلغاء
        </button>
      </div>
    </div>
  );
};

const InteractiveRecitationPage = () => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [students, setStudents] = useState([]); // State for students list
  const [isModalVisible, setIsModalVisible] = useState(false); // For the error modal

  useEffect(() => {
    setStudents(getStudents()); // Load students on component mount
  }, []);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    // Here you might want to load the selected student's assigned sections, etc.
  };

  // Placeholder for modal toggle - in reality, this would be triggered by clicking a QuranWord
  // For now, we can add a temporary button to test the modal or trigger it from QuranWord later.
  const openErrorModal = () => setIsModalVisible(true);
  const closeErrorModal = () => setIsModalVisible(false);
  
  // Placeholder for control button actions
  const handleControlClick = (action) => {
    console.log(`${action} clicked`);
  };

  return (
    <div className="p-4 md:p-6 bg-background min-h-full font-cairo flex flex-col lg:flex-row gap-6">
      {/* Main Content Area */}
      <div className="flex-grow lg:w-3/4 order-2 lg:order-1">
        {/* Student Selection */}
        <section className="mb-6 p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold font-amiri text-primary mb-2">اختيار الطالب والمقطع</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="relative flex-grow">
              <select
                value={selectedStudent}
                onChange={handleStudentChange}
                className="block w-full appearance-none bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent sm:text-sm"
                disabled={students.length === 0}
              >
                <option value="" disabled>
                  {students.length === 0 ? '-- لا يوجد طلاب --' : '-- اختر الطالب --'}
                </option>
                {students.map(student => (
                  <option key={student.id} value={student.id}> {/* Use student.id as value for better handling */}
                    {student.name} ({student.level}) {/* Display name and level */}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown size={20} />
              </div>
            </div>
            {/* Button to test modal - can be removed later */}
            <button onClick={openErrorModal} className="bg-accent text-white py-2 px-3 rounded-md hover:bg-accent/80 transition-colors duration-200 ease-in-out">
                فتح مودال الأخطاء (تجريبي)
            </button>
          </div>
          {selectedStudent && (
            <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
              <p className="text-sm text-gray-700">
                الطالب المحدد: <span className="font-semibold text-secondary">{students.find(s => s.id === parseInt(selectedStudent))?.name}</span>
              </p>
              <p className="text-sm text-gray-700 mt-1">
                المقاطع المخصصة: <span className="font-semibold text-gray-600">{students.find(s => s.id === parseInt(selectedStudent))?.assignedSurahs || 'غير محدد'}</span>
              </p>
            </div>
          )}
        </section>

        {/* Quran Text Display */}
        <section className="mb-6">
          <QuranTextDisplay />
        </section>
        
        {/* Control Buttons */}
        <section className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold font-amiri text-primary mb-3 text-center">أدوات التحكم</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <button onClick={() => handleControlClick('Start Recitation')} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white bg-primary hover:bg-primary/80 transition-colors duration-200 ease-in-out">
              <Play size={18}/> بدء التسميع
            </button>
            <button onClick={() => handleControlClick('Pause')} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white bg-accent hover:bg-accent/80 transition-colors duration-200 ease-in-out">
              <Pause size={18}/> إيقاف مؤقت
            </button>
            <button onClick={() => handleControlClick('Restart')} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white bg-gray-500 hover:bg-gray-600 transition-colors duration-200 ease-in-out">
              <RotateCcw size={18}/> إعادة تشغيل
            </button>
            <button onClick={() => handleControlClick('Save Results')} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white bg-success hover:bg-success/80 transition-colors duration-200 ease-in-out">
              <Save size={18}/> حفظ النتائج
            </button>
            <button onClick={() => handleControlClick('End Session')} className="flex items-center justify-center gap-2 py-2 px-3 rounded-md text-white bg-errors hover:bg-errors/80 transition-colors duration-200 ease-in-out col-span-2 md:col-span-1">
              <XCircle size={18}/> إنهاء الجلسة
            </button>
          </div>
        </section>
      </div>

      {/* Sidebar/Stats Area */}
      <aside className="lg:w-1/4 order-1 lg:order-2 space-y-6">
        <section className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold font-amiri text-primary mb-3 border-b pb-2">إحصائيات التسميع</h3>
          <div className="space-y-2 text-sm">
            <p>أخطاء التسميع (الحفظ): <span className="font-bold text-errors">0</span></p>
            <p>أخطاء التلاوة (النطق): <span className="font-bold text-accent">0</span></p> {/* Changed from text-orange-500 */}
            <p>أخطاء التجويد: <span className="font-bold text-secondary">0</span></p> {/* Changed from text-blue-500 */}
            <hr className="my-2"/>
            <p>نسبة الصحة: <span className="font-bold text-success">100%</span></p>
          </div>
        </section>
      </aside>

      {/* Error Modal */}
      <ErrorModal isVisible={isModalVisible} onClose={closeErrorModal} />
    </div>
  );
};

export default InteractiveRecitationPage;
