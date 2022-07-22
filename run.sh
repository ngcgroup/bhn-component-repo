#!/bin/bash
#cd server && nohup nodemon app.js </dev/null &
#npm run storybook
cd server && pm2 start npm --name "server" -- start && cd ..
#pm2 start npm --name "storybook" -- run storybook
pm2 logs