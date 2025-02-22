function makeLinks(element){
    let ctkl = "https://www.citilink.ru/search/?text=" + element;
    let dnsl = "https://www.dns-shop.ru/search/?q=" + element;
    let mvdl = "https://www.mvideo.ru/product-list-page?q=" + element;
    let eldl = "https://www.eldorado.ru/search/catalog.php?q=" + element;
    document.getElementById("citicost").href = ctkl;
    document.getElementById("dnscost").href = dnsl;
    document.getElementById("mvdcost").href = mvdl;
    document.getElementById("eldcost").href = eldl;
    return 1;
}
function getPCElement(){
    let element = document.getElementById("element").value;
    if (element != ""){
        document.getElementById("resulttext").innerHTML = `Результаты по запросу "${element}":`;
        makeLinks(element);
    }
    else {
        
        document.getElementById("cost").innerHTML = "NA";
        document.getElementById("resulttext").innerHTML = "Сделайте запрос";
    }
} 
setInterval(getPCElement, 1500);
// https://www.citilink.ru/search/?text=
// https://www.dns-shop.ru/search/?q=
// https://www.mvideo.ru/product-list-page?q=
// https://www.eldorado.ru/search/catalog.php?q=