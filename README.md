# Using Vite and React in Application Development 

## 1 Install Node.js
To begin with, we need to make sure our device has the Node.js environment installed to gain access to features like vite, and langauges liked JavaScript and React.

We can install Node.js officially from the following link:
[Install Node.js](https://nodejs.org/en/download)

## 2 Install Git
Then, we need to install git on our device to be able to run git commands on our device. You can even use the specific git terminal called Git Bash. 

Official download link:
[Download Git](https://git-scm.com/install/windows)

## 3 Cloning the repository
Create a version of the repository on your device to edit and use.

#### Go to the folder you want to clone the repository in:

With Git Bash:

```cd /c/Users/YourName/Documents```

With CMD and PS:

```cd C:\Users\YourName\Documents```

#### Clone the repository:

```git clone https://github.com/yaseenaskar-git/react-app.git``` 

#### Enter the repository:

```cd react-app```

## 4 Accessing and editing the site
On your terminal, go to the folder you just cloned:

With Git Bash:

```cd /c/Users/YourName/Documents/react-app```

With CMD and PS:

```cd C:\Users\YourName\Documents\react-app``` 

Inside the folder, run npm install:

```npm install```

Then inside the folder, run the app:

```npm run dev``` 

Then copy the port link in your terminal and paste it in a browser to access the website and start editing it. 

# Routing Plan

| URL | View | Description |
|---|---|---|
| / | Home | Displays the DontJustTrain introduction. |
| /services | Services | Displays all available athletic training services. |
| /services/:id | Service Details | Displays information about a specific service based on its ID. |

# Route Testing

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

## Testing Summary

All routing tests were successful. The application correctly handles navigation between pages, dynamic route parameters, browser history, page refreshing, and invalid service identifiers.