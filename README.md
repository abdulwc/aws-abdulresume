<h1>AWS Cloud Resume </h1>

<br />
My Cloud Resume
<br />

<h2>Description </h2>

Welcome to my AWS Cloud Resume project! This repository showcases a cloud-hosted resume that I've built using Amazon Web Services (AWS). By utilizing various AWS services, I've created an online resume that's engaging, secure, and designed for a seamless experience. <br />


<h2>Key Highlights</h2>

Cloud-hosted Resume: My resume is accessible at <a href="https://resume.awchanna.com">resume.awchanna.com – a live URL powered by AWS services.
Custom Domain: I've used Amazon Route 53 to associate my resume with a custom domain name for a professional touch.
Visitor Counter: I've integrated a visitor counter using DynamoDB, Lambda, and JavaScript to display the number of visitors who have viewed my resume.
CI/CD Pipeline: The GitHub Actions workflow automates the deployment process, ensuring that updates to my resume are seamlessly reflected on the live site.

<h2>Services Used</h2>

Amazon S3: Hosted the HTML, CSS, and JavaScript files that compose my resume.
Amazon CloudFront: Provided content delivery, HTTPS, and accelerated loading times.
Amazon Certificate Manager: Ensured the security of data in transit via SSL/TLS certificates.
AWS Lambda: Used for serverless execution to update the visitor count dynamically.
Amazon DynamoDB: Stored visitor data and allowed for efficient retrieval and updates.
Amazon Route 53: Managed the custom domain name and directed it to the CloudFront distribution.
GitHub Actions: Established a CI/CD pipeline for automated deployment directly from this repository.

<h2>Steps involved </h2>
1. Resume Creation: I crafted my resume in HTML and enhanced it with basic CSS for a clean layout and styling.
2. AWS Resources Setup: I utilized Amazon S3 to host the resume files, Amazon CloudFront to ensure security and speed, and Amazon Route 53 for domain management.
3. Visitor Counter: By combining AWS Lambda, DynamoDB, and JavaScript, I implemented a dynamic visitor counter on the resume.
4. CI/CD with GitHub Actions: Leveraging GitHub Actions, I established an automated pipeline that deploys changes to my Amazon S3 bucket upon new commits to this repository.








 

 


