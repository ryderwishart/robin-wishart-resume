module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://gatsby-starter-clean-resume.netlify.com/`,
    name: `Robin Wishart`,
    role: `Systems Administrator`,
    email: `robinwishart8site@gmail.com`,
    phone: `16047545434`,
    address: `Mission, BC, Canada`,
    socialMedia: [
      { name: "linkedin", link: "https://ca.linkedin.com/in/robin-wishart-329bb53" },
    ],
    about: `
      <p>Fusion power has captured my imagination for many years and the opportunity to work with <strong style="color:#dc4e48">General Fusion</strong> to make fusion power a clean and sustainable energy source is very exciting. </p>
      <p>My experience matches the size and scope that <strong style="color:#dc4e48">General Fusion</strong> is looking for. </p>
      <p>I have had to hire people, assemble them into teams, and mentor those teams so service delivery can excel while maintaining the highest levels of safety, security, productivity, and disaster readiness and recovery.</p>
      <p>Please give me a call or email me using the links on the left to schedule a time when we can discuss this opportunity further!</p>
      <p style="padding: 10px; border-style: solid; border-color:#dc4e48">See high- and web-quality PDF versions of my resume <a target="_blank" href="https://drive.google.com/drive/folders/1PWXw_fhnCCvPVSrUGTIcSpf6X3Iql9uT?usp=sharing">here</a>.</p>
      `,
    education: [
      {
        degree: "Bachelors of Commerce",
        major: "Management Information Systems and Logistics",
        when: "1987",
        school: "University of British Columbia",
        where: "Vancouver",
        moreInfo: ``,
      },
      {
        degree: "Certification",
        major: "Leading by Design",
        when: "2015",
        school: "Banff Centre Peter Lougheed Leadership Institute",
        where: "Banff",
        moreInfo: ``,
      },
    ],
    experience: [
      {
        role: "Software Developer",
        when: "2014-Present",
        company: "Facebook",
        where: "Menlo Park, CA",
        moreInfo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      },
      {
        role: "Web Developer",
        when: "2010-2014",
        company: "Amazon",
        where: "Vancouver, BC",
        moreInfo: `See my <a href="#" target="_blank" rel="noopener noreferrer">work</a>.`,
      },
    ],
    skills: [
      {
        name: "JavaScript",
        level: "85",
        experience: "5 years",
      },
      {
        name: "Python",
        level: "75",
        experience: "2 years",
      },
      {
        name: "Java",
        level: "65",
        experience: "2 years",
      },
      {
        name: "React",
        level: "75",
        experience: "1 years",
      },
      {
        name: "Linux",
        level: "75",
        experience: "4 years",
      },
      {
        name: "C++",
        level: "40",
        experience: "1 years",
      },
    ],
    interests: [
      "Reading",
      "Programming",
      "Playing the violin",
      "Running",
      "Watching Monty Python and the Holy Grail",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "wonder-woman",
    //fonts. Available: [default, programmer]
    font: "default",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
		`gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `IBM Plex Mono`,
          },
        ],
      },
    },
  ],
}
