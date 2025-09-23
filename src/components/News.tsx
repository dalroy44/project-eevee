import { useQuery } from '@tanstack/react-query';
import { getNews } from '../api/flarum';

const News = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['news'],
    queryFn: getNews,
  });

  if (isLoading) {
    return <div className="text-center p-8">Loading news...</div>;
  }

  if (isError) {
    return <div className="text-center p-8 text-red-500">Error fetching news</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.data.map((newsItem) => (
          <a
            key={newsItem.id}
            href={newsItem.attributes.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition-colors"
          >
            <img
              src={newsItem.attributes.imageUrl}
              alt={newsItem.attributes.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{newsItem.attributes.title}</h3>
              <p className="text-gray-400 mt-2">{newsItem.attributes.abstract}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
