
import React from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { SignupForm } from '@/components/auth/SignupForm';

const SignupPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <SignupForm />
      </div>
    </MainLayout>
  );
};

export default SignupPage;
