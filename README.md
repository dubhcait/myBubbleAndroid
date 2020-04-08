# MyBubble

The game where it's good to 'live in a bubble' -- MyBubble makes social distancing fun by earning rewards for keeping social distance, encouraging others, and staying positive!

## Inspiration

Humans are social creatures, and with social distancing staying apart, staying out of groups, and staying at home is completely unnatural to us! This is even harder for younger folks the ones who feel invincible, get easily bored, and have a penchant for ignoring the rules. But in these times rebelling against social distancing can lead to catching COVID-19 themselves or unwittingly becoming community transmitters. We created MyBubble - the game that makes social distancing fun as a combination of technology, behavioural economics (gamification), and positivity all rolled into one!

## Our track

Given the societal challenge that social distancing has posed to all of us, we see this as well-aligned with Second-Order Societal Impacts. Such a disruption is unprecedented in recent memory with social isolation raising new challenges to our mental health, introducing new ways of working, and having major impacts to all industries.

Further, given one of our team member's experience in healthcare strategy and behavioural economics, it's clear that gamification, done right in conjunction with technology, can help nudge us to better overall health and lifestyle choices. This is a great case study for helping people achieve something against the grain of human nature!

## What is the dream

[![demo video](http://img.youtube.com/vi/N5Ke9tYGZuQ/0.jpg)](http://www.youtube.com/watch?v=N5Ke9tYGZuQ 'My Bubble App')

Each week, players in our app will get a new challenge to keep themselves busy and engaged i.e. signup for an online course, go outside for personal exercise, or schedule daily video chats. Along with 3 bubbles, which are 3 chances to survive the week without bursting your social distance bubble, detected using smart phone

### functions like:

- Bluetooth, so you keep a safe 6-foot bubble around you,

- Sensing devices nearby, to warn when you’re around a group of 3 or more,

- And geofencing -- to remind you not to leave the house unless it’s absolutely necessary!

We provide users the opportunity to also redeem themselves should they falter by learning more about COVID-19, phoning a loved one, or sharing a positive message via social media. If they're able to make it to the end of the week with their bubbles in tact -- can share how they fulfilled their social distancing duty with MyBubble badges, post their scores to the community leaderboard, and get rewarded with Suds -- MyBubble’s point system which can be converted for discounts and credits with local businesses and national sponsors to keep the economy engaged.

## What's going on

We initially built a PWA to test what functionality we could manage with that but unfortunately it was limited in it's scope, espicially when it came to bluetooth broacasting i.e. when two devices are not connected by bluetooth. Plus it was very limited as to what could run in the background.

The initial design was built together in Figma;![](https://i.imgur.com/qIRAOcz.png)

Currently we are building a React-Native project initially targeting android devices. This will be a minimul prof of concept, seeing if we can get the functionality we need and key stakeholder buy in.

## Get involved

We are looking for a broad range of skill set so if you are interested, give us a shout and we can add you to our slack workspace.

## Setting up the project

### Requirements

If you follow the React Native CLI Quickstart ([here](https://reactnative.dev/docs/environment-setup)) to set up for enviroment for android.

## Set up

- clone the project

* open android studios and start an emulator
* Open your terminal and navigate into the project and use the start command. use npx if you dont have the react-native cli installed globally otherwise you can leave off the npx.

```
cd MyBubble
npx react-native start
```

- you can compile the project with the following command in a different terminal, you'll need to do this as you are making changes. It also forces a refresh.

```
npx react-native run-android
```

For trouble shouting the react-devtools is super useful. you'll need to linked them to your emunlator with the developer menu (command M to open) and start debug. Also you can see the errors that will be sent to http://localhost:8081/debugger-ui/ aswell.

```
npx react-devtools
```

## Our team

#### Randall Baran-Chong (Canada):

Randall is a global healthcare strategist with a keen interest in technology and human behaviour. He likes to combine the 3 to help connect the healthcare ecosystem, improve health outcomes, and empower people to own their health.

#### Kate O'Brien (Ireland):

Kate is a former doctor-turned-full-stack javascript developer. Kate has experience also with node.js, react, and a keen interest in cybersecurity, DevOps, and getting involved in the community!

#### Chris White (USA): Chris is an audio/software/embedded

systems technologist currently doing R&D on next-generation Bluetooth audio. Motivated by his Christian faith, he is always looking for ways to apply his skills and resources to love others through his work.
