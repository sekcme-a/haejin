import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">
                <div className="blog-img">
                  <img src="/images/blog/blog-8.jpg" alt="동우개발" />
                </div>

                <ul className="meta-tag">
                  <li>
                    By <a href="#">Admin</a>
                  </li>
                  <li>October 14, 2022</li>
                </ul>
                 
                <div className="article-content">
                  <h3>Facts About Business That Will Help You Success</h3>
              
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem venenatis faucibus non maecenas ultricies
                    feugiat amet tellus condimentum eu sed sit ut tempus felis
                    sit sagittis morbi sed ultricies feugiat amet tellu indum eu
                    sed sit ut tempus felis sit sagittis, morbi sed.
                  </p>
                  <h4>Employed Automation</h4>
                  <ul>
                    <li>Cursus amet sem venenatis faucibus non maecenas</li>
                    <li>
                      Faucibus non maecenas feugiat amet tellus condimentum
                    </li>
                    <li>
                      Venenatis faucibus non maecenas feugiat amet tellus lorem
                      text
                    </li>
                    <li>Inded anythingfeugiat amet tellus condims</li>
                    <li>
                      Tenenatis faucibus non maecenas <b>feugiat</b> amet tellus
                    </li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem venenatis faucibus non maecenas ultricies
                    feugiat amet tellus condimentum eu sed sit ut tempus felis
                    sit sagittis morbi sed dollar seat amet.
                  </p>
                  <h5>
                    Best Part Time Business Ideas To Run In Your Spare Time
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem venenatis faucibus non maecenas ultricies
                    feugiat amet tellus condimentum eu sed sit ut tempus felis
                    sit sagittis morbi sed ultricies feugiat amet tellu indum eu
                    sed sit ut tempus felis sit sagittis morbi sed.
                  </p>
                  <blockquote className="blockquote">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      fames fusce venenatis mattis lorem orci neque mi nascetur
                      tristique vitae tincidunt sit aliquam iaculis placerat is
                      mattis consectetur adipiscing elit.
                    </p>
                    <span>By Wonner</span>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem venenatis faucibus non maecenas ultricies
                    feugiat amet tellus condimentum eu sed sit ut tempus felis
                    sit sagittis morbi sed.
                  </p>
                  <div className="blocks-image">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="image">
                          <img src="/images/blog/blog-9.jpg" alt="동우개발" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="image">
                          <img src="/images/blog/blog-4.jpg" alt="동우개발" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem venenatis faucibus non maecenas ultricies
                    feugiat amet tellus condimentum eu sed sit ut tempus felis
                    sit sagittis morbi sed.
                  </p>
                  <ul className="list">
                    <li>Cursus amet sem venenatis faucibus non maecenas</li>
                    <li>
                      Faucibus non maecenas feugiat amet tellus condimentum
                    </li>
                    <li>
                      Venenatis faucibus non maecenas feugiat amet tellus lorem
                      text
                    </li>
                    <li>Inded anythingfeugiat amet tellus condims</li>
                    <li>Tenenatis faucibus non maecenas feugiat amet tellus</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    cursus amet sem <b>venenatis faucibus</b> non maecenas
                    ultricies feugiat amet tellus condimentum eu sed sit ut
                    tempus felis sit sagittis morbi sed.
                  </p>
                </div>

                <div className="article-tags">
                  <Link href="/tags">
                    <a>Commercial</a>
                  </Link>
                  <Link href="/tags">
                    <a>Business</a>
                  </Link>
                </div>
                <div className="article-leave-comment">
                  <h3>Leave A Reply</h3>

                  <form>
                    <div className="row justify-content-center">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Your Name *</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Eg: Thomas Adison"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="name"
                            className="form-control"
                            placeholder="example@동우개발.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Phone *</label>
                          <input
                            type="number"
                            name="name"
                            className="form-control"
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Website *</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Your website name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Your Comment *</label>
                          <textarea
                            name="message"
                            className="form-control"
                            placeholder="Type your comment"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Save my name, email, and website in this browser for the next time I comment.
                          </label>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="default-btn">
                          Post A Comment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
