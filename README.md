# Introduction

Creating a User Management System. I was just practicing React in another one of my late night coding practice sessions. While I was revising callback hooks, I came across an example which involved making a list of users and modifying it again and again. This intrgued me and I've spent more than an hour experimenting on this. And I think I am gonna spend more time on this.
I thought it'd be great if I could share the experience with everyone here.
Thank you for looking at my late night sesh repo!

# Brief

## Work-Till-Now

- As of right now I have implemented a list with only three users. And I have created ways to add and remove these users

### Add Users

- I have implemented a function and another component for a button and form that is being used to add a user to the list.

#### What I learned at this?

- While I was at this, I found out that the FormEvent event object is deprecated now. And we are supposed to be more specific and use the new SubmitEvent. It was fun finding this out.

### Remove Users

- While adding users is important for any user management system, removing users is as important too.
- I have implemented a function for removing the specified user according to his/her id.
- I am passing down the function through prop drilling and finally the RemoveUser component uses it to remove the specified user by passing the id to the drilled function.

#### What I learned from this?

- I learned about prop drilling. How it is used to pass down functions that can't be immediately used by the children but need to be owned by the parent element.
- I also learned about the alternative to prop drilling but didn't make use of it because it is useful when we need to drill too deep. So, I have left that out right now. But I'll surely implement it somewhere else. If you're reading this from the future. Just sit back, wait, read, and you'll see it being used somewhere for sure!

# Bye Bye!

I thank you for reading all of this. I really when someone looks at what I am working on. I am really grateful. I'll keep working on this as long as I am intrigued.
BYEBYE!

~Kartikey