# Team Profile Generator

## Description

This app is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. 

This app meets the below user stories:

### User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

This app meets the below acceptance criteria:
### Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Demo

The following image shows a mock-up of the generated HTML’s appearance and functionality:

[Team Profile Generator App](https://drive.google.com/file/d/1hVtfPv32mkrCosY8hbwwQCzjtgzDgsax/view?usp=sharing)





## Getting Started

This app requires Jest and Inquirer.

They can be installed via the below two commands:

To Initalize:
```
npm init -y
```

To Install Inquirer:
```
npm i inquirer --save
```

To Install Jest:
```
npm i jest --save
```

To Run The App:
```bash
node index.js
```


## Credits
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.



## License
The HTML and CSS exercise was provided by Triology Education Services, a 2U, Inc. brand

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

The MIT License (MIT) © 2021 Morgan Bailey

Copyright (c) 2016 Simon Boudrias (twitter: @vaxilart) Licensed under the MIT license.