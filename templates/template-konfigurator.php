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
			
		<div class="configurator__element models">
			<header class="configurator__header">	
			<h2 class="configurator__title"><?php echo CFS()->get('modelConfiguratorTitle'); ?></h2>
			</header>

			<section class="configurator__pictures">
				<div class="configurator__pictures__models">
			</section>

			<aside class="configurator__switches">
			<?php
					$arrayOfModel = CFS()->get('modelOptions');
					foreach ($arrayOfModel as $row) {
			?>
			<section class="configurator__switch">
				<label class="configurator__label">
					<div class="configurator__switch__title">
					<?php echo $row['modelOptionTitle']; ?>
					<p class="configurator__switch__description"><?php echo $row['modelOptionDescription']; ?></p>
					</div>
					<div class="configurator__button configurator__button--model">
						<input type="checkbox" class="configurator__radio configurator__radio--model" data-cost="<?php echo $row['modelOptionCost']; ?>" data-checked="false" data-url="<?php echo $row['modelOptionImage'] ?>">
					</div>
				</label>
			</section>
			<?php } ?>
			</aside>
		</div>


		<div class="configurator__element trims">
			<header class="configurator__header">	
			<h2 class="configurator__title"><?php echo CFS()->get('trimConfiguratorTitle'); ?></h2>
			</header>

			<section class="configurator__pictures  swiper-container swiper ">
				<div class="configurator__pictures__trims  swiper-wrapper">
				
			</section>

			<aside class="configurator__switches">

			<?php
					$arrayOftrim = CFS()->get('trimOptions');
				
					foreach ($arrayOftrim as $index => $row) {
					$arrayOfGallery = $arrayOftrim[$index]['trimOptionGallery'];
					$arrayOftrimIfSecondOptionChoosed = $arrayOftrim[$index]['trimIfSecondOptionChoosed'];
					
			?>
			<section class="configurator__switch">
					<label class="configurator__label">
						<div class="configurator__switch__title">
						<?php echo $row['trimOptionTitle']; ?>
						<p class="configurator__switch__description"><?php echo $row['trimOptionDescription']; ?></p>
						
							
							
						</div>
						<div class="configurator__button configurator__button--trim">
							<input type="checkbox" class="configurator__radio configurator__radio--trim" data-cost="<?php echo $row['trimOptionCost']; ?>" data-checked="false" data-url="<?php 
									foreach($arrayOfGallery as $rowGallery){
										echo ($rowGallery['trimOptionImage']." ");
									}
							?>"

								>
									
						</div>
					</label>


						<section class="configurator__switch configurator__switch--second">
							<?php 
								foreach($arrayOftrimIfSecondOptionChoosed as $rowSecondOptionsOption){?>
									<label class="configurator__label">
										<span class="configurator__switch__title"><?php echo $rowSecondOptionsOption['trimIfSecondOptionChoosedOption'];?></span>
										<div class="configurator__button configurator__button--second configurator__button--trim ">
											<input type="checkbox" class="configurator__radio configurator__button--second configurator__radio--trim" data-cost="<?php echo $row['trimOptionCost']; ?>" data-checked="false">
										</div>
									</label>
									<?php } ?>
						</section>


				</section>

				<?php 
							
				} ?>
			</aside>
		</div>
			
		<div class="configurator__element additionals">
			<header class="configurator__header">	
				<h2 class="configurator__title"><?php echo CFS()->get('configuratorAdditionalTitle'); ?></h2>
			</header>

				<section class="configurator__pictures">
					<figure class="configurator__figure">
						<img src="<?php echo CFS()->get('configuratorAdditionalPatternImage'); ?>" class="configurator__picture" />
					</figure>
					<div class="configurator__pictures__additionals">
					
					</div>
				</section>

				<aside class="configurator__switches">
					<?php
					$arrayOfAdditional = CFS()->get('configuratorAdditional');
					foreach ($arrayOfAdditional as $row) {
					?>
						<section class="configurator__switch">
							<label class="configurator__label"><?php echo $row['configuratorAdditionalName']; ?>
								<div class="configurator__button configurator__button--slider">
									<input type="checkbox" class="configurator__checkbox" data-cost="<?php echo $row['configuratorAdditionalCost']; ?>" data-checked="false" data-positionX="<?php echo $row['configuratorAdditionalPicturePositionX']."%"; ?>" data-positionY="<?php echo $row['configuratorAdditionalPicturePositionY']."%"; ?>"  data-url="<?php echo $row['configuratorAdditionalPicture'] ?>">
									<span class="configurator__checkbox__slider"></span>
								</div>
							</label>
						</section>
					<?php } ?>
				</aside>

				</div>

				<footer class="configurator__footer">
				Suma: <div class="configurator__cost"></div>zł
				<div class="test"></div>
			</footer>
		</section>

</main><!-- #site-content -->

<?php get_template_part('template-parts/footer-menus-widgets'); ?>

<?php get_footer(); ?>

</script>