export const experiences = [
    {
        title: 'Software Engineer',
        company: 'Wells Fargo',
        period: '2022 - Present',
        description: (
            <ul>
                <li>Orchestrated the cloud migration from Pivotal Cloud Foundry (PCF) to a Kubernetes-based architecture on OpenShift Container Platform (OCP). Led the migration of multiple Java and React components and configured HELM charts to manage environment-specific configurations effectively.</li>
                <li>Initiated the modernization of our application by working with a team of three members to develop and implement a Proof of Concept (POC) for deployment in lower environments on Pivotal Cloud Foundry (PCF).</li>
                <li>Successfully transformed a Java 8 SpringBoot application with JSP into a modernized architecture, breaking it down into micro frontends powered by React.js and multiple backend microservices using Java 17 and Spring 6.</li>
                <li>Collaborated closely with cross-functional teams to configure PCF environments and set up Harness properties while establishing an efficient Jenkins pipeline for deployment and code scanning via SonarQube and Threadfix.</li>
                <li>Collaborated with principal and lead engineers to align code with design patterns, frameworks, and efficiency.</li>
                <li>Collaborated in Enterprise Jira in the development lifecycle, including code design, implementation, testing, and integration, adhering to industry-standard methodologies.</li>
                <li>Mentored and supported interns, contractors, and new team members, fostering a sense of confidence and integration within their roles, ultimately enhancing the company's overall reputation. Additionally, conducted interviews for potential interns and analysts.</li>
                <li>Delivered crucial production support for the enterprise fraud and claims application by identifying and rectifying vulnerabilities and bugs, while proficiently troubleshooting issues through Splunk log analysis. Additionally, contributed support for late-night deployments in lower environment and production settings.</li>
                <li>Engaged in several Business Continuity Planning (BCP) exercises to guarantee seamless data center failover and maintain operational resilience.</li>
            </ul>
        ),
    },
    // Add more experiences as needed
    {
        title: 'IT Systems Administrator',
        company: 'Greenway Chemical Systems &amp; Services',
        period: '2012 - 2022',
        description: (
            <ul>
                <li>Supported the company’s growth from a small startup to a multi-state leader in industrial water treatment by designing and maintaining scalable IT systems that enabled expansion across the southeastern United States.</li>
                <li>Designed and developed a responsive company website using HTML5, CSS3, JavaScript, and Bootstrap 4, significantly improving the online presence and customer access to company information and services.</li>
                <li>Established and managed the office network infrastructure, ensuring high availability and security to support seamless business operations.</li>
                <li>Assembled and configured custom desktop computers, tailoring solutions to meet specific operational needs and enhance staff productivity.</li>
                <li>Identified and implemented innovative technological solutions, including databases, software, and hardware upgrades, to optimize workflows and increase operational efficiency.</li>
                <li>Delivered expert troubleshooting and support for hardware, software, and network issues, both on-site and remotely, minimizing downtime and maintaining business continuity.</li>
                <li>Managed and maintained the comprehensive IT infrastructure for Greenway Chemical, ensuring operational reliability and alignment with business objectives.</li>
                <li>Led the design and front-end development of the corporate website, applying modern UI/UX principles to enhance accessibility, user satisfaction, and customer engagement.</li>
                <li>Provided technical support and troubleshooting for clients’ automated chemical systems, resolving issues promptly to ensure optimal performance and client satisfaction.</li>
                <li>Oversaw office network operations, implementing strategies to maximize uptime and establish secure, reliable connectivity across all devices.</li>
                <li>Enhanced network security and performance by deploying Ubiquity UniFi solutions, configuring multiple VLANs for traffic segmentation, and establishing robust defenses against unauthorized access.</li>
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