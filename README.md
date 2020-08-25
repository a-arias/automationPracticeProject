## This is the automated testing framework for ​http://automationpractice.com/

### Environment set up
git clone git@github.com:a-arias/automationPracticeProject.git

### Install libraries
npm install

### Setting up cypress environment variables
export CYPRESS_email='abram@targetable.com'
export CYPRESS_pass='nasadina2'

### Run tests headless
npx cypress run

### Open Cypress Gui to select test to run
cypress open