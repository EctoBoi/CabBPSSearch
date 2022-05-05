(function() {

    window.onload = function() {
        try {
            inject();
        } catch (error) {}

        let body = document.getElementsByTagName("BODY")[0]

        body.addEventListener('mousemove', function() { inject() })
    }

})();


function inject() {
    if (typeof document.getElementsByClassName("product-article")[0] !== "undefined") {
        //Add search
        if (!document.getElementById('search-button')) {
            let button = document.createElement('button')
            button.id = 'search-button'

            let productName = document.getElementById('productName').innerHTML.replace(/[^a-zA-Z0-9 -]/g, "")
            let bpsURL = 'https://www.basspro.com/shop/en/SearchDisplay?categoryId=&searchTerm=' + productName.replaceAll(' ', '+')

            button.onclick = function openInNewTab() {
                window.open(bpsURL, '_blank').focus();
            }
            button.innerHTML = "Search on basspro.com"

            button.style.marginBottom = '10px'
            button.style.backgroundColor = '#ffcb08'
            button.style.textTransform = 'uppercase'
            button.style.border = '0'
            button.style.padding = "5px 10px"

            document.getElementsByClassName('productDetails-purchase')[0].prepend(button)
        }
    }
}