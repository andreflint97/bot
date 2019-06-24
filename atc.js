var url = window.location.href;
var i;

var category = "accessories"
var item_name= "snakeskin"



function pickCategory() {
    chrome.storage.sync.get("category",function(data){
        var redirect = "https://www.supremenewyork.com/shop/all/jackets"
        var replace = redirect.replace("jackets", category);
        chrome.runtime.sendMessage({redirect:replace}) ;
    })
}

function pickItem(){
    chrome.storage.sync.get("item_name", function(data){
        var items = document.getElementsByClassName("name-link");

        for (i = 0; i < items.length; i++) {
            if((items[i].innerHTML).includes(item_name)){
                chrome.runtime.sendMessage({redirect: items[i].href});
                break;
            }
        }
    });
}

if(url ==  "https://www.supremenewyork.com/shop/all") {
    pickCategory();
}
else if(url !=  "https://www.supremenewyork.com/shop/all") {
    pickItem();
}
document.getElementsByClassName("button checkout")[0].click()



