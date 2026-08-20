# ARAYA Render-ready OTP version

## Current test login
With OTP_MODE=test, use the demo credentials:
- User ID: demo
- Password: ChangeMe123!
- OTP: the TEST_OTP environment value (default 123456)

This is for testing only. Do not use test OTP mode for real users.

## Render
Build: npm install
Start: npm start

For real users, attach Render PostgreSQL, create users with hashed passwords, and set OTP_MODE=twilio with TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN and TWILIO_VERIFY_SERVICE_SID. Store secrets only in Render Environment Variables.
