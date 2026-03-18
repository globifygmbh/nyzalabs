$(document).ready(function () {

    // Contact form AJAX submit
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        var $form = $(this);
        var $btnSubmit = $form.find('button[type="submit"]');

        $btnSubmit.prop('disabled', true).text('Sending...');
        $('#contactSuccess, #contactError').addClass('d-none');

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    $('#contactSuccess').removeClass('d-none');
                    $form[0].reset();
                } else {
                    $('#contactError').removeClass('d-none');
                }
            },
            error: function () {
                $('#contactError').removeClass('d-none');
            },
            complete: function () {
                $btnSubmit.prop('disabled', false).text('Send');
            }
        });
    });

    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 600);

            // Close mobile nav
            var navCollapse = $('#navbarNav');
            if (navCollapse.hasClass('show')) {
                navCollapse.collapse('hide');
            }
        }
    });

    // Navbar background on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar-nyza').css('box-shadow', '0 2px 20px rgba(0,0,0,0.08)');
        } else {
            $('.navbar-nyza').css('box-shadow', 'none');
        }
    });

});
