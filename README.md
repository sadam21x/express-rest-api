# Express TypeScript REST API Template

This project is a boilerplate template for building a REST API using Express and TypeScript. The template includes a set of essential features and best practices to help you quickly start your development. This project is ready to be deployed and is also Docker-compatible.

## Features

- **TypeScript**: Fully configured with custom path aliases for both development and production builds.
- **Express Middleware**: Includes essential middleware such as CORS, compression, global error handler, cookie parser, and more.
- **Logging**: Configured with Winston to log application activity. Logs are rotated daily, with history maintained for the last 30 days using `winston-daily-rotate-file`.
- **Request Validation**: Type-safe request schema validation using Zod. Supports validation for query parameters, route parameters, and request bodies.
- **Maintenance Mode**: Middleware to easily switch the API into maintenance mode.
- **Auto-Reload**: Automatic server reload during development with Nodemon.
- **Optimized Build**: Custom build script optimized for production.
- **Docker Ready**: Includes Dockerfile, dockerignore, and docker-compose for containerization.
- **Clean Project Structure**: Organized folder structure separating concerns (entry point, server, routes, controllers, services, etc.).
- **Code Quality**: Configured with ESLint and Prettier for consistent code quality and style.

## Getting Started

### Prerequisites

- Node.js
- Docker (optional, for containerized deployment)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sadam21x/express-rest-api.git
    cd express-rest-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory and set up the required environment variables.

4. **Run the development server:**

    ```bash
    npm run dev
    ```

    The server will start with auto-reload using Nodemon.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

The compiled JavaScript files will be output to the dist directory.

### Running in Docker

To run the application using Docker:

1. **Build the Docker image:**

    ```bash
    docker-compose build
    ```

2. **Run the container:**
   
    ```bash
    docker-compose up -d
    ```

### Logging

Logs are stored in the `logs/` directory with daily rotations. The log files are retained for 30 days.

### Code Quality

Ensure your code meets the style guidelines by running:

```bash
npm run lint
```

You can also automatically fix issues with:

```bash
npm run lint:fix
```

### Maintenance Mode

To enable maintenance mode, create a file named `maintenance` in the `public/` directory.

### Folder Structure

- **src/**: Contains the TypeScript source code.
  - **controllers/**: Defines the controller logic.
  - **routes/**: Route definitions.
  - **middleware/**: Custom middleware.
  - **schema/**: Zod schema definitions.
  - **lib/**: Lib codes that is shared across multiple files.
  - **server.ts**: Express server.
  - **index.ts**: Application entry point.
- **dist/**: Compiled JavaScript code (after build).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your ideas.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software. See the [LICENSE](LICENSE) file for full license details.
