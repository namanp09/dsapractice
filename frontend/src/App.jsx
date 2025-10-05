// src/App.jsx
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Practice from "./pages/Practice";
import "./styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div className="brand">DSA Practice AI</div>
        <nav className="nav-right">
          <Link to="/">Hello </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
}
