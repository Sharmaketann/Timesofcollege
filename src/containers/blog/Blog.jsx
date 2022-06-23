import React from 'react'
import Article from '../../components/article/Article'
import { blog1, blog2, blog3, possibility, hero2 } from './imports'
import './blog.css'

const Blog = () => (
  <div className='blog section__padding' id='blog'>
    <div className='blog-heading'>
      <h1 className='gradient__text'>
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className='blog-container'>
      <div className='blog-container_groupA'>
        <Article
          imgUrl={blog1}
          date='June 26, 2022'
          text='Change in expression based on present events can tell a lot about you. Experts say that being more expressive can help you build great connection | relationships with people you interact. '
        />
      </div>
      <div className='blog-container_groupB'>
        <Article
          imgUrl={blog2}
          date='Sep 26, 2021'
          text='Irritation at work can cause stress, depression and anxiety. Follow this steps to help achieve a good and healthy work-life balance.'
        />
        <Article
          imgUrl={blog3}
          date='Jan 26, 2022'
          text='Best ways to manage your money, Get Financial Aid with the best Advisiors in town. Let money make money for you.'
        />
        <Article
          imgUrl={possibility}
          date='Oct 26, 2020'
          text='Times of college introduces VR technology for students to work with. Development on the rise.'
        />
        <Article
          imgUrl={hero2}
          date='May 26, 2021'
          text='People protest are getting violent day-by-day. The youth seems to fall in the hands of the culprits.'
        />
      </div>
    </div>
  </div>
)

export default Blog
