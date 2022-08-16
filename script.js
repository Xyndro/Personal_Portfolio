// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

function generateQuote() {
    const quotes =
        ['"Life is not an adventure if it is too easy." - Sonic The Hedgehog', 
         '"What is bravery without a dash of recklessness?" - Dark Souls Video Game', 
         '"I do not need a weapon. My friends are my power!" - Kingdom Hearts', 
         '"Creativity is the imagination having fun." - Albert Einstein',
         '"Everything that you can imagine is real." - Pablo Picasso',
         '"The hardest battles are fought in the mind, not the sword" - Dillion, Hellblade',
         '"Even the good leaders make poor decisions. The best leaders take responsibility for them." - Kratos, God of War'];
  
    // Pick a random quote from quote list
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    // Add quote to the page.
    const quoteContainer = document.getElementById('quoteContainer');
    quoteContainer.innerText = randomQuote;
}

async function showMessage() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();
  
    const messageContainer = document.getElementById('message-container');
    messageContainer.innerText = textFromResponse[Math.floor(Math.random() * textFromResponse.length)];
  }

async function showAllMessages() {
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();

    const secondMessageContainer = document.getElementById('second-message-container');
    secondMessageContainer.innerText = textFromResponse;
  }

function requestTranslation() {
    const text = document.getElementById('text').value;
    const languageCode = document.getElementById('language').value;

    const resultContainer = document.getElementById('result');
    resultContainer.innerText = 'Loading...';

    const params = new URLSearchParams();
    params.append('text', text);
    params.append('languageCode', languageCode);

    fetch('/translate', {
      method: 'POST',
      body: params
    }).then(response => response.text())
    .then((translatedMessage) => {
      resultContainer.innerText = translatedMessage;
    });
  }
