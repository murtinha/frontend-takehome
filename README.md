# CreativeMode Frontend Takehome Exercise

Your goal is to implement the item generation page for CreativeMode. The designs for this page can be found here: https://www.figma.com/design/FAII8jUkKDm4Vp5EU7BTHR/CreativeMode-Takehome?node-id=8001-6389&t=ZO5aDGBBF2i6WPsf-1 and to design and implement the requisite backend via either a tRPC backend or Server Side Actions.

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, or **pnpm** (package manager)
- **Git**

## Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd frontend-takehome-main
```

### 2. Install dependencies

Choose one of the following package managers:

**Using npm:**

```bash
npm install
```

**Using yarn:**

```bash
yarn install
```

**Using pnpm (recommended):**

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
# Database
DATABASE_URL="file:./dev.db"

# Add any other environment variables here
```

### 4. Set up the database

The project uses Prisma with SQLite for the database. Run the following commands to set up the database:

```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

### 5. Start the development server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Database Commands

- `npx prisma generate` - Generate Prisma client
- `npx prisma migrate dev` - Run database migrations
- `npx prisma studio` - Open Prisma Studio to view/edit database
- `npx prisma db push` - Push schema changes to database (alternative to migrations)

## Project Structure

```
frontend-takehome-main/
├── app/                    # Next.js app directory
│   ├── actions/           # Server actions
│   ├── explore/           # Pages
│   └── utils/             # Utility functions
├── components/            # React components
│   ├── craft-box/         # Craft form components
│   ├── item-card/         # Item display components
│   └── ui/                # Reusable UI components
├── lib/                   # Library code
│   ├── hooks/             # Custom React hooks
│   ├── stores/            # Zustand state management
│   └── validations/       # Zod validation schemas
├── prisma/                # Database schema and migrations
└── public/                # Static assets
```

## Requirements

- The page should be responsive and work on both desktop and mobile devices (50% of our users are on mobile)
- This page should be built using Next.js and Tailwind CSS (the Tailwind config provided should match the Figma, but it is quite cluttered so you may need to clean it up)
- You should implement the relevant Server Side Actions or a tRPC backend to handle mocked the item generation
  - For the backend, you can assume there is a separate generation service that will, after some time, return a generated item. You can mock this service call as well as mock the data.
  - The UX should smoothly handle the generation process.
- The frontend should have appropriate state management (using our mocked backend, don't worry about a database or otherwise persisting state past one session)

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Database**: Prisma with SQLite
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: React Icons
- **Notifications**: Notistack
- **Language**: TypeScript

## Troubleshooting

### Common Issues

1. **Database connection errors**: Make sure you've run `npx prisma migrate dev` and the `.env.local` file is properly configured.

2. **Port already in use**: If port 3000 is busy, Next.js will automatically try the next available port.

3. **Prisma client not generated**: Run `npx prisma generate` if you encounter Prisma-related errors.

4. **Dependencies not found**: Delete `node_modules` and `package-lock.json` (or `yarn.lock`/`pnpm-lock.yaml`) and run `npm install` again.

### Getting Help

If you encounter any issues not covered here, please check:

- The [Next.js documentation](https://nextjs.org/docs)
- The [Prisma documentation](https://www.prisma.io/docs)
- The [Tailwind CSS documentation](https://tailwindcss.com/docs)
