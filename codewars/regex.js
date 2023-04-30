let pin = '1234';
function validatePIN (pin) {
    const re = /^[0-9]+$/;
    if (pin.match(re) && pin.length === 4) {
      return true;
    } else {
      return false;
    }
  }
  console.log(validatePIN(pin))