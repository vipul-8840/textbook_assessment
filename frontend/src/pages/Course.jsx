import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Nabar';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="text-center p-4 text-gray-700 font-semibold text-xl">
        Loading course details...
      </div>
    );
  if (error)
    return (
      <div className="text-center p-4 text-red-500 font-semibold text-xl">
        Error loading course details.
      </div>
    );
  if (!course)
    return (
      <div className="text-center p-4 text-gray-700 font-semibold text-xl">
        Course not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-xl border border-gray-200 mt-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          {course.title}
        </h1>

        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-72 object-cover rounded-xl mb-6 border border-gray-300 shadow-md"
          />
        )}

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-green-600">
            Price: ${course.price}
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseDetails;
