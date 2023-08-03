/*A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!*/

const menu =  {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      console.log('Error')
    }
  },
  set price(priceToCheck) {
    if  (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log('Error')
    }
  },
  get todaysSpecial() {
    return this._meal && this._price ? `Today's Special is ${this._meal} for $${this._price}!` : 'Meal or price was not set correctly'
  }

};
menu.meal = 'pasta'
menu.price = 20
console.log(menu.todaysSpecial)