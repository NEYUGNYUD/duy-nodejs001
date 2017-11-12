var spt ='[{"type": "visit", "url": "https://kipalog.com/users/sign_in"}, {"type":"input", "selector":"#password", "value":"123456789"},{"type": "input", "selector":"#email", "value":"duypeo96@gmail.com"}, {"type": "submit", "selector": "#signin", "action": "click"}]';

var encodeScript = encodeURIComponent(spt);
console.log(encodeScript);

//encodeScripts
%5B%7B"type"%3A%20"visit"%2C%20"url"%3A%20"https%3A%2F%2Fkipalog.com%2Fusers%2Fsign_in"%7D%2C%20%7B"type"%3A"input"%2C%20"selector"%3A"%23password"%2C%20"value"%3A"123456789"%7D%2C%7B"type"%3A%20"input"%2C%20"selector"%3A"%23email"%2C%20"value"%3A"duypeo96%40gmail.com"%7D%2C%20%7B"type"%3A%20"submit"%2C%20"selector"%3A%20"%23signin"%2C%20"action"%3A%20"click"%7D%5D