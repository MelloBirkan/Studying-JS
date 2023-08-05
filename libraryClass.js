/*Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:*/

class Media {
  constructor(title, isCheckedOut = false, ratings = []) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title() {
    return this._title;
    }

  get isCheckedOut() {
    return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }

    set isCheckedOut(toggle) {
      typeof toggle === 'boolean' ? this._isCheckedOut = toggle : console.log('Enter a bool value');
    }

    toggleCheckOutStatus() {
      this._isCheckedOut === true ? this._isCheckedOut = false : this._isCheckedOut = true;
    }

  addRating(ratings) {
    if (Array.isArray(ratings)) {
    for (let rating of ratings) {
    typeof rating === 'number' ? this._ratings.push(rating) : console.log('Enter a number value');
    }
  } else {
    typeof ratings === 'number' ? this._ratings.push(ratings) : console.log('Enter a number value');
  }
  }

    getAverageRating() {
      let average = this._ratings.reduce((acumulator, atual) => acumulator + atual, 0) / this._ratings.length;
        return average;
    }
  }

  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }

    get author() {
      return this._author;
    }

    get pages() {
      return this._pages;
    }
  };

  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }

    get director() {
      return this._director;
    }

    get runTime() {
      return this._runTime;
    }
  }


  const historyOfEverithing = new Book('Bill Bryson', 'A short history of Nearly Everithing', 544)
  historyOfEverithing.toggleCheckOutStatus();
  console.log(historyOfEverithing.isCheckedOut)
  historyOfEverithing.addRating([4, 5, 5]);
  console.log(historyOfEverithing.getAverageRating())

  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut)
  speed.addRating([1, 1, 5])
  console.log(speed.getAverageRating());
