import React from 'react';
import Link from 'next/link';

const LatestArticles = () => {
    return (
		<>
			<div className="blog-area">
                <div className="container">
                    <div className="section-title">
                        <span>Read Our Latest Articles</span>
                        <h2>Latest From Our Blog Post For Business Technology </h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src="/images/blog/blog-1.jpg" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>How Developers Are Taking The Guesswork Out Of Animation</a>
                                        </Link>
                                    </h3>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> October 14, 2022</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>Commercial</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src="/images/blog/blog-2.jpg" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Tech Designer John Doe Latest Design Of 2022</a>
                                        </Link>
                                    </h3>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> October 15, 2022</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>Agency</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-card">
                                <div className="blog-image">
                                    <Link href="/blog-details">
                                        <a><img src="/images/blog/blog-3.jpg" alt="image" /></a>
                                    </Link>
                                </div>
                                <div className="blog-content">
                                    <span>By <Link href="/author"><a>Admin</a></Link></span>
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Listen To The Entire Library Of Design Better Books</a>
                                        </Link>
                                    </h3>
                                    <ul className="entry-meta">
                                        <li><i className="ri-calendar-line"></i> October 16, 2022</li>
                                        <li><i className="ri-price-tag-3-line"></i> <Link href="/tags"><a>Business</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-more-btn">
                        <Link href="/blog">
                            <a className="default-btn">View More</a>
                        </Link>
                    </div>
                </div>
            </div>
		</>
    );
}

export default LatestArticles;