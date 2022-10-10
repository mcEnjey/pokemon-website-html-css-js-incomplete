const $=function(selector){
   return document.querySelector(selector)
}

const createElement=function(tagName,className,content){
      const newElement=document.createElement(tagName);
            newElement.setAttribute('class',className);
            newElement.innerHTML=content;

      return newElement
}



