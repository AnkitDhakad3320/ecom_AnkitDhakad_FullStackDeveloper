Ecom React App
The live demo here:
[https://ecomankitdhakadfull-stackdeveloper.vercel.app/]


Overview:

The Ecom React App is a responsive web application that allows users to choose between three distinct UI themes. Each theme changes colors, layout, fonts, and spacing, providing a unique experience. Built with React, TypeScript, Context API, React Router, and CSS Modules, this app demonstrates modern frontend development practices, including theme persistence and API integration.



Features

Three unique themes:


Theme 1: Minimalist layout with light background and simple sans-serif font.

Theme 2: Dark mode with sidebar layout and bold serif font.

Theme 3: Colorful card-based grid layout with playful Google Font (Pacifico).


Fixed, responsive top header with app logo ,navigation links, and theme dropdown.

Persistent theme selection stored in localStorage.

Product data fetched from FakeStoreAPI.

Multi-page routing (Home, About, Contact) with active link highlighting.

Subtle theme switching animations.

Fully responsive for desktop and mobile devices.

Secure and maintainable codebase implemented with TypeScript.




Installation


npx create-react-app ecom --template typescript

cd ecom

npm start  (Run the development server)



Install Essential Dependencies and Set Up Folder Structure



 npm install react-router-dom @types/react-router-dom
 
/components

/context

/pages

/themes


Implement Theme Context with Persistence

Create Header Component with Theme Switcher Dropdown

Create Home page component and style content

Create About page component and style content

Create Contact page component and style content

Create CardList component to display products using FakeStoreAPI

theme styles and CSS variables for all three themes

Implement responsive design and media queries

Add subtle animations for theme transitions

Create Footer component

Integrate React Router for page navigation



Test theme persistence and responsiveness across devices


production-ready files on git 

git init 

git add .

git commit -m "initial commit"

git branch -M main

git remote add origin https://github.com/AnkitDhakad3320/ecom_AnkitDhakad_FullStackDeveloper.git

git push -u origin main     



Deploy app on Vercel and obtain live deployment URL;

The live demo here:

[https://ecomankitdhakadfull-stackdeveloper.vercel.app/]
