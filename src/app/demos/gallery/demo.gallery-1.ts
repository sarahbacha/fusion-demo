import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GalleryModel } from 'cedrus-fusion';
import { GalleryStylingModel } from 'cedrus-fusion';

@Component ({
	moduleId: module.id,
	selector: 'cf-demo-gallery-1',
	templateUrl: './demo.gallery-1.html',
 	styleUrls: ['./demo.gallery-1.scss']
})

export class CfDemoGallery1 {

	myGallery = new GalleryModel({
		options: [
			{
	    	width: '100%',
	    	imagePercent: 60,
	    	imageArrowsAutoHide: true,
	    	thumbnailsPercent: 40,
	    	thumbnailsRows: 2,
	    	thumbnailMargin: 1,
	    	thumbnailsMargin: 1,
	    	thumbnailsArrowsAutoHide: true,
	    	previewFullscreen: true
    	}
  	],
		images: [
	    {
	      small: 'https://i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/nature_waterfall_summer_lake_trees_90400_1920x1080.jpg',
	      description: 'Nature waterfall summer lake_trees'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/summer_mountains_nature_lake_river_grass_93164_1920x1080.jpg',
	      description: 'Summer mountains nature lake river grass'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/dawn_grass_sky_summer_light_87653_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/dawn_grass_sky_summer_light_87653_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/dawn_grass_sky_summer_light_87653_1920x1080.jpg',
	      description: 'Dawn grass sky summer light'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/sea_sand_palm_trees_surf_84649_1920x1080.jpg',
	      description: 'Sea sand palm trees surf'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/stones_tropical_ocean_sky_summer_92472_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/stones_tropical_ocean_sky_summer_92472_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/stones_tropical_ocean_sky_summer_92472_1920x1080.jpg',
	      description: 'Stones tropical ocean sky summer'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/mountains_nature_river_grass_beautiful_landscape_93282_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/mountains_nature_river_grass_beautiful_landscape_93282_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/mountains_nature_river_grass_beautiful_landscape_93282_1920x1080.jpg',
	      description: 'Mountains nature river grass beautiful landscape'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/tree_sun_blue_lilac_krone_spring_flowering_from_below_light_53319_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/tree_sun_blue_lilac_krone_spring_flowering_from_below_light_53319_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/tree_sun_blue_lilac_krone_spring_flowering_from_below_light_53319_1920x1080.jpg',
	      description: 'Tree sun blue lilac krone spring flowering from below light'
	    },
	    {
	      small: 'https://i1.wallpaperscraft.com/image/lake_sunset_trees_landscape_beach_art_night_reflection_48159_300x168.jpg',
	      medium: 'https://i1.wallpaperscraft.com/image/lake_sunset_trees_landscape_beach_art_night_reflection_48159_602x339.jpg',
	      big: 'https://wallpaperscraft.com/image/lake_sunset_trees_landscape_beach_art_night_reflection_48159_1920x1080.jpg',
	      description: 'Lake sunset trees landscape beach art night reflection'
	    }
		]
	});

	myGalleryStyling = new GalleryStylingModel({
		container: {
			class: 'my-gallery'
		}
	})
}
