# 🚨 SafeHer – Women's Safety App

**SafeHer** is a mobile application designed to enhance the safety of women by leveraging hyperlocal community data, real-time location services, and emergency response mechanisms.

> ⚡ Developed as a prototype for Mini Hacks – Round 2 (Video Demo & Code Submission)

---

## 📱 Features

- 🔍 **Hyperlocal Community Watch**: Mark and view real-time safe or unsafe zones.
- 🗺 **Live Map Interface**: Integrated with Google Maps to show current location and nearby safety indicators.
- 🆘 **Emergency SOS Button**: Sends alerts with live location to trusted contacts.
- 🧭 **Safe Relocation Guide**: Helps users navigate to the nearest safe public spots.
- 📡 **Firebase Authentication**: Secure login and account management.

---

## 🛠 Tech Stack

| Technology          | Usage                           |
|---------------------|---------------------------------|
| React Native + Expo | Frontend development            |
| Firebase            | Auth, Firestore (for data)      |
| Google Maps API     | Geolocation and Maps            |
| Async Storage       | Persisting user auth sessions   |
| Expo Router         | Navigation and routing          |

---

## 🚀 Getting Started

### 📦 Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/safeher.git
   cd safeher
Install dependencies:

bash
Copy
Edit
npm install
Add a .env file in the root directory with your Firebase config:

makefile
Copy
Edit
EXPO_PUBLIC_FIREBASE_API_KEY=your_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
...
Run the app:

bash
Copy
Edit
npx expo start
   ⚠ Make sure to connect a physical Android device or use Expo Go to test the app.

📂 Project Structure
bash
Copy
Edit
project/
├── app/                   # Screens and navigation
│   ├── index.js
│   ├── (tabs)/            # Tab screens like Home, Profile
│   └── safety/            # Safety screen components
├── components/            # Reusable UI components
├── constants/             # App-wide constants (colors, sizes)
├── firebase/              # Firebase config and utils
├── assets/                # Images, icons
└── .env                   # Environment variables

🎨 Additional Assets
📂 UI Designs (Figma/Images)

📊 Pitch Deck (PDF)

🙌 Team SafeHer
Jayant Sharda 
Vishesh Jaiswal
Vinay Mundada
Utkarsh Pal
