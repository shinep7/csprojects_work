/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    '' : {
        project: '<a href="https://github.com/dkessner/visual_novel_template" target="_blank">https://github.com/dkessner/visual_novel_template</a>',
        'Monogatari visual novel engine': '<a href="https://monogatari.io/" target="_blank">https://monogatari.io</a>'
    }
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    eileen1: "eileen 1 copy.png",
    eileen2: "eileen 2 copy.png",
		eileen3: "eileen 3 copy.png",
		leah1: "leah 1 copy.png",
		leah2: "leah 2 copy.png",
		leah3: "leah 3 copy.png"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({

});


monogatari.script ({

	'Start': [
            'show image eileen1 with fadeIn',
            '"I am Eileen,” the young gentleman said, "And I think you are dashing."',
            '"I have spent so much time looking for a love, but when I saw you I do not have to look anymore."',
						'"I now humbly ask if we could love each other"',
            'hide image eileen1 with fadeOut',
            'jump Next'
        ],

        'Next': [
            'show image leah1 with fadeIn',
            '"You are old," said the dashing young woman, "and you have grown most uncommonly fat"',
            "'But I didn't know what I was looking for until I found you'",
            '"Yes of course I will love you forever"',
            'hide image leah1 with fadeOut',
            'jump Slide'
				],

				'Slide': [
						'show image eileen2 with fadeIn',
						"Due to COVID-19 they went on their first zoom date",
						"'I know I've only known you for a couple of days but you make my heart jump and you make me happy'",
						"'You let me drop my clown personality and make me into a good person. You're it, you're my person for life'",
						'hide image eileen2 with fadeOut',
						'jump Effect'
				],

				'Effect':  [
						'show image leah2 with fadeIn',
						"'I feel the same way Eileen, I think since I met you you've become a better person'",
						"'However, I can't do this anymore, and I think we should split up. Sorry, peace, goodbye'",
						"And with that Leah ended the Zoom call.",
						'hide image leah2 with fadeOut',
						'jump After'

				],

				'After': [
					'show image eileen3 with fadeIn',
					"Eileen was shocked he didn't know what to do with himself.",
					"He sat in shock for many hours, days, months, years, decades trying to figure out what he did wrong.",
					'hide image eileen3 with fadeOut',
					'jump Ending'
				],

				'Ending': [
					'show image leah3 with fadeIn',
					"Leah however was living her best life.",
					"She was out every week partying forgetting all about him.",
					"And with that Leah continued to flourish in life while Eileen let the heartbreak affect him for the rest of his life.",
					'hide image leah3 with fadeOut',
					'end'
				]
});


monogatari.component ('main-screen').template (() => {
    return `
        <h1>The Story of A Girl and A Man</h1>
        <br/>
        <p>
        Eileen and Leah: The Story
        </p>
        <br/>
        <center>
        <img src="assets/images/cover photo.png" height="50%"/>
        </center>

        <main-menu></main-menu>
    `;
});
