function toggleMenu() {
    document.getElementById('sideDrawer').classList.toggle('open');
    document.querySelector('.menu-overlay').classList.toggle('active');
}

function postPreview(btn) {
    const key = btn.getAttribute("postkey");
    const post = posts[key];

    if (!post) {
        console.warn(`No post found for key: "${key}"`);
        return;
    }

    document.querySelector(".post-preview-title").textContent = post.title;
    document.querySelector(".post-preview-date").textContent = post.date;
    document.querySelector(".post-preview-content").innerHTML = post.content;
    document.querySelector('.post-preview').classList.toggle('active');
    document.querySelector('.post-preview').scrollTop = 0;

}

function closePreview(){
    document.querySelector('.post-preview').classList.toggle('active');
}
