
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  User,
  LogOut,
  Settings,
  ChevronDown
} from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-hackloop-black py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-hackloop-yellow font-bold text-2xl">Hack</span>
          <span className="text-white font-bold text-2xl">Loop</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-hackloop-yellow transition-colors">
            Home
          </Link>
          <Link to="/explore" className="text-white hover:text-hackloop-yellow transition-colors">
            Explore
          </Link>
          <Link to="/about" className="text-white hover:text-hackloop-yellow transition-colors">
            About
          </Link>

          {currentUser ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="text-white hover:text-hackloop-yellow transition-colors">
                Dashboard
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="border-hackloop-yellow text-hackloop-yellow hover:bg-hackloop-yellow hover:text-hackloop-black gap-2">
                    <User size={16} />
                    Profile
                    <ChevronDown size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-hackloop-darkGray border-hackloop-yellow">
                  <DropdownMenuItem className="text-white hover:text-hackloop-yellow cursor-pointer" onClick={() => navigate('/profile')}>
                    <User className="mr-2 h-4 w-4" /> My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white hover:text-hackloop-yellow cursor-pointer" onClick={() => navigate('/settings')}>
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-hackloop-gray" />
                  <DropdownMenuItem className="text-white hover:text-hackloop-yellow cursor-pointer" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                className="border-hackloop-yellow text-hackloop-yellow hover:bg-hackloop-yellow hover:text-hackloop-black"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                className="bg-hackloop-yellow text-hackloop-black hover:bg-opacity-80"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-hackloop-yellow" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 top-16 bg-hackloop-black p-6 transition-all duration-300 ease-in-out z-40", 
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex flex-col gap-6 mt-4">
          <Link 
            to="/" 
            className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/explore" 
            className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Explore
          </Link>
          <Link 
            to="/about" 
            className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          
          {currentUser ? (
            <>
              <Link 
                to="/dashboard" 
                className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/profile" 
                className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/settings" 
                className="text-white text-xl py-2 hover:text-hackloop-yellow transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
              <button 
                className="text-hackloop-yellow text-xl py-2 flex items-center gap-2 hover:underline"
                onClick={() => {
                  handleLogout();
                  setMobileMenuOpen(false);
                }}
              >
                <LogOut size={20} /> Logout
              </button>
            </>
          ) : (
            <div className="flex flex-col gap-4 mt-4">
              <Button 
                variant="outline" 
                className="border-hackloop-yellow text-hackloop-yellow hover:bg-hackloop-yellow hover:text-hackloop-black w-full"
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
              <Button 
                className="bg-hackloop-yellow text-hackloop-black hover:bg-opacity-80 w-full"
                onClick={() => {
                  navigate('/signup');
                  setMobileMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
