function openModal(element) {
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const modalProjectDescription = document.getElementById("modalProjectDescription");
  const images = JSON.parse(element.querySelector(".project-images").getAttribute("data-images"));
  const projectDescription = element.querySelector(".project-description").textContent;

  let currentIndex = 0;

  function showImage(index) {
    modalImage.src = images[index];
    modalDescription.textContent = `Gambar ${index + 1} dari ${images.length}`;
  }

  showImage(currentIndex);

  // Menyimpan referensi tombol navigasi
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.onclick = () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
  };

  nextButton.onclick = () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage(currentIndex);
  };

  modalProjectDescription.textContent = projectDescription;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Menutup modal saat klik di luar area konten modal
window.onclick = function (event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const bigCertificate = document.getElementById("big-certificate");
  const smallCertificates = document.querySelectorAll(".small-certificate");
  const fullscreenOverlay = document.querySelector(".fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreen-image");

  smallCertificates.forEach((smallCertificate) => {
    smallCertificate.addEventListener("click", () => {
      fullscreenImage.src = smallCertificate.src;
      fullscreenOverlay.style.display = "flex"; // Menampilkan overlay fullscreen
    });
  });

  fullscreenOverlay.addEventListener("click", () => {
    fullscreenOverlay.style.display = "none"; // Menyembunyikan overlay fullscreen saat diklik di luar gambar
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  function setActiveLink() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks[index].classList.add("active");
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink);

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: "smooth",
      });

      setTimeout(() => {
        setActiveLink();
      }, 500); // Adjust timeout to match the smooth scroll duration
    });
  });

  // Image swapping logic
  const bigCertificate = document.getElementById("big-certificate");
  const smallCertificates = document.querySelectorAll(".small-certificate");

  smallCertificates.forEach((smallCertificate) => {
    smallCertificate.addEventListener("click", () => {
      const tempSrc = bigCertificate.src;
      bigCertificate.src = smallCertificate.src;
      smallCertificate.src = tempSrc;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mengembalikan posisi scroll saat halaman dimuat
  if (sessionStorage.getItem("scrollPosition")) {
    window.scrollTo(0, sessionStorage.getItem("scrollPosition"));
  }

  // Menyimpan posisi scroll saat pengguna menggulir
  window.addEventListener("scroll", function () {
    sessionStorage.setItem("scrollPosition", window.scrollY);

    // Animasi navbar
    const navbar = document.querySelector("header");
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) {
      // Ganti nilai 200 dengan tinggi navbar Anda jika perlu
      navbar.style.top = "-150px"; /* Menghilangkan navbar saat scroll ke bawah */
    } else {
      navbar.style.top = "0"; /* Menampilkan kembali navbar saat scroll ke atas */
    }
  });

  // Animasi progress bar
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = 0;
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });

  // Animasi scroll yang halus
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: "smooth",
      });
    });
  });
});
