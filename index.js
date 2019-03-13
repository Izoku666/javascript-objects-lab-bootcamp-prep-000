var recipes = {};

function updateObjectWithKeyAndValue(obj , key , value)
{
  var newObj = Object.assign(obj , [key , class]);
}

function destructivelyUpdateObjectWithKeyAndValue(obj , key , value)
{
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj , key)
{
  
}

function destructivelyDeleteFromObjectByKey(obj , key)
{
  delete obj[key];
  return obj;
}