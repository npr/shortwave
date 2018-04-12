# shortwave 🌀
An opinionated, rapid web prototyping stack maintained by the team at NPR.

## Features
- **jekyll:** A blog-aware static site generator. The backbone of Shortwave.
- **tachyons:** Functional CSS for humans.
- **tachyons-sass:** Transpiled Sass partials for Tachyons. Allows you to use the @extend functionality to create new classes based on Tachyons rules.
- **gulp:** Automates the ```build``` and ```serve``` tasks so you can focus on your prototype instead of fiddling with the command line.
- **browser-sync:** Spins up local & external access URLs for your prototype. Watches for changes and automatically reloads every instance. Comes in handy for testing across different browsers and devices at once.
- **github pages:** Quickly deploy to Github Pages to share your prototype from your ```username.github.io``` address.

## Assumptions
- You're on OSX. If you see a little picture of an apple in the upper-left corner of your screen, you're off to a great start!
- You have the Xcode command line tools installed. Not sure? Run gcc -v and you'll be prompted to install if you don't have it already.
- You have Ruby installed. It should come with OSX. Run ruby -v and it should return Ruby version 2.0.0 or higher.

## Getting Started With Shortwave
```
git clone https://github.com/npr-design/shortwave.git your-prototype
cd your-prototype
yarn install
gulp
```

## Contributing
Reporting a bug? File a detailed issue in the ```Issues``` tab above. If you'd like to work on an existing issue, please let us know you're picking it up by leaving a comment.

## Helpful Resources
[Tachyons Components](http://tachyons.io/components/) — Copy & paste components directly from the open source components library as a starting point for your project.

[Tachyons tl;dr](https://tachyons-tldr.now.sh/) — Quick reference for Tachyons classes. Especially helpful when you're first learning the syntax. Also includes tools for generating your own Tachyons style classes.
