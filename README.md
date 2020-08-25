## This is the automated testing framework for ​http://automationpractice.com/

### Downloading and open the project folder
git clone git@github.com:a-arias/automationPracticeProject.git

cd automationPracticeProject

### Install libraries
npm install

### Setting up cypress environment variables
export CYPRESS_email='abram@example.com'

export CYPRESS_pass='123456'

### Run tests headless
npx cypress run

### Open Cypress Gui to select test to run
 ./node_modules/.bin/cypress open   