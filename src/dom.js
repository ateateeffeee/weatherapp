const dom = (() => {

    const init = function() {
        //console.log('dom init');
        this.createContentDiv();
        this.createSearchDiv();
    }

    const createContentDiv = function() {
        let content = document.createElement('div');
        content.id = 'content';

        //Append
        document.body.append(content);
        console.log('appended the thing');
    }

    const createSearchDiv = function() {
        let content = document.getElementById('content');

        let div = document.createElement('div');
        div.id = 'searchDiv';

        let userInput = document.createElement('input');
        userInput.id = 'userInput';
        userInput.className = 'searchDivContents';
        userInput.placeholder = 'City name';

        let searchBtn = document.createElement('button');
        searchBtn.id = 'searchBtn';
        searchBtn.className = 'searchDivContents';
        searchBtn.innerHTML = 'Search';

        //Append
        div.append(userInput);
        div.append(searchBtn);

        content.append(div);
    }

    return {
        init,
        createContentDiv,
        createSearchDiv,
    }


})();

module.exports = dom;