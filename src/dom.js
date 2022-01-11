const dom = (() => {

    const init = function() {
        //console.log('dom init');
        this.createContentDiv();
        this.createSearchDiv();
        //this.createCards();
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

    const createCards = function(temp, high, low, feelsLike) {
        console.log('Make the cards');
        let content = document.getElementById('content');
        //Cards container
        let container = document.createElement('div');
        container.id = 'cardsContainer';
        
        content.append(container);

        //temp card
        createTempCard(temp, high, low, feelsLike);

        //precip card

        //desc card
    }

    const createTempCard = function(temp, high, low, feelsLike) {
        let container = document.getElementById('cardsContainer');


        console.log('temp card');
        
        let card0 = document.createElement('div');
        card0.id = 'card0';
        card0.className = 'cards';

        let card0Title = document.createElement('div');
        card0.className = 'cardTitles';
        card0.innerHTML = 'Temperature';

        let tempText = document.createElement('div');
        tempText.className = 'cardData';
        tempText.innerHTML = temp;

        let highText = document.createElement('div');
        highText.className = 'cardData';
        highText.id = 'highTemp';
        highText.innerHTML = high;

        let lowText = document.createElement('div');
        lowText.className = 'cardData';
        lowText.id = 'lowTemp';
        lowText.innerHTML = low;

        let feelsLikeText = document.createElement('div');
        feelsLikeText.className = 'cardData';
        feelsLikeText.innerHTML = "Feels like: " + feelsLike;
        



        //Append
        container.append(card0);

        card0.append(card0Title);
        card0.append(tempText);
        card0.append(highText);
        card0.append(lowText);
        card0.append(feelsLikeText);


    }

    return {
        init,
        createContentDiv,
        createSearchDiv,
        createCards,
    }


})();

module.exports = dom;