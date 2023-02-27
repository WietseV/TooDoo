
## TooDoo

The scope of this project was to build a to-do web application. The intend was to improve my back-end skills with node.js and later I decided to use firebase to get a feel on working with api's in [Next.js](https://nextjs.org/).

- Users can log in and sign out with google pop-up.
- A guest login exists for those who just want to check out the functionality.
- The to-do items can be added, edited, deleted, completed and prioritized.
- When users are not logged in they cannot see userspecific items.

The front-end is fully responsive, with some nice pop-up notifications using toastify. The favicon was created by [Favicon.io](https://favicon.io)

For this project I used Next.js(React).
[Tailwindcss](https://tailwindcss.com/) for the front-end styling and javascript for back-end. As mentioned I used [Firebase](https://firebase.google.com/) for authentification and firestore(firebase) for the database.

The background picture I found on [pexels](https://pexels.com)

The login page will only be shown when no user is logged in. When trying to reach this page when logged in you will always be redirected back.

![image](https://user-images.githubusercontent.com/36664208/221566719-9306abd8-5186-4cdc-87b5-c601f616463a.png)

Originaly there was only the Google login but I added the guest login for those who would just like to check out the application without actually meaning to use it. The guest account is just 1 account which can be accessed by everyone. All functionallities work on this account but it is not meant to be used as a real account.

When logging in with google you get your own dedicated account to which only you will have access with your google account. This makes the app actually functional. There is a limitation of how big you can make your to-do items (450 characters) and how many you can have (50 items) to limit the strain on the firestore.

![image](https://user-images.githubusercontent.com/36664208/221567460-4cd4bcf6-406b-46ca-9c06-bec331fc0bad.png)

The main page of the application is where you can add items, by using the bar at the top. But also prioritise, complete, edit and delete items with the buttons on the item it self.

![image](https://user-images.githubusercontent.com/36664208/221568136-ce5e84a8-1dc0-4848-adaa-83992b0216cd.png)

When you have finished in guest mode with testing the functionalities I kindly ask you to delete all items to leave a clean testing environement for the following visitors.

Lastly a quick overview of how it looks on tablets: 

![image](https://user-images.githubusercontent.com/36664208/221568611-491a46b5-87c9-4003-af02-7d5cc98fda26.png)

and on mobile:

![image](https://user-images.githubusercontent.com/36664208/221568759-c362c807-437a-426a-a38b-b6b962f9142c.png)

