window.addEventListener('load', init);

function init(){
    const $button = document.querySelector('[data-menu-button]' );
    const $navigation = document.querySelector('[data-header-nav]' );
    const $header = document.querySelector('[data-header]' );
    const $wrapper = document.querySelector('[data-wrapper]' );

    if( $navigation === null || $button === null || $header === null  ) {
        return;
    }

    $button.addEventListener('click', handleMenuToggle);

    function handleMenuToggle() {
        if( $navigation.className.includes('show') ) {
            $navigation.classList.remove('show')
            $header.removeEventListener('click', stopPropagation );
            $wrapper.removeEventListener('click', closeModal);
        } else {
            $navigation.classList.add('show');
            $header.addEventListener('click', stopPropagation );
            $wrapper.addEventListener('click', closeModal);
        }
    }

    function closeModal() {
        $navigation.classList.remove('show');
    }

    function stopPropagation( e ) {
        e.stopPropagation();
    }
}

