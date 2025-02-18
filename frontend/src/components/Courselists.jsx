import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center p-4">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-500">Error loading courses. Please try again later.</div>;
  }

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center">Available Courses & Mock Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {courses.map(course => (
          <div key={course._id} className="bg-white p-4 shadow-md rounded-md">
            {course.image ? (
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover rounded-md mb-4"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center">
                <span className="text-gray-600">No Image Available</span>
              </div>
            )}
            <h3 className="text-xl font-semibold">{course.title}</h3>
            <p>{course.description}</p>
            <Link to={`/courses/${course._id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
