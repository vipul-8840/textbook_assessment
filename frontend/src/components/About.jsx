import Navbar from "./Nabar";



const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
      <Navbar />

      <section className="flex flex-col items-center px-6 py-12 md:py-16 lg:py-20 max-w-5xl mx-auto text-gray-800">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-6 md:mb-8">
          About <span className="text-green-600">KvEducation App</span>
        </h2>

        <div className="relative w-full flex justify-center mb-8">
          <img
            src="https://cdn.vectorstock.com/i/500p/05/37/education-is-learning-what-you-didnt-even-know-yo-vector-44660537.jpg"
            alt="Education"
            className="rounded-xl shadow-lg w-full max-w-lg transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold text-blue-600">Testbook</span> is your go-to platform for accessing courses and mock tests to
            help you excel in competitive exams. We offer a variety of courses tailored for different learning styles and mock tests
            that simulate real exam conditions.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            With <span className="font-semibold text-green-600">interactive lessons</span>, detailed explanations, and regular updates, we
            ensure you stay ahead in your preparation. Whether it’s government exams or any competitive test, Testbook is your perfect
            learning partner.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Join <span className="text-blue-600">millions of learners</span> who trust Testbook to guide them toward success.
            Start your learning journey <span className="text-green-600">today!</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;


