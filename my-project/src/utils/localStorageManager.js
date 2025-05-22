const STUDENTS_KEY = 'quranAppStudents';

/**
 * Saves an array of student objects to Local Storage.
 * @param {Array<Object>} students - The array of student objects.
 */
export const saveStudents = (students) => {
  try {
    const serializedStudents = JSON.stringify(students);
    localStorage.setItem(STUDENTS_KEY, serializedStudents);
  } catch (error) {
    console.error("Error saving students to Local Storage:", error);
  }
};

/**
 * Retrieves student data from Local Storage.
 * @returns {Array<Object>} An array of student objects, or an empty array if none found or on error.
 */
export const getStudents = () => {
  try {
    const serializedStudents = localStorage.getItem(STUDENTS_KEY);
    if (serializedStudents === null) {
      return []; // No data found
    }
    return JSON.parse(serializedStudents);
  } catch (error) {
    console.error("Error getting students from Local Storage:", error);
    return []; // Return empty array on error (e.g., corrupted data)
  }
};

/**
 * Adds a new student to the list in Local Storage.
 * @param {Object} newStudent - The new student object to add.
 */
export const addStudent = (newStudent) => {
  try {
    const students = getStudents();
    students.push(newStudent);
    saveStudents(students);
  } catch (error) {
    console.error("Error adding student to Local Storage:", error);
    // Potentially re-throw or handle more gracefully depending on app requirements
  }
};
