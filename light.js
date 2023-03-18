function updateLight(current) {
  //your code here!
  if ((current = "green")) {
    return "yellow";
  } else if ((current = "yellow")) {
    return "red";
  } else {
    return "green";
  }
}

updateLight("yellow");
console.log(updateLight)
