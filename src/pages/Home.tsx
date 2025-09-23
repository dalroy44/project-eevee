import { useQuery } from '@tanstack/react-query';
import { getDiscussions } from '../api/flarum';
import Banners from '../components/Banners';
import News from '../components/News';

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

  const findUser = (userId) => {
    const user = data.included?.find(
      (include) => include.type === 'users' && include.id === userId
    );
    return user?.attributes.username || 'Unknown User';
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Discussions</h1>
      <div className="space-y-4">
        {data.data.map((discussion) => (
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
  return (
    <div>
      <Banners />
      <News />
      <Discussions />
    </div>
  );
};

export default Home;
