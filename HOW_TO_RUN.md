# How to Run the ML Portfolio Website

This document provides instructions for running the ML Portfolio website locally on your machine.

## Prerequisites

Before starting, make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## Step 1: Install Dependencies

First, install all the required dependencies:

```bash
npm install
```

Or if you use yarn:

```bash
yarn install
```

## Step 2: Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

Replace the Firebase values with your own Firebase project credentials if you want to use Firebase services.

## Step 3: Running the Application

### Option 1: Frontend Only

To run only the frontend (Next.js) application:

```bash
npm run dev
```

This will start the Next.js development server on [http://localhost:3000](http://localhost:3000).

### Option 2: Backend Only

To run only the backend (Express) server:

```bash
npm run server
```

This will start the Express server on port 3001.

### Option 3: Full Stack Development

To run both the frontend and backend concurrently:

```bash
npm run dev:all
```

This will start both the Next.js development server and the Express server using `concurrently`.

## Step 4: Building for Production

To build the application for production:

```bash
npm run build
```

Then, to start the production server:

```bash
npm start
```

## Troubleshooting

- If you encounter any module not found errors, try reinstalling the dependencies by running `npm install`.
- If there are issues with TypeScript or linting, try running `npm run lint` to identify and fix issues.
- For three.js related issues, make sure the WebGL is supported by your browser.

## Note

This is a demonstration portfolio website. In a real-world scenario, you would want to:
1. Set up proper authentication for the backend
2. Use a database for storing data
3. Implement proper error handling and logging
4. Set up CI/CD for automated testing and deployment 