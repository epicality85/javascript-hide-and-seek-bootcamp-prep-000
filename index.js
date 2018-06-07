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
  rankedList.forEach(function(item){
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
  var nodeToCheck = document.querySelector('div#grand-node').querySelectorAll('div')
  
  // lets iterate through and see if we can find the deepest nested grand-node
  // we need some place holders
  var hasChild = true
  var count = 0
  
  /*
  while we haven't found the deepest node
  check if the current node has children
  if it does, set variable and check the next node
  if it doesn't we may have found the deepest node
  */
  
  while(hasChild)
  {
    var x = nodeToCheck[count].querySelector('div').length
    if(x > 0)
    { 
      // increment the counter
      count++
      // the node has a child
      hasChild = true
      // make this node the next node to be checked
      nodeToCheck = nodeToCheck[count].querySelector('div')

    }
    else
    {
      // the node does not have a child!!
      hasChild = false
      
      
    }
  }
  // set outgoing return
      return nodeToCheck[count]
}