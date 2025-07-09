import React from "react";

const Blog = () => {
    const blog=[
        {id:1,
         title:"Creating Streamlined Safeguarding Processes with OneRen",
         image:"/src/assets/blog1.png",},
         {id:2,
         title:"What are your safeguarding responsibilities and how can you manage them?",
         image:"/src/assets/blog2.png",},
         {id:3,
         title:"Revamping the Membership Model with Triathlon Australia",
         image:"/src/assets/blog3.png",}
    ]
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
            <div className="text-center md:w-1/2 mx-auto">
                <h2 className='text 4xl text-neutralDGrey font-semibold mb-4 '>Caring is the new marketing</h2>
                <p className=' text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            {/* all blogs */}
            <div>
                {
                    blog.map(blog=><div key={blog.id}>
                        <img src={blog.image} alt=""/>
                        <div>
                            <h3>{blog.title}</h3>
                            <p>Read more</p>
                        </div>
                    </div>)
                }
            </div>
            </div>
    );
};

export default Blog;