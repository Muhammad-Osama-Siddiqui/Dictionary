var word =["apple","banana","mango","peach","watermelon","orange","grapes","water","earth","eye","lip","tongue","moon","fish","shark","dolphin","whale","tree","sun"];

var mean =
 ["سیب","کیلا","آم","آڑو","تربوز","کینو","انگور","پانی","زمین","آنکھ","ہونٹ","زبان","چاند","مچھلی","شارک","ڈولفن","ویل","درخت","سورج"];
 var icon = ["🍎","🍌","🥭","🍑","🍉","🍊","🍇","💧","🌍","👁️","👄","👅","🌙","🐠","🦈","🐬","🐳","🌳","☀️"];
function search() {
 var search = document.getElementById("words").value;
search = search.toLowerCase();
 var showWord = document.getElementById("word");
 var showMean = document.getElementById("means");
 var showIcon = document.getElementById("icon");
 for(var i = 0; i <= word.length; i++){
     if(search === word[i] || search.replace(" ", "") === word[i]){
     showWord.innerHTML = search;
     showMean.innerHTML = mean[i];
     showIcon.innerHTML = icon[i];
 }else if(search === mean[i] || search.replace(" ", "") === mean[i]){
     showWord.innerHTML =  word[i];
     showMean.innerHTML = search;
     showIcon.innerHTML = icon[i];
 }else if(search === icon[i] || search.replace(" ", "") === icon[i]){
     showWord.innerHTML = word[i];
     showMean.innerHTML = mean[i];
     showIcon.innerHTML = search;
 }
 }
}
function add() {
   var w = document.getElementById("addWord").value;
   w = w.toLowerCase();
    w = w.replace(" ", "");
    word.push(w);
    var m = document.getElementById("addMean").value;
    
    m = m.replace(" ", "");
    mean.push(m);
    
var i = document.getElementById("addIcon").value;
   i = i.replace(" ", "");
    icon.push(i);
    
}
