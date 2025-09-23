import { useQuery } from '@tanstack/react-query';
import { getBanners } from '../api/flarum';

const Banners = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['banners'],
    queryFn: getBanners,
  });

  if (isLoading) {
    return <div className="text-center p-8">Loading banners...</div>;
  }

  if (isError) {
    return <div className="text-center p-8 text-red-500">Error fetching banners</div>;
  }

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4">
      <div className="flex space-x-4">
        {data.data.map((banner) => (
          <a
            key={banner.id}
            href={banner.attributes.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={banner.attributes.image}
              alt={banner.attributes.title}
              className="h-48 rounded-lg shadow-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banners;
