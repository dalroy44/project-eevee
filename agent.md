Flarum Client for Nothing Community
# Task Title
Create a single-page application (SPA) frontend for the Nothing Community forum, with a strong focus on mobile-first and responsive design.

# Project Goal
Build a modern, minimalist, and highly mobile-responsive web client that allows users to browse discussions, read posts, and authenticate to create new content. The design should be clean and intuitive, providing a seamless user experience on all devices, from mobile phones to desktop computers. The final application should feel and function like a Progressive Web App (PWA).

# Target Audience
Users of the Nothing Community who want a fast, dedicated, and simplified experience, especially those accessing the forum from a mobile device.

# Required Technologies

Framework: React (using Vite for a fast setup)

State Management: React Query (for efficient data fetching, caching, and state management with the API)

Styling: Tailwind CSS (for rapid, utility-first styling with a mobile-first approach)

HTTP Client: Axios (for making API requests)

Routing: React Router (for handling different views like the home page, discussion view, and user profile)

PWA: Add a manifest.json file and a service worker to enable "Add to Home Screen" functionality, offline caching, and faster subsequent loads.

# Key Features (MVP)

Homepage (/):

Display a list of the most recent discussions from the /api/discussions endpoint.

Each list item should show the discussion title, the author's username, and the number of replies.

Responsiveness: On mobile, the list items should be full-width. On larger screens, they can adapt to a wider, multi-column layout.

Implement infinite scrolling to load more discussions as the user scrolls down.

Discussion View (/d/:slug/:id):

Show a specific discussion and all of its posts.

Fetch discussion data and its related posts from the /api/discussions/:id endpoint.

Display the discussion title and the content of each post.

Responsiveness: Post content should be easy to read with a clear, mobile-friendly font size. Images and embeds should be fluid and scale to fit the viewport.

User Authentication:

Create a login modal or page (/login).

Handle user login by making a POST request to /api/token.

Store the returned user access token securely (e.g., in localStorage).

Display a user avatar and a "Logout" option in a responsive header or a hidden "hamburger" menu on mobile.

Create a New Discussion:

For authenticated users, display a "New Discussion" button or a floating action button (FAB) in the corner of the screen.

Mobile-Friendly: The FAB should be easily tappable on mobile screens.

When clicked, show a full-screen form to create a new discussion.

The form should make a POST request to the /api/discussions endpoint with the user's access token in the Authorization header.

Navigation:

Implement a mobile-friendly navigation bar. On smaller screens, use a hamburger menu icon that toggles a full-screen or slide-out menu.

On desktop, the navigation links should be visible in the header.

# Technical Specifications and API Endpoints

Base URL: https://nothing.community/api

Discussions List: GET /discussions

Parameters: ?sort=-lastPostedAt, ?include=user,lastPostedUser,firstPost,tags

Single Discussion: GET /discussions/:id

Parameters: ?include=user,posts,posts.user,posts.mentions

Login: POST /token

Create Discussion: POST /discussions

Headers: Authorization: Bearer <user_token>

Body: { "data": { "type": "discussions", "attributes": { "title": "...", "content": "..." }, "relationships": { "tags": { "data": [ { "type": "tags", "id": "..." } ] } } } }

# Design & Styling

Mobile-First Approach: All styling should be developed with a "mobile-first" mentality. Use Tailwind's responsive prefixes (e.g., sm:, md:, lg:) to add styles for larger screens, ensuring the base styling is always for the smallest viewport.

Colors: The application should use a dark theme, with a color palette inspired by the official Nothing design language (black, white, and subtle red accents).

Typography: Use a clean, sans-serif font like Inter or a similar Google Font. Ensure font sizes are legible and scaled appropriately for mobile.

Layout: Use Tailwind CSS for a flexbox-based, responsive layout. Pay special attention to padding, margins, and component sizing to ensure elements are easily tappable with a finger.

Components:

ResponsiveHeader component with a logo, desktop navigation, and a mobile hamburger menu.

DiscussionCard component that fluidly adapts its layout from mobile to desktop.

Post component with responsive image handling (max-w-full).

FloatingActionButton for creating new discussions on mobile.

HamburgerMenu or MobileNavDrawer component.

# Deliverables

A full, working React/Vite/Tailwind frontend project.

A manifest.json file and service worker for PWA functionality.

Clear and commented code, especially for responsive components.

A README.md file explaining the setup, how to run the application, and a section on the responsive design strategy.

