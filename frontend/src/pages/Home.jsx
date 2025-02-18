
import CourseList from "../components/Courselists"
import Navbar from "../components/Nabar"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-6">
          Welcome to <span className="text-green-600">KvEducation</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-8">
          Explore a variety of courses and mock tests designed to help you succeed in competitive exams. Enhance your knowledge and 
          stay ahead in your preparation journey.
        </p>

        <div className="w-full max-w-9xl">
          <CourseList />
        </div>
      </div>
    </div>
  );
};


export default Home
