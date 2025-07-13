# CKD Feedback System

## Setup

### Frontend
1. Open `frontend/index.html` in browser
2. Or deploy to GitHub Pages:
   ```bash
   cd frontend
   npm install
   npm run build
   ```

### Backend (Google Apps Script)
1. Install clasp:
   ```bash
   npm install -g @google/clasp
   clasp login
   ```
2. Deploy:
   ```bash
   cd gas
   clasp push
   clasp deploy
   ```

## Environment Variables
- `CLASP_TOKEN`: Your Google Apps Script auth token
