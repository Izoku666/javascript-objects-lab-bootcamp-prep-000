var recipes = {};

function updateObjectWithKeyAndValue(obj , key , value)
{
  var newObj = new obj();
  newObj[key] = value;
  return newObj
  //return new recipes({ [key] : [value]});
}

function destructivelyUpdateObjectWithKeyAndValue(obj , key , value)
{
  
}

function deleteFromObjectByKey(obj , key)
{
  
}

function destructivelyDeleteFromObjectByKey(obj , key)
{
  
}