(function() {

  window.onload = function() {
    try {
      inject();
    } catch (error) {}

    let body = document.getElementsByTagName("BODY")[0]

    body.addEventListener('mousemove', function() {
      inject()
    })
  }
})();


function inject() {
  //Search from results 
  if (!document.getElementById('search-button')) {
    if (document.getElementsByClassName('heading heading-largest has-subHeading')[0]) {
      if (document.getElementsByClassName('text-red')[0]) {
        let productName = document.getElementsByClassName('text-red')[0].innerHTML.replace(/[^a-zA-Z0-9 -]/g, "")
        document.getElementsByClassName('results')[0].append(createSearchButton(createBPSURL(productName)))
      } else {
        let productName = document.getElementsByClassName('text-blue')[0].innerHTML.replace(/[^a-zA-Z0-9 -]/g, "")
        document.getElementsByClassName('results')[0].append(createSearchButton(createBPSURL(productName)))
      }

    }
  }

  if (typeof document.getElementsByClassName("product-article")[0] !== "undefined")
    if (!document.getElementById('search-button')) {
      //Font
      let article = document.getElementsByClassName('product-article')[0]
      article.style.display = 'inline-flex'

      let bpssku = article.innerHTML.split('B: ')[1]
      if (bpssku === undefined) {
        article.innerHTML = article.innerHTML.split('B:')[0] + ' B: N/A'
      } else {
        bpssku = bpssku.replace(/\D/g, "")
        article.innerHTML = article.innerHTML.split('B:')[0] + '<span style="font-size: 20px;font-weight: bold;margin-left: 4px;">B: ' + bpssku + '</span>'
        //Copy Button
        let copyDiv = document.createElement('div');
        copyDiv.id = "copyButtonDiv"
        copyDiv.style.marginLeft = "10px"

        document.getElementsByClassName('product-article')[0].appendChild(copyDiv);
        copyButtonDiv.innerHTML = `<button id="copySKUButton" value="${bpssku}" onclick="navigator.clipboard.writeText(this.value)">Copy SKU</button>`
      }
      article.getElementsByTagName("b")[0].innerHTML = article.getElementsByTagName("b")[0].innerHTML + "&nbsp;"

      //Search from product
      let productName = document.getElementById('productName').innerHTML.replace(/[^a-zA-Z0-9 -]/g, "")
      document.getElementsByClassName('productDetails-purchase')[0].prepend(createSearchButton(createBPSURL(productName)))
    }
}

function createBPSURL(productName) {
  return 'https://www.basspro.com/shop/en/SearchDisplay?categoryId=&searchTerm=' + productName.replaceAll(' ', '+')
}

function createSearchButton(BPSURL) {
  let button = document.createElement('button')
  button.id = 'search-button'
  button.onclick = function openInNewTab() {
    window.open(BPSURL, '_blank').focus();
  }
  button.innerHTML = "Search on basspro.com"

  button.style.marginBottom = '10px'
  button.style.backgroundColor = '#ffcb08'
  button.style.textTransform = 'uppercase'
  button.style.border = '0'
  button.style.padding = "5px 10px"

  return button
}
