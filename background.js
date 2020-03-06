var config = {
  apiKey: "AIzaSyC5OFdK7eXcl4YzCcx0qWXRohA-Dd-kug4",
    authDomain: "test1-qmlbck.firebaseapp.com",
    databaseURL: "https://test1-qmlbck.firebaseio.com",
    projectId: "test1-qmlbck",
    storageBucket: "test1-qmlbck.appspot.com",
    messagingSenderId: "6405314902",
    appId: "1:6405314902:web:bd66b1a8d3eecf5c8edef7"
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
  
   chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   console.log("Step4");

    var url1 = tab.url;
     var URL2 = childData.url;
console.log(URL2);
console.log(url1);

const icons = {
  enabled: {
    '48': 'rouge48.png',
    '16': 'rouge16.png'
  },
  disabled: {
    '48': 'n48.png',
    '16': 'n16.png'
  }
};

if ( URL2 == url1){
console.log(URL2);
console.log(url1);
  console.log("match url");
  
  chrome.browserAction.setIcon({ tabId, path: 'rouge16.png' });
  console.log("test update icon");
  chrome.browserAction.setPopup({ tabId , popup: 'popup.html' });
}
else {

  console.log("not match url");
}
 });
 });



  });
/*const icons = {
  enabled: {
    '48': 'icons/rouge48.png',
    '16': 'icons/rouge16.png'
  },
  disabled: {
    '48': 'icons/n48.png',
    '16': 'icons/n16.png'
  }
};

chrome.runtime.onInstalled.addListener(function() {
  
  console.log("testbackground");
  
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: 'developer.chrome.com'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: 'time.com'},
        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {urlMatches: 'google.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  
  
});

const isDisabled = () => JSON.parse(localStorage.getItem('disabled') || false);

const toggle = tab => {
  localStorage.setItem('disabled', JSON.stringify(!isDisabled()));
  chrome.tabs.reload(tab.id);
  console.log("test toggle");
};
chrome.pageAction.onClicked.addListener(toggle);

const updateIcon = tabId => {
  const icon = isDisabled() ? icons.disabled : icons.enabled;
  chrome.pageAction.setIcon({ tabId, path: icon });
  console.log("test update icon");
};
chrome.tabs.onUpdated.addListener(updateIcon);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'IS_DISABLED') {
    sendResponse(isDisabled());
    console.log("test is disabled");
  }
});
*/
