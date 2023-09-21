# Dashboard App

## Overview

This repository contains a web dashboard application built using Next.js, Tailwind CSS, Recharts for graph visualization, and NextAuth.js for authentication with Google as the provider. The application is designed to be responsive, making it accessible on various devices.

## Table of Contents

1. [Installation](#installation)
2. [Features](#features)
3. [Usage](#usage)
4. [Authentication](#authentication)
5. [Folder Structure](#folder-structure)
6. [Customization](#customization)
7. [Contributing](#contributing)
8. [License](#license)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/milinddhamu/assignment-OIA.git
   ```

2. Navigate to the project directory:

   ```bash
   cd assignment-OIA
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables:

   - Create a `.env.local` file in the root directory of the project.
   - Add your authentication credentials for Google as follows:

     ```
     GOOGLE_CLIENT_ID=your-client-id
     GOOGLE_CLIENT_SECRET=your-client-secret
     NEXTAUTH_URL=your-url-for-auth
     ```

   Note: Make sure to replace `your-client-id` , `your-client-secret` and `your-url-for-auth` with your actual Google OAuth credentials.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and access the application at `http://localhost:3000`.

## Features

- Responsive dashboard layout.
- Graph visualization using Recharts.
- User authentication with Google.
- Secure user sessions.
- Easily customizable.

## Usage

The application provides a dashboard interface with various graphs. You can customize and expand the dashboard by adding new components or modifying existing ones. To start using the app:

1. Sign in with your Google account using the "Sign In with Google" button.

2. Explore the dashboard interface with the provided graphs.

3. Customize the dashboard by modifying the components in the `/components` directory.

4. Add your own data and logic to display the information you need.

## Authentication

This application uses NextAuth.js with Google as the authentication provider. To enable authentication with other providers or configure authentication settings, refer to the NextAuth.js documentation: [NextAuth.js Documentation](https://next-auth.js.org/).

## Folder Structure

- `components/`: Contains React components used to build the dashboard interface.
- `pages/`: Contains Next.js pages.
- `pages/api/data`: Contains local API for data for graphs.
## Customization

You can easily customize the dashboard by:

- Modifying existing components in the `components/` directory.
- Adding new components for additional features or graphs.

Feel free to tailor this dashboard app to your specific needs.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes and test them thoroughly.

4. Commit your changes with a descriptive commit message.

5. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature
   ```

6. Create a pull request (PR) to the `main` branch of the original repository.

7. Please provide a clear description of your changes in the PR description.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Enjoy using your responsive dashboard app built with Next.js, Tailwind CSS, Recharts, and NextAuth.js! If you have any questions or encounter issues, feel free to open an issue in the repository.
