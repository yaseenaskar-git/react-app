# Using Vite and React in Application Development

## 1. Install Node.js

To begin, make sure your device has the Node.js environment installed. This provides access to tools such as Vite and allows us to work with JavaScript and React.

Official download link:

[Install Node.js](https://nodejs.org/en/download)

## 2. Install Git

Install Git on your device to run Git commands. You can also use the Git Bash terminal.

Official download link:

[Download Git](https://git-scm.com/install/windows)

## 3. Cloning the Repository

Create a local copy of the repository on your device.

**Go to the folder where you want to clone the repository:**

With Git Bash:

```bash
cd /c/Users/YourName/Documents
```

With CMD and PowerShell:

```powershell
cd C:\Users\YourName\Documents
```

**Clone the repository:**

```bash
git clone https://github.com/yaseenaskar-git/react-app.git
```

**Enter the repository:**

```bash
cd react-app
```

## 4. Accessing and Editing the Site

Inside the folder, run:

```bash
npm install
```

Then start the application:

```bash
npm run dev
```

Copy the local development URL displayed in your terminal and paste it into a browser to access the website.

## 5. Routing Plan

The application uses React Router to navigate between different pages without requiring a full page reload.

| URL | View | Description |
|---|---|---|
| `/` | Home | Displays the DontJustTrain introduction. |
| `/items` | Items | Displays all available athletic training services. |
| `/items/:id` | Item Details | Displays information about a specific service based on its ID. |
| `/login` | Login | Allows users to authenticate using their email and password. |
| `/dashboard` | Dashboard | Displays authenticated user information and protected backend resources. |

## 6. Route Testing

The following tests were performed to verify the React Router implementation.

| Test | Description | Expected Result | Actual Result |
|---|---|---|---|
| Home Route | Navigate to `/` | Home page displays | Pass |
| Items Route | Navigate to `/items` | Training programs display | Pass |
| Dynamic Route 1 | Navigate to `/items/1` | Strength and Conditioning details display | Pass |
| Dynamic Route 2 | Navigate to `/items/2` | Nutrition Coaching details display | Pass |
| Dynamic Route 3 | Navigate to `/items/3` | Mental Training details display | Pass |
| Internal Navigation | Click navigation links | Correct page loads without full page reload | Pass |
| Browser Back | Navigate between pages and click Back | Previous page displays | Pass |
| Page Refresh | Refresh a routed page | Current page remains accessible | Pass |
| Invalid ID | Navigate to `/items/99` | Service Not Found message displays | Pass |

## 7. Authentication and Backend Integration

The frontend communicates with a separate Node.js and Express backend to authenticate users and retrieve protected information.

### Login Interface

Users can access the login page through:

`/login`

The login interface includes:
- Email and password input fields.
- Input validation to prevent missing credentials.
- Error messages for unsuccessful authentication.

Upon successful login, the backend returns a JSON Web