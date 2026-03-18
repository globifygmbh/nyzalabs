<section class="py-5 faq-section">
    <div class="container">
        <div class="mx-auto" style="max-width: 700px;">
            <h2 class="section-heading display-4 text-center mb-3">FAQ</h2>
            <hr class="border-dark mb-4">

            <div class="accordion" id="faqAccordion">
                <?php
                $faqs = [
                    ['q' => 'This is an FAQ question?', 'a' => 'Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.'],
                    ['q' => 'This is an FAQ question?', 'a' => 'Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.'],
                    ['q' => 'This is an FAQ question?', 'a' => 'Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.'],
                    ['q' => 'This is an FAQ question?', 'a' => 'Unfolded answer of the question that is long unfolded answer of the question that is longer. Text is longer unfolded answer of the question that is longer.'],
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
