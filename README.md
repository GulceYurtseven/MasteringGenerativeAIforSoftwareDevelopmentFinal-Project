# CodeCraftHub - User Management Service 🚀

This project, developed as the final assignment for the **"Mastering Generative AI for Software Development"** course, is a backend user management microservice for CodeCraftHub, a personalized learning platform for software developers.

## 📌 Features

* **User Registration:** Secure registration of new developers (passwords are stored by hashing with Bcrypt).
* **User Login:** Secure and modern authentication system based on JWT (JSON Web Token).
* **Skill Tracking:** Allows users to track their areas of expertise (e.g., Flutter, .NET, Java Spring Boot) as a `techStack` in their profiles.
* **Container Architecture:** Thanks to Docker and Docker Compose integration, it guarantees seamless operation on any computer with a single command (without the "it was working on my machine" problem).

* **Automated Tests:** Comprehensive controller and service tests written with the Jest library.

## 🛠️ Technologies Used

* **Runtime & Framework:** Node.js, Express.js
* **Database & ORM:** MongoDB, Mongoose

* **Security & Validation:** JWT (jsonwebtoken), Bcrypt

* **Test Environment:** Jest

* **DevOps & Deployment:** Docker, Docker Compose

## 📂 Project Architecture

The project is structured under the `src` folder according to the standard MVC (Model-View-Controller) design pattern to increase maintainability:
