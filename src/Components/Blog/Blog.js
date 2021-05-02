import React from 'react';
import Card from '../Card';
// import './Blog.css'

const Blog = ({ data }) => {
    if (data) {
        var blogs = data.posts.map(posts => {
            var projectImage = "images/" + posts.image;
            return (
                <div key={posts.title} className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href={posts.url} title={posts.title}>
                            <div className="card">
                                <div className="card_image"><img alt={posts.title} src={projectImage} /></div>
                                <div className="card_content">
                                    <h2 className="card_title">{posts.title}</h2>
                                    <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                                    <button className="btn card_btn">Read More</button>
                                </div>
                            </div>
                            <div className="link-icon">
                                <i className="fa fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            );
        });
    }

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Check Out my Blogs.</h1>
                    <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
                        {blogs}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;