$(function(){

    $("#addBtn").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burgerTxt").val(),
            devoured: 0
        }

        console.log(newBurger);
          $.ajax({
            method: "POST",
            url: "/api/burgers", 
            data: newBurger
          }).then(function(data) {
            // reload page to display devoured burger in proper column
            location.reload()
          });
      });
    
    $(".btn").on("click", function(event) {
      event.preventDefault();
      let id = this.parentNode[0].value;
      
      $.ajax({
        method: "PUT",
        url: "/burgers/" + id
      }).then(function(data){
        location.reload();
      })  
    
    })
    
    })
    