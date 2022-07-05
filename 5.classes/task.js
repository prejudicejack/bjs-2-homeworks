//Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state ?? defaultPrintEditionItemOptions.state;
    this.type = type ?? defaultPrintEditionItemOptions.type;
  }

  fix() {
    let fixedState = this.state * 1.5;
    return this.state = fixedState
  }

  set state(newState) {
    if(newState <= 0) {
      this._state = 0;
    }
    else if(newState >= 100) {
      this._state = 100;
    }
    else if(newState > 0 || newState < 100) {
      this._state = newState;
    }
  }

  get state() {
    return this._state
  } 
}

let defaultPrintEditionItemOptions = {
  state: 100,
  type: null
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state);
    this.type = "detective";
  }
}

//Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if(book.state > 30) {
      this.books.push(book)
    }
  }

  findBookBy(type, value) {
    const bookFound = this.books.find(book => book[type] === value);
    if (bookFound === undefined) {
      return null
    }
    return bookFound
  }

  giveBookByName(bookName) {
    const bookFoundName = this.books.findIndex(book => book.name === bookName);
    if (bookFoundName === undefined || bookFoundName === -1) {
      return null
    }
    else if(bookFoundName >= 0) {
      let removed = this.books.splice(bookFoundName,1)
      return removed[0]  
    }
  }
}



//Задача 3
class Student {
  constructor(name) {
    this.name = name;
  }


  addMark(mark, subject) {
    this.mark = mark;
    this.subject = subject;
    if(this.mark < 1 || this.mark > 5 || typeof this.mark !== 'number') {
      console.log("Ошибка, оценка должна быть числом от 1 до 5")
    }

    else if(this.subjectMark === undefined) { 
    this.subjectMark = [];
    this.subjectMark.push([this.subject, this.mark])
    } else {
    this.subjectMark.push([this.subject, this.mark])
    }  
  }
  
  getAverageBySubject(subject) {
    this.subject = subject;
    let arr = [];
    for (let i = 0; i < this.subjectMark.length; i++) {
      for (let j=0; j < this.subjectMark[i].length - 1; j++) {
        if (this.subjectMark[i][0] === this.subject) {
          arr.push(this.subjectMark[i][1])
        }
      }
    }

    let result = (arr.reduce(function(sum, elem) {return sum + elem}, 0)) / arr.length;
    if(isNaN(result)) {
      return "Несуществующий предмет"
    } else {
      return result
    }
  }

  getAverage() {
    let arr2 = [];
    for (let i = 0; i < this.subjectMark.length; i++) {
      for (let j=0; j < this.subjectMark[i].length - 1; j++) {
        arr2.push(this.subjectMark[i][1])
      }
    }

    let result = (arr2.reduce(function(sum, elem) {return sum + elem}, 0)) / arr2.length;
    return result
  }

  exclude(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.mark;
    delete this.subjectMark;
    return this.excluded
  }
}