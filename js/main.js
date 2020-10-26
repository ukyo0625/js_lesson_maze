'use strict';

(() => {
  class Maze {

  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  } 
    const maze = new maze(canvas);
    maze.render();
  })();