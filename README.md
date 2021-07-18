# Challenge: On the route to React: Params within React Router

In its initial state, this application contains a single route, which displays the home page when it's active - that is, all the time... for now!

### Your goal is to:

- Create a 1st component: MyProfile in which you will display your name and school, as static data - no state, no URL parameters!
- Create a 2nd component: UserProfile, where you'll just display a user's GitHub username. This username has to be retrieved via an URL parameter, namely githubLogin.
- Create two routes, so as to display these components based on the visited URL:
- Set /my-profile as the path of the Route that displays MyProfile.
- Set /user-profile/:githubLogin as the path of the Route that displays UserProfile.
- Add links to the unordered list in the navigation section:
- One that leads to the home page.
- One that leads to your profile.
- At least two links that lead to user profiles: you might use the usernames of project teammates, or fake ones. Example link: <Link to="/user-profile/WWWilder">WWWilder</Link>.

Result:

![0](https://user-images.githubusercontent.com/78496780/126081316-dba6c14f-733a-4f3c-8104-44bc942097b7.png)

Created with CodeSandbox
