//import React, { useState, useEffect } from 'react';

const GetGameLevel = (setLevel) => {
  // EHR CREDENTIALS TAKEN OUT FOR THE PUBLIC GITHUB REPOSITORY
  var user = 'INSERT USER ACCOUNT WITH GET PERMISSIONS';
  var pw = 'INSERT USER ACCOUNT WITH GET PERMISSIONS';
    var url = 'https://rest.ehrscape.com/rest/v1/view/PUM_COMP4_GameLevel';
    var headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(user + ":" + pw));

    fetch(url, {
      method: 'GET',
      headers: headers,
    }).then(res => res.json()).then(res => parseInt(res[0]["#1"]["value"])).then(res => setLevel(res));

} 

export default GetGameLevel;