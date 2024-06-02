$(document).ready(function() {
    $('#openContactForm').on('click', function() {
        $('#contactModal').modal('show');
    });

    $('#modalForm').on('submit', function(e) {
        e.preventDefault();
        var formData = {
            email: $('#modalEmail').val(),
            name: $('#modalName').val(),
            message: $('#modalMessage').val()
        };
        // Replace 'your-endpoint-url' with your actual endpoint URL
        $.ajax({
            url: 'https://getform.io/f/paoxjgkb',
            method: 'POST',
            data: formData,
            success: function(response) {
                alert('Form submission successful!');
                $('#contactModal').modal('hide');
                $('#modalForm')[0].reset();
            },
            error: function(error) {
                alert('Error submitting form. Please try again.');
            }
        });
    });
});
