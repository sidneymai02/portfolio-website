import "../Pages-CSS/ProfessionalExperience.css"

function ProfessionalExperience() {
    return (
        <div className="experience-container">
            <h1 className="experience-title">Professional Experience</h1>
            <p className="experience-subtitle">
                Passionate about building secure, user-friendly applications. 
                Experienced in software engineering and cybersecurity, with a 
                drive to create impactful solutions that bridge technology and people.
            </p>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Associate Identity and Access Management (IAM) Engineer</h2>
                    {/*
                        <span className="status-badge">Current</span>
                    */}
                </div>
                <h4 className="company">San Diego Gas & Electric (SDG&E)</h4>
                <span className="date">Jan 2025 - Aug 2025</span>

                <ul className="experience-details">
                    <li>Delivered CyberArk access reports covering 5000+ privileged accounts to audit teams, 
                        enabling 100% closure of SOX audit findings and full compliance with corporate security policies.
                    </li>
                    <li>Triaged and fulfilled 200+ monthly access and entitlement requests across CyberArk, Okta, and Microsoft Entra ID, 
                        enforcing zero trust and least privilege principles without SLA breaches.
                    </li>
                    <li>Coordinated SOX access certification campaigns across 50+ privileged Active Directory admin groups, 
                        validating entitlement accuracy for 1,200+ accounts, preventing potential unauthorized access.
                    </li>
                    <li>
                        Enforced high-privileged account protections with periodic password rotations, reducing credential exposure risk by over 40%.
                    </li>
                    <li>
                        Administered 300+ CyberArk safes, provisioning and auditing credentials to maintain 100% compliance with privileged access policies.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Okta</span>
                    <span className="tech-pill">CyberArk</span>
                    <span className="tech-pill">PowerShell</span>
                    <span className="tech-pill">SailPoint</span>
                    <span className="tech-pill">Microsoft Entra ID</span>
                    <span className="tech-pill">Azure Active Directory (AD)</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Associate Software Engineer</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric (SDG&E)</h4>
                <span className="date">Mar 2025 - Jun 2025</span>

                <ul className="experience-details">
                    <li>
                        Developed backend export functionality for dashboards using Typescript and React, delivering 500+ structured data 
                        points per request to stakeholders, enabling high-speed, scalable reporting across production environments.
                    </li>
                    <li>
                        Created backend data-clearing logic ensuring 100% repeatable test environments, reducing debugging time by 30% for QA and Dev teams.
                    </li>
                    <li>
                        Authored unit and integration tests in Cypress achieving 100% data validation accuracy, significantly reducing production defects.
                    </li>
                    <li>
                        Leveraged Docker Desktop to mirror production configurations locally, increasing CI/CD deployment reliability by 25%.
                    </li>
                    <li>
                        Leveraged Git for version control and collaborative development, managing feature branches, resolving merge conflicts, and contributing to code reviews.
                    </li>
                    <li>
                        Collaborated with development teams to align all features with secure coding best practices and secure SDLC requirements.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">React.js</span>
                    <span className="tech-pill">JavaScript</span>
                    <span className="tech-pill">HTML5</span>
                    <span className="tech-pill">CSS</span>
                    <span className="tech-pill">TypeScript</span>
                    <span className="tech-pill">Unit Testing</span>
                    <span className="tech-pill">NoSQL</span>
                    <span className="tech-pill">Docker</span>
                    <span className="tech-pill">Node.js</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Associate Security Engineer</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric (SDG&E)</h4>
                <span className="date">Jun 2024 - Mar 2025</span>

                <ul className="experience-details">
                    <li>
                        Conducted manual and automated penetration testing on 15+ internal apps and APIs using Burp Suite, Postman, and DAST, uncovering 
                        and remediating OWASP Top 10 vulnerabilities, resulting in a 90% reduction in high/critical risks.
                    </li>
                    <li>
                        Automated plaintext credential discovery across SharePoint, Azure DevOps, and network drives using
                        Python/PowerShell, detecting 100+ high-risk instances with 94% accuracy and eliminating them within 10 business days.
                    </li>
                    <li>
                        Managed Bug Bounty triage, assigning CVSS scores and tracking 50+ vulnerabilities through remediation, achieving 100% closure within SLA.
                    </li>
                    <li>
                        Partnered with AppSec/DevOps teams to integrate vulnerability scans into Agile CI/CD, reducing security remediation cycles by 35%.
                    </li>
                    <li>
                        Executed network reconnaissance and authenticated/unauthenticated testing with Kali Linux, Nmap, and Dirb, identifying weaknesses in APIs, 
                        containers, and databases, improving security posture across the enterprise.
                    </li>
                    <li>
                        Led Shadow IT detection using Splunk SIEM, identifying over 10,000 unmanaged devices with a 95% true positive rate, increasing network asset visibility by over 60%.
                    </li>
                    <li>
                        Performed source code reviews using Checkmarx, triaging 1000+ findings with a 99% resolution rate of true positives, enhancing application security.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Penetration Testing</span>
                    <span className="tech-pill">Burp Suite</span>
                    <span className="tech-pill">Kali Linux</span>
                    <span className="tech-pill">SharePoint</span>
                    <span className="tech-pill">Red Teaming</span>
                    <span className="tech-pill">Network-Attached Storage (NAS)</span>
                    <span className="tech-pill">Checkmarx</span>
                    <span className="tech-pill">Code Review</span>
                    <span className="tech-pill">Technical Documentation</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Associate Data Engineer</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric (SDG&E)</h4>
                <span className="date">Jan 2024 - Jun 2024</span>

                <ul className="experience-details">
                    <li>
                        Developed PowerApps automation tools to improve user experience by streamlining file uploads into SharePoint.
                    </li>
                    <li>
                        Built and integrated 5 Azure Data Factory pipelines with a SQL database to ensure efficient data warehousing across teams and establish proper security logging operations.
                    </li>
                    <li>
                        Designed a Power BI dashboard consolidating 4,000+ recognition award entries across departments, partnering with IT and business stakeholders; 
                        recognized with a Spotlight Award for outstanding impact.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Microsoft PowerApps</span>
                    <span className="tech-pill">Azure Data Factory</span>
                    <span className="tech-pill">Transact-SQL (T-SQL)</span>
                    <span className="tech-pill">Microsoft PowerBI</span>
                    <span className="tech-pill">DAX</span>
                    <span className="tech-pill">SQL Server Management Studio</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Data Engineer Intern</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric (SDG&E)</h4>
                <span className="date">May 2023 - Jan 2024</span>

                <ul className="experience-details">
                    <li>
                        Automated large-scale data management tasks containing 200+ data points by leveraging REST APIs (GraphAPI and AzureAPI) and Postman, achieving an accuracy rate of 98%.
                    </li>
                    <li>
                        Leveraged expertise in .NET Core, C#, SharePoint and Graph REST API, and Postman API to proficiently manage and update SharePoint lists, even when handling 1000+ data points.
                    </li>
                    <li>
                        Skillfully integrated and referenced data from SQL databases and Azure AD to enhance data accuracy and increased operational efficiency by 20 times.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">.NET Framework</span>
                    <span className="tech-pill">Microsoft VBA</span>
                    <span className="tech-pill">SQL Server Management Studio</span>
                    <span className="tech-pill">C#</span>
                    <span className="tech-pill">REST APIs</span>
                    <span className="tech-pill">SharePoint</span>
                    <span className="tech-pill">Postman API</span>
                    <span className="tech-pill">Microsoft Azure</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Leadership Development Intern</h2>
                </div>
                <h4 className="company">RippleMatch</h4>
                <span className="date">Feb 2023 - May 2023</span>

                <ul className="experience-details">
                    <li>
                        Selected from a pool of thousands of candidates to work closely with leaders of RippleMatch's Leadership Team.
                    </li>
                    <li>
                        Recognized by RippleMatch's Leadership Team as top 5% in terms of intern performance out of a class of 500+ active interns.
                    </li>
                    <li>
                        Made an impact on multiple students' lives who landed interviews through my help.
                    </li>
                    <li>
                        Leveraged various growth strategies and tools including social media, email marketing, presentations, and networking to grow awareness on 
                        campus and strategically assessed growth and performance metrics to improve, change and/or help design new growth strategies
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Social Media Marketing</span>
                    <span className="tech-pill">Communication</span>
                    <span className="tech-pill">Networking</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Software Engineer Intern</h2>
                </div>
                <h4 className="company">Naval Information Warfare Center Pacific</h4>
                <span className="date">Oct 2022 - Oct 2022</span>

                <ul className="experience-details">
                    <li>
                        Spearheaded a team of 4 interns, orchestrating the development of advanced mathematical functions for data visualization.
                    </li>
                    <li>
                        Engineered a user-friendly Python-based GUI, enabling efficient and accurate calculations based on user inputs.
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">Agile Methodologies</span>
                    <span className="tech-pill">Scrum</span>
                    <span className="tech-pill">Bitbucket</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Splunk Engineer Intern</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric</h4>
                <span className="date">May 2022 - Aug 2022</span>

                <ul className="experience-details">
                    <li>
                        Pioneered the development of intuitive dashboards using Splunk Enterprise to monitor and verify file transfers for Fuze and Layer7 databases, achieving a remarkable 98% success rate.
                    </li>
                    <li>
                        Facilitated seamless communication between multiple stakeholders across 5 different teams, providing regular status updates and dashboard information via SharePoint and Microsoft Teams.
                    </li>
                    <li>
                        Authored 3 comprehensive, easy-to-understand documentations on Splunk, PowerBI dashboard, and SharePoint, serving as a valuable resource for the SAP Integration teams
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Splunk Enterprise</span>
                    <span className="tech-pill">SharePoint</span>
                </div>
            </div>

            <div className="experience-card">
                <div className="experience-header">
                    <h2 className="role">Security Engineer & Cyber Security PMO Intern</h2>
                </div>
                <h4 className="company">San Diego Gas & Electric</h4>
                <span className="date">May 2021 - Aug 2021</span>

                <ul className="experience-details">
                    <li>
                        Conducted rigorous penetration testing on 8 websites using tools like BURP, Kali Linux, Dirb, and Nikto, identifying vulnerabilities such as cross-site scripting and click-jacking.
                    </li>
                    <li>
                        Compiled detailed penetration test reports, providing actionable insights for management and software engineering teams.
                    </li>
                    <li>
                        Collaborated with stakeholders from 5 different Cyber teams to identify manual processes that could be automated, enhancing overall operational efficiency by 40%
                    </li>
                </ul>

                <div className="tech-stack">
                    <span className="tech-pill">Kali Linux</span>
                    <span className="tech-pill">Penetration Testing</span>
                    <span className="tech-pill">Burp Suite</span>
                </div>
            </div>

        </div>
    );
}

export default ProfessionalExperience;
