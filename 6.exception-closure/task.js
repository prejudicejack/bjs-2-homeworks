//Задача 1
function parseCount(productQuantity) {
  parsed = Number.parseInt(productQuantity);
  if (isNaN(parsed)){
    const parseError = new Error("Невалидное значение");
    throw parseError;
  }
  return parsed
}

function validateCount(productQuantity) {
  try {
    validated = parseCount(productQuantity);
    if(typeof validated === 'number') {
      return validated
    }
  } catch (e) {
    error = e;
  }
  return error
}

//Задача 2
class Triangle {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    if (this.x + this.y < this.z||this.y + this.z < this.x || this.z + this.x < this.y) {
      const sumError = new Error("Треугольник с такими сторонами не существует");
      throw sumError;
    }
  }

  getPerimeter() {
    return this.x + this.y + this.z
  }

  getArea() {
    let halfP = 1/2 * (this.x + this.y + this.z)
    let square = parseFloat(Math.sqrt(halfP * (halfP - this.x) * (halfP - this.y) * (halfP - this.z)).toFixed(3));
    return square
  }
}

function getTriangle(a,b,c) {
  let obj = {
    getArea: () => "Ошибка! Треугольник не существует",
    getPerimeter: () => "Ошибка! Треугольник не существует" 
  }
  
  try {
    let newTriangle = new Triangle(a,b,c);
    return newTriangle
  } catch (e) {
    return obj
  }
}