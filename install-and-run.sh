#!/bin/bash

# Colors for better readability
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}  ML Portfolio Website Setup      ${NC}"
echo -e "${BLUE}==================================${NC}"

# Step 1: Install dependencies
echo -e "\n${GREEN}Step 1: Installing dependencies...${NC}"
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
  echo -e "${RED}Error installing dependencies.${NC}"
  echo -e "${RED}Trying with --force flag...${NC}"
  npm install --force
fi

# Step 2: Create .env.local file if it doesn't exist
echo -e "\n${GREEN}Step 2: Setting up environment variables...${NC}"
if [ ! -f .env.local ]; then
  echo -e "${BLUE}Creating .env.local file...${NC}"
  cat > .env.local << EOL
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=demo-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=demo-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=demo-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=demo-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=demo-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=demo-app-id

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api
EOL
  echo -e "${GREEN}Environment file created successfully.${NC}"
  echo -e "${BLUE}Note: Update .env.local with your actual Firebase credentials for production use.${NC}"
else
  echo -e "${BLUE}Environment file (.env.local) already exists.${NC}"
fi

# Step 3: Start the application (frontend and backend)
echo -e "\n${GREEN}Step 3: Starting the application...${NC}"
echo -e "${BLUE}The application will start with both frontend and backend.${NC}"
echo -e "${BLUE}- Frontend will be available at: http://localhost:3000${NC}"
echo -e "${BLUE}- Backend API will be available at: http://localhost:3001/api${NC}"
echo -e "\n${BLUE}Press Ctrl+C to stop the application.${NC}"
echo -e "${GREEN}==================================${NC}"

# Start the application with frontend and backend
npm run dev:all 