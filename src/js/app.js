for(let i = 0 ; i < 5; i++){
  const curr = document.createElement("article");
  curr.setAttribute("class",  "message");
  curr.innerHTML = "some content"
  document.getElementsByTagName("body")[0].appendChild(curr);
}