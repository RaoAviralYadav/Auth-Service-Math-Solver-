# Auth Service

A modern, full-stack authentication service built with React, TypeScript, and Express, featuring a beautiful UI powered by Radix UI and Tailwind CSS.

## About

Auth Service is a comprehensive authentication solution that provides a robust backend API and a polished frontend interface. It implements secure user authentication using modern best practices and offers a responsive, accessible user interface.

# Showcase (Preview and ScreenShots)

## Preview Gif

- ![](https://github.com/RaoAviralYadav/Auth-Service-Math-Solver-/blob/e9de72bffd8a676bc3c7d8d46c3816a204a9ad11/Showcase%20(ScreenShots)/Preview.gif)

## Trignometry Problem 1

- ![](https://github.com/RaoAviralYadav/Auth-Service-Math-Solver-/blob/e9de72bffd8a676bc3c7d8d46c3816a204a9ad11/Showcase%20(ScreenShots)/Screenshot%202025-10-20%20205305.png)

## Trignometry Problem 2

- ![](https://github.com/RaoAviralYadav/Auth-Service-Math-Solver-/blob/e9de72bffd8a676bc3c7d8d46c3816a204a9ad11/Showcase%20(ScreenShots)/Screenshot%202025-10-20%20205322.png)

## Compound Interest Problem 1

- ![](https://github.com/RaoAviralYadav/Auth-Service-Math-Solver-/blob/e9de72bffd8a676bc3c7d8d46c3816a204a9ad11/Showcase%20(ScreenShots)/Screenshot%202025-10-20%20205343.png)

## Compound Interest Problem 2

- ![](https://github.com/RaoAviralYadav/Auth-Service-Math-Solver-/blob/e9de72bffd8a676bc3c7d8d46c3816a204a9ad11/Showcase%20(ScreenShots)/Screenshot%202025-10-20%20205401.png)

## Features

- 🔐 Secure user authentication
- 🎨 Modern, responsive UI components
- 🌐 RESTful API architecture
- 📱 Mobile-friendly design
- 🔄 Real-time form validation
- 🛡️ Session-based authentication
- 🎯 TypeScript for type safety
- 🎨 Customizable UI components using Radix UI
- 🌙 Theme support
- 📊 Database integration with PostgreSQL and Drizzle ORM

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Radix UI Components
- React Query
- React Hook Form
- Zod for validation
- Wouter for routing
- Vite for development

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Drizzle ORM
- Passport.js for authentication
- Express Session

### Development Tools
- ESBuild
- DrizzleKit
- TypeScript
- Vite
- TSX

## Project Structure

```
├── client/                  # Frontend application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   └── ui/        # UI component library
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Application pages
├── server/                 # Backend application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database operations
├── shared/                # Shared code
│   └── schema.ts         # Database schema
└── migrations/           # Database migrations
```

## Project Architecture

The application follows a client-server architecture:

### Frontend Architecture
- Component-based architecture using React
- State management with React Query
- Form handling with React Hook Form
- UI components built on Radix UI primitives
- Styling with Tailwind CSS
- Type-safe development with TypeScript

### Backend Architecture
- RESTful API endpoints
- Session-based authentication with Passport.js
- PostgreSQL database with Drizzle ORM
- Type-safe database operations
- Secure password handling

## Use Cases

1. User Authentication
   - User registration
   - User login
   - Password management
   - Session handling

2. Session Management
   - Secure session storage
   - Session persistence
   - Session expiration

3. Security Features
   - Password hashing
   - Session protection
   - CSRF protection
   - Rate limiting

## Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd AuthService
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
   ```

4. Set up the database
   ```bash
   npm run db:push
   ```

5. Start the development server
   ```bash
   npm run dev
   ```
   The server will start on:
   - Port 5000 by default
   - Or the port specified in the `PORT` environment variable

## Development

1. Frontend Development
   - UI components are in `client/src/components`
   - Pages are in `client/src/pages`
   - Styles are managed with Tailwind CSS

2. Backend Development
   - API routes are in `server/routes.ts`
   - Database operations are in `server/storage.ts`
   - Schema definitions are in `shared/schema.ts`

## Note from Author

The Auth Service project is designed to provide a modern, secure, and user-friendly authentication solution. It combines the best practices of frontend and backend development while maintaining code quality and type safety. The project structure is organized to be scalable and maintainable, making it suitable for both small and large applications.

Feel free to contribute to this project or use it as a foundation for your own authentication service. Your feedback and contributions are always welcome!

## Credits

Created with 💻 by **Aviral Yadav**

### Special Thanks
- Radix UI team for the amazing component primitives
- Tailwind CSS team for the utility-first CSS framework
- The open-source community for various tools and libraries used in this project

---

For issues, feature requests, or contributions, please visit the repository's issue tracker.
