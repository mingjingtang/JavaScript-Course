//MODEL
var model = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  //prototype
  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculate = function(type) {
    let sum = 0;
    data.allItems[type].forEach(function(current) {
      sum = sum + current.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: -1,
    percentage: 0
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

    deleteItemFunc: function(type, id) {
      var idArr = data.allItems[type].map(function(current) {
        return current.id;
      });

      var index = idArr.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      //Calculate total income and expenses
      calculate("inc");
      calculate("exp");

      //Calculate the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      //Calculate the percentage of the income that we spent
      var percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      if (data.totals.inc > 0) {
        data.percentage = percentage;
      } else {
        data.percentage = -1;
      }
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(cur => cur.calcPercentage(data.totals.inc));
    },

    getPercentages: function() {
      var allPerc = data.allItems.exp.map(cur => cur.getPercentage());
      return allPerc;
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//VEIW
var view = (function() {
  //structure make it easier to work on
  var newObjectClass = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputButton: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLable: ".budget__value",
    incomeLable: ".budget__income--value",
    expenseLable: ".budget__expenses--value",
    percentageLable: ".budget__expenses--percentage",
    container: ".container",
    itemPercentage: ".item__percentage"
  };

  var formatNumber = function(value, type) {
    var num, splitNum, decPart;

    //absolute value and add two decimal
    num = Math.abs(value);
    num = num.toFixed(2);
    console.log(num);

    //split to two part: int and dec
    splitNum = num.split(".");

    intPart = splitNum[0];
    if (intPart.length > 3) {
      intPart =
        intPart.substr(0, intPart.length - 3) +
        "," +
        intPart.substr(intPart.length - 3, intPart.length);
    }

    decPart = splitNum[1];

    return (type === "inc" ? "+" : "-") + " " + intPart + "." + decPart;
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(newObjectClass.inputType).value,
        description: document.querySelector(newObjectClass.inputDescription)
          .value,
        value: parseFloat(
          document.querySelector(newObjectClass.inputValue).value
        )
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
          '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

      //Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    deleteItemView: function(id) {
      var el = document.getElementById(id);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      var fields, fieldsArr;

      fields = document.querySelectorAll(
        newObjectClass.inputDescription + ", " + newObjectClass.inputValue
      );

      fieldsArr = Array.prototype.slice.call(fields);
      console.log(fieldsArr);

      fieldsArr.forEach(function(current, index, array) {
        // if (index == 0) {
        //   current.value = "";
        // } else {
        //   current.value = "300";
        // }
        current.value = "";
      });

      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? (type = "inc") : (type = "exp");

      document.querySelector(
        newObjectClass.budgetLable
      ).textContent = formatNumber(obj.budget, type);
      document.querySelector(
        newObjectClass.incomeLable
      ).textContent = formatNumber(obj.totalInc, "inc");
      document.querySelector(
        newObjectClass.expenseLable
      ).textContent = formatNumber(obj.totalExp, "exp");
      if (obj.percentage > 0) {
        document.querySelector(newObjectClass.percentageLable).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(newObjectClass.percentageLable).textContent =
          "---";
      }
    },

    //expose newObjectClass into public
    getnewObjectClass: function() {
      return newObjectClass;
    },

    diaplayItemPercentage: function(percentages) {
      var allItemsPercentages = document.querySelectorAll(
        newObjectClass.itemPercentage
      );

      var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
          callback(list[i], i);
        }
      };

      nodeListForEach(allItemsPercentages, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "---";
        }
      });

      console.log(allItemsPercentages);
    }
  };
})();

//CONTROLLER
var controller = (function(modelParam, viewParam) {
  var setupEventListeners = function() {
    var DOM = viewParam.getnewObjectClass();
    document
      .querySelector(DOM.inputButton)
      .addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener("click", deleteItem);
  };

  var deleteItem = function(event) {
    var itemClickedID, splitID, type, ID;
    itemClickedID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemClickedID) {
      splitID = itemClickedID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);
      console.log(ID);
      //1. delete the item from the data structure
      modelParam.deleteItemFunc(type, ID);
      //2. Delete the item from the UI
      viewParam.deleteItemView(itemClickedID);

      //3. Update and show the new budget
      updateBudget();

      //6. Calculate and update percentages
      updatePercentages();
    }
  };

  var updateBudget = function() {
    //1. Calculate the budget // balance (in Modal)
    modelParam.calculateBudget();

    //2. Return the budget
    var budget = modelParam.getBudget();

    //3. Display the budget on the UI // Upper Balance Display Area
    console.log(budget);
    viewParam.displayBudget(budget);
  };

  var updatePercentages = function() {
    //1.calculate percentage
    modelParam.calculatePercentages();

    //2.show the percentage in in Model
    var percentages = modelParam.getPercentages();

    //3.Update in user interface
    viewParam.diaplayItemPercentage(percentages);
    console.log(percentages);
  };

  var ctrlAddItem = function() {
    var input, newAddedItem;

    //1. Get the field input data
    input = viewParam.getInput(); // View.getUserInputValues()

    if (input.description != "" && !isNaN(input.value) && input.value != 0) {
      //2. Add the item to the budget controller
      newAddedItem = modelParam.userAddedItem(
        input.type,
        input.description,
        input.value
      );

      //3. Add the item to the UI // income/expense Container
      viewParam.addListItem(newAddedItem, input.type);

      //4. Clear the fields
      viewParam.clearFields();

      //5. Calculate the budget
      updateBudget();

      //6. Calculate and update percentages
      updatePercentages();

      console.log("It works.");
    }
  };

  return {
    init: function() {
      console.log("Application has started.");
      setupEventListeners();
      viewParam.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
    }
  };
})(model, view);

controller.init();
