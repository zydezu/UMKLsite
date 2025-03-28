const { OverlayScrollbars, ClickScrollPlugin, ScrollbarsHidingPlugin } = OverlayScrollbarsGlobal;

OverlayScrollbars.plugin([ClickScrollPlugin, ScrollbarsHidingPlugin]);

const osInstance = OverlayScrollbars(document.body, {
    scrollbars: {
        theme: "os-theme-dark",
        clickScroll: true,
        autoHide: 'scroll',
        autoHideDelay: 3000,
    },
    cancel: {
        nativeScrollbarsOverlaid: true,
        body: null,
    }
});

function changeScrollbarTheme(dark) {
    osInstance.options({
        scrollbars: {
            theme: dark == 0 ? 'os-theme-dark' : 'os-theme-light'
        }
    });
}

// Listen for theme change event
document.addEventListener('themeChange', (event) => {
    console.log(`%coverlayscrollbar.js %c> %cChanging scrollbar theme`, "color:#4599ff", "color:#fff", "color:#b3d5ff");
    changeScrollbarTheme(event.detail.darkThemeEnabled);
});