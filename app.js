var budgetController = (function(){

//some codes
var Expense = function(id,description,value){
    this.id=id,
    this.description=description,
    this.value=value
};

var Income = function(id,description,value){
    this.id=id,
    this.description=description,
    this.value=value
};

var data ={
    allItems:{
        exp:[],
        inc:[]
    },
    totals:{
        exp:0,
        inc:0
    }
};
return {
    addItem: function(type, des, val) {
        var newItem, ID;
        
        //[1 2 3 4 5], next ID = 6
        //[1 2 4 6 8], next ID = 9
        // ID = last ID + 1
        
        // Create new ID
        if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
            ID = 0;
        }
        
        // Create new item based on 'inc' or 'exp' type
        if (type === 'exp') {
            newItem = new Expense(ID, des, val);
        } else if (type === 'inc') {
            newItem = new Income(ID, des, val);
        }
        
        // Push it into our data structure
        data.allItems[type].push(newItem);
        
        // Return the new element
        return newItem;
    },
    testing: function(){
        console.log(data);
    }
};
    

})();


//UI Controller
var UIcontroller = (function(){

    var DOMstrings={
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return{
        getInput: function(){
            return {
             type: document.querySelector(DOMstrings.inputType).value,
             description: document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value
            };
            

        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){

    var setupEventListners=function(){
        var DOM =UICtrl.getDOMstrings();


        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
        //console.log(event);
        if(event.keyCode===13 || event.which===13){
           // console.log('enter key was pressed');
           ctrlAddItem();
        }
    });
    };

    var ctrlAddItem = function() {
        var input, newItem;
        // 1. Get the input data
        input=UICtrl.getInput();
        //add item to budget controller
        newItem=budgetCtrl.addItem(input.type,input.description,input.value);
        //3 Add item to UI

        //4 Calculate the Budget

        //5 display the budget on the UI
        //console.log('it worked')
    };
    
    return {
        init: function(){
            console.log('app has started');
            setupEventListners();
        }
    };
})(budgetController,UIcontroller);

controller.init();