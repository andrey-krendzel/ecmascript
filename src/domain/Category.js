class Category {
    constructor(categoryTitle) {
      this.categoryTitle = categoryTitle;
    }

    toString() {
        return 'Category: ' + this.categoryTitle;
      }
  }

 class Football extends Category{
    constructor(categoryTitle) {
        super(categoryTitle);
        this.categoryTitle = "Football";
      }

      
  }

  export { Category, Football };