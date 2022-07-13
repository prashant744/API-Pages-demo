var nasaImages = $("#nasa-images");
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

$("form button").click(function (e) {
    e.preventDefault();
    
    var date = input.val();
    
    if( date === "") {
        alert("Please fill the field");
        return;
    }

    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&api_key=NBlCLhD21Eud5RxMy1TjZoeJedDa1c1qbsnLMIG2";
    
    $.get(url, function (data) {
        let photos = data.photos;
        
        if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }
        
        $("#nasa-images img").remove();

        for (let photo of photos) {
            nasaImages.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });

});
