function changeTheme() {
    const theme = document.getElementById('body-container');

    if ( theme.className == 'dark-theme' ) {
        theme.className = 'light-theme';
        // document.getElementById('theme-button').textContent = 'Dark';
        document.getElementById('theme-button').className = 'btn btn-small btn-outline text-dark';
        const link = document.querySelectorAll('#navlink');
        const card = document.querySelectorAll('#card');
        const cardHeader = document.querySelectorAll('#card-header');
        const cardBody = document.querySelectorAll('#card-body');
        const cardGroup = document.querySelector('#card-group');
        const descr = document.getElementById('descr');
        document.querySelector('#body').className = 'body-light';
        document.querySelector('#projectSection').className = 'projects-light';
        document.querySelector('#dropDown').className = 'dropdownIcon-light';
        document.querySelector('#moon-icon').className = 'far fa-moon';
        document.querySelector('#profileName').className = 'projects-light'
        for ( let index = 0; index < link.length; index++) {
            link[index].className = 'nav-link text-dark';
        }
        descr.className = 'descr-light';
        cardGroup.className = 'row card-group card-group-light';

        // link[0].className = 'nav-link text-dark';
        // link[1].className = 'nav-link text-dark';
        // link[2].className = 'nav-link text-dark';
        // cardHeader[0].className = 'card-header card-header-light';
        // cardHeader[1].className = 'card-header card-header-light';
        // cardHeader[2].className = 'card-header card-header-light';
        // card[0].className = 'card card-light';
        // card[1].className = 'card card-light';
        // card[2].className = 'card card-light';
        // cardBody[0].className = 'card-body card-body-light';
        // cardBody[1].className = 'card-body card-body-light';
        // cardBody[2].className = 'card-body card-body-light';

        //  USED A FOR LOOP TO ITERATE OVER THE NODELIST
        for ( let index = 0; index < cardHeader.length; index++) {
            cardHeader[index].className = 'card-header card-header-light';
        }

        for ( let index = 0; index < card.length; index++) {
            card[index].className = 'card card-light';
        }

        for (let index = 0; index < cardBody.length; index++) {
            cardBody[index].className = 'card-body card-body-light';
        }
    } else {
        theme.className = 'dark-theme';
        // document.getElementById('theme-button').textContent = 'Light';
        document.getElementById('theme-button').className = 'btn btn-small btn-outline-dark text-white';

        const link = document.querySelectorAll('#navlink');
        const card = document.querySelectorAll('#card');
        const cardHeader = document.querySelectorAll('#card-header');
        const cardBody = document.querySelectorAll('#card-body');
        const cardGroup = document.querySelector('#card-group');
        const descr = document.getElementById('descr');
        document.querySelector('#dropDown').className = 'dropdownIcon';
        document.querySelector('#body').className = 'body-dark';
        document.querySelector('#projectSection').className = 'projects';
        document.querySelector('#moon-icon').className = 'fas fa-moon';
        document.querySelector('#profileName').className = 'projects'
        descr.className = 'descr-dark';

        // cardHeader[0].className = 'card-header';
        // cardHeader[1].className = 'card-header';
        // cardHeader[2].className = 'card-header';
        // link[0].className = 'nav-link text-white';
        // link[1].className = 'nav-link text-white';
        // link[2].className = 'nav-link text-white';
        // card[0].className = 'card';
        // card[1].className = 'card';
        // card[2].className = 'card';
        // cardBody[0].className = 'card-body';
        // cardBody[1].className = 'card-body';
        // cardBody[2].className = 'card-body';

                //  USED A FOR LOOP TO ITERATE OVER THE NODELIST
        for ( let index = 0; index < link.length; index++) {
            link[index].className = 'nav-link text-white';
        }

        for ( let index = 0; index < cardHeader.length; index++) {
            cardHeader[index].className = 'card-header';
        }

        for ( let index = 0; index < card.length; index++) {
            card[index].className = 'card';
        }

        for (let index = 0; index < cardBody.length; index++) {
            cardBody[index].className = 'card-body';
        }
        cardGroup.className = 'row card-group';

    }
}