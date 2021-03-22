const { Skill, Job, School, Description, Project, db } = require('./server/database')

const seed = async () => {
  try {
    await db.sync({ force: true });
    //Description Section ======================================================================================================================
    const jsDescription = await Description.create({
      description: 'Javascript is a high-level programming language acknowledged as one of the core technologies of the World Wide Web, along side HTML and CSS.  If HTML is a garden, javascript is the gardening tool to help plant the seeds of the web.'
    })

    const jsDescription2 = await Description.create({
      description: 'JavaScript enables interactive web pages and is an essential part of web applications. The vast majority of websites use it for client-side page behavior, and all major web browsers have a dedicated JavaScript engine to execute it.'
    })

    const expressDescription = await Description.create({
      description: 'Express is a back end web application framework for Node.js. It is designed for building web applications and APIs.  It has been called the de facto standard server framework for Node.js.  It is my go to backend framework.'
    })

    const sequelizeDescription = await Description.create({
      description: 'Sequelize is a promise-based node.js object-relation map for postgres (databse used to create this website), mySQL, mariaDB, SQlite and Microsoft SQL server.  In my own words: Sequelize is a middle man language connecting incompatible data from a database into data that can be used readily in front-end frameworks.'
    })

    const postgresDescription = await Description.create({
      description: 'PostgresSQL is a free and open-source relational database.'
    })

    const reactDescription = await Description.create({
      description: 'React is an open source front-end javascript library for building user interfaces.  React is used as a vase in the developement of single-page applications.  The frontend of this website was built using react.'
    })

    const reactReduxDescription = await Description.create({
      description: 'Redux is an open-source javascript library for managing application state.  It helps persist data throughout a webpage as opposed to a local application of state.'
    })

    const reactNativeDescription = await Description.create({
      description: 'React native is a mobile application framework used to develop applications for android and iOS.  It is the connector allowing react to be used in the development of mobile applications.'
    })

    const expoDescription = await Description.create({
      description: "Expo is a set of tools built on top of React Native allowing developers and friends of developers to view mobile apps while they are being worked on and haven't been launched to the app store."
    })

    const herokuDescription = await Description.create({
      description: 'Heroku gives apps a place to live on the internet.  Heroku hosts an app on the internet for others to use, making deploying an app easy.'
    })

    const socketDescription = await Description.create({
      description: 'Socket.io enables real-time event-based communication.  It is a Javascript library for realtime web applications, allowing fast communication between web clients and servers.'
    })

    const uGRDescription = await Description.create({
      description: 'Separated DNA fragments with pulsed gel electrophoresis, regularly sectioned the Vomeronasal organ from a mouse using a cryostat apparatus, performed various immunohistochemistry techniques on sectioned slides.'
    })

    const uGRDescription2 = await Description.create({
      description: 'Prepared a written research paper summarizing data analysis. Critically analyzed selected research papers pertaining to area of interest.'
    })

    const researchDescription = await Description.create({
      description: 'Maintained cell cultures, replacing petri dishes as needed to sustain healthy cells.'
    })

    const researchDescription2 = await Description.create({
      description: 'Performed Flow Cytometry (FACS) weekly to research differences in cell populations.'
    })

    const oaxacaDescription = await Description.create({
      description: 'Took customer orders, served customers, handled customer service, etc.'
    })

    const malaparteDescription = await Description.create({
      description: 'Seated customers, took orders, waited tables, and strengthened customer service skills.'
    })

    const harlemHospitalDescription = await Description.create({
      description: 'Scheduled, checked in, and greeted patients, for COVID vaccinations, using EPIC electronic medical record.'
    })

    const ps6Description = await Description.create({
      description: 'The school I attended from grades 1 through 5.  Kramer versus Kramer was filmed at this school!'
    })

    const computerSchoolDescription = await Description.create({
      description: 'This was the middle school I attended.  It was known for being a very diverse school.  Jordan Peele Graduated from the Computer School!'
    })

    const beaconDescription = await Description.create({
      description: 'The Beacon school is a great public highschool in New York City.  I was inspired to pursue biology in college due to my great professors at Beacon.  '
    })

    const albanyDescription = await Description.create({
      description: 'SUNY Albany was a great place to pursue my Bachelors of Science in Biology. The teachers in the Biology department really cared about the subject and made every facet interesting.'
    })

    const fullStackAcademyDescription = await Description.create({
      description: 'Fullstack academy helped flourish my basic understanding of javascript and turn it in to a work of art. From the people I worked with to the teachers I learned from, every part of this school was a great experience.'
    })

    const fullStackAcademyDescription2 = await Description.create({
      description: 'Not only did fullstack teach me the essentials for web design, they taught me how to teach myself through online resources and trial and error. With a react front end and a express backend we were taught all the essentials to putting together a beautiful single page application.'
    })

    //Skills Section ======================================================================================================================
    const javascript = await Skill.create({
      name: 'JavaScript'
    })

    const express = await Skill.create({
      name: 'Express'
    })

    const sequelize = await Skill.create({
      name: 'Sequelize'
    })

    const postgres = await Skill.create({
      name: 'Postgres'
    })

    const react = await Skill.create({
      name: 'React'
    })

    const reactRedux = await Skill.create({
      name: 'Redux React'
    })

    const reactNative = await Skill.create({
      name: 'React Native'
    })

    const expo = await Skill.create({
      name: 'Expo'
    })

    const heroku = await Skill.create({
      name: 'Heroku'
    })

    const socket = await Skill.create({
      name: 'Socket.io'
    })

    //Jobs Section ======================================================================================================================
    const undergradResearch = await Job.create({
      title: 'Undergraduate Research',
      organization: 'University at Albany',
      // description: 'Seperated a written research paper summarizing data analysis.  Critically analyzed',
      location: 'Albany, NY',
      start: 'May, 2016',
      end: 'August, 2016',
      order: 1
    })

    const oaxaca = await Job.create({
      title: 'Cashier',
      organization: 'Oaxaca Taqueria',
      location: 'New York, NY',
      start: 'November, 2017',
      end: 'June, 2019',
      order: 2
    })

    const columbiaResearch = await Job.create({
      title: 'Research Volunteer',
      organization: 'Columbia University',
      // description: 'Seperated a written research paper summarizing data analysis.  Critically analyzed',
      location: 'New York, NY',
      start: 'January, 2018',
      end: 'June, 2019',
      order: 3
    })

    const malaparte = await Job.create({
      title: 'Bus Boy',
      organization: 'Malaparte Restaurant',
      location: 'New York, NY',
      start: 'May, 2019',
      end: 'April, 2020',
      order: 4
    })

    const harlemHospital = await Job.create({
      title: 'Front Desk Associate',
      organization: 'Harlem Hospital',
      location: 'New York, NY',
      start: 'January 2021',
      end: 'Present',
      order: 5
    })

    //School Section ======================================================================================================================

    const ps6 = await School.create({
      name: 'Public School 6',
      focus: 'General Education',
      location: 'Manhattan, NY',
      end: 'June, 2006',
      graduated: true,
      order: 1
    })

    const computerSchool = await School.create({
      name: 'The Computer School',
      focus: 'General Education',
      location: 'Manhattan, NY',
      end: 'June, 2009',
      graduated: true,
      order: 2
    })

    const beacon = await School.create({
      name: 'Beacon Highschool',
      focus: 'General Education/Environmental Science',
      location: 'Manhattan, NY',
      end: 'June, 2013',
      graduated: true,
      order: 3
    })

    const albany = await School.create({
      name: 'State University at Albany',
      focus: 'Biology',
      location: 'Albany, NY',
      end: 'May, 2017',
      graduated: true,
      order: 4
    })

    const fullStackAcademy = await School.create({
      name: 'Fullstack Academy',
      focus: 'Web Design',
      location: 'Remote Learning',
      end: 'November 2020',
      graduated: true,
      order: 5
    })

    //Project Section ======================================================================================================================
    const kitchenShopper = await Project.create({
      name: "Bob's Pasta Store",
      role: 'Fullstack Developer',
      link: 'https://kitchen-ecommerce-store.herokuapp.com/',
      technologies: 'react, react-redux, express, postgres, heroku, webpack, sequelize',
      startDate: '2020-09',
      endDate: '2020-10'
    })
    //Association Section ======================================================================================================================
    // console.log(Object.keys(javascript.__proto__))
    javascript.setDescriptions(jsDescription)
    await javascript.setDescriptions(jsDescription2)
    await express.setDescriptions(expressDescription)
    await sequelize.setDescriptions(sequelizeDescription)
    await postgres.setDescriptions(postgresDescription)
    await react.setDescriptions(reactDescription)
    await reactRedux.setDescriptions(reactReduxDescription)
    await reactNative.setDescriptions(reactNativeDescription)
    await expo.setDescriptions(expoDescription)
    await heroku.setDescriptions(herokuDescription)
    await socket.setDescriptions(socketDescription)
    undergradResearch.setDescriptions(uGRDescription)
    await undergradResearch.setDescriptions(uGRDescription2)
    columbiaResearch.setDescriptions(researchDescription)
    await columbiaResearch.setDescriptions(researchDescription2)
    await oaxaca.setDescriptions(oaxacaDescription)
    await malaparte.setDescriptions(malaparteDescription)
    await harlemHospital.setDescriptions(harlemHospitalDescription)
    await ps6.setDescriptions(ps6Description)
    await computerSchool.setDescriptions(computerSchoolDescription)
    await beacon.setDescriptions(beaconDescription)
    await albany.setDescriptions(albanyDescription)
    fullStackAcademy.setDescriptions(fullStackAcademyDescription)
    await fullStackAcademy.setDescriptions(fullStackAcademyDescription2)

  } catch (error) {
    console.log(error)
  }
}



module.exports = seed;

if (require.main === module) {
  seed()
    .then(() => {
      console.log('Seeding success!');
      db.close();
    })
    .catch((err) => {
      console.error('Oh noes! Something went wrong!');
      console.error(err);
      db.close();
    });
}
