# Taskly

Taskly is a robust task management system designed to streamline project management and team collaboration. Featuring real-time updates, automated reminders, and comprehensive reporting, Taskly ensures seamless task tracking and efficient workflow management, empowering teams to stay organized and productive.

## Features

- **Authentication and Authorization**: Users must create an account and belong to an organization. Organizations are initially created by a user (Admin).
- **Boards and Tasks**: Organizations can create boards to track various tasks. Tasks can be assigned to users within the organization and include attributes such as priorities, labels, status, start date, due date, comments, descriptions, and the ability to store images/videos as attachments. Tasks are filterable by status, task owners, priorities, and labels.
- **Collaboration**: Owners and users can invite others to join their boards.
- **Notifications**: Users receive notifications when:
  - Assigned to a task.
  - The due date is 1 day, 12 hours, and 1 hour past due.
  - Comments are created on a task.
- **Analytics**: Owners receive weekly reports on task completion status and the average time to complete tasks.

## Requirements

- **Build with**: Node.js (TypeScript).
- **Cache Layer**: I utilized redis to minimize database hits.
- **Testing**: Write unit and integration tests where possible.
- **Rate Limiting**: rate limiting was also implemented to prevent abuse.
- **API Documentation**: I used OpenAPI for API specification and documentation. Consider tools like [Swagger.io](http://localhost:8000/api-docs/#/) for creating and managing API documentation.

## Getting Started
npm start

### Prerequisites

- Node.js.
- A package manager (npm for Node.js).


