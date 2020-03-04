// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let Bouton1 = document.getElementById('Bouton1');

let Bouton2 = document.getElementById('Bouton2');

let Bouton3 = document.getElementById('Bouton3');

let Bouton4 = document.getElementById('Bouton4');

let Bouton5 = document.getElementById('Bouton5');


document.getElementById("div3").style.display = 'none';
document.getElementById("div2").style.display = "none";
document.getElementById("div1").style.display ="block";
document.getElementById("div4").style.display = "none";


Bouton1.onclick = function(element) {
    
    document.getElementById("div3").style.display = 'none';
document.getElementById("div2").style.display = "block";
document.getElementById("div1").style.display ="none";
document.getElementById("div4").style.display = "none";
  
  /*document.getElementById("demo").innerHTML = "This is why is is hateful";
  document.getElementById("changeColor").style.display="none";
  document.getElementById("Bouton2").style.display="block";
  
    /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
  };
  
  
  Bouton2.onclick = function(element) {
   
  document.getElementById("div3").style.display = "none";
document.getElementById("div2").style.display ="block";
document.getElementById("div1").style.display = "none";
document.getElementById("div4").style.display = "none";
  /*document.getElementById("demo").innerHTML = "Will you report?";
  
  document.getElementById("Bouton2").style.display="none";
  document.getElementById("Bouton3").style.display="block";
  document.getElementById("Bouton4").style.display="block";
  
    /* chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    }); */
  };

  Bouton3.onclick = function(element) {
   
document.getElementById('div3').style.display = 'block';
document.getElementById('div2').style.display = 'none';
document.getElementById('div1').style.display ='none';
document.getElementById('div4').style.display = 'none';
 };
   Bouton4.onclick = function(element) {
   document.getElementById('div3').style.display = 'none';
document.getElementById('div2').style.display = 'none';
document.getElementById('div1').style.display ='none';
document.getElementById('div4').style.display = 'block';
 };