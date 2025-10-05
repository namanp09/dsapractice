<img width="2880" height="1710" alt="image" src="https://github.com/user-attachments/assets/0ee667a6-b9d9-4812-941b-730652734abf" />

Smart AI DSA Practice Application

A full-stack MERN application designed to assist users in practicing Data Structures and Algorithms (DSA) problems. The platform leverages AI to provide personalized problem recommendations and solutions.

🚀 Features

AI-Powered Problem Recommendations: Intelligent suggestions based on user progress.

Comprehensive Problem Set: A wide range of DSA problems categorized by difficulty and topic.

User Progress Tracking: Monitor your learning journey and improvements.

Responsive Design: Optimized for both desktop and mobile devices.

🛠️ Tech Stack

Frontend: React.js, CSS

Backend: Node.js, Express.js

Database: MongoDB

Deployment:

Frontend: Vercel

Backend: Render

📁 Project Structure
dsapractice/
├── backend/           # Server-side code
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   └── server.js      # Entry point
└── frontend/          # Client-side code
    ├── public/        # Static assets
    └── src/           # React components and hooks

📦 Installation
Backend

Navigate to the backend directory:

cd backend


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the backend directory.

Add the following variables:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Start the server:

npm start

Frontend

Navigate to the frontend directory:

cd frontend


Install dependencies:

npm install


Start the development server:

npm start

📤 Deployment
Backend

Push the backend directory to your GitHub repository.

Deploy on Render
:

Create a new Web Service.

Connect your GitHub repository.

Set the build and start commands:

Build Command: npm install

Start Command: npm start

Add environment variables:

MONGO_URI: Your MongoDB connection string.

PORT: 5000

After deployment, note the provided URL (e.g., https://your-backend.onrender.com).

Frontend

Push the frontend directory to your GitHub repository.

Deploy on Vercel
:

Import your GitHub repository.

Set the build command:

Build Command: npm run build

Output Directory: build

After deployment, note the provided URL (dsapractice-khaki.vercel.app/).

🔗 Links

Frontend (Vercel)

Backend (Render)

🤝 Contributing

Contributions are welcome! If you have suggestions or improvements:

Fork the repository.

Create a new branch (git checkout -b feature/YourFeature).

Commit your changes (git commit -am 'Add new feature').

Push to the branch (git push origin feature/YourFeature).

Create a new Pull Request.

📄 License

This project is licensed under the MIT License - see the LICENSE
 file for details.
