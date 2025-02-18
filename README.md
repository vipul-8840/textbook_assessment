# Textbook Assessment Project

This project is a comprehensive learning platform built with a React frontend and a Node.js backend. It includes various pages and components to provide a seamless user experience.
![Home Page](https://raw.githubusercontent.com/vipul-8840/textbook_assessment/main/frontend/assets/kvimg.png)
![Home Page](https://raw.githubusercontent.com/vipul-8840/textbook_assessment/main/frontend/assets/aboutimg.png)

## Project Structure

The project is divided into two main parts:

- `frontend`: Contains the React application built with Vite.
- `backend`: Contains the Node.js application built with Express and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/textbook_assessment.git
```

2. Navigate to the project directory:

```bash
cd textbook_assessment
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the backend directory and add the following environment variables:

```properties
PORT=5000
URL="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
```

4. Run the development server:

```bash
npm run dev
```

The server will be running on [http://localhost:5000](http://localhost:5000).

## File Descriptions

### Frontend

- `Signup.jsx`: Contains the implementation of the `SignUp` component which handles user registration.
- `Signin.jsx`: Contains the implementation of the `SignIn` component which handles user login.
- `Home.jsx`: Contains the implementation of the `Home` component which displays the homepage with a list of courses.
- `Dashboard.jsx`: Contains the implementation of the `Dashboard` component which displays the user dashboard.
- `Course.jsx`: Contains the implementation of the `CourseDetails` component which displays detailed information about a specific course.
- `Navbar.jsx`: Contains the implementation of the `Navbar` component which provides navigation links.
- `Courselists.jsx`: Contains the implementation of the `CourseList` component which displays a list of available courses.
- `About.jsx`: Contains the implementation of the `About` component which provides information about the platform.

### Backend

- `index.js`: The main entry point of the application.
- `db.js`: Contains the database schema and models.
- `package.json`: Contains the project dependencies and scripts.
- `.env`: Contains environment variables.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

You can check out [the GitHub repository](https://github.com/yourusername/textbook_assessment) - your feedback and contributions are welcome!
