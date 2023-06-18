# cloudresume
Cloud Resume 

Created and deployed a cloud-hosted resume at a live URL. Steps involved; resume written in HTML, styled with basic CSS, deployed using Amazon S3, used Amazon CloudFront to have the s3 website URL use HTTPS for security and used Amazon Route 53 to point a custom DNS domain name to the CloudFront Distribution. Using Dynamo DB, Lambda and JavaScript added a visitor counter that displays how many people have viewed the site.