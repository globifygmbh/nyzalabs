<section class="section-spacing faq-section">
    <div class="container">
        <div class="mx-auto" style="max-width: 700px;">
            <h2 class="faq-title">FAQ</h2>
            <hr class="faq-divider">

            <div class="accordion" id="faqAccordion">
                <?php
                $faqs = [
                    ['q' => 'THIS IS AN FAQ QUESTION?', 'a' => 'UNFOLDED ANSWER OF THE QUESTION THAT IS LONG UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER. TEXT IS LONGER UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER.'],
                    ['q' => 'THIS IS AN FAQ QUESTION?', 'a' => 'UNFOLDED ANSWER OF THE QUESTION THAT IS LONG UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER. TEXT IS LONGER UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER.'],
                    ['q' => 'THIS IS AN FAQ QUESTION?', 'a' => 'UNFOLDED ANSWER OF THE QUESTION THAT IS LONG UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER. TEXT IS LONGER UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER.'],
                    ['q' => 'THIS IS AN FAQ QUESTION?', 'a' => 'UNFOLDED ANSWER OF THE QUESTION THAT IS LONG UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER. TEXT IS LONGER UNFOLDED ANSWER OF THE QUESTION THAT IS LONGER.'],
                ];
                foreach ($faqs as $i => $faq):
                ?>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button <?= $i !== 0 ? 'collapsed' : '' ?>" type="button"
                                data-bs-toggle="collapse" data-bs-target="#faq<?= $i ?>">
                            <?= esc($faq['q']) ?>
                        </button>
                    </h2>
                    <div id="faq<?= $i ?>" class="accordion-collapse collapse <?= $i === 0 ? 'show' : '' ?>"
                         data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            <?= esc($faq['a']) ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>
