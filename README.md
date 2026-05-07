# Introduction

Creating a User Management System. I was just practicing React in another one of my late night coding practice sessions. While I was revising callback hooks, I came across an example which involved making a list of users and modifying it again and again. This intrgued me and I've spent more than an hour experimenting on this. And I think I am gonna spend more time on this.
I thought it'd be great if I could share the experience with everyone here.
Thank you for looking at my late night sesh repo!

# Brief

## Work-Till-Now

- As of right now I have implemented a list with only three users. And I have created ways to add and remove these users

### Add Users

#### New: 

- I removed the AddUserButton component and added a method in the App component to add a user to the list.
- Along with this, there's an input tag that is placed to take the user's input for the list.

#### Old:

- I have implemented a function and another component for a button and form that is being used to add a user to the list.

#### What I learned at this?

- Learned about loose coupling.
- While I was at this, I found out that the FormEvent event object is deprecated now. And we are supposed to be more specific and use the new SubmitEvent. It was fun finding this out.

### Remove Users

#### New: 

- I removed the old RemoveUserButton and added a method in the App component to remove the user. 
- Later I drilled this function to the child components to get it further down to the ListItem component which makes use of this method on it's own button tag to remove the users.
- useCallback hook is being used on this method to prevent re-render of the method again and again.
- Also, I used functional state update to remove the dependency of the removeUser method on the users state variable. This helped me prevent the re-render by enabling the function to be only rendered once and being used again and again whenever the ListItem elements are removed.

#### Old: 

- While adding users is important for any user management system, removing users is as important too.
- I have implemented a function for removing the specified user according to his/her id.
- I am passing down the function through prop drilling and finally the RemoveUser component uses it to remove the specified user by passing the id to the drilled function.

#### What I learned from this?

- I learned about functional state update which is going to be a great asset in further building beautiful and funcitonal React applications.
- I also learned about useCallback hook which is essential in making performance optimizations on large scales.
- I learned about prop drilling. How it is used to pass down functions that can't be immediately used by the children but need to be owned by the parent element.
- I also learned about the alternative to prop drilling but didn't make use of it because it is useful when we need to drill too deep. So, I have left that out right now. But I'll surely implement it somewhere else. If you're reading this from the future. Just sit back, wait, read, and you'll see it being used somewhere for sure!

## Implementation of memo and useCallback hook

### Reason

- I implemented the memo API in this to stop the child components of App from being re-rendered again and again when someone types into the input field as it changes the text state.
- The change in state of text causes a re-render of the App component which in turn causes a re-render of the child components List and List Item. I implemnted memo on these child components to prevent the re-render.
- Also, I put the useCallback hook on the function inside App called removeUser to stop it from being rendered again and again only rendered when the elements inside the dependency array get changed, i.e., never in this case.

### What I learned

- While implementing these feature I learned about the memo api and useCallback hook.
-These are essential features in React that are used to fine tune performance when huge lists have to displayed and they might render again and again if we are not careful.
-Although they are used to performance optimization, they are not to be used unless required as they come with their own overhead which needs to be handled beforehand.

# Bye Bye!

I thank you for reading all of this. I really when someone looks at what I am working on. I am really grateful. I'll keep working on this as long as I am intrigued.
BYEBYE!

~Kartikey