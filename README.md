# About Application

It's a All in One Crypto App which shows _Exchanges_, _Cryptocurrencies_, _Crypto News_, and _Crypto Statistics_ and more.

This Application is build on React and Redux Toolkit. Fetching Data from RapidAPI. Ant Design is also used for UI components.

# APIs

1. CoinRanking
2. Bing News

# How to use Redux Toolkit Query to fetch Data

1. Create a folder named `services` main folder for fetching data.

2. Inside there create a new file named `cryptoApi`.

3. Before anything else, We're gonna have to create a `Store` which is the centralized storage to store every state and data in it. So, we can get it in our entire Application whenever we want, easily.

4. Now Create folder named `app` in src and inside there a file named `store.js`. This will gonna be the Redux Store.

5. And see the `store.js` for code information.

6. Now Import Store from `store.js` and Provider from RTK inside our main `index.js`

7. And Wrap the whole app inside provider like mine.

8. Now we can write data fetching functionality inside `cryptoApi.js`.

9. After writing the code import that functionality in `store.js`

10. Now our Application is fully connected and we just have to fetch whatever data we want.
