# SOEN 6011

SOFTWARE ENGINEERING PROCESSES: SECTION CC


Group **"Team Red"**

Member details:
| Team Members | Roll Numbers | Github usernames | Roles/Strengths |
| --- | --- | --- | --- |
| Vaibhav Sharma | 40197697 | [vaibhav3003](https://github.com/vaibhav3003) | Scrum Master |
| Kalinga Keshari Swain | 40226333 | [Makermav](https://github.com/Markermav)| Project Manager |
| Munj Bhavesh Nayak | 40195590 | [MunjNayak](https://github.com/MunjNayak) | Backend Developer and Tester | 
| Maitry Gajiwala | 40234167 | [MaitryG](https://github.com/MaitryG) | Backend Developer and Tester |
| Naoreen Chowdhury | 40217016 | [naoreen](https://github.com/naoreen)| Frontend Developer | 
| Khushali Parmar | 40224984 | [khushaliparmar](https://github.com/khushaliparmar)| Frontend Developer | 

<br>
=======
**Group Reds**

**Career Services Platform**

| Team Members | Roll Numbers |
| --- | --- |
| Vaibhav Sharma | 40197697 |
| Kalinga Swain | 40226333 |
| Munj Bhavesh Nayak | 40195590 |
| Maitry Gajiwala | 40234167 |
| Naoreen Chowdhury | 40217016 |
| Khushali Parmar | 40224984 |


# CareerCampus
## 1. Project Description

### Problem Statement
The problem is the lack of an efficient Career Services Platform that caters to job-seeking students and employers. Existing solutions don't offer a centralized platform for students to create portfolios and for employers to post job openings, and even if they do, the portals are not as robust in terms of narrowing down the postings as per the requirements of the users. This hinders efficient job hunting and recruitment processes, impacting both candidates and employers. The objective is to develop a middle-fidelity prototype of a comprehensive platform to address these challenges and facilitate effective job matching, directed specifically towards students. 

### Project Definition
The objective of this project is to develop a middle fidelity protoype of a comprehensive Career Services Platform that caters to the needs of both job-seeking students and employers. The platform will enable students to create and update their portfolios while providing employers with the ability to post job openings. There will also be an admin who will manage all user profiles, postings and tracking. The aim of the project is to facilitate efficient job hunting and recruitment processes, benefiting both candidates and employers. 

### Project Overview
The goal of CareerCampus project is to provide a user-centered platform that offers people the materials, tools, and assistance they need to manage and improve their careers. A variety of services, such as tools for creating resumes, networking opportunities, career assistance resources, and mentorship programs, will be available on this site. By creating relationships, facilitating skill development, and giving users the tools they need to make wise career decisions, it will serve the needs of students, employers, and industry professionals. It serves as a centralized platform for anyone looking to enhance their career and skills. It will provide a user-friendly interface and functionalities that will ease the tedious job hunting process. It will also help the employers to quicken the hiring process and hire the best candidate for the particular job position. 

### Project Scope
The project scope includes end-to-end development of CareerCampus, including front-end, back-end componenets, database management and integration with external systems. The platform supports multiple user roles, such as students, employers, admin and trainers each with their specific roles and access levels. Core features of the platform are but not limited to job ads postings, job searching, management, tracking and interview scheduling. The platform will incorporate responsive design principles to ensure accessibility across various devices and browsers. The project will also involve the creation of user-friendly interfaces, seamless navigation, and interactive user experiences. Data privacy and security will be paramount, and the platform will comply with relevant regulations to protect user information. Regular updates, maintenance, and scalability considerations will be part of the project scope to ensure the platform remains adaptable and responsive to changing user needs and industry trends. The project will be executed following an agile project management approach, allowing for iterative development, frequent feedback, and continuous improvement. Stakeholder engagement and collaboration will be essential to ensure the platform effectively addresses the diverse needs of its users. The project scope will be further refined during the planning phase, considering user research, feedback, and market analysis, to deliver a high-quality career services platform that empowers individuals in their professional journeys.
<br>

## 2. Core Features
The following are the core features of our platform: CareerCampus

### 2.1. Providing secure login access to the dashboard
This feature ensures that users (students, employers, admin) are able to get secure access to their respective dashboards by providing their usernames and passwords if the account is already created, else we create a new account. We will also implement a secure authentication mechanism to protect users' account information. This feature will check for correct details, i.e. if the user enters erroneous or invalid credentials, it will not allow the user to login unless they enter correct details. It will also show necessary error messages. 



### 2.2. Tracking and Reminders for Job Applications
Using this service, students can apply for various job applications catered to their profile. The platform will maintain a central database of a student's job applications, interview times, and hiring phases. In this feature, we will develop a code for setting reminders for follow-ups and get updates on the status of student's application to keep everything organized. We will also add integration capabilities that will easily allow users to connect with their scheduling apps such as Google Calenders, Gmail for effective management.


### 2.3. Job postings and Management
Job Postings and Management will allow employers to post job vacancies on the platform, providing detailed information about job roles, responsibilities, qualifications, and desired skills. They can manage their job postings, edit or update them as needed, and set application deadlines. They can also see candidate profile and resume. This feature includes a notification service that will notify employeers when a candidate applies to the job postings.
=======
**Scrum Master: Vaibhav Sharma**

**Product Owner: Kalinga Swain**

**Development Team:Munj Bhavesh Nayak, Maitry Gajiwala, Naoreen Chowdhury, Khushali Parmar, Kalinga Swain**

**Quality Assurance: Kalinga Swain, Maitry Gajiwala, Munj Bhavesh Nayak**

**UX/UI Designer:Khushali Parmar, Naoreen Chowdhury**




### 2.4. Interview Scheduling
This is a scheduling feature that will be unique to a job posting. Students will be able to select, view and request for rescheduling interview slots whereas employers will be able to open new interview slots. Employers can also view, reschedule and cancel interview slots. As mentioned above, we will add integration of this feature with other scheduling and reminder apps such as Google Calender, etc. 
<br>

## 3. Project Technology and Approach


## Technology Stack: 
After thorough research and discussions with the team, we have decided on the following Technologies to use for the implementation of our project.
#### Runtime Environment: Node.js
Node.js is a JavaScript runtime environment used for server-side development. It's known for its scalability and responsiveness.

#### Database: MongoDB
MongoDB is a flexible NoSQL database that stores data in JSON-like documents. It's suitable for applications with evolving data needs and offers powerful querying capabilities.

#### Programming IDE: VSCode
VSCode is a popular source code editor with a user-friendly interface, extensive language support, and useful features like debugging and version control integration.

#### Version Control: Git
Git is a distributed version control system that tracks code changes, making collaboration and code management easier. It integrates well with platforms like GitHub or GitLab.

### Approach
Our objective is to create an online platform that connects job seekers and companies, providing personalized job matching and expediting the job
search process. We will follow an Agile development approach, dividing the project into iterations/sprints and incorporating regular reviews and
feedback. 
- During Sprint-1, our focus will be on project planning. This phase involves defining objectives, scope, and deliverables. We will identify the primary users (students, employers) and their key functionalities. Additionally, we will create a product backlog, prioritizing features and user stories for each iteration.
- GitHub will serve as our platform for version control, issue tracking, and project management. Effective communication and collaboration will be facilitated through Google Meet, allowing real-time interaction and file sharing.
- The development process will involve gathering and analyzing requirements, designing user interfaces, implementing functionality, and rigorous testing. Each iteration will focus on specific features, ensuring incremental progress.
- To maintain quality, we will conduct comprehensive testing, including unit testing, integration testing, and user acceptance testing. Code reviews and quality checks will be performed to adhere to high standards.
- Risks will be identified, assessed, and mitigated throughout the project, with regular risk assessments and contingency plans in place.
- A well-defined project timeline will outline major milestones and deliverables for each iteration. With a duration of 1.5 to 2.5 weeks, our four sprints will include regular reviews and retrospectives.
- Documentation, such as requirements documents, design documents, and user guides, will be created and maintained using Github and Jira
<br>

## 4. User Roles
The following are the core user roles for this protoype, we use:

<br>**4.1 Employer:** These users represent companies or organizations that they work in. They will be able to create/login to an account, browse candidates, and add job vacancies. They will also be able to view candidate profiles and select candidates for an interview. They can track all job applications. 

**4.2 Student/Candidate:** These users are individuals seeking employment or career opportunities. They use the platform to find jobs, create resumes, apply for positions, network with industry professionals, receive career guidance and mentorship and gain access to resources for skill enhancement.

**4.3 Admin:** An administrator is able to keep a watch over all the platform's user accounts. They have admin privileges and are responsible for managing and maintaining the platform. They  handle technical aspects, ensure data privacy and security, manage platform settings, and provide support to other users.

Additional users include:<br>
**4.4 Trainers:** These users are trainers or mentors who are hired by us to provide training programs for students. Training programs hold monetary value to our platform. Students can enroll and pay for specific programs. These programs include interview preparations, resume building, profile building skills, etc. 
=======
1. **Project scope**
<h2>4. User Roles</h2>
The following are the user roles for this protoype, we use 
**4.1.1 Employer:**   Create an account/register, login, browse candidates, add job offers, select
candidates that have already applied to an offer for an interview, track the post
**4.1.2 Student/Candidate:** \
**4.1.3 Admin:**

