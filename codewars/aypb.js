let name = "Ringo"
function areYouPlayingBanjo(name) {  
    if (name.split("")[0] == "R" || name.split("")[0] == "r"){  
    return name + " plays banjo";
    } else {
      return name + " does not play banjo"
    }
  }