(function() {

	// Output upsell button
    const setupPanelGutenberg = () => {

		// Confirm panels sidebar exists
        const sidebarHeader = document.querySelector('.interface-complementary-area-header');

		// Exit early if panel sidebar doesn't exist
        if (!sidebarHeader || document.querySelector('.shuttle-panel-upgrade-gutenberg')) return;

		// Create upsell container
        const container = document.createElement('div');

		// Assign element tags
        container.id        = 'shuttle-panel-upgrade-gutenberg';
        container.className = 'shuttle-panel-upgrade-gutenberg';

		// Create content for upsell
        container.innerHTML = `
			<p class = "block-title">Get Shuttle Pro</p>
			<p class = "block-text">Build your site faster and easier with powerful theme options and dedicated premium support.</p>
			<a class = "block-link" href="https://shuttlethemes.com/features/" target="_blank">Upgrade Now</a>
        `;

        sidebarHeader.insertAdjacentElement('afterend', container);
    };

	// Watch for DOM changes and inject button when panels load
    const observer = new MutationObserver(setupPanelGutenberg);

	// Observe all new elements in the editor
    observer.observe(document.body, { childList: true, subtree: true });

	// Run once in case the panel is already present
    setupPanelGutenberg(); // Run once immediately

})();
