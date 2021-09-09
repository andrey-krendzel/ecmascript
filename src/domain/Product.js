

export default class Product {
    constructor(title, price, dateAdded, pcs, category) {
      this.title = title;
      this.price = price;
      this.dateAdded = dateAdded;
      this.pcs = pcs;
    this.category = category;
    }

    toString() {
        return 'Title: ' + this.title + ' Price: ' + this.price + " Date: " + this.dateAdded + " Units: " + this.pcs + " Category: " + this.category.toString();
      }

  }