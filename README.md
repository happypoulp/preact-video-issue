# Preact video issue

This repository is a demo of an issue affecting playback of an html5 `<video>` when used under certain circumstamces with preact (version 8.2.0).

## Steps to reproduce the issue

1. Run `npm install && npm start` to start a dev server
2. The video will start playing by itself
3. While video is playing, click anywhere in the page
4. The click triggers a `setState` in the preact component that holds the `<video>` tag
5. The issue: Following `setState`, the DOM is mutated by preact in a way that pauses the player

Note that the issue do not manifest itself when using React so we can assume that the rendering strategy of preact (which is somehow different from React's one) is responsible for this issue.