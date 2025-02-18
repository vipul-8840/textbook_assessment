import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch course data from the backend
    fetch('http://localhost:5000/api/courses')  // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center">Available Courses & Mock Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map(course => (
          <div key={course.id} className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-xl font-semibold">{course.name}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};


export default CourseList;