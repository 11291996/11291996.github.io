module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://11291996.github.io/`,
    // Your Name
    name: 'Jae Wan Park',
    // Main Site Title
    title: `Jae Wan Park | NLP Researcher`,
    // Description that goes under your name in main bio
    description: `NLP Researcher`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/11291996`,
    // Optional: LinkedIn account URL
    linkedin: ``,
    // Content of the About Me section
    about: `Interested in natural language processing, cognitive computing, and deep learning.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'Yonsei University, Bachelor of Economics in Quantitative Risk Management',
        description:
          'Studied in Songdo and Sinchon - Seoul Korea | 2019 - 2021',
        link: 'https://uic.yonsei.ac.kr/main/major.asp?mid=m02_03_07',
      },
      {
        name: 'Stony Brook University',
        description:
          'Studied in New York, United States | 2016 - 2017',
        link: 'https://www.stonybrook.edu/est/',
      },
      {
        name: 'SUNY Korea',
        description:
          'Studied in Songdo, Korea | 2015 - 2016',
        link: 'https://www.dts.sunykorea.ac.kr/programs/undergraduate/home',
      },
    ],
    publication: [
      {
        name: 'Work in Progress',
        description:
          '',
        link: '',
      },
    ], 
    projects: [
      {
        name: 'Work in Progress',
        description:
          '',
        link: 'https://github.com/11291996/nlp_project',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Erom. co.',
        description: 'Data Manager | February 2020 - October, 2020',
        link: 'https://www.erom.co.kr',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Fluent: English, Korean | Intermediate: Mongolian ',
      },
      {
        name: 'Programming',
        description: 'Python(Pytorch, Tensorflow, Numpy, Pandas), R, MySQL',
      },
      {
        name: 'Study Area',
        description:
          'Analysis, Linear Algebra, Probability and Statistics, Regression Analysis, Data Structure and Algorithm',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
