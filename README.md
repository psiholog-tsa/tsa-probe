# Psychology Cabinet Management

This repository is a starting point for the **Psychology Cabinet Management** application. The goal of the project is to provide a microservices based Progressive Web Application for managing appointments, clients and GDPR compliance for psychology practices in Romania.

The original specification is extensive. This repository currently contains only a minimal skeleton of the project structure. Further development is required to implement all features such as authentication, multi-tenant support, SMS notifications, and GDPR tooling.

## Structure

```
psychology-cabinet-management/
├── backend/   # Node.js + TypeScript API
└── frontend/  # Next.js PWA
```

Each folder will contain its own `package.json` and source code. Additional configuration files (Docker, Prisma, etc.) will be added as the project evolves.

## Getting Started

1. Install dependencies for backend and frontend once they are added.
2. Configure environment variables as needed.
3. Run the development servers separately for backend and frontend.

This project is under active development and does not yet implement the full functionality outlined in the specification.
