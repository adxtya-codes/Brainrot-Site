# 🧠 BrainRot Clothing Site 👕
Building this site for my clothing brand (under development) for clothing brand named brainrotclothing. 
i have used javascript and typescript for this project, and used optimization tecnhiques to make the website user friendly and mobile friendly.
A modern, full-featured e-commerce platform for the BrainRot streetwear brand, blending cutting-edge web tech with a unique, bold aesthetic.

---

## 🚀 Overview
BrainRot is a streetwear e-commerce site designed for the internet generation. Shop curated apparel, manage your account, and enjoy a seamless, responsive experience across devices. Built for both shoppers and admins, it prioritizes speed, security, and style.

---

## ✨ Features
- 🛍️ **Product Catalog:** Browse a dynamic, categorized selection of BrainRot apparel.
- 🔐 **Authentication:** Secure sign up & login powered by Supabase Auth.
- 🛒 **Cart & Wishlist:** Add, remove, and manage products with persistent cart and wishlist.
- 📦 **Checkout Flow:** Streamlined, user-friendly checkout with order confirmation.
- 📧 **Newsletter:** Subscribe for exclusive drops and updates.
- 📝 **Order History:** View and track your previous purchases.
- 👤 **Account Management:** Update profile, manage orders, and reset passwords.
- 📱 **Responsive UI:** Mobile-first design, beautiful on any device.
- 🌙 **Dark Mode:** Automatic and manual theme switching.
- 🛠️ **Admin Ready:** Easily extensible for admin panels, analytics, and more.

---

## 🛠️ Tech Stack
- ⚛️ **Frontend:** React (w/ Vite) & TypeScript for fast, type-safe development.
- 🎨 **UI:** shadcn/ui, TailwindCSS, Lucide Icons for modern, accessible components.
- 🔄 **State:** React Context & TanStack React Query for global and async state.
- 🗄️ **Backend:** Supabase for database, authentication, and real-time updates.
- 🧪 **Testing:** (Ready for Jest/React Testing Library integration)

---

## 🏗️ Project Structure
```
├── src
│   ├── components      # UI & logic components
│   ├── contexts        # Global state providers (auth, cart, wishlist)
│   ├── hooks           # Custom React hooks
│   ├── pages           # Route-based pages (Index, Product, Cart, etc.)
│   ├── lib             # Supabase client & utilities
│   └── App.tsx         # Main app entry
├── public              # Static assets
├── package.json        # Scripts & dependencies
└── README.md           # Project docs
```

---

## ⚡ Getting Started
1. **Clone the repo:**
   ```bash
   git clone https://github.com/adxtya-codes/brainrot-site-1.git
   cd brainrot-site-1
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. **Run the dev server:**
   ```bash
   npm run dev
   ```
5. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 📝 Scripts
- `npm run dev` – Start local dev server ⚡
- `npm run build` – Build for production 🏗️
- `npm run lint` – Lint codebase 🔍

---

## 🤝 Contributing
Contributions welcome! Open an issue or submit a pull request for improvements, bug fixes, or new features. Please follow conventional commit messages and respect code style.

---

## 📄 License
MIT

---

## 🙋 FAQ
- **Where is the backend?**  Supabase handles database & auth. No custom server needed.
- **Can I deploy on Vercel/Netlify?**  Yes! Just set the correct env vars.
- **How do I add products?**  Use Supabase dashboard or extend with an admin panel.

---

> Made with 💀 by adxtya-codes

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/adxtya-codes/brainrot-site-1.git
   cd brainrot-site-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables for Supabase:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Run the development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` – Start local dev server
- `npm run build` – Build for production
- `npm run lint` – Lint codebase

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

## License
MIT
>>>>>>> 0499a5c (docs: update README with detailed, emoji-rich documentation)
