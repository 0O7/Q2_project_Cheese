$( document ).ready(() => {
console.log($('.footerClass').text());

function pageLoad() {

};

function getNews() {

    $.ajax({
      url: 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=14a1bd095a374037825240a99606a730',
      type: 'GET',
      dataType: "json",
      success:(result) => {
      let heading5 = $('.footerClass');
      heading5.text(result.articles[0].title);


        console.log(result.source);
        console.log(result.sortBy);
        console.log(result.articles[0].title);
      }
    })
  }

// Logging in alert
  // $('#login').click(()=>{
  //   alert("User logged in")
  // })

$('#logout').click(()=>{
  alert("User logged out")
  $.ajax({
    url: '/login',
    type: 'delete',
    success(result){
      console.log("Ajax results passed to routes");
    }
  })
})
// getNews();

});
