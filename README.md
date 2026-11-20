# IdeaBridge

IdeaBridge is an innovation platform that connects consumer ideas and feedback with businesses, helping turn community-validated suggestions into actionable innovation opportunities.

## Product overview

The project includes two connected experiences:

- **Consumer experience:** explore ideas, submit concepts, participate in validation, and engage with community challenges.
- **Brand / startup experience:** review submitted ideas, manage their lifecycle, explore insights, and work with innovation challenges.

## Key capabilities

### Consumer experience
- Browse, search, filter, and sort ideas.
- View idea details and participate in positive or negative validation.
- Submit ideas through a draft, review, and live-submission flow.
- Explore community challenges and submit entries.
- Switch between light and dark appearance modes.

### Brand / startup experience
- Work within a startup-specific portal context.
- Review consumer ideas and manage their lifecycle statuses.
- Explore idea clustering and insight-generation features.
- Use the Concept Lab for unit-economics scenarios and recalculations.
- Create innovation challenges for the consumer community.

## Technology

The repository's package manifest identifies the following core technologies:

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Supabase JavaScript client
- Recharts is not listed as a direct dependency in the current package manifest.

## Getting started

### Prerequisites
- Node.js
- npm

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm run dev
```

### Type-check and build
```bash
npx tsc --noEmit
npm run build
```

### Preview the production build
```bash
npm run preview
```

## Project status and scope

This repository documents an evolving MVP. Feature availability and integrations should be verified in the running application and source before treating them as production-ready. In particular, do not assume that every AI-labelled workflow represents a deployed machine-learning model.

## Collaboration

IdeaBridge has been developed collaboratively. Please refer to the repository's commit history and pull requests for implementation history. Individual contributions should be attributed to the people who made them.

## Future improvements

- Add a concise architecture diagram and verified application screenshots.
- Document the data model and Supabase integration in detail.
- Add automated tests for key user flows.
- Document deployment and environment-variable setup using verified configuration.
