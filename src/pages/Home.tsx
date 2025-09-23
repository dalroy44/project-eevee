import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDiscussions } from '../api/flarum';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import Header from '../components/Header';
import { FaPlus, FaRegComment, FaRegBookmark } from 'react-icons/fa';

const Discussions = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['discussions'],
    queryFn: getDiscussions,
  });

  if (isLoading) {
    return <div className="text-center p-8">Loading discussions...</div>;
  }

  if (isError) {
    return <div className="text-center p-8 text-red-500">Error fetching discussions</div>;
  }

  const findUser = (userId: any) => {
    const user = data.included?.find(
      (include: { type: string; id: any; }) => include.type === 'users' && include.id === userId
    );
    return user || { attributes: { username: 'Unknown User', avatarUrl: '' } };
  };

  return (
    <div className="space-y-4">
      <div className="bg-card p-4 rounded-xl shadow-md flex justify-between items-center">
        <span className="text-text-secondary">Add a new thread</span>
        <button className="bg-accent text-white p-2 rounded-full">
          <FaPlus />
        </button>
      </div>
      {data.data.map((discussion: { id: Key | null | undefined; attributes: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; contentHtml: string, commentCount: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; relationships: { user: { data: { id: any; }; }; }; }) => {
        const user = findUser(discussion.relationships.user.data.id);
        return (
          <div key={discussion.id} className="bg-card p-6 rounded-xl shadow-md">
            <div className="flex items-start space-x-4">
              <img className="w-10 h-10 rounded-full" src={user.attributes.avatarUrl || `https://i.pravatar.cc/150?u=${user.id}`} alt={user.attributes.username} />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-text-primary">{discussion.attributes.title}</h2>
                  <span className="text-xs bg-purple-100 text-accent p-1 rounded">Accounting</span>
                </div>
                <p className="text-sm text-text-secondary mt-1">by {user.attributes.username} - 6h ago</p>
                <div className="text-text-primary mt-4" dangerouslySetInnerHTML={{ __html: discussion.attributes.contentHtml }} />
                <div className="mt-4 flex items-center justify-between text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 hover:text-accent">
                      <FaRegBookmark />
                      <span>Save</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-accent">
                      <FaRegComment />
                      <span>Add Response</span>
                    </button>
                  </div>
                  <div className="flex items-center">
                    <FaUserCircle size={20} className="text-gray-300" />
                    <FaUserCircle size={20} className="-ml-2 text-gray-400" />
                    <FaUserCircle size={20} className="-ml-2 text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4 grid grid-cols-[256px_1fr_320px] gap-4">
        <LeftSidebar />
        <Discussions />
        <RightSidebar />
      </main>
    </div>
  );
};

export default Home;
