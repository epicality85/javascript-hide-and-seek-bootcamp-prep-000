// returns the first element that matches the selector
function getFirstSelector(selector)
{
  return document.querySelector(selector)
}

// pulls a .target out of #nested
function nestedTarget()
{
  var nestedTag = document.querySelector('#nested')
  var targetFromNested = nestedTag.querySelector('.target')
  return targetFromNested
}

/*
increases the ranks in all of the .ranked-lists by n. 
(You might need to make use of parseInt()
*/

function increaseRankBy(n)
{
  
}

/*
Define a function deepestChild() that pulls out the most deeply nested child from 
div#grand-node. (Remember, you can iterate over elements and call querySelector() and
querySelectorAll() on them. This is challenging to implement correctly, but not beyond your
ability!)
*/

function deepestChild()
{
  
}