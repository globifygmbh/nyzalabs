<section class="marquee-section">
    <div class="marquee-track">
        <?php
        $items = ["AGENCYOS", "CARDEALEROS", "SOCIALBOOST", "NYZA LABS", "WEBDESIGN", "MARKETING"];
        // Repeat 4x for seamless loop
        for ($r = 0; $r < 4; $r++):
            foreach ($items as $item):
        ?>
            <span><?= $item ?><span class="marquee-dot">·</span></span>
        <?php
            endforeach;
        endfor;
        ?>
    </div>
</section>
