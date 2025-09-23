import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDiscussions } from '../api/flarum';
import Banners from '../components/Banners';
import News from '../components/News';
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Discussions = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['discussions'],
    queryFn: getDiscussions,
  });

  // Optional: handle side effects with useEffect
  // React.useEffect(() => {
  //   if (data) {
  //     console.log('Discussions query succeeded:', data);
  //   }
  //   if (isError && error) {
  //     console.error('Discussions query failed:', error);
  //   }
  // }, [data, isError, error]);

  console.log('Discussions render state:', { isLoading, isError, dataExists: !!data });

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
    return user?.attributes.username || 'Unknown User';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Discussions</h1>
      <button onClick={() => refetch()} className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Manual Refresh
      </button>
      <div className="space-y-4">
        {data.data.map((discussion: { id: Key | null | undefined; attributes: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; commentCount: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }; relationships: { user: { data: { id: any; }; }; }; }) => (
          <div key={discussion.id} className="bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold">{discussion.attributes.title}</h2>
            <div className="text-sm text-gray-400 mt-2 flex justify-between">
              <span>By {findUser(discussion.relationships.user.data.id)}</span>
              <span>{discussion.attributes.commentCount} replies</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  useEffect(() => {
    console.log('Home component mounted');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Banners />
      <News />
      <Discussions />
    </div>
  );
};

export default Home;
