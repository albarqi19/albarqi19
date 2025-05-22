import React, { useState } from 'react';
import { addStudent } from '../utils/localStorageManager'; // Adjusted path

const AddStudentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    currentLevel: '',
    assignedSurahs: '',
    specialNotes: '',
  });
  const [message, setMessage] = useState(''); // For user feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(), // Simple unique ID
      name: formData.fullName,
      age: formData.age,
      level: formData.currentLevel,
      assignedSurahs: formData.assignedSurahs,
      specialNotes: formData.specialNotes,
      // Initialize recitation stats if needed by StudentCard or other components
      errors: 0, 
      progress: '0%', 
      lastRecitationStatus: 'لم يبدأ',
    };
    addStudent(newStudent);
    console.log('Student saved:', newStudent);
    setMessage(`تمت إضافة الطالب "${newStudent.name}" بنجاح!`);
    setFormData({ // Clear form
      fullName: '',
      age: '',
      currentLevel: '',
      assignedSurahs: '',
      specialNotes: '',
    });
    // Optional: clear message after a few seconds
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="p-6 bg-background min-h-full font-cairo">
      <h2 className="text-3xl font-bold font-amiri text-primary mb-8 text-center">إضافة طالب جديد</h2>
      {message && (
        <div className="mb-4 p-3 rounded-md bg-success text-white text-center font-cairo">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-text mb-1 font-amiri">الاسم الكامل</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-cairo"
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-text mb-1 font-amiri">العمر</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-cairo"
          />
        </div>

        <div>
          <label htmlFor="currentLevel" className="block text-sm font-medium text-text mb-1 font-amiri">مستوى الحفظ الحالي</label>
          <input
            type="text"
            name="currentLevel"
            id="currentLevel"
            value={formData.currentLevel}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-cairo"
          />
        </div>

        <div>
          <label htmlFor="assignedSurahs" className="block text-sm font-medium text-text mb-1 font-amiri">السور أو الأجزاء المخصصة له</label>
          <textarea
            name="assignedSurahs"
            id="assignedSurahs"
            value={formData.assignedSurahs}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-cairo"
          ></textarea>
        </div>

        <div>
          <label htmlFor="specialNotes" className="block text-sm font-medium text-text mb-1 font-amiri">ملاحظات خاصة</label>
          <textarea
            name="specialNotes"
            id="specialNotes"
            value={formData.specialNotes}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm font-cairo"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent font-cairo transition-colors duration-200 ease-in-out"
          >
            إضافة طالب
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentPage;
