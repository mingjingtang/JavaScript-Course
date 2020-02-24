//MODEL
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    userAddedItem: function(type, des, val) {
      var newAddedItem, ID;
      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      if (type === "exp") {
        newAddedItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newAddedItem = new Income(ID, des, val);
      }
      data.allItems[type].push(newAddedItem);
      return newAddedItem;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//VEIW
var UIController = (function() {
  //structure make it easier to work on
  var newObjectClass = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(newObjectClass.inputType).value,
        description: document.querySelector(newObjectClass.inputDescription)
          .value,
        value: document.querySelector(newObjectClass.inputValue).value
      };
    },

    addListItem: function(obj, type) {
      var html, newHtml, element;
      if (type === "inc") {
        element = newObjectClass.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = newObjectClass.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);

      //Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    //expose newObjectClass into public
    getnewObjectClass: function() {
      return newObjectClass;
    }
  };
})();

//CONTROLLER
var controller = (function(budgetController, UIController) {
  var setupEventListeners = function() {
    var DOM = UIController.getnewObjectClass();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function() {
    var input, newAddedItem;

    //1. Get the field input data
    input = UIController.getInput(); // View.getUserInputValues()

    //2. Add the item to the budget controller
    newAddedItem = budgetController.userAddedItem(
      input.type,
      input.description,
      input.value
    );

    //3. Add the item to the UI // income/expense Container
    UIController.addListItem(newAddedItem, input.type);

    //4. Calculate the budget // balance (in Modal)

    //5. Display the budget on the UI // Upper Balance Display Area

    console.log("It works.");
  };

  return {
    init: function() {
      console.log("Application has started.");
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
