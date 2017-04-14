$(document).ready(function(){
	$("form").submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: "/generate_url",
			method: "post",
			data: $(this).serialize(),
			dataType: "html",
			// callbacks
			success: function(data) {
				//$("tr:first-child").after("<tr> <td>" + data.long_url + "</td> <td>"
				//+ data.short_url + "</td> <td>" + data.click_count + "</td> </tr>")
				// ^^ to add row to table
				$("#table-content").html(data); //To regenerate whole table
			},
			error: function(data) {
				alert("Problem")
			},

			beforeSend: function() {
        $('form input[type=submit]').val('Loading...');
      },

      complete: function() {
        $('form input[type=submit]').val('Shorten');
      }


		})
	})
});