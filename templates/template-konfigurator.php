<?php
/*
 Template Name: Konfigurator
 */


get_header();
?>

<main id="site-content">
	<div class="container section-inner">

	<h2><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title() ?></a></h2>

<!-- <?php the_content() ?> -->


	<section class="configurator">
			
		<div class="configurator__element">
				<h2><?php echo CFS()->get('configuratorModelTitle'); ?></h2>
		</div>
			
		<div class="configurator__element">
			<!-- <h2><?php echo CFS()->get('configuratorAdditionalTitle'); ?></h2>
			 -->
			<?php while (have_posts()) : the_post(); ?>

				<section class="configurator__pictures">
					<figure class="configurator__figure">
						<img src="<?php echo CFS()->get('configuratorAdditionalPatternImage'); ?>" class="configurator__picture" />
					</figure>
					<div class="configurator__pictures__layers">
						<!-- <img src="" class="configurator__picture__extension"/> -->
					</div>
				</section>

				<aside class="configurator__switches">
					<?php
					$array = CFS()->get('configuratorAdditional');

					$i = -1;
					foreach ($array as $row) {
						$i++;
						
					?>
						<label class="configurator__switch"><?php echo $row['configuratorAdditionalName']; ?>
						<div class="configurator__switch__slider">
							<input type="checkbox" data-cost="<?php echo $row['configuratorAdditionalCost']; ?>" data-checked="false" data-positionX="<?php echo $row['configuratorAdditionalPicturePositionX']."%"; ?>" data-positionY="<?php echo $row['configuratorAdditionalPicturePositionY']."%"; ?>" data-id="<?php echo $i; ?>" data-url="<?php echo $row['configuratorAdditionalPicture'] ?>">
							<span class="slider"></span>
					</div>
						</label>


					<?php


					}

					?>
				</aside>
			
			


			<?php endwhile; ?>

			<?php //get_sidebar(); 
			?>

			
				</div>

				<footer class="configurator__footer">
				Suma:<div class="configurator__cost"></div>
				<div class="test"></div>
			</footer>
		</section>

</main><!-- #site-content -->

<?php get_template_part('template-parts/footer-menus-widgets'); ?>

<?php get_footer(); ?>