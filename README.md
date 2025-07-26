# 🚀 Next.js Project Setup and Basics

Welcome to **alx-project-0x02-setup**, a project designed to guide learners through the process of building a modern web application using **Next.js**, **TypeScript**, and **Tailwind CSS**. This project is part of the **ALX Software Engineering Program** and focuses on component-based architecture, API integration, reusable components, and responsive UI design.

---

## 📚 Learning Objectives

By the end of this project, you will be able to:

- Scaffold a Next.js project with TypeScript and Tailwind CSS
- Understand and implement basic routing using the **Pages Router**
- Create modular, reusable UI components using TypeScript interfaces
- Handle state and props in functional React components
- Integrate and display data from external APIs (e.g., JSONPlaceholder)
- Apply responsive design principles with Tailwind CSS
- Organize project structure following industry standards

---

## 🛠 Requirements

Before starting, ensure you have:

- Node.js (v16 or later)
- npm or yarn
- Git and GitHub account
- VS Code (recommended)
- Basic knowledge of React, HTML, CSS, and TypeScript

---

## 📁 Project Structure

```

alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── \_app.tsx
│   ├── \_document.tsx
│   ├── index.tsx
│   ├── home.tsx
│   ├── about.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md

````

---

## 🧩 Features & Components

| Component       | Description                                                 |
|----------------|-------------------------------------------------------------|
| `Header.tsx`    | Navigation bar linking to `/home`, `/about`, `/posts`, `/users` |
| `Card.tsx`      | Reusable content card with title and description            |
| `Button.tsx`    | Reusable button supporting different sizes and shapes       |
| `PostModal.tsx` | Modal to add posts interactively                            |
| `PostCard.tsx`  | Displays post title, content, and user ID                   |
| `UserCard.tsx`  | Displays user information fetched from an API               |

---

## 🔀 Pages & Routing

| Route        | Purpose                        |
|--------------|--------------------------------|
| `/`          | Welcome page                   |
| `/home`      | Main dashboard with Cards and Modal |
| `/about`     | Page to display custom buttons |
| `/posts`     | List of fetched posts          |
| `/users`     | List of fetched users          |

---

## 🖥️ Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/your-username/alx-project-0x02-setup.git
cd alx-project-0x02-setup/alx-project-0x02
````

2. **Install Dependencies**

```bash
npm install
```

3. **Run the Development Server**

```bash
npm run dev -- -p 3000
```

4. **Visit the App**
   Open your browser and go to: [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Integration

* **Posts** are fetched from: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)
* **Users** are fetched from: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

You can view them on `/posts` and `/users` routes respectively.

---

## ✅ Best Practices Followed

### ✨ Code Quality

* ESLint enabled for linting
* TypeScript used with interface typing
* Functional components
* Meaningful commit messages

### 🧱 Project Structure

* Interfaces in a single folder
* Common and layout components split
* Pages follow route-based organization

### 📲 Responsive UI

* Mobile-first using Tailwind CSS
* Clean spacing and typography

### ⚙️ Performance

* Lazy-loaded data (where applicable)
* Optimized rendering of components

---

## 🚧 Future Enhancements

* Add authentication logic
* Persist modal inputs using local storage or API
* Add pagination for large data sets
* Improve accessibility (focus traps, ARIA roles)

---

## 🧠 Acknowledgment

This project is part of **ProDev Frontend - SoloForge** under the ALX Software Engineering track.

> 💡 *“The best way to learn is to build.” — Happy coding!*

---

## 📜 License

© 2025 ALX. All rights reserved.

```