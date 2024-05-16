import React, { useContext } from 'react';
import { AyahContext } from '../context/AyahHadisContext';

const ProfilePage = () => {
  const {user} = useContext(AyahContext);
  return (
    <section className="bg-white p-5 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
          <div className="lg:col-span-3 col-span-12 mb-6 lg:mb-0 flex justify-center items-center">
            <div className="bg-gray-200 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <img
                  src={'https://i.pravatar.cc/150?u=a042581f4e2902670'}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  alt="Profile"
                />
                <h1 className="text-xl font-bold text-gray-900">Ahmad</h1>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-600">+62821123123</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => navigate('/admin')}
                    className="bg-green-primary transition-all hover:bg-green-700 text-white py-2 px-4 rounded"
                  >
                    Admin
                  </button>
                  <a
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                  >
                    Change Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-9 col-span-12">
            <div className="bg-gray-200 shadow rounded-lg p-5 flex w-full flex-col min-h-60">
              <div className="text-center shadow-sm hover:shadow-md transition-all bg-white px-10 py-8 rounded-md flex flex-col mt-10 gap-5 w-full">
                <h2 className="font-semibold text-4xl text-gray-900">My Purchase</h2>
                <div className="overflow-x-auto">
                  <h2 className="text-gray-700">Not Shopping yet, please checkout your order</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
