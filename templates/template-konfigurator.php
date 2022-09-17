<?php
/*
 Template Name: Konfigurator
 */


get_header();
?>

<main id="site-content">
	<div class="container section-inner">
		<header class="header">
			<h1 class="header__title"><?php the_title() ?></h1>
		</header>


	<section class="configurator">
			
		<div class="configurator__element">
			<header class="configurator__header">	
			<h2><?php echo CFS()->get('modelConfiguratorTitle'); ?></h2>
			</header>

			<section class="configurator__pictures">
			</section>

			<aside class="configurator__switches">
			<?php
					$arrayOfModel = CFS()->get('modelOptions');
					foreach ($arrayOfModel as $row) {
			?>
				<label class="configurator__switch"><?php echo $row['modelOptionTitle']; ?>
					<div class="configurator__switch__slider">
						<input type="checkbox" data-cost="<?php echo $row['modelOptionCost']; ?>" data-checked="false" data-url="<?php echo $row['modelOptionImage'] ?>">
						<span class="slider"></span>
					</div>
				</label>
			<?php } ?>
			</aside>
		</div>
			
		<div class="configurator__element">
			<header class="configurator__header">	
				<h2><?php echo CFS()->get('configuratorAdditionalTitle'); ?></h2>
			</header>

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
					$arrayOfAdditional = CFS()->get('configuratorAdditional');
					foreach ($arrayOfAdditional as $row) {
					?>
						<label class="configurator__switch"><?php echo $row['configuratorAdditionalName']; ?>
							<div class="configurator__switch__slider">
								<input type="checkbox" data-cost="<?php echo $row['configuratorAdditionalCost']; ?>" data-checked="false" data-positionX="<?php echo $row['configuratorAdditionalPicturePositionX']."%"; ?>" data-positionY="<?php echo $row['configuratorAdditionalPicturePositionY']."%"; ?>"  data-url="<?php echo $row['configuratorAdditionalPicture'] ?>">
								<span class="slider"></span>
							</div>
						</label>

					<?php } ?>
				</aside>

				</div>

				<footer class="configurator__footer">
				Suma:<div class="configurator__cost"></div>
				<div class="test"></div>
			</footer>
		</section>

</main><!-- #site-content -->

<?php get_template_part('template-parts/footer-menus-widgets'); ?>

<?php get_footer(); ?>