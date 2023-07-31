# Employee Filter

This site connects to a dummy api and displays data to the user.

![visual](https://github.com/IanZGray/employee-filter/assets/90417534/044f6055-97d9-432f-b62b-67cd72eb89ee)

## Task 1

Returns a list of names for all employees between the ages of 22 and
28 whose salaries are greater than 1000. The list is sorted in order of employees with the highest salary to the lowest salary.

## Task 2

Allows the user to input an employee id. The site displays the employee’s name if it begins with a vowel. If it doesn’t, it displays “Employee’s name does not begin with a vowel”. If an id is entered that does not correspond to a valid employee, it displays “Invalid Employee”.

## Also

The web application is responsive and designed for user experience and my aesthetic preferences. Improper user inputs are also handled with relevant error handling and notices to the user either by conditional rendering or alerts.

## Deployment: 
[Hosted Via Netlify](https://64c79fbfcd824909d0d702e7--comforting-druid-fad871.netlify.app/)

### Additional Points of note

1. Rather than connecting to the dummy api with http, the site connects via https
2. The dummy site has a low request limit, so additional conditional renders were made to notify the user if a 429 error is returned. The search feature from Task 2 will return a 'slow down' message when recieving this error. Also, the area from Task 1 will also display this message upon returing that error. 
3. Server connection errors are also logged to the console. 
