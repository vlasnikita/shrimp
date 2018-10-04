const tabLinks = document.querySelectorAll('.streamers__navLink');
const tabs = document.querySelectorAll('.streamers__services');

tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const clickedLink = getClickedLink(e.target);
        resetTabs();
        const activeTab = document.getElementById(clickedLink.dataset.target);
        clickedLink.className = 'streamers__navLink streamers__navLink--visible';
        activeTab.className = 'streamers__services streamers__services--visible';
    })
});

const resetTabs = () => {
    tabs.forEach(tab => tab.className = 'streamers__services');
    tabLinks.forEach(tab => tab.className = 'streamers__navLink');
};

const getClickedLink = node => {
    let result;
    tabLinks.forEach(link => {
        if(link === node || link.contains(node)){
            result = link;
        }
    });
    return result;
};
