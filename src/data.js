export const experiences = [
    {
        title: 'Software Engineer',
        company: 'Wells Fargo',
        period: '2022 - Present',
        description: (
            <ul>
                <li>Spearheaded multiple high-impact cloud migrations, seamlessly transitioning from on-premises VMs to Pivotal Cloud Foundry (PCF) and later pivoting to a robust Kubernetes-based architecture on OpenShift Container Platform (OCP). Directed the seamless relocation of Java and React components while expertly configuring Helm charts to streamline environment-specific deployments and enhance operational efficiency.</li>
                <li>Pioneered the modernization of a monolithic Java 8 Spring Boot application with legacy JSP architecture into a scalable microservices architecture leveraging Java 17, Spring 6, and React.js micro frontends; conducted extensive research on migration best practices, troubleshot complex compatibility and integration issues, and optimized configurations to enhance performance and maintainability for enterprise fraud and claims systems.</li>
                <li>Architected CI/CD pipelines using Jenkins, SonarQube, and Threadfix while migrating microservices monitoring from ElasticAPM to Splunk Observability Cloud, automating deployments, enforcing code quality, and enhancing alerting for enterprise fraud and claims applications.</li>
                <li>Provided ongoing support to multiple Scrum teams during application modernization, resolving impediments and facilitating knowledge sharing to ensure smooth development and integration of modernized components.</li>
                <li>Supported Business Continuity Planning (BCP) exercises, ensuring successful data center failover and return, and validated Clean Rebuild Functional exercises to maintain operational resilience.</li>
                <li>Leveraged GitHub Copilot to generate test cases, refactor code for runtime efficiency, identify and mitigate security vulnerabilities (e.g., SQL injection, XSS, CSRF, insecure authentication, data exposure), and resolve errors rapidly reducing development/testing time, minimizing debugging, accelerating cycles, and enhancing security for Java and React -based applications.</li>
                <li>Mentored interns and junior developers through hands-on code reviews, pair programming sessions, and tailored skill-building workshops on Java, Spring Boot, and cloud technologies; conducted technical interviews to assess candidates, and fostered a collaborative environment that accelerated team onboarding, reduced knowledge gaps, and contributed to delivering high-performing, resilient enterprise applications.</li>
            </ul>
        ),
    },
    // Add more experiences as needed
    {
        title: 'IT Systems Administrator',
        company: 'Greenway Chemical Systems & Services',
        period: '2012 - 2022',
        description: (
            <ul>
                <li>Drove company growth from startup to multi-state operation by redesigning and developing client-facing websites, migrating to WordPress for enhanced flexibility, and attracting new clients through improved online presence.</li>
                <li>Engineered custom record-keeping programs and integrated security systems, collaborating with operations to streamline workflows and boost office productivity.</li>
                <li>Managed network infrastructure and security protocols, ensuring secure, efficient operations while programming controllers and providing client support to maintain system reliability.</li>
                <li>Led customer seminars on technology operations and conducted routine check-ins, enhancing client relations and resolving issues proactively.</li>
            </ul>
        ),
    },
];

export const projects = [
    {
        name: 'Space Exploration',
        description: "A web app to show various data provided by NASA's various publicly available APIs.",
        technologies: ['React', 'Node.js', 'Axios', 'NASA API', 'Material UI'],
        github: 'https://github.com/jlthompson96/Space_Exploration',
    },
    {
        name: '9erPark',
        description: "An iOS app that allows users to view live parking deck availability on the UNC Charlotte Campus.",
        technologies: ['Swift', 'SwiftUI'],
        github: 'https://github.com/jlthompson96/9erPark',
    },
    {
        name: 'BullRun',
        description: "A full stack application to manage financial portfolios and provide financial literacy to users.",
        technologies: ['React', 'Node.js', 'Axios', 'Material UI', 'MongoDB', 'Polygon.io API', 'Spring Boot'],
        github: 'https://github.com/jlthompson96/BullRun_Frontend',
    },
    // Add more projects
];

export const education = [
    {
        degree: 'B.A. in Computer Science',
        institution: 'University of North Carolina at Charlotte',
        period: '2019 - 2021',
        details: (
            <ul>
                <li>Capstone Project: Developed and deployed "9erPark," a Swift-based iOS application utilizing real-time APIs to display parking deck availability across UNC Charlotte's campus. Implemented SwiftUI for responsive user interface design, integrated RESTful web services for live data retrieval, and conducted user testing to optimize functionality and user experience.</li>
                <li>Academic Excellence: Maintained strong academic performance while mastering core computer science fundamentals including Data Structures & Algorithms (optimal time/space complexity analysis), Object-Oriented Programming in Java, Full-Stack Web Development (HTML5, CSS3, JavaScript, responsive design), and Database Management Systems (SQL, relational database design, query optimization).</li>
                <li>Technical Foundation: Built comprehensive programming expertise through hands-on projects in software engineering principles, version control with Git, software testing methodologies, and collaborative development practices that directly translate to enterprise software development environments.</li>
                <li>Leadership & Collaboration: Participated in team-based projects requiring cross-functional collaboration, code reviews, and agile development methodologies, developing essential soft skills for modern software engineering roles.</li>
            </ul>
        ),
    }
];