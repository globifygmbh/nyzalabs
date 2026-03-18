<section id="references" class="py-5">
    <div class="container">
        <div class="row align-items-end mb-5">
            <div class="col-md-8">
                <h2 class="section-heading display-6">
                    Take a look at<br>our References
                </h2>
                <p class="text-muted mt-3" style="max-width: 500px; font-size: 0.9rem;">
                    We offer high-quality design &amp; development. Web products to advertising,
                    social media and custom branding – tailored to bring your vision to life.
                </p>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
                <a href="#contact" class="btn-purple">MORE REFERENCES</a>
            </div>
        </div>

        <div class="row g-4">
            <?php
            $references = [
                ['title' => 'Red Bull', 'subtitle' => 'RedBull verleiht Flüüügel', 'image' => 'redbull-card.png'],
                ['title' => 'Gassner Motorsport', 'subtitle' => 'Rally & Motorsport Content', 'image' => 'gassner-motorsport.png'],
                ['title' => 'Ottakringer', 'subtitle' => 'Social Media Campaign', 'image' => 'ottakringer.png'],
            ];
            foreach ($references as $ref):
            ?>
            <div class="col-md-4">
                <div class="ref-card">
                    <img src="<?= base_url('uploads/' . $ref['image']) ?>" alt="<?= $ref['title'] ?>">
                    <div class="ref-overlay"></div>
                    <div class="ref-info">
                        <h3><?= $ref['title'] ?></h3>
                        <p><?= $ref['subtitle'] ?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
