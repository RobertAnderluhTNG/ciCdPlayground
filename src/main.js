import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Robert Anderluh",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Automated deployment"],
    // Which CI/CD tools do you use in your project?
    tools: "Github Actions",
    // What do you want to learn in this workshop?
    expectations: ["CICD general terms and concepts. --Added change to push--"],
  },
});
