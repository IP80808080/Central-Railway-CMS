
## Running Application

To run Application, run the following command.

Open Terminal in split form by using shortcut or by going Terminal => Split Terminal
```bash
  Ctrl + Shift + 5
```

In First Terminal locate to Client.
```bash
  cd server
```

Install Package in Server Terminal
```bash
  npm install
```
!Before Running Create the .env in server for that read the ENV section or IMP.text file.

After creating .env Enter command in server Terminal
```bash
  npm run dev
```

## Environment Variables

#### create .env file in here Server folder
 (Remember to fill every value except Twilio values)

`PORT` = 8000

`MONGODB_TOKEN` = 'ENTER_YOUR_TOKEN_HERE' 

`JWT_SECRET`  = 32bit any number (without Quotation)

`SESSION_SECRET` = 64bit any number (without Quotation)

`TWILIO_ACCOUNT_SID` = 'ENTER_YOUR_SID_HERE'

`TWILIO_AUTH_TOKEN` = 'ENTER_YOUR_TOKEN_HERE'

`TWILIO_SERVICE_SID` = 'ENTER_YOUR_SERVICE_SID_HERE'



