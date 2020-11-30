# Outpost-Gaming

## About us

- We are a team of veterans and students at Wyncode in Miami, FL.

- The purpose for Outpost is to address suicide among veterans which is currently at an average of 22 veterans per day. With this app, we can help provide a safe space outlet for veterans to come together, schedule gaming days, attend online group chats and talk about whatever is on their mind.

- Additionally, we want to provide resources to other military communities and mental health support/therapy.

## Link to Site

- https://outpost-gaming.herokuapp.com/

## How to View in Phone View

- This is a cellphone app only
- to view it as a cellphone on chrome use your developer tools, follow the steps below - Right Click - select inspect
  ![inspect](https://user-images.githubusercontent.com/70960077/100637841-56d95680-3301-11eb-87dd-deb3dfc6a821.png) - click the toggle device button in the top left of the console.
  ![togglebutton](https://user-images.githubusercontent.com/70960077/100638028-88eab880-3301-11eb-89c2-59b6b026a591.png)
  ... - click the 3 dots in the top right corner - click more tools
  ![3dots](https://user-images.githubusercontent.com/70960077/100637804-49bc6780-3301-11eb-953e-debe6727bee2.png) - click developer tools
  ![webDev](https://user-images.githubusercontent.com/70960077/100637927-6ce71700-3301-11eb-8ede-f1c9fb619d2f.png) - click the toggle device button in the top left of the console.
  ![togglebutton](https://user-images.githubusercontent.com/70960077/100638028-88eab880-3301-11eb-89c2-59b6b026a591.png)

## Setup to Clone the Repo

- `git clone` this repo
- `cd` into it.
- `yarn install`
- `cd client && yarn install`
- `cp .env.sample .env`

## Available Build Commands

- `yarn dev`: Runs BOTH your Express.JS and React developer environment locally at the same time. Any logs coming from Express will be prefaced with `[0]`, any logs from `create-react-app` will be prefaced with `[1]`.
- `yarn server`: Runs JUST your Express.JS server.
- `yarn client`: Runs JUST your front-end React app.

Open [http://localhost:3000](http://localhost:3000) to view your local React app in the browser. The page will reload if you make edits.
