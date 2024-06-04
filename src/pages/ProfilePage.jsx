import React, { useContext, useEffect, useState } from 'react';
import { AyahContext } from '../context/AyahHadisContext';
import { Tabs, Tab, Avatar } from '@nextui-org/react';
import { FaBookmark, FaStar } from 'react-icons/fa6';
import { getImage } from '../supabase/SupabaseCrud';
import LoadingBar from '../components/LoadingBar';

const ProfilePage = () => {
  const { profiles } = useContext(AyahContext);
  const [isInitialized, setIsInitialized] = useState(true);

  useEffect(() => {
    if (!profiles || profiles.username === null || profiles.role === null) {
      window.location.replace('/profile/form');
    }
    setIsInitialized(false);
  }, [profiles]);

  let tabs = [
    {
      id: 0,
      label: "Bookmarks Ayah",
      icon: <FaBookmark />
    },
    {
      id: 1,
      label: "Favorites Hadith",
      icon: <FaStar />
    }
  ];

  if (isInitialized) {
    return <LoadingBar />;
  }

  return (
    <section className="bg-white p-5 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4">
          <div className="lg:col-span-3 col-span-12 mb-6 lg:mb-0 flex justify-center items-center">
            <div className="bg-gray-200 shadow rounded-lg p-6">
              <div className="flex flex-col items-center">
                <Avatar
                  showFallback
                  src={getImage(profiles.avatar_url, 'avatars')}
                  className="w-28 h-28"
                  alt="Profile"
                />
                <h1 className="text-xl font-bold text-gray-900">{profiles.username}</h1>
                <p className="text-gray-600">{profiles.email}</p>
                <p className="text-gray-600">+62{profiles.phone_number}</p>
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                  {profiles.role === 'guru' &&
                    <button
                      onClick={() => window.location.replace('/blog/admin')}
                      className="bg-green-primary transition-all hover:bg-green-700 text-white py-2 text-sm px-4 rounded"
                    >
                      Blog Admin
                    </button>
                  }
                  <a
                    href="#"
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 text-sm rounded"
                  >
                    Change Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-9 col-span-12">
            <div className="bg-gray-200 shadow rounded-lg p-5 flex w-full flex-col min-h-60">
              <div className="text-center shadow-sm hover:shadow-md transition-all bg-white px-10 py-8 rounded-md flex flex-col items-center mt-10 gap-5 w-full">
              <Tabs aria-label="Dynamic tabs" items={tabs}>
  {(item) => (
    <Tab key={item.id} title={
      <div className="flex items-center space-x-2">
        {item.icon}
        <span className="hidden sm:inline">{item.label}</span>
      </div>
    }>
      <div className="overflow-x-auto">
        <p>hello world!</p>
      </div>
    </Tab>
  )}
</Tabs>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;