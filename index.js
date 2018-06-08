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
  // get all li items from .ranked-list tags
  var rankedList = document.querySelectorAll('.ranked-list li')
  
  // iterate through the list that has been created using 'forEach'
  rankedList.forEach(function(item)
  {
    // number variable to make from the list items
    var number = parseInt(item.innerHTML)
    
    // increment by n
    number += n
    
    // write the new value to the DOM
    item.innerHTML = number.toString()
  })
}

/*
Define a function deepestChild() that pulls out the most deeply nested child from 
div#grand-node. (Remember, you can iterate over elements and call querySelector() and
querySelectorAll() on them. This is challenging to implement correctly, but not beyond your
ability!)
*/

function deepestChild()
{
  var startingPosition = document.querySelector('div#grand-node')
  
  // lets make a list of all the div tags nested within
  var arrayToCheck = startingPosition.querySelectorAll('div')
  
  var hasChild = true
  
  var count = 0
  
  while(hasChild)
  {
    if(arrayToCheck[count].querySelectorAll('div').length > 0)
    {
      count++
    }
    else
    {
      hasChild = false
    }
  }
  return arrayToCheck[count]
}