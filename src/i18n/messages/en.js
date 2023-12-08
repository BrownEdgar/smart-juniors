import { LOCALES } from "../locale";

const en = {
  [LOCALES.ENGLISH]: {
    title: "Waht is React.js? {secretWord}",
    desc: `React was created by Jordan Walke, a software engineer at Meta, 
    who released an early prototype of React called "FaxJS". He was influenced by XHP, 
    an HTML component library for PHP. It was first deployed on Facebook's News Feed in 
    2011 and later on Instagram in 2012. It was open-sourced at JSConf US in May 2013.
    React Native, which enables native Android, iOS, and UWP development with React, 
    was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.
    On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms 
    for rendering, as opposed to React's old rendering algorithm, Stack. 
    React Fiber was to become the foundation of any future improvements and feature 
    development of the React library. The actual syntax for programming with React does not change, 
    only the way that the syntax is executed has changed. React's old rendering system, 
    Stack, was developed at a time when the focus of the system on dynamic change was not understood. 
    Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. 
    Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, 
    the structure of a page can be broken into segments that may be maintained and updated separately. 
    JavaScript functions and virtual DOM objects are called "fibers", and each can be operated 
    and updated separately, allowing for smoother on-screen rendering.`,
    btnText: "Read more",
    about: `About`,
    blog: `Blog`,
    projects: `Projects`,
    illustration: `Illustration`,
    mainTitle: `React Architecture: How to Structure and Organize a React Application`,
    mainContent: ` There is no consensus on the right way to organize a React application. React gives you a
    lot of freedom, but with that freedom comes the responsibility of deciding on your own
    architecture. Often the case is that whoever sets up the application in the beginning
    throws almost everything in a components folder, or maybe components and
    containers if they used Redux, but I propose there's a better way. I like to be deliberate
    about how I organize my applications so they're easy to use, understand, and extend. \t
    I'm going to show you what I consider to be an intuitive and scalable system for large-
    scale production React applications. The main concept I think is important is to make the
    architecture focused on feature as opposed to type, organizing only shared components
    on a global level and modularized all the other related entities together in the localized
    view.`
  }
}

export default en;