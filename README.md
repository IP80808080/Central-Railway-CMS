# Central-Railway-CMS
Welcome to the Central Railway Checklist Management System repository! 

🚂 Central Railway Checklist Management System (CR-CMS) 📋: Revolutionize railway operations with CR-CMS, a comprehensive platform digitizing manual processes. Featuring a three-level hierarchy system (admin, moderator, client), CR-CMS ensures seamless task management, real-time collaboration, and insightful analytics. With customizable templates, robust security, and mobile accessibility, CR-CMS empowers railway personnel to streamline operations, enhance safety, and drive efficiency. Join us in transforming railway management for a brighter future! 🌟🛤️

## Installation

Install project with npm.

```bash
  git clone https://github.com/IP80808080/Central-Railway-CMS.git
```

    
## Running Application

To run Application, run the following command.

Open Terminal in split form by using shortcut or by going Terminal => Split Terminal
```bash
  Ctrl + Shift + 5
```

In First Terminal locate to Client.
```bash
  cd client
```
In Second Terminal locate to Server.
```bash
  cd server
```
Install Package in both client and Server (In both Terminal).
```bash
  npm install
```
!Before Running Create the .env file in both client and server for that read the Environment Variables section or IMP.text file.

After creating .env file Enter command in both client Terminal and server Terminal
```bash
  npm run dev
```

## Environment Variables

#### .env Inside Client folder

`REACT_APP_SERVER_DOMAIN` = http://localhost:8000

#### .env Inside Server folder

`PORT` = 8000

`MONGODB_TOKEN` = 'ENTER_YOUR_TOKEN_HERE' 

`JWT_SECRET`  = 32bit Number (without Quotation)

`SESSION_SECRET` = 64bit Number (without Quotation)

`TWILIO_ACCOUNT_SID` = 'ENTER_YOUR_SID_HERE'

`TWILIO_AUTH_TOKEN` = 'ENTER_YOUR_TOKEN_HERE'

`TWILIO_SERVICE_SID` = 'ENTER_YOUR_SERVICE_SID_HERE'


