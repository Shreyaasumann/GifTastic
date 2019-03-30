//Initial brand array

var brandsArray = ["Chanel", "Louis Vuitton", "Christian Dior SE", "Saint Laurent", "Balenciaga", "Balmain", "Gucci", "Givenchy"];

function makeButtons (){

  $('#buttonsView').empty();

  for (var i = 0; i < brandsArray.length; i++) {
  
    var a=$('<button>')
    a.addClass('brand');
    a.attr('data-name', brand[i]);
    a.text(brand[i]);

    $('#buttonsView').append(a)
    
  }

}

var currimage = 0;
window.onload = () => {
    const factsArr = [
    {
    image: 
    'https://media.giphy.com/media/FtOtVWA4Ozo8E/giphy.gif',
    }
  ];document.getElementById('generate-btn').addEventListener('click', () => {
      
    document.getElementById('image').setAttribute('src', factsArr[currImage].image);
     currImage++;
     if (currImage == factsArr.length)
        currImage  = 0;
   })
  }

  <button id="generate-btn">Balenciaga</button>
  <img id="image"></img>


      
$("#addbrand").on("click"),function() {

  var brand = $("#brand-input").val().trim();
  brandsArray.push(brand);
  $("#got-input").val("");

  makeButtons();

  console.log(brands);

  return false;

}

makeButtons();

function displayGifs(){
       var brand = $(this).attr("data-name");
       var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + fashionbrands + "&api_key=dc6zaTOxFJmzC";

       $.ajax({url: queryURL, method: "GET"}).done(function (response) {
        console.log(response.data);
        var results = response.data;
    
        for (var i = 0; i < results.length; i++) {
          
          var gifDiv = $('<div class=gifs>');
          var brandGif = $('<img>');
            brandGif.attr('src', results[i].images.fixed_height_still.url);
            brandGif.attr('title', "Rating: " + results[i].rating);
            brandGif.attr('data-still', results[i].images.fixed_height_still.url);
            brandGif.attr('data-state', 'still');
            brandGif.addClass('gif');
            brandGif.attr('data-animate', results[i].images.fixed_height.url);
          
          brandDiv.append(brandGif)
        
  
          $("#gifsView").prepend(gifDiv);
        }
        
      });
  }

  $(document).on('click', '.gif', function(){
    var state = $(this).attr('data-state');
      if ( state == 'still'){
                  $(this).attr('src', $(this).data('animate'));
                  $(this).attr('data-state', 'animate');
              }else{
                  $(this).attr('src', $(this).data('still'));
                  $(this).attr('data-state', 'still');
              };
  });
  
  
  

  $(document).on("click", ".brand", displayGifs);
  
  


 






