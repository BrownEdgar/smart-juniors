import { LOCALES } from '../locale';

const en = {
  [LOCALES.ENGLISH]: {
    title: "what is React.js {secretWord}",
    desc: `On April 18, 2017, Facebook announced React Fiber, a new set of internal algorithms for rendering, as opposed to React's old rendering algorithm, Stack.[45] React Fiber was to become the foundation of any future improvements and feature development of the React library.[46][needs update] The actual syntax for programming with React does not change; only the way that the syntax is executed has changed.[47] React's old rendering system, Stack, was developed at a time when the focus of the system on dynamic change was not understood. Stack was slow to draw complex animation, for example, trying to accomplish all of it in one chunk. Fiber breaks down animation into segments that can be spread out over multiple frames. Likewise, the structure of a page can be broken into segments that may be maintained and updated separately. JavaScript functions and virtual DOM objects are called "fibers", and each can be operated and updated separately, allowing for smoother on-screen rendering.։`,
    btnText: "read more..."
  }
}

export default en;