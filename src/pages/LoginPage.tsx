
import React from 'react';
import { MainLayout } from '@/components/layouts/MainLayout';
import { LoginForm } from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default LoginPage;
