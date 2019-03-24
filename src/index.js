// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let salary = currency;
    if (currency <= 0) {
      return {};
    }
    if (salary > 10000) {
      return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    }
  
    let result = {};
    
    let half = {
      value: 50,
      sign: 'H',
    };
    let quarter = {
      value: 25,
      sign: 'Q',
    };
    let dime = {
      value: 10,
      sign: 'D',
    };
    let nickel = {
      value: 5,
      sign: 'N',
    };
    let pennie = {
      value: 1,
      sign: 'P',
    };
  
  
    if (salary >= half.value) {
      result[half.sign] = Math.floor(salary / half.value);
      salary %= half.value;
    }
  
    if (salary >= quarter.value) {
      result[quarter.sign] = Math.floor(salary / quarter.value);
      salary %= quarter.value;
    }

    if (salary >= dime.value) {
      result[dime.sign] = Math.floor(salary / dime.value);
      salary %= dime.value;
    }
  
    if (salary >= nickel.value) {
      result[nickel.sign] = Math.floor(salary / nickel.value);
      salary %= nickel.value;
    }

    if (salary > 0) {
      result[pennie.sign] = salary;
    }
    
    return result;
  
}
