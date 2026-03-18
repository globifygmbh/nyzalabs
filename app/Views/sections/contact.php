<section id="contact" class="section-spacing">
    <div class="container">
        <div class="row align-items-center">
            <!-- Left -->
            <div class="col-md-5 mb-4 mb-md-0">
                <img src="<?= base_url('uploads/paper-plane.png') ?>" alt="Message" class="contact-plane">
                <h2 class="section-title">
                    SHOOT US<br><span class="text-purple">AN MESSAGE</span>
                </h2>
                <p class="section-desc">
                    GET IN TOUCH WITH US BY SENDING US A MESSAGE.
                </p>
            </div>

            <!-- Right - Form -->
            <div class="col-md-7">
                <form id="contactForm" action="<?= base_url('contact/submit') ?>" method="POST">
                    <div class="row g-3">
                        <div class="col-6">
                            <input type="text" name="name" class="form-control contact-input" placeholder="NAME" required>
                        </div>
                        <div class="col-6">
                            <input type="text" name="surname" class="form-control contact-input" placeholder="SURNAME" required>
                        </div>
                        <div class="col-6">
                            <input type="email" name="email" class="form-control contact-input" placeholder="E-MAIL" required>
                        </div>
                        <div class="col-6">
                            <input type="tel" name="number" class="form-control contact-input" placeholder="NUMBER">
                        </div>
                        <div class="col-6">
                            <input type="text" name="company" class="form-control contact-input" placeholder="COMPANY">
                        </div>
                        <div class="col-6">
                            <input type="text" name="budget" class="form-control contact-input" placeholder="BUDGET">
                        </div>
                        <div class="col-12">
                            <textarea name="message" class="form-control contact-input" rows="4" placeholder="TEXT HERE" required></textarea>
                        </div>
                        <div class="col-12 text-end">
                            <button type="submit" class="btn-purple">SEND</button>
                        </div>
                    </div>
                </form>
                <div id="contactSuccess" class="alert alert-success mt-3 d-none">Nachricht erfolgreich gesendet!</div>
                <div id="contactError" class="alert alert-danger mt-3 d-none">Fehler beim Senden.</div>
            </div>
        </div>
    </div>
</section>
