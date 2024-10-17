import { useState } from "react";
const initialPosts = [
  { id: 1, text: "React öğreniyorum", likes: 0, liked: false },
  { id: 2, text: "Projeni geliştir", likes: 0, liked: false },
  { id: 3, text: "Test süreci başladı", likes: 0, liked: false },
];
function OptimisticUpdatesAndRollbacks() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = async (id) => {
    // Optimistic update başlıyor
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            likes: post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked,
          }
        : post
    );
    setPosts(updatedPosts);
    try {
      // Sunucuya güncelleme isteği atılıyor
      await simulateServerUpdate();
      console.log("Sunucuya başarıyla güncellendi!");
    } catch (error) {
      // Eğer sunucu başarısız olursa, rollback yapılacak
      console.error("Güncelleme başarısız oldu, geri alınıyor...");
      setPosts(posts); // Rollback
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Gönderiler
        </h1>
        <ul>
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center justify-between mb-2"
            >
              <div>
                <p className="text-lg text-gray-700">{post.text}</p>
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`mt-2 px-4 py-2 rounded ${
                    post.liked ? "bg-red-500 text-white" : "bg-gray-300"
                  }`}
                >
                  {post.liked ? "Beğenildi" : "Beğen"} ({post.likes})
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function simulateServerUpdate() {
  // Bu fonksiyon sunucuya yapılan isteği simüle ediyor
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // %50 şansla güncelleme başarısız olacak
      Math.random() > 0.5 ? resolve() : reject();
    }, 1000);
  });
}
export default OptimisticUpdatesAndRollbacks;
