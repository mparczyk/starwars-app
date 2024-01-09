# StarWars App

## General Info

Star-Wars fanpage project using https://swapi.dev/ API and custom API for authentication.

## Technologies

Project is created with:

- TypeScript
- ReactJS
- React Router
- React Query
- Styled Components
- i18n
- Ant Design
- https://swapi.dev/ - Free Star-wars API
- custom API for authentication

## Content

### Layout

![Layout](./public/images/home-screen.jpg)
Page layout based on Outlet from React Router and components from Ant Design library.

### Authentication

Bearer authentication for authorizing HTTP requests based on the existence and validity of a bearer token.

![Login Screen](./public/images/login-screen.jpg)
The login panel shows up when trying to access the website. With bearer authentication, the content of the site is available only to logged-in users.

![Registration](./public/images/signUp-screen.jpg)
Registration for new users.

### i18next

![Language switcher](./public/images/language-account-panel.jpg)
In this project i'm using i18next an internationalization-framework.

![English](./public/images/login-screen.jpg) ![German](./public/images/login-screen-de.jpg)
A brief example of changing the language.
