<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="UTF-8">
	<title>SHRIMP</title>
</head>
<body>
    <div>
        <h2>FAQ</h2>
        <?php
			$faq = new WP_Query(array(
                'post_type' => 'faq'
            ));
            while($faq->have_posts()){
                $faq->the_post();?>
                    <div class="serie">
						<div class="serie__info">
							<div class="serie__header"><?php the_title(); ?></div>
							<div class="serie__text"><?php the_content(); ?></div>
						</div>
                    </div>
                <?php }
            wp_reset_postdata();
		?>
	</div>
    <br/>
    <br/>
</body>