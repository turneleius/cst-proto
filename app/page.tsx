import React from 'react';
import CreateAccountForm from './createAccountForm'; // Ensure correct import path
import RoleSelection from './roleSelection';
import CourseCatalogue from './courseCatalogue';

// Make note of the first time user for presentation
const SignUpPage = (props: any) => {
  const firstTimeUser = props.searchParams?.firstTimeUser === '1';

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-5xl text-black font-extrabold text-white mb-10 text-center">
        Welcome to CareerSight!
      </h1>

      <div className="w-full max-w-md">
        {firstTimeUser ? <RoleSelection /> : <CourseCatalogue />}
      </div>
    </div>
  );
};

export default SignUpPage;
