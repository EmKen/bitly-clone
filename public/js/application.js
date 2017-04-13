$(document).ready(function(){
	$("form").submit(function(event) {
		event.preventDefault();
		$.ajax({
			url: "/generate_url",
			method: "post",
			data: $(this).serialize(),
			dataType: "json",
			// callbacks
			success: function(data) {
				$("tr:first-child").after("<tr> <td>" + data.long_url + "</td> <td>" + data.short_url + "</td> <td>" + data.click_count + "</td> </tr>")

			},
			error: function(data) {
				alert("Problem")

			}

		})
	})
});