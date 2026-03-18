<section id="contact" class="py-5 contact-section">
    <div class="container">
        <div class="row align-items-center">
            <!-- Left side -->
            <div class="col-md-5 text-center text-md-start mb-5 mb-md-0">
                <img src="<?= base_url('uploads/paper-plane.png') ?>" alt="Send us a message" class="contact-illustration">
                <h2 class="section-heading">
                    SHOOT US<br><span class="text-purple">AN MESSAGE</span>
                </h2>
                <p class="text-muted mt-2" style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.03em;">
                    Get in touch with us by sending us a message.
                </p>
            </div>

            <!-- Right side - Form -->
            <div class="col-md-7">
                <form id="contactForm" action="<?= base_url('contact/submit') ?>" method="POST">
                    <div class="row g-3">
                        <div class="col-6">
                            <input type="text" name="name" class="form-control" placeholder="NAME" required>
                        </div>
                        <div class="col-6">
                            <input type="text" name="surname" class="form-control" placeholder="SURNAME" required>
                        </div>
                        <div class="col-6">
                            <input type="email" name="email" class="form-control" placeholder="E-MAIL" required>
                        </div>
                        <div class="col-6">
                            <input type="tel" name="number" class="form-control" placeholder="NUMBER">
                        </div>
                        <div class="col-6">
                            <input type="text" name="company" class="form-control" placeholder="COMPANY">
                        </div>
                        <div class="col-6">
                            <input type="text" name="budget" class="form-control" placeholder="BUDGET">
                        </div>
                        <div class="col-12">
                            <textarea name="message" class="form-control" rows="4" placeholder="TEXT HERE" required></textarea>
                        </div>
                        <div class="col-12 text-end">
                            <button type="submit" class="btn-purple btn-send">SEND</button>
                        </div>
                    </div>
                </form>
                <div id="contactSuccess" class="alert alert-success mt-3 d-none">
                    Nachricht erfolgreich gesendet!
                </div>
                <div id="contactError" class="alert alert-danger mt-3 d-none">
                    Fehler beim Senden. Bitte versuche es erneut.
                </div>
            </div>
        </div>
    </div>
</section>
