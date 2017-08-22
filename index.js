function getName(node){
   return node['name']
 }

 function headNode(linkedList, collection){
   return collection[linkedList]
 }

//should return the following node every time it is called
 function next(node, collection){
   const nextAddress = node['next']
   const nextNode = collection[nextAddress]
   return nextNode
 }


// should return at the provided index
 function nodeAt(index, linkedList, collection){
   let node = headNode(linkedList, collection)
   for (let i = 0; i < index; i++){
     node = next(node, collection)
   }
   return node
 }

// should return the address of the node at the address
 function addressAt(index, linkedList, collection){
   let address = linkedList
   for (let i = 0; i < index; i++){
     address = collection[address]['next']
   }
   return address
 }

 function indexAt(node, collection, linkedList) {
   var currentNode = headNode(linkedList, collection)
   var index = 0
   while(currentNode !== node){
     currentNode = next(currentNode, collection)
     index++
   }
   return index
 }

 function insertNodeAt(index, address, linkedList, collection) {
   var newNode = collection[address]
   newNode["next"] = addressAt(index, linkedList, collection)
   var previousNode = nodeAt(index-1, linkedList, collection)
   previousNode["next"] = address
 }

 function deleteNodeAt(index, linkedList, collection) {
   var deletedNode = nodeAt(index, linkedList, collection)
   var address = deletedNode['next']
   var previousNode = nodeAt(index-1, linkedList, collection)
   previousNode["next"] = address
 }
