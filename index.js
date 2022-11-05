
var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let dta;
function getData(){
  var url = 'https://jsonplaceholder.typicode.com/comments/'+Math.floor(Math.random()*150);
  return (fetch(url)
  .then(response => { return response.json()})
  .then(json => {
          dta= json;
        $("#quote-text").animate({opacity:0}, 500, function(){
            $(this).animate({opacity:2},500);
            $("#text").text(dta.body);
          });
        $("#quote-author").animate({opacity:0},500, function(){
          $(this).animate({opacity:2},500);
          $("#author").html(dta.email);
        });
        $("#tweet-quote").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"'+dta.body+'" '+dta.emial));
        }
       )
  );
};

function getQuoted(){
  var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: "#111eff",
      color: '#9b59b6'
    },
    
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
};

async function init(){
  await getData();
  getQuoted();

  $("#new-quote").on('click', getData);
};
init();
