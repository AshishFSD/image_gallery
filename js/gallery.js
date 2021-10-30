

function addImageElement(imageUrl, imageDes){


    let element = document.createElement("div");
    element.className = "img_container_block";

    let wrapper = document.createElement("div");
    wrapper.className = "img_wrapper";

    // create img element
    let img = document.createElement("img");
    img.src = imageUrl;

    // create img desc box
    let descBox = document.createElement("div");
    descBox.className = "img_desc_box";
    
    
    // create enlarge btn
    let btnEnlarge = document.createElement("div");
    btnEnlarge.className = "btn_enlarge";

    let iconEnlarge = document.createElement("i");
    iconEnlarge.className = "fas fa-search-plus";

    btnEnlarge.appendChild(iconEnlarge);//div_btn_enlarge--> icon enlarge

    // create download btn

    let btnDownload = document.createElement("div");
    btnDownload.className = "btn_download";

    let iconDownload = document.createElement("i");
    iconDownload.className = "fas fa-download";
    
    btnDownload.appendChild(iconDownload);//div_btn_download--> icon download

    // create description text div

    let descTextDiv = document.createElement("div");
    descTextDiv.className = "img_desc_text";

    let description = imageDes;
    let descText = document.createTextNode(description);
    descText.className = "img_desc_text";

    descTextDiv.appendChild(descText);

    wrapper.appendChild(img);//wrapper-->img
    wrapper.appendChild(descBox);//wrapper-->img + desc_box
   
    descBox.appendChild(btnEnlarge);
    descBox.appendChild(btnDownload);
    descBox.appendChild(descTextDiv);
    
    element.appendChild(wrapper);//img_block>img_wrapper

    let fixer = document.getElementById("galleryFixer");
    fixer.appendChild(element);


}

// const cool = setTimeout(()=>{
//             for(let i = 0 ; i<200; i++){
//             addImageElement();
//         }
// },1000);


fetch("json/data.json")
  .then(response => response.json())
  .then(jsonData => {



    //  console.log( jsonData.imageData[2].image_id );//access json elements


    for(const key in jsonData){
        console.log(`${key} : ${jsonData[key]}`);//gives imageData object arrays
        for(const key2 in jsonData[key] ){
            // console.log(jsonData[key][key2]["image_description"])

            addImageElement(jsonData[key][key2]["image_url"],jsonData[key][key2]["image_description"]);
            // console.log(jsonData[key][key2]["image_url"]);
            
        }
    }
    
      
    // for(const key in jsonData){
    //     if(jsonData.hasOwnProperty(key)){
    //         console.log(`${key} : ${jsonData[key]}`)
    //       }
    // }

});
