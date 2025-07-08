# pull official base image
FROM node:16-alpine3.14

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./

# COPY yarn.lock ./



RUN yarn install 

# copy source code to working Directory (/app)
COPY . ./

# ENV NEXT_PUBLIC_AES_SECRET_KEY=LreAiwO9FFjeFzyq3AVSHAw3wxil+kIo9Lpj9SWjQ1Q=
# ENV NEXT_PUBLIC_BASE_URL=https://dev-fcmb/
# ENV NEXT_PUBLIC_TERMINAL_URL=camp-terminal-gravity
# ENV NEXT_PUBLIC_UTILITY_URL=camp-utility-gravity
# ENV NEXT_PUBLIC_USER_URL=camp-user-gravity
# ENV NEXT_PUBLIC_CARD_URL=camp-card-gravity
# ENV NEXT_PUBLIC_DISPUTE_URL=camp-dispute-gravity
# ENV NEXT_PUBLIC_ISSUE_URL=camp-dispute-gravity
# ENV NEXT_PUBLIC_WALLET_URL=camp-wallet-gravity/api
# ENV NEXT_PUBLIC_REPORT_URL=camp-report-gravity 
# ENV NEXT_PUBLIC_BILL_URL=camp-transaction-gravity

RUN yarn run build

EXPOSE 3000

# start app
CMD ["yarn", "start"]
