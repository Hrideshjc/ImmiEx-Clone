import React from 'react';

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      category: "Immigration Visa",
      readTime: "12 min read",
      title: "What visa do you need to work legally in Singapore?",
      description: "Aliquam mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...",
      author: "Sean McMarthy",
      date: "18 hours ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500" // Office collaboration
    },
    {
      id: 2,
      category: "Working Visa",
      readTime: "8 min read",
      title: "Top reasons for Australian working visa acceptance",
      description: "Aliquam mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...",
      author: "Ben Markton",
      date: "Dec 02, 2019",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=500" // Sydney Opera House
    },
    {
      id: 3,
      category: "PR Visa",
      readTime: "6 hours read",
      title: "The UK immigration & permanent residency consultants",
      description: "Aliquam mullam blandit tempor sapien gravida donec ipsum, at porta justo. Velna vitae auctor congue magna tempor sodales sapien ...",
      author: "Caroline",
      date: "Nov 26, 2019",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=500" // Big Ben London
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <h2 className="text-[38px] md:text-[50px] text-[#222] mb-6">
            Our Stories & Latest News
          </h2>
          <p className="text-[#777] text-[17px] leading-relaxed max-w-[850px] mx-auto">
            Cursus porta, feugiat primis in ultrice ligula risus auctor tempus dolor feugiat, 
            felis lacinia risus interdum auctor id viverra dolor iaculis luctus placerat and massa
          </p>
        </div>

        {/* --- News Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="overflow-hidden rounded-sm mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Meta Data: Category & Read Time */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[var(--primary-color)] font-bold text-[13px] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-gray-300 text-[13px]">-</span>
                <span className="text-gray-400 text-[13px]">
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[var(--primary-color)] leading-tight mb-4 group-hover:text-[var(--primary-color)] transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-[15px] leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Author & Date Footer */}
              <div className="text-[14px] text-gray-400">
                <span className="text-gray-400">By </span>
                <span className="font-bold text-[#444]">{post.author}</span>
                <span className="mx-2">-</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;