fetch('../businesses.json')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Error in response staus: ' + response.status);
        return;
      }

            response.json().then(function(data) {
            var jsonArray = data.businesses

            for(index in jsonArray){
               
                $(storeList).append(

                    `
                    <div class="store">
                        <img class="storeImage" src="./img/bar.jpeg" alt="bar" />
                        <div class="storeInfo">
                            <a href="#" class="storeName">${jsonArray[index].name}</a>
                            <div class="storeLocation">
                                <div class="storeAddress">${jsonArray[index].address}</div>
                                <div class="storeCity">${jsonArray[index].zip} ${jsonArray[index].city}</div>
                            </div>
                        </div>
                    </div>

                    `
                )                
            }
        });
    }
  )

  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });