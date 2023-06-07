import React from 'react'
import './App.css'
import Nav from './component/Nav'
import Blog from './component/Blog'
import Footer from './component/Footer'
import PodCast from './component/PodCast'

const blogs = [
  {
    header: 'The DeFi Review by Arken Finance',
    description:
      'DeFi’s innovation cycle is hyper-fast. To find user insight or make critical business decisions, our team relies heavily on data. We compile our little insights into this publication, The DeFi Review.',
    tags: ['defi-review', 'web3', 'arken.finance'],
    author: 'Arken Finance',
    date: 'Nov 26th, 2022',
    readingTime: '3 min',
    url: 'https://blog.arken.finance/introducing-the-defi-review-by-arken-finance-da9e11581d50',
  },
  {
    header: 'Welcome to the World of Web 3.0',
    description:
      'Web 3.0, dubbed the next state for the internet, is being talked about more and more as the days go by. So what is it exactly?',
    tags: ['introduction', 'web3'],
    author: 'Aikdanai',
    date: 'Apr 26th, 2022',
    readingTime: '9 min',
    url: 'https://blogs.cleverse.com/welcome-to-the-world-of-web-3-0-d16b61235dc4',
  },
  {
    header: 'Solidity Made Easy with Hardhat',
    description: 'A walkthrough guide on how to use Hardhat to develop a smart contract with ease!',
    tags: ['hardhat', 'tutorial'],
    author: 'Aikdanai',
    date: 'Aug 5th, 2022',
    readingTime: '6 min',
    url: 'https://blogs.cleverse.com/solidity-made-easy-with-hardhat-91a6972362bb',
  },
  {
    header: 'Solving DApps Problem with Merkle drop',
    description:
      'When developing your DApp, would transaction fees be quite expensive? What do you decide between scaling, price, and security?',
    tags: ['smart contract', 'web3'],
    author: 'Nutchanon',
    date: 'Sep 27th, 2022',
    readingTime: '8 min',
    url: 'https://blogs.cleverse.com/solving-dapps-problem-with-merkle-drop-ff656adca942',
  },
]

const podCasts = [
  {
    header: 'THE EXPECTATION EP1 : Senior Developer Management Overhead',
    description:
      'What are the expectations for a senior developer versus a junior developer? What does the company expect from each developer path? How can I advance to senior developer as soon as possible? Let’s find out the answers in this interview!!!',
    author: 'Panjamapong',
    date: 'Aug 9th, 2021',
    readingTime: '6 min',
    url: 'https://www.youtube.com/watch?v=cuZdfMm2iPI',
    img: 'https://cleverse.com/_next/image?url=%2Fthumbnail%2Fvdo%2Fthe-expectation-ep1.jpg&w=640&q=75',
  },
  {
    header: 'THE EXPECTATION EP5 : Junior Developer - Survival Skill',
    description:
      '"Get stuck in my work. See no way out. What should I do?" Unsure on your own system design? How do we solve these problems? Let’s find out the answers in this interview!!',
    author: 'Jakpat',
    date: 'Jul 16th, 2021',
    readingTime: '5 min',
    url: 'https://www.youtube.com/watch?v=9vr6PidRAko',
    img: 'https://cleverse.com/_next/image?url=%2Fthumbnail%2Fvdo%2Fthe-expectation-ep5.jpg&w=640&q=75',
  },
]

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="blogHead">
        <p className="text-lg">Blog</p>
        <p className="text-red-500 text-lg">View All</p>
      </div>
      <div className="container-blog">
        {blogs.map((blog) => {
          return <Blog key={blog.header} blog={blog} />
        })}
      </div>
      <div className="blogHead">
        <p className="text-lg">Podcast & Video</p>
        <p className="text-red-500 text-lg">View All</p>
      </div>
      <div className="container-podcast">
        {podCasts.map((podCast) => {
          return <PodCast key={podCast.header} podCast={podCast} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
