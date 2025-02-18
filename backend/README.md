# Textbook Assessment Backend

This project is the backend for the Textbook Assessment application. It is built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/textbook_assessment.git
```

2. Navigate to the backend directory:

```bash
cd textbook_assessment/backend
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the backend directory and add the following environment variables:

```properties
PORT=5000
URL="your_mongodb_connection_string"
JWT_SECRET="your_jwt_secret"
```

### Running the Server

To start the server in development mode:

```bash
npm run dev
```

To start the server in production mode:

```bash
npm start
```

The server will be running on [http://localhost:5000](http://localhost:5000).

## API Endpoints

### User Authentication

- `POST /signup`: Create a new user account.
- `POST /signin`: Sign in to an existing user account.

### Courses

- `GET /courses`: Get a list of all courses.
- `GET /courses/:id`: Get details of a specific course by ID.

## File Descriptions

### Main Files

- `index.js`: The main entry point of the application.
- `db.js`: Contains the database schema and models.
- `package.json`: Contains the project dependencies and scripts.

### Configuration Files

- `.env`: Contains environment variables.
- `.gitignore`: Specifies files and directories to be ignored by Git.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

You can check out [the GitHub repository](https://github.com/yourusername/textbook_assessment) - your feedback and contributions are welcome!
