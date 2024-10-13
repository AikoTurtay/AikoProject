function playMusic(file) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = file; // Set the source of the audio player to the selected file
    audioPlayer.play(); // Play the audio
    audioPlayer.style.display = 'block'; // Show the audio controls when playing
}

function openModal(videoSrc) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.src = videoSrc; // Set the source of the modal video
    modal.style.display = 'flex'; // Show the modal
    modalVideo.play(); // Start playing the video
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.style.display = 'none'; // Hide the modal
    modalVideo.pause(); // Pause the video
    modalVideo.src = ''; // Reset the video source
}

// Close the modal when clicking outside the video
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeModal();
    }
}


 // JavaScript for Modal
 const familyMembers = document.querySelectorAll('.family-member');
 const modal = document.getElementById('familyModal');
 const modalTitle = document.getElementById('modalTitle');
 const modalInfo = document.getElementById('modalInfo');
 const closeModal = document.querySelector('.close');

 familyMembers.forEach(member => {
     member.addEventListener('click', function() {
         modalTitle.textContent = this.querySelector('h3').textContent;
         modalInfo.textContent = this.getAttribute('data-info');
         modal.style.display = 'flex';
     });
 });

 closeModal.addEventListener('click', function() {
     modal.style.display = 'none';
 });

 window.addEventListener('click', function(e) {
     if (e.target == modal) {
         modal.style.display = 'none';
     }
 });
 function toggleInfo(photo) {
const infoText = photo.nextElementSibling.nextElementSibling; // Get the <p> element containing the info
if (infoText.style.display === "none" || infoText.style.display === "") {
 infoText.style.display = "block"; // Show info
} else {
 infoText.style.display = "none"; // Hide info
}
}