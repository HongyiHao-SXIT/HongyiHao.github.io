function openModal(name, major, description, imageUrl, githubUrl, linkedinUrl) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalMajor').innerText = major;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('githubLink').href = githubUrl;
    document.getElementById('linkedinLink').href = linkedinUrl;

    document.getElementById('memberModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
}
