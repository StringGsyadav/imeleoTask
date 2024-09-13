import React from 'react'
import style from '../Css/blog.module.css';
import blogs1 from '../assets/Images/blogs1.svg'
import blogs2 from '../assets/Images/blogs2.svg'
import blogs3 from '../assets/Images/blogs3.svg'
const Blogs = () => {

    const blogsData=[
        {
            id:1,
            src:blogs1,
            chipperContent:"January 10, 2024",
            blogshead:"Why Data-Driven Decision Making is Key for Business Growth",
            blogsContent:"Learn how leveraging software that offers real-time data insights can enhance strategic decisions, boost productivity, and drive sustainable growth."
        },
        {
            id:2,
            src:blogs2,
            chipperContent:"September 1, 2024",
            blogshead:"Top 5 Business Services to Boost Customer Satisfaction",
            blogsContent:"Explore essential services such as CRM, help desk solutions, and automated support systems that can enhance customer experiences and foster long-term loyalty"
        },
        {
            id:3,
            src:blogs3,
            chipperContent:"January 10, 2024",
            blogshead:"Leveraging Software Solutions to Enhance Business Efficiency ",
            blogsContent:"Discover how modern software tools can streamline your operations, automate tasks, and improve workflow efficiency to help your business stay competitive."
        }
    ];
  return (
    <div className={style.blogContainer}>
        <h1 className='commonHeading commonSpace'>Blogs</h1>
        <p className='commonPara'>Explore our blog for expert tips, industry insights, and engaging <br /> content on the latest trends. Stay informed and inspired!</p>
        <div className={style.blogsCardContainer}>
            {blogsData.map((values)=>{
                return(
                    <section className={style.blogsCard}>
                    <figure>
                        <img src={values.src} alt="Image not found" />
                        <figcaption className={style.figureDetails}>{values.chipperContent}</figcaption>
                    </figure>
                    <h3 className={style.figureHeadingData}>{values.blogshead}</h3>
                    <p className={style.blogsPara}>{values.blogsContent}</p>
                </section>
                )
            })}
        </div>
    </div>
  )
}

export default Blogs