(function() {

    // Inject upsell box into Classic Editor sidebar
    const setupPanelClassic = () => {

        const sidebar = document.querySelector('#side-sortables');

        // Exit if sidebar not ready OR box already exists
        if (!sidebar || document.querySelector('#shuttle-panel-upgrade-classic')) return;

		// Create upsell container
        const container = document.createElement('div');

		// Assign element tags
		container.id        = 'shuttle-panel-upgrade-classic';
		container.className = 'postbox shuttle-panel-upgrade-classic';

        container.innerHTML = `
			<p class="block-title">Get Shuttle Pro</p>
			<p class="block-text">Build your site faster and easier with powerful theme options and dedicated premium support.</p>
			<a class="block-link" href="https://shuttlethemes.com/features/" target="_blank">Upgrade Now</a>
        `;

        // Insert onto page
        sidebar.prepend(container);
    };

    // Watch for DOM changes
    const observer = new MutationObserver(setupPanelClassic);

    observer.observe(document.body, { childList: true, subtree: true });

    // Run once immediately
    setupPanelClassic();

})();
