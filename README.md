# EquipReality

## Overview
A CS research lab can move fast.  Technology never stops advancing, so your team can't stop either.  Sometimes, equipment can get left behind in your wake.  Administrating such a team requires focus and organization.  EquipReality is here to help your team organize itself.

EquipReality is a web app that will help members of a research lab to maintain the order of their gear.  Members can register with admin approval and log in.  Once signed in, they can view the availablity of the equipment their team owns, and put in requests to check out said gear.  The admin maintains as much control over the transactions as they want!

## Data Model

(___TODO__: a description of your application's data and their relationships to each other_) 

The application will store Users, Lists and Items

* users can have multiple lists (via references)
* each list can have multiple items (by embedding)

(___TODO__: sample documents_)

An Example User:

```javascript
{
  username: "shannonshopper",
  hash: // a password hash,
  lists: // an array of references to List documents
}
```

An Example List with Embedded Items:

```javascript
{
  user: // a reference to a User object
  name: "Breakfast foods",
  items: [
    { name: "pancakes", quantity: "9876", checked: false},
    { name: "ramen", quantity: "2", checked: true},
  ],
  createdAt: // timestamp
}
```


## [Link to Commented First Draft Schema](db.js) 

(___TODO__: create a first draft of your Schemas in db.js and link to it_)

## Wireframes

(___TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc._)

/list/create - page for creating a new shopping list

![list create](documentation/list-create.png)

/list - page for showing all shopping lists

![list](documentation/list.png)

/list/slug - page for showing specific shopping list

![list](documentation/list-slug.png)

## Site map

(___TODO__: draw out a site map that shows how pages are related to each other_)

Here's a [complex example from wikipedia](https://upload.wikimedia.org/wikipedia/commons/2/20/Sitemap_google.jpg), but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases

(___TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://www.mongodb.com/download-center?jmp=docs&_ga=1.47552679.1838903181.1489282706#previous)_)

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create a new grocery list
4. as a user, I can view all of the grocery lists I've created in a single list
5. as a user, I can add items to an existing grocery list
6. as a user, I can cross off items in an existing grocery list

## Research Topics

(___TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed_)

* (5 points) Integrate user authentication
    * I'll use Passport.js for user authentication
    * Since this app will be organization-exclusive, all registrations will require admin approval
    * I'll deploy a "fake" version of the site (with a separate database from the one I'll be using for my lab) to NYU servers
    * This fake deployment will include a test account for graders
* (2 points) Use a CSS framework
    * I plan to use Bootstrap.
* (2 points)  For external APIs
    * My team is on Slack, so I plan to include integrations for that service.
    * I don't anticipate this to be too hard to implement, but I may be surprised!  Will change point value accordingly if this turns out to be the case.

8 points total out of 8 required points


## [Link to Initial Main Project File](app.js) 

(___TODO__: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js_)

## Annotations / References Used

(___TODO__: list any tutorials/references/etc. that you've based your code off of_)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)
