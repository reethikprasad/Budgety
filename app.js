var budgetController = (function(){

//some codes

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

    var DOM =UICtrl.getDOMstrings();
    var ctrlAddItem = function() {
        // 1. Get the input data
        var input=UICtrl.getInput();
        console.log(input);
        //add item to budget controller

        //3 Add item to UI

        //4 Calculate the Budget

        //5 display the budget on the UI
        //console.log('it worked')
    };
    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){
        //console.log(event);
        if(event.keyCode===13 || event.which===13){
           // console.log('enter key was pressed');
           ctrlAddItem();
        }
    });
})(budgetController,UIcontroller);