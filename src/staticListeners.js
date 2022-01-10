//Load dom and logic modules
const dom = require('./dom.js');
const logic = require('./logic.js');

const staticListeners = (() => {

    const init = function() {
        //console.log('static listeners init');
        this.searchBtnListener();
        //Put initial load up here to feed logic data to dom. maybe

    }

    const searchBtnListener = function() {
        document.getElementById('searchBtn').addEventListener('click',function(){
            //trigger logic function that searches city
           let userInput = document.getElementById('userInput').value;

           if (!userInput) {
               console.log('blank');
           } else {
               logic.getData(userInput);
           }
        })
    }

    return {
        init,
        searchBtnListener,
    }


})();

module.exports = staticListeners;