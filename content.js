$(document).ready(function() {   // Load the function after DOM ready.


 var config = {
  apiKey: "AIzaSyBz01LRGY-LEqmkp_gqyAy8I1jAbGqt23Y",
    authDomain: "test1909-5eca8.firebaseapp.com",
    databaseURL: "https://test1909-5eca8.firebaseio.com",
    projectId: "test1909-5eca8",
    storageBucket: "test1909-5eca8.appspot.com",
    messagingSenderId: "902654891927",
};



console.log("Step1");
firebase.initializeApp(config);
console.log("Step2");
const database = firebase.database();
console.log("const database = firebase.database();");
   var databaseRef = firebase.database().ref('users/');
   
    databaseRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();
  
   
   console.log("Step4");

    var url1 = window.location.toString();
     var URL= childData.url;
    if( URL == url1){
 var elements = document.getElementsByTagName('SPAN');

  console.log("test1");


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/[ elements]/gi, 'blablabla');
console.log("test2");

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}







    }
console.log(URL);
  // rowIndex = rowIndex + 1;
    });



  });
  




/*****************************************************/









});




/*const styles = [
  {
    id: 'selectize-css',
    url:
      'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/css/selectize.bootstrap3.min.css'
  },
  { id: 'opteamissed-css', url: chrome.extension.getURL('opteamissed.css') }
];

const scripts = [
  {
    id: 'selectize-js',
    url:
      'https://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.12.4/js/standalone/selectize.min.js'
  },
  { id: 'opteamissed-js', url: chrome.extension.getURL('opteamissed.js') }
];

function injectScript(metaScript) {
  const script = document.createElement('script');
  script.id = metaScript.id;
  script.src = metaScript.url;
  document.body.appendChild(script);
}

function injectCss(metaLink) {
  const link = document.createElement('link');
  link.id = metaLink.id;
  link.rel = 'stylesheet';
  link.href = metaLink.url;
  document.body.appendChild(link);
}

function inject() {
  chrome.runtime.sendMessage({ action: 'IS_DISABLED' }, function(disabled) {
    console.log(`opteamissed (${disabled ? 'disabled' : 'enabled'})`);
    if (!disabled) {
      styles.forEach(injectCss);
      scripts.forEach(injectScript);
    }
  });
}

inject();
*/