# flatfair FE Challenge

To check out this project, you will need npm installed on your machine. Then, clone this repository and run `npm i`, followed by `npm run start`. Then you can visit the app on `localhost:3000`

To test this project, run `npm run test` to run the existing unit tests.

## My approach

The goal of this exercise was to **'Implement a rich and detailed Log in/Sign up experience'**,

As this is a challenge focussed on Front-end development, I decided to focus less on the building of the app, and more on the code quality and practice, I decided to use `create-react-app` as my boilerplate. This allowed me to focus less on the build, and more on the structure of my code as a whole.

### User Stories

```
As a user,
So I can use flatfair,
I want to sign up for an account
```
```
As a user,
So I can use my flatfair account,
I want to login to my account
```
```
As a Tenant,
So I can have a tenant-focussed experience on flatfair,
I want to create a Tenant account
```
```
As a Landlord,
So I can have a landlord-focussed experience on flatfair,
I want to create a Landlord account
```
```
As a Agent,
So I can have a agent-focussed experience on flatfair,
I want to create a Agent account
```
## Challenges and learnings

* I spent too much time configuring the linter. I'm still actually in the process of building my own personal .eslintrc config, and I used some of this exercise to update this file. However, I think next time I would get back this time by using an existing .eslintrc style guide such as the airbnb one.


  * Hot tip :fire:: Do not re-install the linter provided in the create-react-app. It messes up with the peer-dependencies. I wasted a bit of time installing my own linter, and reinstalling all the node_modules again after the `npm run start` command failed

* Picking up unit testing with `react-testing-library`. This made tests more focussed on behaviour. I thought that focussing on behaviour in this instance was a good idea because there was little scope for adding end-to-end (e2e) tests in the given timeframe

    * I started off by test-driving the implementation for the first couple of user stories. However, after a couple hours, it was clear that I was going to take a long time to fully test-drive the app. After I realised that I may have spent a bit too much time on the tests and not enough on writing features, I started focussing more on adding features. If this were a production app, I would do my best to make sure all the unit tests covered the key bases

* Making sure that components were reusable. E.g. Using the Form component for both sign up and sign in. If I had more time, I would configure the Form a bit better so that I could incorporate other kinds of forms, such as claims forms or edit profile forms.

## What I would do if I had more time

- [ ] Implement sign in for users (in progress)

- [ ] Implement sign in for different kinds of users (tenant, landlord, agent)

- [ ] Implement error handling for signing in users - e.g. non-existent users, existing user with incorrect password

- [ ] Tidy up the `account-dashboard` route

- [ ] Implement loading states for when user is waiting for an async response (e.g. creating an account)

- [ ] Styling with CSS, to make the UI look nicer in general

- [ ] More validation - for example, making sure that non-logged in users can visit the `/account-dashboard` path, redirecting them to the landing page if they do that

- [ ] More tests - including unit tests and e2e tests with CypressJS
