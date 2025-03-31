
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MainLayout } from '@/components/layouts/MainLayout';
import { useAuth } from '@/context/AuthContext';

const LandingPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-hackloop-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-reveal-text">
                Where <span className="text-hackloop-yellow">Hackathons</span> <br />
                Never End
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 animate-reveal-text" style={{ animationDelay: '0.2s' }}>
                Join the endless loop of innovation and collaboration. 
                Build, create, and connect with AI-powered team formation 
                and NFT project security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-reveal-text" style={{ animationDelay: '0.4s' }}>
                {isAuthenticated ? (
                  <Button 
                    className="bg-hackloop-yellow text-hackloop-black font-bold text-lg px-8 py-6 hover:bg-opacity-80"
                    asChild
                  >
                    <Link to="/dashboard">Go to Dashboard</Link>
                  </Button>
                ) : (
                  <Button 
                    className="bg-hackloop-yellow text-hackloop-black font-bold text-lg px-8 py-6 hover:bg-opacity-80"
                    asChild
                  >
                    <Link to="/signup">Get Started</Link>
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  className="border-2 border-hackloop-yellow text-hackloop-yellow font-bold text-lg px-8 py-6 hover:bg-hackloop-yellow hover:text-hackloop-black"
                  asChild
                >
                  <Link to="/explore">Explore Hackathons</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-full h-64 md:h-96 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-black text-2xl font-bold mb-3">HackLoop</div>
                      <div className="px-6 py-3 bg-black text-yellow-400 rounded-md inline-block">
                        AI-Powered Platform
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-hackloop-yellow rounded-full animate-pulse-slow"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-hackloop-yellow rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionizing Hackathons</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              HackLoop combines AI, blockchain, and collaboration tools to create the ultimate hackathon experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hackloop-card flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hackloop-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Matching</h3>
              <p className="text-gray-600 mb-4">
                Our AI algorithm matches you with the perfect team based on skills, interests, and goals.
              </p>
              <Link to="/features/ai-matching" className="text-hackloop-yellow hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
            
            <div className="hackloop-card flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hackloop-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">NFT Project Security</h3>
              <p className="text-gray-600 mb-4">
                Protect your ideas and projects with blockchain-based ownership verification.
              </p>
              <Link to="/features/nft-security" className="text-hackloop-yellow hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
            
            <div className="hackloop-card flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-hackloop-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Collaboration</h3>
              <p className="text-gray-600 mb-4">
                Collaborate with your team in real-time with integrated chat, video, and coding tools.
              </p>
              <Link to="/features/collaboration" className="text-hackloop-yellow hover:underline mt-auto">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-hackloop-black text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Join the Loop?</h2>
              <p className="text-lg opacity-90 max-w-lg">
                Start your hackathon journey today and connect with innovative minds around the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Button 
                  className="bg-hackloop-yellow text-hackloop-black font-bold px-8 py-3 hover:bg-opacity-80"
                  asChild
                >
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
              ) : (
                <Button 
                  className="bg-hackloop-yellow text-hackloop-black font-bold px-8 py-3 hover:bg-opacity-80"
                  asChild
                >
                  <Link to="/signup">Create Account</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Hackers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from developers and creators who have used HackLoop for their projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="hackloop-card">
              <div className="mb-6">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                HackLoop's AI matching feature found me the perfect teammates with complementary skills. We ended up winning first place!
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-gray-500 text-sm">Frontend Developer</p>
                </div>
              </div>
            </div>
            
            <div className="hackloop-card">
              <div className="mb-6">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                The NFT security feature gave me peace of mind knowing my project idea was protected while I worked with a team I met on the platform.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Samantha Lee</h4>
                  <p className="text-gray-500 text-sm">Blockchain Developer</p>
                </div>
              </div>
            </div>
            
            <div className="hackloop-card">
              <div className="mb-6">
                <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6">
                The collaboration tools are seamless. I was able to work with a team across three different time zones without any issues.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Miguel Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LandingPage;
