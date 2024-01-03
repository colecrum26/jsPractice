let data = [[45, 12],[55,21],[19, -2],[104, 20]];

function openOrSenior(data){
    let newMembers = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
        newMembers.push("Senior");
      } else {
        newMembers.push("Open");
      }
    } return newMembers;
  }

console.log(openOrSenior(data));