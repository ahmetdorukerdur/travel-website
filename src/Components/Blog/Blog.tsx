import React, { useEffect } from 'react';
import './blog.css';

import {TiArrowRightOutline} from 'react-icons/ti'

import BeachBlog from '../../Images/BeachVacation.jpeg';
import NaturalBlog from '../../Images/NaturalVacation.webp';
import CulturalBlog from '../../Images/CulturalVacation.jpeg';
import SkiBlog from '../../Images/SkiVacation.jpeg';

import Aos from "aos";
import "aos/dist/aos.css";

const Blogs = [
  {
    id: 1,
    blogImage: BeachBlog,
    title: 'Have you never tastes the Maldives Before?',
    description: 'Planning a trip to the Maldives or a Maldives honeymoon? Here’s your ultimate Maldives travel guide for the best hotels in the Maldives, best places to see in the Maldives, things to do in the Maldives and all your Maldives travel questions, answered!'
  },
  {
    id: 2,
    blogImage: NaturalBlog,
    title: 'Montenegro\'s National Parks: Exploring Nature\'s Marvels',
    description: 'Montenegro boasts diverse natural landscapes, from rugged mountains to lush forests. The country\'s national parks and reserves are perfect for exploring these stunning environments. In this article, we\'ll discuss the best national parks and reserves in Montenegro, how to reach them by car, and the best time to visit.'
  },
  {
    id: 3,
    blogImage: CulturalBlog,
    title: 'Visiting the Acropolis in Athens',
    description: 'Visiting the Acropolis is one of the highlights of your visit to Athens, a must-see site that epitomises Ancient Greece. This rocky hill is topped by the Parthenon temple dedicated to Athena, Goddess of wisdom and war.'
  },
  {
    id: 4,
    blogImage: SkiBlog,
    title: 'Why You Should Book Your Winter Ski Vacation Early?',
    description: 'Winters can seem dreary and long, but by booking a ski holiday in advance you\'ll have something to look forward to. Being up in the mountains, surrounded by snow, beautiful landscapes and immersed in clean fresh air is an amazing experience, and also the perfect way to escape and de-stress from everyday life.'
  }
]

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='blog name container'>
      <div className='secContainer'>
        <div className='secIntro'>
          <h2 data-aos='fade-right' className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos='fade-left'>
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className='mainContainer grid'>
          {
            Blogs.map(({id, blogImage, title, description}) => {
              return(
                <div className='singlePost grid'>
                  <div data-aos='fade-right' className='imgDiv'>
                    <img src={blogImage} alt={title} />
                  </div>

                  <div data-aos='fade-left' className='postDetails'>
                    <h3>
                      {title}
                    </h3>
                    <p>
                      {description}
                    </p>
                  </div>

                  <a href='#' className='flex'>
                    Read More
                    <TiArrowRightOutline className='icon' />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Blog;