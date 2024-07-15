import { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomePage = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  /**
   * 
   * 
   * Вариант промиса с then/catch/finally
   * 
   */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error: Status ${res.status}`);
        }
        setError(null);
        return res.json()
      })
      .then(data => setPosts(data))
      .catch(err => {
        console.log(err);
        setError(err.message);
        setPosts(null);
      })
      .finally(() => setLoading(false));
  }, [posts]);

  /**
   * 
   * 
   * Вариант промиса с async/await
   * 
   */
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //       try {
  //         const res = await fetch('https://jsonplaceholder.typicode.com/posts');

  //         if (!res.ok) {
  //           throw new Error(`HTTP error: Status ${res.status}`);
  //         }

  //         setError(null);

  //         const data = await res.json();
  //         setPosts(data);
  //       } catch (err) {
  //         console.error(err);
  //         setError(err.message);
  //         setPosts(null);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }

  //   fetchPosts();
  // }, [posts]);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div>
      <h1>
        HomePage
      </h1>
      {posts?.map((post: Post) => (
          <h6 key={post.id}>{post.title}</h6>
        ))}
    </div>
  )
}

export default HomePage;